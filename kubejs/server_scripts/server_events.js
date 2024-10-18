// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.loaded(event => {

  if (event.server.persistentData.gameRules) return

  event.server.gameRules.set("doTraderSpawning", false)

  event.server.persistentData.gameRules = true
})

//Nether Bedrock

BlockEvents.broken (event => {

  let curios = event.player.nbt.ForgeCaps['curios:inventory']
  if(!event.getLevel().isClientSide()) {
    if(event.level.dimension == "minecraft:the_nether" && event.player.y < 10) {
      if(curios.toString().contains("submerged:nether_bedrock_breaker")) {
      } else {
      event.cancel()
      event.player.tell("You need a Nether Bedrock Breaker Curio to break this!")
      }
    }
  }
  
})

//Ender Eyes

BlockEvents.rightClicked("minecraft:end_portal_frame", event => {

  let curios = event.player.nbt.ForgeCaps['curios:inventory']

  if (curios.toString().contains('submerged:ender_eye_curio')) {

    if(event.player.getUseItem().is("#submerged:ender_eyes")) {

      event.server.runCommandSilent(`say hello`)
    }
  } else {
    event.player.tell("You need an Ender Eye Curio to activate this!")
    event.cancel()
  }
})


//Grass Seed

BlockEvents.rightClicked("minecraft:dirt", event => {
  if(event.item === "submerged:grass_seed") {
    event.server.runCommandSilent(`setblock ${event.getBlock().getX()} ${event.getBlock().getY()} ${event.getBlock().getZ()} minecraft:grass_block`)
    event.server.runCommandSilent(`particle dust 0 0.65 0 1 ${event.getBlock().getX()} ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ()} 0.25 0.2 0.25 1 100 force`)
    event.getItem().setCount(event.item.getCount() - 1)
  }
})

//Nether roof item

ItemEvents.rightClicked("submerged:nether_roof", event => {
  if(event.level.dimension == "minecraft:the_nether") {
  //  event.server.runCommandSilent(`execute in minecraft:the_nether run tp benbenlaw ${event.player.getX()} 258 ${event.player.getZ()}`)
    event.player.teleportTo(event.server.getLevel("minecraft:the_nether"), event.player.x, 258, event.player.z, [], event.player.yaw, event.player.pitch)

  }
})

//Colored Caves roof item

ItemEvents.rightClicked("submerged:colored_caves_roof", event => {
  if(event.level.dimension == "caveopolis:colored_caves") {
    event.player.teleportTo(event.server.getLevel("caveopolis:colored_caves"), event.player.x, 130, event.player.z, [], event.player.yaw, event.player.pitch)
  //  event.server.runCommandSilent(`execute in caveopolis:colored_caves run tp benbenlaw ${event.player.getX()} 130 ${event.player.getZ()}`)
  }
})


//Poison Effects

PlayerEvents.tick(event => {

  let curios = event.player.nbt.ForgeCaps['curios:inventory']

  //Sea King benbenlaw (IGNORE)
  /*

  let playerName = event.player.getName()

  if (playerName.toString().contains("benbenlaw")) {
    event.player.addTag("sea_king")
  }

  if (event.player.getTags().contains("sea_king")) {
    event.player.tell("You are the Sea King")
  }
  */

  //Player toxic air curio
  if (curios.toString().contains('submerged:toxic_air_curio')) {
    event.player.addTag("wearing_toxic_air_curio");
  } else {
    event.player.removeTag("wearing_toxic_air_curio");
  }

  //Player Diving Suit Check
  if ((event.player.feetArmorItem == "thermal:diving_boots" && event.player.legsArmorItem == "thermal:diving_leggings" && event.player.chestArmorItem == "thermal:diving_chestplate" && event.player.headArmorItem == "thermal:diving_helmet") || curios.toString().contains('submerged:water_curio') ) {
    event.player.addTag("wearing_diving_suit");
  } else {
    event.player.removeTag("wearing_diving_suit");
  }


  // Player Poison in the Ocean without armour
  if (event.level.dimension == "minecraft:overworld") {
    if (event.getPlayer().isInWater()  && !event.player.getTags().contains("wearing_diving_suit")) {
      event.player.addTag("in_water_poisoned");
    } else {
      event.player.removeTag("in_water_poisoned");
    }

    //Posion in the toxic air
    if (event.player.y > 150 && !event.player.getTags().contains("wearing_toxic_air_curio") ) {
      event.player.potionEffects.add("minecraft:poison", 1, 10);
      event.player.addTag("in_toxic_air_poisoned");
    } else {
      event.player.removeTag("in_toxic_air_poisoned");
    }

    if (event.player.getTags().contains("in_water_poisoned") || event.player.getTags().contains("in_toxic_air_poisoned")) {
      event.player.potionEffects.add("minecraft:poison", 1, 1)
      event.player.attack(1)
    } 
  }
})

EntityEvents.death("minecraft:wither_skeleton", event => {
  
  if(event.source.actual.isPlayer()) {

    let killer = event.getSource()
    let curios =  killer.player.nbt.ForgeCaps['curios:inventory']

    if(curios.toString().contains('submerged:wither_skull_curio')) {
      killer.player.give("minecraft:wither_skeleton_skull")
    }
  }
})

//Apple of ascent going up in dimensions (nether to overworld, colored caves to nether)

