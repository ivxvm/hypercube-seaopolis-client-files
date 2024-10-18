// priority: 0


ServerEvents.compostableRecipes( event => {

  event.add('aquaculture:worm', 0.15)
  event.add('aquaculture:fish_fillet_raw', 0.25)

})

ServerEvents.recipes(event => {

  //Slabs To Blocks
  event.forEachRecipe({type: 'minecraft:crafting_shaped', output: '#minecraft:slabs'}, r => {
    let ingredients = r.originalRecipeIngredients 
    let output = r.originalRecipeResult    
    event.shaped(ingredients[0], ['S', 'S'], { S: output })
  })

  function coloredChestFromLogs (log, chest) {

    let noNameSpace = chest.toString().replace(":", "_")
    event.shaped(`4x ${chest}`, ['LLL', 'L L', 'LLL'], {L: log}).id(`submerged:${noNameSpace}`)
  }

  coloredChestFromLogs('#caveopolis:purple_colored_logs', 'nec:caveop_purple_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:red_colored_logs', 'nec:caveop_red_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:yellow_colored_logs', 'nec:caveop_yellow_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:green_colored_logs', 'nec:caveop_green_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:orange_colored_logs', 'nec:caveop_orange_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:light_gray_colored_logs', 'nec:caveop_light_gray_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:blue_colored_logs', 'nec:caveop_blue_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:light_blue_colored_logs', 'nec:caveop_light_blue_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:pink_colored_logs', 'nec:caveop_pink_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:magenta_colored_logs', 'nec:caveop_magenta_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:brown_colored_logs', 'nec:caveop_brown_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:gray_colored_logs', 'nec:caveop_gray_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:black_colored_logs', 'nec:caveop_black_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:cyan_colored_logs', 'nec:caveop_cyan_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:white_colored_logs', 'nec:caveop_white_colored_wooden_chest')
  coloredChestFromLogs('#caveopolis:lime_colored_logs', 'nec:caveop_lime_colored_wooden_chest')

  event.shaped(`1x caveopolis:raw_mixed_stone`, ['NN', 'NN'], {N: "caveopolis:mixed_stone_nugget"}).id(`submerged:raw_mixed_stone`)
  event.shaped(`1x caveopolis:mixed_stone_ore`, ['MSM', 'SMS', 'MSM'], {S: stone, M: "caveopolis:raw_mixed_stone"}).id(`submerged:mixed_stone_ore`)

  event.blasting(`1x thermal:bronze_ingot`, `submerged:unfired_bronze`).id(`submerged:bronze_ingot`)

  event.shaped(`1x submerged:wooden_mesh`, ['SSS', 'S S', 'SSS'], {S: stick}).id(`submerged:wooden_mesh`)
  event.shaped(`1x submerged:bone_mesh`, ['SBS', 'BBB', 'SBS'], {B: bone, S: stick}).id(`submerged:bone_mesh`)
  event.shaped(`1x submerged:bronze_mesh`, ['SBS', 'BBB', 'SBS'], {B: bronze_ingot, S: stick}).id(`submerged:bronze_mesh`)
  event.shaped(`1x submerged:wooden_catcher`, ['L L', 'L L', 'LLL'], {L: logs}).id(`submerged:wooden_catcher`)
  event.shaped(`1x submerged:bait_box`, ['SSS', 'PWP', 'PPP'], {P: planks, W: "aquaculture:worm", S: stick }).id(`submerged:bait_box`)
  event.shaped(`1x submerged:wooden_knife`, ['  D', ' D ', 'S  '], {D: "aquaculture:driftwood", S: stick }).id(`submerged:wooden_knife`)
  event.shaped(`1x submerged:skeleton_key`, [' B ', ' SM', ' SM'], {M: "minecraft:bone_meal", B: bone, S: stick }).id(`submerged:skeleton_key`)
  event.shaped(`1x submerged:bone_hammer`, ['OBO', ' S ', ' S '], {O: "minecraft:bone_block", B: bone, S: stick }).id(`submerged:bone_hammer`)
  event.shaped(`2x submerged:charcoal_filter`, [' S ', 'SCS', ' S '], {C: "opolisutilities:mini_charcoal", S: "minecraft:paper"}).id(`submerged:charcoal_filter`)
  event.shaped(`1x submerged:coil`, [' NI', 'NIN', 'IN '], {I: iron_ingot, N: iron_nugget}).id(`submerged:coil`)
  event.shaped(`1x submerged:bedrockium`, ['BBB', 'III', 'BBB'], {B: "bedrockminer:bedrock_chunk", I: iron_ingot}).id(`submerged:bedrockium`)
  event.shaped(`1x submerged:toxic_air_curio`, ['LLL', 'L L', 'LLL'], {L: "thermal:lead_ingot"}).id(`submerged:toxic_air_curio`)
  event.shaped(`1x submerged:water_curio`, ['LFL', 'F F', 'LFL'], {L: "thermal:lead_ingot", F: "thermal:diving_fabric"}).id(`submerged:water_curio`)
  event.shaped(`1x submerged:nether_bedrock_breaker`, ['NNN', 'PSP', 'NNN'], {N: 'thermal:netherite_nugget', S:'minecraft:netherite_upgrade_smithing_template', P: "minecraft:netherite_pickaxe"}).id(`submerged:nether_bedrock_breaker`)
  event.shaped(`1x submerged:storage_core`, ['DPD', 'BCB', 'DPD'], {B: bronze_nugget, D: "aquaculture:driftwood", P: planks, C: chest }).id(`submerged:storage_core`)
  event.shapeless(`4x submerged:unfired_bronze`, [copper_ingot, copper_ingot, copper_ingot, tin_ingot]).id(`submerged:unfired_bronze`)
  event.shaped(`1x submerged:nether_infused_water_bucket`, ['NSN', 'NBN', 'RRR'], {N: "minecraft:netherrack", S: "minecraft:nether_star", B: 'strainers:purified_water_bucket', R: "minecraft:blaze_rod"}).id(`submerged:nether_infused_water_bucket`)
  event.shaped(`1x submerged:eye_core`, [' 1 ', '2E3', ' 4 '], {E: "minecraft:ender_eye", 1: "submerged:air_block", 2: "submerged:water_block", 3: "submerged:earth_block", 4: "submerged:fire_block"}).id(`submerged:eye_core`)
  
  event.shaped(`2x submerged:air_block`, ['EEE', 'EBE', 'EEE'], {E: 'mysticalagriculture:air_essence', B: "submerged:air_block"}).id(`submerged:air_block`)
  event.shaped(`2x submerged:fire_block`, ['EEE', 'EBE', 'EEE'], {E: 'mysticalagriculture:fire_essence', B: "submerged:fire_block"}).id(`submerged:fire_block`)
  event.shaped(`2x submerged:water_block`, ['EEE', 'EBE', 'EEE'], {E: 'mysticalagriculture:water_essence', B: "submerged:water_block"}).id(`submerged:water_block`)
  event.shaped(`2x submerged:earth_block`, ['EEE', 'EBE', 'EEE'], {E: 'mysticalagriculture:earth_essence', B: "submerged:earth_block"}).id(`submerged:earth_block`)

  event.shaped(`1x mysticalagriculture:soulstone`, [' D ', 'DSD', ' D '], {D: 'mysticalagriculture:soulium_dust', S: "#forge:stone"}).id(`submerged:soulstone`)
 
  event.shaped("8x refinedstorage:silicon", ['SSS'], {S: 'mysticalagriculture:silicon_essence'}).id(`submerged:siilicon`)




  
  //Gravel Ores

  event.shaped(`1x submerged:iron_gravel_ore`, ['OO', 'OO'], {O: "submerged:iron_ore_piece"}).id(`submerged:iron_gravel_ore`)
  event.shaped(`1x submerged:gold_gravel_ore`, ['OO', 'OO'], {O: "submerged:gold_ore_piece"}).id(`submerged:gold_gravel_ore`)
  event.shaped(`1x submerged:copper_gravel_ore`, ['OO', 'OO'], {O: "submerged:copper_ore_piece"}).id(`submerged:copper_gravel_ore`)
  event.shaped(`1x submerged:tin_gravel_ore`, ['OO', 'OO'], {O: "submerged:tin_ore_piece"}).id(`submerged:tin_gravel_ore`)
  event.shaped(`1x submerged:silver_gravel_ore`, ['OO', 'OO'], {O: "submerged:silver_ore_piece"}).id(`submerged:silver_gravel_ore`)
  event.shaped(`1x submerged:lead_gravel_ore`, ['OO', 'OO'], {O: "submerged:lead_ore_piece"}).id(`submerged:lead_gravel_ore`)
  event.shaped(`1x submerged:nickel_gravel_ore`, ['OO', 'OO'], {O: "submerged:nickel_ore_piece"}).id(`submerged:nickel_gravel_ore`)
  event.shaped(`1x submerged:debris_gravel_ore`, ['OO', 'OO'], {O: "submerged:debris_ore_piece"}).id(`submerged:debris_gravel_ore`)

  event.shapeless(`2x submerged:sandy_mulch`, ["strainers:mulch", "minecraft:sand"]).id(`submerged:sandy_mulch`)
  event.shapeless(`2x submerged:dirty_mulch`, ["strainers:mulch", "minecraft:dirt"]).id(`submerged:dirty_mulch`)
  event.shapeless(`2x submerged:gravely_mulch`, ["strainers:mulch", "minecraft:gravel"]).id(`submerged:gravely_mulch`)
  event.shapeless(`1x minecraft:crafting_table`, ['#caveopolis:colored_wooden_plank_crafting_tables']).id(`submerged:crafting_table`)

  event.shaped(`1x roomopolis:short_room_key`, ['F F', '   ', 'F F'], {F: "submerged:key_fragment"}).id(`roomopolis:short_room_key`)
  event.shaped(`1x roomopolis:normal_room_key`, ['F F', ' K ', 'F F'], {F: "submerged:key_fragment", K: "roomopolis:short_room_key"}).id(`roomopolis:normal_room_key`)
  event.shaped(`1x roomopolis:tall_room_key`, ['F F', ' K ', 'F F'], {F: "submerged:key_fragment", K: "roomopolis:normal_room_key"}).id(`roomopolis:tall_room_key`)
  event.shaped(`1x roomopolis:corridor_key_1`, ['FFF'], {F: "submerged:key_fragment"}).id(`roomopolis:corridor_key_1`)
  event.shaped(`1x roomopolis:corridor_key_2`, ['FKF'], {F: "submerged:key_fragment", K: "roomopolis:corridor_key_1"}).id(`roomopolis:corridor_key_2`)
  event.shaped(`1x roomopolis:corridor_key_3`, ['FKF'], {F: "submerged:key_fragment", K: "roomopolis:corridor_key_2"}).id(`roomopolis:corridor_key_3`)
  event.shaped(`2x roomopolis:key_block_remover`, ['F'], {F: "submerged:key_fragment"}).id(`roomopolis:key_block_remover`)
  event.shaped(`1x roomopolis:wall_remover_key_1`, ['FKF'], {K: "roomopolis:key_block_remover", F: "submerged:key_fragment"}).id(`roomopolis:wall_key_remover_1`)
  event.shaped(`1x roomopolis:wall_remover_key_2`, ['FKF'], {K: "roomopolis:wall_remover_key_1", F: "submerged:key_fragment"}).id(`roomopolis:wall_key_remover_2`)
  event.shaped(`1x roomopolis:wall_remover_key_3`, ['FKF'], {K: "roomopolis:wall_remover_key_2", F: "submerged:key_fragment"}).id(`roomopolis:wall_key_remover_3`)
  event.shaped(`1x roomopolis:room_topper_key`, [' F ', 'FKF'], {K: "roomopolis:short_room_key", F: "submerged:key_fragment"}).id(`roomopolis:room_topper_key`)

  event.shaped(`1x pipe_connector:pipe_connector`, ['PPP', 'P P', 'PPP'], {P: "toms_storage:ts.inventory_cable"}).id(`pipe_connector:pipe_connector`)
 
  event.shaped(`1x minecraft:blast_furnace`, ['SFS', 'SFS', 'CST'], {C: copper_ingot, T: tin_ingot, S: stone, F: furnace}).id(`minecraft:blast_furnace`)

  event.shaped(`4x storagedrawers:upgrade_template`, ['SSS', 'SFS', 'SSS'], {F: "#submerged:framed_drawers", S: stick}).id(`storagedrawers:upgrade_template`)

  event.shaped(`1x framedcompactdrawers:framed_compact_drawer`, ['SCS', 'CTC', 'SCS'], {S: stick, C: "submerged:storage_core", T: crafting_table}).id(`framedcompactdrawers:framed_compact_drawer`)
  event.shaped(`1x framedcompactdrawers:framed_drawer_controller`, ['SCS', 'CTC', 'SCS'], {S: stick, C: "submerged:storage_core", T: bronze_block}).id(`framedcompactdrawers:framed_drawer_controller`)
  event.shaped(`1x framedcompactdrawers:framed_slave`, ['SCS', 'CTC', 'SCS'], {S: stick, C: "submerged:storage_core", T: copper_block}).id(`framedcompactdrawers:framed_slave`)


  event.shaped(`3x thermal:diving_fabric`, [' S ', 'SCS', ' S '], {S: "opolisutilities:leafy_string", C: "submerged:charcoal_filter"}).id(`thermal:diving_fabric`)
  event.shaped(`1x thermal:diving_helmet`, ['FFF', 'F F'], {F: "thermal:diving_fabric"}).id(`thermal:armor/diving_helmet`)
  event.shaped(`1x thermal:diving_chestplate`, ['F F', 'FFF', 'FFF'], {F: "thermal:diving_fabric"}).id(`thermal:armor/diving_chestplate`)
  event.shaped(`1x thermal:diving_leggings`, ['FFF', 'F F', 'F F'], {F: "thermal:diving_fabric"}).id(`thermal:armor/diving_leggings`)
  event.shaped(`1x thermal:diving_boots`, ['F F', 'F F'], {F: "thermal:diving_fabric"}).id(`thermal:armor/diving_boots`)

  event.shaped(`1x strainers:mulch`, ['LKL', 'KLK', 'LKL'], {K: "minecraft:kelp", L: "minecraft:dried_kelp_block"}).id(`strainers:mulch`)
  event.shaped(`1x strainers:eroding_salt_mulch`, ['III', 'MMM', 'LLL'], {I: iron_ingot, M: "strainers:mulch", L: "minecraft:lapis_lazuli"}).id(`strainers:eroding_salt_mulch`)
  event.shaped(`1x strainers:eroding_salt_mulch`, ['III', 'MMM', 'LLL'], {I: nickel_ingot, M: "strainers:mulch", L: "minecraft:lapis_lazuli"}).id(`submerged:eroding_salt_mulch_nickel`)

  event.shaped(`1x minecraft:composter`, ['S S', 'SBS', 'SSS'], {S: "#minecraft:wooden_slabs", B: "minecraft:bone_block" }).id(`minecraft:composter`)
  event.shaped(`1x minecraft:dispenser`, ['CCC', 'C C', 'C C'], {C: cobblestone}).id(`minecraft:dispenser`)
  event.shapeless(`1x minecraft:grass_block`, ["minecraft:dirt", "submerged:grass_seed"]).id(`submerged:grass_block`)
  event.shapeless(`1x minecraft:chest`, ["#forge:chests/wooden"]).id(`submerged:chest`)
  event.shaped(`1x minecraft:netherite_ingot`, ['SGS', 'GBG', 'SGS'], {S: "minecraft:netherite_scrap", G: gold_ingot, B: "submerged:bedrockium"}).id(`minecraft:netherite_ingot`)
  event.shaped(`1x minecraft:shulker_shell`, ['CCC', 'CEC'], {C: "minecraft:crying_obsidian", E: "minecraft:end_stone_bricks"}).id(`minecraft:shulker_shell`)

  //Pipez

  event.shaped(`8x pipez:item_pipe`, ['CCC', 'PPP', 'CCC'], {P: "toms_storage:ts.inventory_cable", C: copper_ingot}).id(`pipez:item_pipe`)
  event.shaped(`1x pipez:wrench`, ['F F', ' P ', ' F '], {F: flint, P: "pipez:item_pipe"}).id(`pipez:wrench`)

  

  //Opolis Utilities

  event.recipes.opolisutilities.rg2_blocks('caveopolis:colored_stone_bricks')
  event.recipes.opolisutilities.rg2_blocks('glassential:glass_light')
  
  event.shaped(`1x opolisutilities:drying_table`, ['SCS', 'SLS', 'S S'], {S: stick, L: "strainers:leafy_mesh", C: cobblestone}).id(`opolisutilities:drying_table`)
  event.shaped(`1x opolisutilities:crafter`, ['NHN', 'CCC', 'NHN'], {C: crafting_table, H: wooden_hopper, N: copper_nugget}).id(`opolisutilities:crafter`)
  event.shaped(`1x opolisutilities:opolis_wrench`, ['T T', ' T ', ' T '], {T: tin_ingot}).id(`opolisutilities:opolis_wrench`)
  event.shaped(`1x opolisutilities:resource_generator_2`, ['CCC', 'LBL', 'CCC'], {C: cobblestone, L: "minecraft:lapis_block", B: "minecraft:water_bucket"}).id(`opolisutilities:resource_generator_2`)
  event.shaped(`1x opolisutilities:resource_generator`, ['CCC', 'LBL', 'CCC'], {C: cobblestone, L: "minecraft:iron_block", B: "minecraft:water_bucket"}).id(`opolisutilities:resource_generator/resource_generator`)
  event.shaped(`1x opolisutilities:sapling_grower`, ['  B', ' S ', 'S  '], {S: stick, B: "minecraft:bone_block"}).id(`opolisutilities:sapling_grower`)

  //Thermal

  event.shaped(`1x thermal:machine_frame`, ['III', 'GRG', 'III'], {G: "thermal:energy_duct", R: redstone_block, I: iron_ingot}).id(`thermal:machine_frame`)
  event.shaped(`8x thermal:fluid_duct_windowed`, ['BBB', 'GRG', 'BBB'], {B: bronze_ingot, R: "thermal:energy_duct", G: glass}).id(`thermal:fluid_duct_windowed_4`)
  event.shaped(`1x thermal:emerald_dust`, [' E ', 'EDE', ' E '], {D: diamond, E: 'mysticalagriculture:prudentium_essence'}).id(`submerged:emerald_dust`)
  event.shaped(`1x thermal:wrench`, ['L L', ' L ', ' L '], {L: lead_ingot}).id(`thermal:tools/wrench`)
  
  //Systeams (Thermal Addon)

  event.shaped(`1x systeams:stirling_boiler`, [' F ', 'UFU', 'CRC'], {C: cobblestone, R: redstone, U: furnace, F: "thermal:fluid_duct_windowed"}).id(`systeams:boilers/stirling`)

  //

  event.shaped(`1x aquamirae:remnants_saber`, ['B', 'B', 'S'], {S: stick, B: 'aquamirae:sharp_bones'}).id(`aquamirae:remnants_saber`)

  //Structure Compass

  event.shaped(`1x structurecompass:structure_compass`, ['GCG', 'CSC', 'GCG'], {S: "minecraft:compass", C: "minecraft:netherrack", G: "minecraft:soul_sand"}).id(`structurecompass:structure_compass`)

  

  //Toms Storage

  event.shaped(`8x toms_storage:ts.inventory_cable`, ['TTT', 'GGG', 'TTT'], {T: "aquaculture:driftwood", G: tin_ingot}).id(`toms_storage:inventory_cable`)
  event.shaped(`1x toms_storage:ts.inventory_connector`, ['CSC', 'SHS', 'CSC'], {S: "submerged:storage_core", C: 'toms_storage:ts.inventory_cable', H: chest}).id(`toms_storage:inventory_connector`)
  event.shaped(`1x toms_storage:ts.inventory_cable_connector`, [' C ', 'CSC', ' C '], {S: "submerged:storage_core", C: 'toms_storage:ts.inventory_cable'}).id(`toms_storage:inventory_cable_connector`)
  event.shaped(`1x toms_storage:ts.inventory_cable_connector_filtered`, [' C ', 'CSC', ' C '], {S: "toms_storage:ts.inventory_cable_connector", C: 'minecraft:paper'}).id(`toms_storage:inventory_cable_connector_filtered`)
  event.shaped(`1x toms_storage:ts.storage_terminal`, ['SHS', 'CCC', 'SHS'], {S: "submerged:storage_core", C: 'toms_storage:ts.inventory_cable', H: chest}).id(`toms_storage:storage_terminal`)
  event.shaped(`1x toms_storage:ts.crafting_terminal`, [' C ', 'CSC', ' C '], {S: "toms_storage:ts.storage_terminal", C: crafting_table}).id(`toms_storage:crafting_terminal`)
  
  event.shaped(`1x toms_storage:ts.item_filter`, [' T ', 'TPT', ' T '], {T: tin_nugget, P: "minecraft:paper"}).id(`toms_storage:item_filter`)
  event.shaped(`1x toms_storage:ts.tag_item_filter`, [' T ', 'TPT', ' T '], {T: bronze_nugget, P: "minecraft:paper"}).id(`toms_storage:tag_item_filter`)
  event.shaped(`1x toms_storage:ts.polymorphic_item_filter`, [' T ', 'TPT', ' T '], {T: copper_nugget, P: "minecraft:paper"}).id(`toms_storage:poly_item_filter`)

  //Extended

  event.shaped(`1x extendedcrafting:black_iron_ingot`, ['MMM', 'MDM', 'MMM'], {M: "caveopolis:mixed_stone_ingot", D: "#forge:dyes/black"}).id(`extendedcrafting:black_iron_ingot`)
  event.shaped(`1x extendedcrafting:frame`, ['SSS', 'GMG', 'SSS'], {S: "extendedcrafting:black_iron_slate", G: glass, M: "thermal:machine_frame"}).id(`extendedcrafting:frame`)

  event.shaped(`1x extendedcrafting:basic_table`, [' C ', 'CTC', ' C '], {C: "extendedcrafting:basic_component", T: `extendedcrafting:frame`}).id(`extendedcrafting:basic_table`)    
  event.shaped(`1x extendedcrafting:advanced_table`, [' C ', 'CTC', ' C '], {C: "extendedcrafting:advanced_component", T: "extendedcrafting:basic_table"}).id(`extendedcrafting:advanced_table`)    
  event.shaped(`1x extendedcrafting:elite_table`, [' C ', 'CTC', ' C '], {C: "extendedcrafting:elite_component", T: "extendedcrafting:advanced_table"}).id(`extendedcrafting:elite_table`)    
  event.shaped(`1x extendedcrafting:ultimate_table`, [' C ', 'CTC', ' C '], {C: "extendedcrafting:ultimate_component", T: "extendedcrafting:elite_table"}).id(`extendedcrafting:ultimate_table`)    


  

  event.remove({id: 'minecraft:crafting_table'})
  event.remove({id: "aquaculture:planks_from_driftwood"})
  event.remove({id: "bedrockminer:bedrock_infused_obsidian"})
  event.remove({id: "bedrockminer:bedrock"})
  event.remove({output: "#submerged:banned_knifes"})
  event.remove({output: "aquaculture:fish_fillet_raw"})
  event.remove({input: "#alltheores:ore_hammers"})

  event.remove({id: "farmersdelight:paper_from_tree_bark"})
  event.remove({id: "strainers:upgrade_stats/beacon"})


  event.remove({id: "thermal:lumium_dust_4"})
  event.remove({id: "alltheores:lumium_dust_from_alloy_blending"})
  event.remove({id: "alltheores:signalum_dust_from_alloy_blending"})
  event.remove({id: "thermal:signalum_dust_4"})
  event.remove({id: "thermal:enderium_dust_2"})
  event.remove({id: "thermal:earth_charge/ender_pearl_dust_from_ender_pearl"})
  event.remove({id: "thermal:earth_charge/quartz_from_quartz_block"})
  event.remove({id: "farmersdelight:cutting/quartz_block"})
  event.remove({id: "opolisutilities:chests"})
  event.remove({id: "caveopolis:colored_caves_portal"})
  event.remove({id: "bedrockminer:bedrock_chunk"})

  event.remove({output: "#forge:gears", type: "minecraft:crafting_shaped"})
  event.remove({output: "#forge:ingots", input: "minecraft:fire_charge"})
  event.remove({output: "#thermal:glass/hardened", input: "minecraft:fire_charge"})
  event.remove({output: "#forge:dusts", input: "minecraft:fire_charge"})
  event.remove({output: "#forge:dusts", input: "thermal:earth_charge"})
  event.remove({output: 'bedrockminer:bedrock_breaker'})
  event.remove({output: 'ae2:silicon'})
  event.remove({output: 'refinedstorage:silicon'})
  event.remove({output: 'endrem:undead_eye'})
  event.remove({output: 'farmersdelight:cutting/amethyst_block'})


  event.remove({output: '#submerged:banned_storage_drawers'})

  event.replaceInput({}, "minecraft:crafting_table", "#caveopolis:colored_wooden_plank_crafting_tables")
  event.replaceInput({mod: "woodenbucket"}, "#minecraft:logs", "aquaculture:driftwood")
  event.replaceInput({mod: "woodenhopper"}, "#minecraft:planks", "aquaculture:driftwood")
  event.replaceInput({mod: "botanypots"}, hopper, wooden_hopper)
  event.replaceInput({id: "opolisutilities:wooden_shears"}, "#minecraft:planks", "aquaculture:driftwood")
  event.replaceInput({id: "opolisutilities:block_breaker"}, "minecraft:iron_pickaxe", "bettercopper:copper_pickaxe")
  event.replaceInput({id: "opolisutilities:block_placer"}, iron_ingot, copper_ingot)
  event.replaceInput({id: "opolisutilities:log_sheet"}, "#minecraft:wooden_pressure_plates", "aquaculture:driftwood")
  
  //Caveopolis Fix
  event.replaceInput({id: "caveopolis:sprayer/refill/black"}, "minecraft:blue_dye", "minecraft:black_dye")

  event.replaceInput({id: "thermal:machine_pulverizer"}, copper_gear, copper_block)
  event.replaceInput({id: "thermal:machine_pulverizer"}, "thermal:rf_coil", redstone_block)
  event.replaceInput({id: "thermal:machine_pulverizer"}, flint, "supplementaries:flint_block")

  event.replaceInput({id: "thermal:machine_smelter"}, "thermal:rf_coil", redstone_block)
  event.replaceInput({id: "thermal:machine_crucible"}, "thermal:rf_coil", "thermal:signalum_ingot")
  event.replaceInput({id: "thermal:machine_crucible"}, "minecraft:nether_bricks", invar_block)
  event.replaceInput({id: "thermal:machine_bottler"}, "thermal:rf_coil", "thermal:signalum_ingot")
  event.replaceInput({id: "thermal:machine_crystallizer"}, "#thermal:glass/hardened", glass)
  event.replaceInput({id: "thermal:machine_insolator"}, "#forge:gears/lumium", "mysticalagriculture:inferium_block")

  event.replaceInput({id: "thermal:machine_press"}, "thermal:constantan_gear", "thermal:constantan_block")
  event.replaceInput({id: "thermal:machine_press"}, "thermal:rf_coil", redstone_block)
  event.replaceInput({id: "thermal:press_gear_die"}, "thermal:diamond_gear", invar_block)

  event.replaceInput({id: "systeams:steam_dynamo"}, "thermal:rf_coil", redstone_block)
  event.replaceInput({id: "systeams:steam_dynamo"}, bronze_gear, bronze_block)
  event.replaceInput({id: "systeams:steam_dynamo"}, invar_ingot, iron_ingot)

  event.replaceInput({id: "strainers:purifying_salt_mulch"}, leaves, "thermal:niter")

  event.replaceInput({id: "mysticalagriculture:infusion_altar"}, "minecraft:red_wool", "#forge:ingots/rose_gold")
  event.replaceInput({id: "mysticalagriculture:infusion_pedestal"}, "minecraft:red_wool", "#forge:ingots/rose_gold")
  
  event.replaceInput({mod: "bedrockminer"}, "minecraft:bedrock", "submerged:bedrockium")

  event.replaceInput({mod: "lfpirates"}, "minecraft:bone", "aquamirae:sharp_bones")

  event.replaceInput({mod: "storagedrawers"}, chest, "submerged:storage_core")

  event.replaceInput({mod: "framedcompactdrawers"}, chest, "submerged:storage_core")
  event.replaceInput({id: "storagedrawers:drawer_key"}, gold_ingot, bronze_ingot)
  event.replaceInput({id: "storagedrawers:drawer_key"}, gold_nugget, "submerged:key_fragment")

  event.replaceInput({id: `extendedcrafting:compressor`}, "extendedcrafting:elite_catalyst", "extendedcrafting:the_ultimate_catalyst")
  event.replaceInput({id: `extendedcrafting:compressor`}, "extendedcrafting:elite_component", "extendedcrafting:the_ultimate_component")

  event.replaceInput({id: "toms_storage:inventory_hopper_basic"}, hopper, wooden_hopper)

  event.replaceInput({id: "farmersdelight:cutting_board"}, planks, "aquaculture:driftwood")

  event.replaceInput({id: "storagedrawers:concealment_key"}, "minecraft:ender_eye", "roomopolis:key_block_remover")

  event.replaceInput({mod: "refinedstorage"}, quartz, "ae2:certus_quartz_crystal")
  event.replaceInput({mod: "refinedstorage"}, diamond, "#forge:storage_blocks/apatite")
  event.replaceInput({mod: "ae2"}, quartz, "refinedstorage:quartz_enriched_iron")
  event.replaceInput({mod: "ae2"}, diamond, "#forge:storage_blocks/apatite")




})