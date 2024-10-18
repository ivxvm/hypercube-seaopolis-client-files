// priority: 0

ServerEvents.tags("item", event => {
    
    
  event.get(`strainers:tier_1_meshes`).add(["submerged:wooden_mesh"])
  event.get(`strainers:tier_2_meshes`).add(["submerged:bone_mesh"])
  event.get(`strainers:tier_3_meshes`).add(["submerged:bronze_mesh"])
  event.get(`strainers:tier_4_meshes`).add(["strainers:amethyst_mesh"])
  event.get(`submerged:strainers_raw_fishes`).add(["#forge:raw_fishes"]).remove(['farmersdelight:cod_slice', 'farmersdelight:salmon_slice'])
  event.get(`submerged:banned_knifes`).add(['aquaculture:diamond_fillet_knife', 'aquaculture:gold_fillet_knife','aquaculture:iron_fillet_knife', 'aquaculture:stone_fillet_knife', 'aquaculture:wooden_fillet_knife', 'aquaculture:neptunium_fillet_knife'])
  event.get(`submerged:banned_in_botany_pots`).add(["#forge:seeds", "#mysticalagriculture:seeds"])
  event.get(`submerged:banned_storage_drawers`).add(['storagedrawers:controller_slave', 'storagedrawers:controller', 'storagedrawers:warped_trim', 'storagedrawers:crimson_trim', 'storagedrawers:dark_oak_trim', 'storagedrawers:warped_half_drawers_1', 'storagedrawers:warped_half_drawers_2', 'storagedrawers:warped_half_drawers_4', 'storagedrawers:compacting_drawers_3', 'storagedrawers:oak_trim', 'storagedrawers:spruce_trim', 'storagedrawers:birch_trim', 'storagedrawers:acacia_trim', 'storagedrawers:jungle_trim', 'storagedrawers:warped_full_drawers_4', 'storagedrawers:warped_full_drawers_2', 'storagedrawers:warped_full_drawers_1', 'storagedrawers:crimson_half_drawers_4', 'storagedrawers:crimson_half_drawers_2', 'storagedrawers:crimson_half_drawers_1', 'storagedrawers:crimson_full_drawers_4', 'storagedrawers:crimson_full_drawers_2', 'storagedrawers:crimson_full_drawers_1'])
  event.get(`submerged:banned_storage_drawers`).add(['storagedrawers:dark_oak_half_drawers_4', 'storagedrawers:acacia_full_drawers_4', 'storagedrawers:acacia_full_drawers_2', 'storagedrawers:dark_oak_half_drawers_2', 'storagedrawers:acacia_full_drawers_1', 'storagedrawers:dark_oak_half_drawers_1', 'storagedrawers:jungle_half_drawers_4', 'storagedrawers:dark_oak_full_drawers_4', 'storagedrawers:jungle_half_drawers_2', 'storagedrawers:dark_oak_full_drawers_2', 'storagedrawers:jungle_half_drawers_1', 'storagedrawers:dark_oak_full_drawers_1', 'storagedrawers:jungle_full_drawers_4', 'storagedrawers:acacia_half_drawers_4', 'storagedrawers:jungle_full_drawers_2', 'storagedrawers:acacia_half_drawers_2', 'storagedrawers:jungle_full_drawers_1', 'storagedrawers:acacia_half_drawers_1'])
  event.get(`submerged:banned_storage_drawers`).add(['storagedrawers:oak_full_drawers_1', 'storagedrawers:spruce_half_drawers_1', 'storagedrawers:oak_full_drawers_2', 'storagedrawers:spruce_half_drawers_2', 'storagedrawers:oak_full_drawers_4', 'storagedrawers:spruce_half_drawers_4', 'storagedrawers:oak_half_drawers_1', 'storagedrawers:birch_full_drawers_1', 'storagedrawers:oak_half_drawers_2', 'storagedrawers:birch_full_drawers_2', 'storagedrawers:oak_half_drawers_4', 'storagedrawers:birch_full_drawers_4', 'storagedrawers:spruce_full_drawers_1', 'storagedrawers:birch_half_drawers_1', 'storagedrawers:spruce_full_drawers_2', 'storagedrawers:birch_half_drawers_2', 'storagedrawers:spruce_full_drawers_4', 'storagedrawers:birch_half_drawers_4'])
  event.get(`submerged:framed_drawers`).add(['framedcompactdrawers:framed_half_four', 'framedcompactdrawers:framed_compact_drawer', 'framedcompactdrawers:framed_drawer_controller', 'framedcompactdrawers:framed_slave', 'framedcompactdrawers:framed_trim', 'framedcompactdrawers:framed_full_one', 'framedcompactdrawers:framed_full_two', 'framedcompactdrawers:framed_full_four', 'framedcompactdrawers:framed_half_one', 'framedcompactdrawers:framed_half_two'])

  event.get('submerged:wild_farmers_delight_plants').add(['farmersdelight:sandy_shrub', 'farmersdelight:wild_cabbages', 'farmersdelight:wild_onions', 'farmersdelight:wild_tomatoes', 'farmersdelight:wild_carrots', 'farmersdelight:wild_potatoes', 'farmersdelight:wild_beetroots', 'farmersdelight:wild_rice', 'farmersdelight:brown_mushroom_colony', 'farmersdelight:red_mushroom_colony'])

  event.get(`submerged:ender_eyes`).add(['endrem:cryptic_eye', 'endrem:exotic_eye', 'endrem:undead_eye', 'endrem:witch_eye', 'endrem:wither_eye', 'endrem:magical_eye', 'endrem:black_eye', 'endrem:cold_eye', 'endrem:corrupted_eye', 'endrem:lost_eye', 'endrem:nether_eye', 'endrem:old_eye', 'endrem:rogue_eye', 'endrem:cursed_eye', 'endrem:evil_eye', 'endrem:guardian_eye'])

  event.get(`strainers:tier_3_meshes`).remove(["strainers:amethyst_mesh"]) 

  event.get(`submerged:pirate_gear`).add(["@lfpirates"])

  event.get('forge:nuggets').add('bettercopper:copper_nugget')
  event.get('forge:nuggets/copper').add('bettercopper:copper_nugget')

  event.get('itemfilters:check_nbt').add('extendedcrafting:singularity')

  event.get('roomopolis:keys').remove('roomopolis:key_block_remover')

  event.get('forge:chests').remove('aquaculture:neptunes_bounty')


})

ServerEvents.tags("block", event => {
  
  event.get('roomopolis:key_block_smart_blocks').add('glassential:glass_light')



  /*
  event.get(`minecraft:needs_diamond_tool`).remove(["javd:portal_block"])
  */

  
})