ItemEvents.foodEaten("submerged:apple_of_ascent", event => {


  //Nether to Overworld
  if(event.level.dimension == "minecraft:the_nether") {

    event.player.teleportTo(event.server.getLevel("minecraft:overworld"), event.player.x, -62, event.player.z, [], event.player.yaw, event.player.pitch)

      let xPos = event.player.x;
      let zPos = event.player.z;
      
      for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let zOffset = -1; zOffset <= 1; zOffset++) {
          let xCoord = Math.floor(xPos) + xOffset;
          let zCoord = Math.floor(zPos) + zOffset;
          event.server.runCommandSilent(`execute in minecraft:overworld run setblock ${xCoord} -64 ${zCoord} minecraft:bedrock`);
          event.server.runCommandSilent(`execute in minecraft:overworld run setblock ${xCoord} -63 ${zCoord} minecraft:air`);
          event.server.runCommandSilent(`execute in minecraft:overworld run setblock ${xCoord} -62 ${zCoord} minecraft:air`);
          event.server.runCommandSilent(`execute in minecraft:overworld run setblock ${xCoord} -61 ${zCoord} minecraft:air`);
        }
      }
      event.player.tell("Clearing area (for your safety)");
  }
  
  //Colored Caves to Nether
  if(event.level.dimension == "caveopolis:colored_caves") {

    event.player.teleportTo(event.server.getLevel("minecraft:the_nether"), event.player.x, 1, event.player.z, [], event.player.yaw, event.player.pitch)
  
      let xPos = event.player.x;
      let zPos = event.player.z;
      
      for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let zOffset = -1; zOffset <= 1; zOffset++) {
          let xCoord = Math.floor(xPos) + xOffset;
          let zCoord = Math.floor(zPos) + zOffset;
          event.server.runCommandSilent(`execute in minecraft:the_nether run setblock ${xCoord} 0 ${zCoord} minecraft:bedrock`);
          event.server.runCommandSilent(`execute in minecraft:the_nether run setblock ${xCoord} 1 ${zCoord} minecraft:air`);
          event.server.runCommandSilent(`execute in minecraft:the_nether run setblock ${xCoord} 2 ${zCoord} minecraft:air`);
          event.server.runCommandSilent(`execute in minecraft:the_nether run setblock ${xCoord} 3 ${zCoord} minecraft:air`);
        }
      }
      event.player.tell("Clearing area (for your safety)");
  }


})

//Player Events

PlayerEvents.tick(event => {

  //Player Enters The Nether from the overworld (spawn on bedrock roof with slow fall)

  if(event.level.dimension == "minecraft:overworld" && event.player.y < -125) {

    event.player.teleportTo(event.server.getLevel("minecraft:the_nether"), event.player.x, 270, event.player.z, [], event.player.yaw, event.player.pitch)
    event.player.potionEffects.add("minecraft:slow_falling", 20 * 5)
    event.player.tell("You have entered The Nether")

  }

  //Player Enters The Colored Caves from nether
  
  if(event.level.dimension == "minecraft:the_nether" && event.player.y < -60 && event.player.y > -110) {

    event.player.teleportTo(event.server.getLevel("caveopolis:colored_caves"), event.player.x, 140, event.player.z, [], event.player.yaw, event.player.pitch)
    event.player.potionEffects.add("minecraft:slow_falling", 20 * 5)
    event.player.tell("You have entered the Colored Caves")
  }

})


//Set loot table neptune's chest

BlockEvents.placed("aquaculture:neptunes_bounty", event => {

  let xCoord = event.block.getX()
  let yCoord = event.block.getY()
  let zCoord = event.block.getZ()

  event.server.runCommandSilent(`execute in minecraft:overworld run data merge block ${xCoord} ${yCoord} ${zCoord} {LootTable:"aquaculture:box/neptunes_bounty"}`);
  })

//Strainers Uncraft
ItemEvents.rightClicked(event => {
  if (event.item === 'strainers:improved_everything_upgrade' && event.player.crouching) {
    event.player.give('strainers:improved_mesh_upgrade')
    event.player.give('strainers:improved_input_upgrade')
    event.player.give('strainers:improved_output_upgrade')
    event.player.give('strainers:improved_duration_upgrade')
    event.item.setCount(event.item.getCount() - 1)
  }

  if (event.item === 'strainers:sturdy_everything_upgrade' && event.player.crouching) {
    event.player.give('strainers:sturdy_mesh_upgrade')
    event.player.give('strainers:sturdy_input_upgrade')
    event.player.give('strainers:sturdy_output_upgrade')
    event.player.give('strainers:sturdy_duration_upgrade')
    event.item.setCount(event.item.getCount() - 1)
  }

  if (event.item === 'strainers:everlasting_everything_upgrade' && event.player.crouching) {
    event.player.give('strainers:everlasting_mesh_upgrade')
    event.player.give('strainers:everlasting_input_upgrade')
    event.player.give('strainers:everlasting_output_upgrade')
    event.player.give('strainers:everlasting_duration_upgrade')
    event.item.setCount(event.item.getCount() - 1)
  }

  if (event.item === 'strainers:reinforced_everything_upgrade' && event.player.crouching) {
    event.player.give('strainers:reinforced_mesh_upgrade')
    event.player.give('strainers:reinforced_input_upgrade')
    event.player.give('strainers:reinforced_output_upgrade')
    event.player.give('strainers:reinforced_duration_upgrade')
    event.item.setCount(event.item.getCount() - 1)
  }
})


