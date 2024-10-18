// priority: 0

LootJS.modifiers(event => {

  //Loot Tables    

  event.addBlockLootModifier("submerged:tin_gravel_ore").addLoot("thermal:raw_tin").limitCount([1, 2]).removeLoot("submerged:tin_gravel_ore")
  event.addBlockLootModifier("submerged:copper_gravel_ore").addLoot("minecraft:raw_copper").limitCount([1, 2]).removeLoot("submerged:copper_gravel_ore")
  event.addBlockLootModifier("submerged:iron_gravel_ore").addLoot("minecraft:raw_iron").limitCount([1, 2]).removeLoot("submerged:iron_gravel_ore")
  event.addBlockLootModifier("submerged:gold_gravel_ore").addLoot("minecraft:raw_gold").limitCount([1, 2]).removeLoot("submerged:gold_gravel_ore")
  event.addBlockLootModifier("submerged:silver_gravel_ore").addLoot("thermal:raw_silver").limitCount([1, 2]).removeLoot("submerged:silver_gravel_ore")
  event.addBlockLootModifier("submerged:lead_gravel_ore").addLoot("thermal:raw_lead").limitCount([1, 2]).removeLoot("submerged:lead_gravel_ore")
  event.addBlockLootModifier("submerged:nickel_gravel_ore").addLoot("thermal:raw_nickel").limitCount([1, 2]).removeLoot("submerged:nickel_gravel_ore")
  event.addBlockLootModifier("submerged:debris_gravel_ore").addLoot("minecraft:netherite_scrap").limitCount([1, 2]).removeLoot("submerged:debris_gravel_ore")
  event.addBlockLootModifier("minecraft:amethyst_block").addLoot("thermal_extra:amethyst_dust").limitCount([2, 3]).removeLoot("minecraft:amethyst_block")
  event.addBlockLootModifier("minecraft:amethyst_cluster").addLoot("thermal_extra:amethyst_dust").limitCount([1, 1]).removeLoot("minecraft:amethyst_shard")
  
  event.addBlockLootModifier("aquaculture:neptunes_bounty").removeLoot("aquaculture:neptunes_bounty")

  //Entities

  event.addLootTableModifier("minecraft:entities/elder_guardian").removeLoot('endrem:guardian_eye')


  //Urn
  event.addBlockLootModifier("supplementaries:urn").removeLoot("*")
    .addLoot(LootEntry.of('minecraft:clay_ball').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('minecraft:sand').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('minecraft:red_sand').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('minecraft:gravel').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('minecraft:terracotta').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('minecraft:brick').when((c) => c.randomChance(0.3)))

    .addLoot(LootEntry.of('opolisutilities:b_bucks').when((c) => c.randomChance(0.1)))


  //Chests (Awesome Dungeon, most ocean structures)

  event.addLootTableModifier("awesomedungeonocean:chests/awesome_dungeon")
    .removeLoot("minecraft:diamond")
    .removeLoot("minecraft:emerald")
    .removeLoot("minecraft:gold_ingot")
    .removeLoot("minecraft:golden_horse_armor")
    .removeLoot("minecraft:iron_horse_armor")
    .removeLoot("minecraft:diamond_horse_armor")
    .removeLoot("minecraft:redstone")
    .removeLoot("minecraft:iron_ingot")

  event.addLootTableModifier("awesomedungeonocean:chests/awesome_dungeon")
  /*
    .addLoot(LootEntry.of('simplehats:hatbag_commom').when((c) => c.randomChance(0.6)))
    .addLoot(LootEntry.of('simplehats:hatbag_uncommom').when((c) => c.randomChance(0.5)))
    .addLoot(LootEntry.of('simplehats:hatbag_rare').when((c) => c.randomChance(0.4)))
    .addLoot(LootEntry.of('simplehats:hatbag_epic').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('simplehats:hatbag_easter').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('simplehats:hatbag_summer').when((c) => c.randomChance(0.3)))
  */
    .addLoot(LootEntry.of('opolisutilities:b_bucks').when((c) => c.randomChance(0.7)).limitCount([3, 6]))
    .addLoot(LootEntry.of('submerged:key_fragment').when((c) => c.randomChance(0.7)).limitCount([2, 4]))
    .addLoot(LootEntry.of('roomopolis:corridor_key_1').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('roomopolis:corridor_key_2').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('roomopolis:corridor_key_3').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('roomopolis:short_room_key').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('roomopolis:tall_room_key').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('roomopolis:normal_room_key').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('roomopolis:room_topper_key').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('minecraft:clay').when((c) => c.randomChance(0.4)).limitCount([2, 4]))
    .addLoot(LootEntry.of('minecraft:clay_ball').when((c) => c.randomChance(0.5)).limitCount([3, 5]))
    .addLoot(LootEntry.of('minecraft:dirt').when((c) => c.randomChance(0.3)).limitCount([12, 32]))
    .addLoot(LootEntry.of('minecraft:gravel').when((c) => c.randomChance(0.3)).limitCount([12, 32]))
    .addLoot(LootEntry.of('minecraft:sand').when((c) => c.randomChance(0.3)).limitCount([12, 32]))
    .addLoot(LootEntry.of('minecraft:kelp').when((c) => c.randomChance(0.3)).limitCount([12, 32]))
    .addLoot(LootEntry.of('minecraft:nautilus_shell').when((c) => c.randomChance(1.0)).limitCount([2, 3]))
    .addLoot(LootEntry.of("opolisutilities:ender_pearl_fragment").when((c) => c.randomChance(1.0)).limitCount([3, 4]))


  //Chest (Shipwreck Vanilla)
  
  event.addLootTableModifier("minecraft:chests/shipwreck_treasure")
    .removeLoot("minecraft:diamond")
    .removeLoot("minecraft:emerald")
    .removeLoot("minecraft:gold_ingot")
    .removeLoot("minecraft:gold_nugget")
    .removeLoot("minecraft:iron_nugget")
    .removeLoot("minecraft:lapis_lazuli")
    .removeLoot("minecraft:iron_ingot")

  event.addLootTableModifier("minecraft:chests/shipwreck_treasure")

  /*
    .addLoot(LootEntry.of('simplehats:hatbag_commom').when((c) => c.randomChance(0.6)))
    .addLoot(LootEntry.of('simplehats:hatbag_uncommom').when((c) => c.randomChance(0.5)))
    .addLoot(LootEntry.of('simplehats:hatbag_rare').when((c) => c.randomChance(0.4)))
    .addLoot(LootEntry.of('simplehats:hatbag_epic').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('simplehats:hatbag_easter').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('simplehats:hatbag_summer').when((c) => c.randomChance(0.3)))
  */
    .addLoot(LootEntry.of('opolisutilities:b_bucks').when((c) => c.randomChance(0.7)).limitCount([3, 6]))
    .addLoot(LootEntry.of('submerged:key_fragment').when((c) => c.randomChance(0.7)).limitCount([2, 4]))
    .addLoot(LootEntry.of('roomopolis:corridor_key_1').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('roomopolis:corridor_key_2').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('roomopolis:corridor_key_3').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('roomopolis:short_room_key').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('roomopolis:tall_room_key').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('roomopolis:normal_room_key').when((c) => c.randomChance(0.3)))
    .addLoot(LootEntry.of('roomopolis:room_topper_key').when((c) => c.randomChance(0.2)))
    .addLoot(LootEntry.of('minecraft:nautilus_shell').when((c) => c.randomChance(1.0)).limitCount([1, 2]))
    .addLoot(LootEntry.of("opolisutilities:ender_pearl_fragment").when((c) => c.randomChance(1.0)).limitCount([3, 4]))


    let pirateGear = Ingredient.of("submerged:pirate_gear").itemIds;
    pirateGear.forEach(element => {
      event.addLootTableModifier("minecraft:chests/shipwreck_treasure").addLoot(LootEntry.of(element).when((c) => c.randomChance(0.025)))
    });

  //Chest (Buried Treasure Vanilla)
  event.addLootTableModifier("minecraft:chests/buried_treasure")
    .removeLoot("*")
    
    
  event.addLootTableModifier("minecraft:chests/buried_treasure")
    .addLoot(LootEntry.of('submerged:key_fragment').when((c) => c.randomChance(0.7)).limitCount([2, 4]))
    .addLoot(LootEntry.of('minecraft:heart_of_the_sea').when((c) => c.randomChance(1.0)).limitCount([2, 4]))
    .addLoot(LootEntry.of('minecraft:nautilus_shell').when((c) => c.randomChance(1.0)).limitCount([6, 14]))
    .addLoot(LootEntry.of('endrem:black_eye').when((c) => c.randomChance(1.0)).limitCount([1,1 ]))
    .addLoot(LootEntry.of('endrem:exotic_eye').when((c) => c.randomChance(1.0)).limitCount([1,1 ]))
    .addLoot(LootEntry.of("opolisutilities:ender_pearl_fragment").when((c) => c.randomChance(1.0)).limitCount([3, 4]))


  //Chest (The Nether) 
  event.addLootTableModifier("minecraft:chests/nether_bridge").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/beacon").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/extra").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/obsidian").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/hall").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/keep").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.1)))
  event.addLootTableModifier("betterfortresses:chests/puzzle").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/quarters").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/storage").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/worship").addLoot(LootEntry.of('submerged:wither_skull_curio').when((c) => c.randomChance(0.4)))
  event.addLootTableModifier("betterfortresses:chests/worship").addLoot(LootEntry.of("opolisutilities:ender_pearl_fragment").when((c) => c.randomChance(1.0)).limitCount([3, 4]))

  //Wither 
  event
  .addEntityLootModifier("minecraft:wither")
    .addLoot(LootEntry.of("minecraft:netherite_upgrade_smithing_template").limitCount([1, 1]))

  //Neptunes Bounty

  event.addLootTableModifier("aquaculture:box/neptunes_bounty")
    .addLoot("aquaculture:neptunium_nugget").limitCount([32, 48])
    .addLoot("aquaculture:neptunium_ingot").limitCount([2, 8])

  event.addLootTableModifier("aquaculture:box/neptunes_bounty")
    .removeLoot("minecraft:kelp")
    .removeLoot("minecraft:seagrass")
    .removeLoot("aquaculture:message_in_a_bottle")
    .removeLoot("aquaculture:driftwood")

})