// priority: 0

JEIEvents.hideItems(event => {

     event.hide(['aquaculture:diamond_fillet_knife', 'aquaculture:gold_fillet_knife','aquaculture:iron_fillet_knife', 'aquaculture:stone_fillet_knife', 'aquaculture:wooden_fillet_knife', 'aquaculture:neptunium_fillet_knife'])
     event.hide(['alltheores:platinum_ore_hammer', 'alltheores:invar_ore_hammer', 'alltheores:bronze_ore_hammer', 'alltheores:iron_ore_hammer', 'alltheores:copper_ore_hammer'])
     event.hide('bedrockminer:bedrock_breaker')
     event.hide('#submerged:banned_storage_drawers')
     event.hide('ae2:silicon')
     event.hide(['alltheores:aluminum_ingot', 'alltheores:osmium_ingot', 'alltheores:platinum_ingot', 'alltheores:zinc_ingot', 'alltheores:iridium_ingot', 'alltheores:brass_ingot'])
})
 
 JEIEvents.addItems(event => {
 
     event.add(['thermal:press_gear_die', 'thermal:press_unpacking_die', 'thermal:press_packing_3x3_die', 'thermal:press_coin_die', 'thermal:rf_coil'])
     event.add('craftingstation:crafting_station')
})
 
 JEIEvents.removeCategories(event => {
 
  //   event.remove('jeresources:worldgen')
 
})
 