// priority: 0

ServerEvents.recipes(event => {

  //Strainers

  //Starter Catcher
  event.recipes.strainers.strainer("submerged:wooden_catcher", "aquaculture:driftwood", 1, 0, 200, 1).aboveFluid("minecraft:water").id("submerged:strainers/driftwood")

  //Leaves
  event.recipes.strainers.strainer("#minecraft:leaves", "aquaculture:worm", 1, 0, 120, 1).aboveFluid("minecraft:water").id("submerged:strainers/worm")
  event.recipes.strainers.strainer("#minecraft:leaves", "2x strainers:stone_pebble", 0.5, 0.1, 120, 2).aboveFluid("minecraft:water").id("submerged:strainers/stone_pebble")

  //Bait Box

  let fishes = Ingredient.of("#submerged:strainers_raw_fishes").itemIds;
  fishes.forEach(element => { 
    let noNameSpace = element.toString().replace(":", "_")
    if (element.toString().includes("farmersdelight")) {
    } else {
      event.recipes.strainers.strainer("submerged:bait_box", element, 0.02, 0.03, 200, 1).aboveFluid("minecraft:water").id(`submerged:strainers/${noNameSpace}`)
    }
  })


  let wildPlants = Ingredient.of("#submerged:wild_farmers_delight_plants").itemIds;
  wildPlants.forEach(element => {
    let noNameSpace = element.toString().replace(":", "_")
    event.recipes.strainers.strainer("strainers:mulch", element, 0.05, 0.03, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/${noNameSpace}`)
  })


  event.recipes.strainers.strainer("submerged:bait_box", 'oceansdelight:tentacles', 0.05, 0.02, 200, 1).aboveFluid("minecraft:water").id(`submerged:strainers/tentacle`)
  event.recipes.strainers.strainer("submerged:bait_box", 'minecraft:ink_sac', 0.1, 0.02, 200, 1).aboveFluid("minecraft:water").id(`submerged:strainers/ink_sac`)
  event.recipes.strainers.strainer("submerged:bait_box", 'minecraft:glow_ink_sac', 0.1, 0.02, 200, 1).aboveFluid("minecraft:water").id(`submerged:strainers/glow_ink_sac`)


  //Dirt Mulch
 
  let seeds = Ingredient.of("#forge:seeds").itemIds;
  seeds.forEach(element => { 
    let noNameSpace = element.toString().replace(":", "_") 
    event.recipes.strainers.strainer("submerged:dirty_mulch", element, 0.05, 0.01, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/${noNameSpace}`)
    
  })

  event.recipes.strainers.strainer("submerged:dirty_mulch", "submerged:grass_seed", 0.05, 0.01, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/grass_seed`)

  //Gravely Mulch

  event.recipes.strainers.strainer("submerged:gravely_mulch", "submerged:tin_ore_piece", 0.45, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/tin_ore_piece`)
  event.recipes.strainers.strainer("submerged:gravely_mulch", "submerged:copper_ore_piece", 0.45, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/copper_ore_piece`)
  event.recipes.strainers.strainer("submerged:gravely_mulch", "minecraft:flint", 0.3, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/flint`)
  event.recipes.strainers.strainer("submerged:gravely_mulch", "opolisutilities:mini_coal", 0.5, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/mini_coal`)
  event.recipes.strainers.strainer("submerged:gravely_mulch", "strainers:stone_pebble", 0.7, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/stone_pebble_2`)
  
  event.recipes.strainers.strainer("submerged:gravely_mulch", "submerged:iron_ore_piece", 0.7, 0.05, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/iron_ore_piece`)
  event.recipes.strainers.strainer("submerged:gravely_mulch", "submerged:nickel_ore_piece", 0.7, 0.05, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/nickel_ore_piece`)
  event.recipes.strainers.strainer("submerged:gravely_mulch", "minecraft:lapis_lazuli", 0.4, 0.1, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/lapis_lazuli`)


  //Sandy Mulch

  event.recipes.strainers.strainer("submerged:sandy_mulch", "minecraft:cactus", 0.2, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/cactus`)
  event.recipes.strainers.strainer("submerged:sandy_mulch", "minecraft:bamboo", 0.1, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/bamboo`)
  event.recipes.strainers.strainer("submerged:sandy_mulch", "minecraft:sugar_cane", 0.1, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/sugar_cane`)
  event.recipes.strainers.strainer("submerged:sandy_mulch", "minecraft:kelp", 0.3, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/kelp`)
  event.recipes.strainers.strainer("submerged:sandy_mulch", "minecraft:seagrass", 0.1, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/sea_grass`)
  event.recipes.strainers.strainer("submerged:sandy_mulch", "minecraft:sea_pickle", 0.1, 0.05, 200, 2).aboveFluid("minecraft:water").id(`submerged:strainers/sea_pickle`)

  //Cobblestone

  event.recipes.strainers.strainer("#forge:cobblestone", "minecraft:gravel", 1.0, 0.0, 200, 1).aboveFluid("strainers:eroding_water_fluid").id(`submerged:strainers/gravel`)

  //Gravel

  event.recipes.strainers.strainer("minecraft:gravel", "minecraft:sand", 1.0, 0.0, 200, 1).aboveFluid("strainers:eroding_water_fluid").id(`submerged:strainers/sand`)

  //Sand

  event.recipes.strainers.strainer("minecraft:sand", "submerged:dust_block", 1.0, 0.0, 200, 1).aboveFluid("strainers:eroding_water_fluid").id(`submerged:strainers/dust_block`)

  //Dust Block

  event.recipes.strainers.strainer("submerged:dust_block", "minecraft:redstone", 0.5, 0.1, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/redstone`)
  event.recipes.strainers.strainer("submerged:dust_block", "thermal:cinnabar", 0.2, 0.1, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/cinnabar`)
  event.recipes.strainers.strainer("submerged:dust_block", "thermal:niter_dust", 0.3, 0.1, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/niter_dust`)
  event.recipes.strainers.strainer("submerged:dust_block", "submerged:lead_ore_piece", 0.7, 0.05, 200, 3).aboveFluid("minecraft:water").id(`submerged:strainers/lead_ore_piece`)
  
  event.recipes.strainers.strainer("submerged:dust_block", "thermal:apatite_dust", 0.25, 0.1, 200, 4).aboveFluid("minecraft:water").id(`submerged:strainers/apatite_dust`)
  event.recipes.strainers.strainer("submerged:dust_block", "ae2:certus_quartz_dust", 0.3, 0.15, 200, 4).aboveFluid("minecraft:water").id(`submerged:strainers/certus_quartz_dust`)
  event.recipes.strainers.strainer("submerged:dust_block", "refinedstorage:silicon", 0.2, 0.15, 200, 4).aboveFluid("minecraft:water").id(`submerged:strainers/silicon`)
  event.recipes.strainers.strainer("submerged:dust_block", "submerged:gold_ore_piece", 0.55, 0.05, 200, 4).aboveFluid("minecraft:water").id(`submerged:strainers/gold_ore_piece`)
  event.recipes.strainers.strainer("submerged:dust_block", "submerged:silver_ore_piece", 0.55, 0.05, 200, 4).aboveFluid("minecraft:water").id(`submerged:strainers/silver_ore_piece`)
  event.recipes.strainers.strainer("submerged:dust_block", "thermal:blizz_powder", 0.1, 0.1, 200, 4).aboveFluid("minecraft:water").id(`submerged:strainers/blizze_powder`)

  //Niter (not dust)
  event.recipes.strainers.strainer("thermal:niter", "thermal_extra:amethyst_dust", 0.1, 0.1, 200, 3).aboveFluid("strainers:purified_water_fluid").id(`submerged:strainers/amethyst_dust`)

  //Inferium Essence Block
  event.recipes.strainers.strainer("mysticalagriculture:inferium_block", "minecraft:echo_shard", 0.4, 0.1, 200, 4).aboveFluid("strainers:purified_water_fluid").id(`submerged:strainers/echo_shard`)
  
  event.recipes.strainers.strainer("mysticalagriculture:inferium_block", "thermal:diamond_dust", 0.3, 0.1, 200, 5).aboveFluid("strainers:purified_water_fluid").id(`submerged:strainers/diamond_dust`)

  //Obsidian

  event.recipes.strainers.strainer("minecraft:obsidian", 'bedrockminer:bedrock_infused_obsidian', 1, 0, 800, 6).aboveBlock("minecraft:bedrock").id(`submerged:strainers/bedrock_infused_obsidian`)

  //Bedrock Infused Obsidian

  event.recipes.strainers.strainer("bedrockminer:bedrock_infused_obsidian", 'bedrockminer:bedrock_chunk', 1, 0, 800, 6).aboveFluid("strainers:eroding_water_fluid").id(`submerged:strainers/bedrock_chunk`)

  //Mulch

  event.recipes.strainers.strainer("strainers:mulch", 'submerged:nether_mulch', 0.3, 0.1, 200, 1).aboveFluid("submerged:nether_infused_water").id(`submerged:strainers/nether_mulch`)

  //Nether Mulch

  event.recipes.strainers.strainer("submerged:nether_mulch", 'minecraft:glowstone_dust', 0.2, 0.1, 200, 3).aboveFluid("submerged:nether_infused_water").id(`submerged:strainers/glowstone`)
  event.recipes.strainers.strainer("submerged:nether_mulch", 'mysticalagriculture:soulium_dust', 0.2, 0.1, 200, 3).aboveFluid("submerged:nether_infused_water").id(`submerged:strainers/soulium_dust`)
  event.recipes.strainers.strainer("submerged:nether_mulch", 'submerged:debris_ore_piece', 0.2, 0.1, 200, 3).aboveFluid("submerged:nether_infused_water").id(`submerged:strainers/debris_ore_piece`)
  event.recipes.strainers.strainer("submerged:nether_mulch", 'thermal:quartz_dust', 0.2, 0.1, 200, 3).aboveFluid("submerged:nether_infused_water").id(`submerged:strainers/quartz_dust`)

  //Niter (not dust)
  event.recipes.strainers.strainer("thermal:apatite", "mysticalagriculture:prosperity_shard", 0.1, 0.3, 200, 5).aboveFluid("strainers:purified_water_fluid").id(`submerged:strainers/prosperity_shard`)

  //Mixed Stone
  event.recipes.strainers.strainer("caveopolis:raw_mixed_stone", "caveopolis:mixed_stone_ingot", 1.0, 0.0, 1000, 5).aboveBlock("caveopolis:mixed_stone_ore").id(`submerged:strainers/mixed_stone_ingot`)

  //Summoning Block

  event.recipes.strainers.summoning(["minecraft:feather", "minecraft:bat_spawn_egg"], "minecraft:bat").blockBelow("minecraft:obsidian").id(`submerged:strainers/bat`)
  event.recipes.strainers.summoning(["thermal:blizz_powder", "thermal:blizz_spawn_egg"], "thermal:blizz").blockBelow("minecraft:packed_ice").id(`submerged:strainers/blizz`)

  event.remove({type: "strainers:strainer"})

  //Dragons Breath
  event.recipes.strainers.strainer("minecraft:glass_bottle", 'minecraft:dragon_breath', 1, 0, 400, 6).aboveBlock("minecraft:dragon_head").id(`submerged:strainers/dragons_breath`)
  event.recipes.strainers.strainer("minecraft:obsidian", 'minecraft:crying_obsidian', 1, 0, 400, 6).aboveBlock("minecraft:dragon_head").id(`submerged:strainers/crying_obsidian`)

  //Void Ingot
  event.recipes.strainers.strainer("#forge:ingots", 'submerged:void_ingot', 0.1, 0, 1000, 6).aboveBlock("minecraft:bedrock").id(`submerged:strainers/void_ingot`)


  //EXAMPLES
  /*
  event.recipes.strainers.strainer("minecraft:emerald", "minecraft:gravel", 0.1, 0.11, 602, 5).aboveBlock("minecraft:emerald_block")
  event.recipes.strainers.strainer("minecraft:diamond", "minecraft:dirt", 0.3, 0.2, 100, 2).aboveFluid("minecraft:water")
  event.recipes.strainers.summoning(["minecraft:diamond", "minecraft:squid_spawn_egg"], "minecraft:squid").fluidBelow("minecraft:water")
  event.recipes.strainers.summoning(["minecraft:feather", "minecraft:bat_spawn_egg"], "minecraft:bat").blockBelow("minecraft:obsidian")
  */







})