// priority: 0

ServerEvents.recipes(event => {

  //Opolis Utils

  //Catalogue

  event.recipes.opolisutilities.catalogue('framedcompactdrawers:framed_full_one', 'submerged:storage_core', 1, 1).id("opolisutilities:catalogue/framed_full_one")
  event.recipes.opolisutilities.catalogue('framedcompactdrawers:framed_full_two', 'submerged:storage_core', 2, 1).id("opolisutilities:catalogue/framed_full_two")
  event.recipes.opolisutilities.catalogue('framedcompactdrawers:framed_full_four', 'submerged:storage_core', 4, 1).id("opolisutilities:catalogue/framed_full_four")
  event.recipes.opolisutilities.catalogue('framedcompactdrawers:framed_compact_drawer', 'submerged:storage_core', 6, 1).id("opolisutilities:catalogue/framed_compacting_drawer")
  
  event.recipes.opolisutilities.catalogue(wooden_hopper, "aquaculture:driftwood", 6, 1).id("opolisutilities:catalogue/wooden_hopper")
  event.recipes.opolisutilities.catalogue("opolisutilities:animal_net", bucks, 6, 1).id("opolisutilities:catalogue/animal_net")
  event.recipes.opolisutilities.catalogue(`ae2:mysterious_cube`, bucks, 8, 1).id("opolisutilities:catalogue/mysterious_cube")
  event.recipes.opolisutilities.catalogue('submerged:apple_of_ascent', bucks, 4, 1).id("opolisutilities:catalogue/apple_of_ascent")
  event.recipes.opolisutilities.catalogue('submerged:nether_roof', bucks, 8, 1).id("opolisutilities:catalogue/nether_roof")
  event.recipes.opolisutilities.catalogue('submerged:colored_caves_roof', bucks, 8, 1).id("opolisutilities:catalogue/colored_caves_roof")

  event.recipes.opolisutilities.catalogue('warp_pipes:lime_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/lime_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:orange_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/orange_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:blue_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/blue_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:red_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/red_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:yellow_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/yellow_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:green_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/green_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:white_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/white_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:black_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/black_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:brown_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/brown_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:gray_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/gray_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:light_blue_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/light_blue_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:light_gray_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/light_gray_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:magenta_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/magenta_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:pink_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/pink_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:purple_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/purple_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:cyan_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/cyan_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:clear_warp_pipe', bucks, 6, 2).id("opolisutilities:catalogue/clear_warp_pipe")
  event.recipes.opolisutilities.catalogue('warp_pipes:pipe_wrench', bucks, 6, 2).id("opolisutilities:catalogue/pipe_wrench")

  event.recipes.opolisutilities.catalogue('storagedrawers:obsidian_storage_upgrade', bucks, 3, 1).id("opolisutilities:catalogue/obsidian_storage_upgrade")
  event.recipes.opolisutilities.catalogue('storagedrawers:iron_storage_upgrade', bucks, 5, 1).id("opolisutilities:catalogue/iron_storage_upgrade")
  event.recipes.opolisutilities.catalogue('storagedrawers:gold_storage_upgrade', bucks, 7, 1).id("opolisutilities:catalogue/gold_storage_upgrade")
  event.recipes.opolisutilities.catalogue('storagedrawers:diamond_storage_upgrade', bucks, 9, 1).id("opolisutilities:catalogue/diamond_storage_upgrade")
  event.recipes.opolisutilities.catalogue('storagedrawers:emerald_storage_upgrade', bucks, 11, 1).id("opolisutilities:catalogue/emerald_storage_upgrade")

  event.custom({
    "type": "opolisutilities:drying_table",
    "ingredient":[
    {
      "item": "opolisutilities:bundled_flesh"
    }
    ],
    "count": 1,
    "duration": 80,
    "output": {
      "item": "minecraft:leather",
      "count": 1
    }
  }).id("opolisutilities:drying_table/bundled_flesh")

})