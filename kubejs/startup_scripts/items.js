// priority: 0

StartupEvents.registry("item", (event) => {

    event.create('submerged:wooden_mesh').displayName('Wooden Mesh').maxDamage(80).tag('strainers:meshes')
    event.create('submerged:bone_mesh').displayName('Bone Mesh').maxDamage(221).tag('strainers:meshes')
    event.create('submerged:bronze_mesh').displayName('Bronze Mesh').maxDamage(612).tag('strainers:meshes')
    event.create('submerged:wooden_catcher').displayName('Wooden Catcher').maxDamage(512)
    event.create('submerged:bait_box').displayName('Bait Box').maxDamage(24)
    event.create('submerged:wooden_knife').displayName('Wooden Knife').maxDamage(64).tag('forge:tools/knives')

    event.create('submerged:apple_of_ascent').displayName('Apple Of Ascent').food(food => {
      food.alwaysEdible()
      food.hunger(0)
      food.saturation(0)
    }).tooltip("When eaten it will elevate you to the above dimension")

    event.create('submerged:skeleton_key').displayName('Skeleton Key').texture('roomopolis:item/normal_room_key').color(0, 0xC6C6C6)
    event.create('submerged:shrine_skeleton_key').displayName('Shrine Skeleton Key').texture('roomopolis:item/normal_room_key').color(0, 0xC6C6C6).glow(true)
    event.create('submerged:key_fragment').displayName('Key Fragment')
    event.create('submerged:shrine_key_fragment').displayName('Shrine Key Fragment').texture('submerged:item/key_fragment').color(0, 0xC6C6C6).glow(true)

    event.create('submerged:charcoal_filter').displayName('Charcoal Filter').texture('minecraft:item/paper').color(0, 0x1A1A1A)
    event.create('submerged:grass_seed').displayName('Grass Seed').texture("minecraft:item/wheat_seeds").color(0, 0xCCFFAF)

    event.create('submerged:unfired_bronze').displayName('Unfired Bronze')
    event.create('submerged:coil').displayName('Coil').texture('submerged:item/coil')
    event.create('submerged:eye_core').displayName('Eye Core').texture('minecraft:item/ender_eye').color(0, 0xCCFFAF).glow(true)

    event.create('submerged:bedrockium').displayName('Bedrockium Ingot')
    event.create('submerged:nether_roof').displayName('Nether Roof').tooltip("Right click to ascend to the nether roof! only in the nether!")
    event.create('submerged:colored_caves_roof').displayName('Colored Caves Roof').tooltip("Right click to ascend to the Colored Caves roof! only in the colored caves!")

    event.create('submerged:bone_hammer').displayName('Bone Hammer').tooltip("Can be used to smash up things... Yeah").tag('forge:tools/hammers')

    //Submerged Curios

    event.create('submerged:toxic_air_curio').displayName('Toxic Air Curio').tooltip('Grants immunity to toxic air').tag('curios:curio')
    event.create('submerged:nether_bedrock_breaker').displayName('Nether Bedrock Breaker Curio').tooltip('Allows lower bedrock to be broken in The Nether').tag('curios:curio')
    event.create('submerged:wither_skull_curio').displayName('Wither Skeleton Beheading').tooltip('Wither Skeletons always drop there skulls').tag('curios:curio')
    event.create('submerged:ender_eye_curio').displayName('Ender Eye Curio').tooltip('Allows the placing of Eyes into Ender Portal Frames').tag('curios:curio')
    event.create('submerged:water_curio').displayName('Water Curio').tooltip('Allows you to travel in water without taking damage').tag('curios:curio')

    //Gravel Ore Pieces

    let orePieces = JsonIO.read('kubejs/orePieces.json').orePieces
    orePieces.forEach(element => { 

      let lowercase = element.toLowerCase()
      event.create(`submerged:${lowercase}_ore_piece`).displayName(`${element} Ore Piece`).texture(`submerged:item/${lowercase}_ore_piece`).tag('submerged:ore_pieces')
    })

    //Endgame

    event.create('submerged:basic_technium_ingot')
    event.create('submerged:advanced_technium_ingot')
    event.create('submerged:elite_technium_ingot')
    event.create('submerged:ultimate_technium_ingot')
    event.create('submerged:hellish_technium_ingot')
    event.create('submerged:voided_technium_ingot')
    event.create('submerged:final_technium_ingot')
    event.create('submerged:void_ingot').displayName('Void Ingot').texture("minecraft:item/iron_ingot").color(0, 0x000000)
    event.create('submerged:cactus_slice').displayName('Cactus Slice')

    event.create('submerged:signs_sign').displayName("Sign's Sign").texture("minecraft:item/oak_sign").color(0, 0x000000)


})

ItemEvents.modification(event => {
  
  event.modify('aquaculture:worm', item => {

    item.setFoodProperties(food => {
      food.hunger(1)
      food.saturation(0.1)
    })

    //item.appendHoverText('Can be eaten... Yummy!')
  })
})
  /*

    event.modify("stoneopolis:void_apple", (item) => {
      item.setFoodProperties((food) => {
        food.saturation(0.87);
        food.hunger(4);
      })
    })


    function moreBucketsFix (bucket) {

      event.modify(bucket, (item) => {
        item.maxStackSize = 1
      })
    }

    moreBucketsFix(['morebuckets:tin_bucket', 'morebuckets:aluminum_bucket', 'morebuckets:diamond_bucket', 'morebuckets:emerald_bucket', 'morebuckets:golden_bucket', 'morebuckets:bronze_bucket', 'morebuckets:rubber_bucket', 'morebuckets:silver_bucket', 'morebuckets:steel_bucket', 'morebuckets:obsidian_bucket', 'morebuckets:quartz_bucket', 'morebuckets:copper_bucket'])

    */


  