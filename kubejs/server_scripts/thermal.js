// priority: 0

ServerEvents.recipes(event => {

  //Thermal

  //Signalum (new)
  event.recipes.thermal.smelter("4x thermal:signalum_ingot", [`3x #forge:ingots/copper`, `4x minecraft:redstone`, tin_ingot]).id("thermal:machines/smelter/smelter_alloy_signalum")
  event.recipes.thermal.smelter("2x thermal:rose_gold_ingot", [`1x #forge:ingots/electrum`, `1x #forge:ingots/copper`]).id("thermal:machines/smelter/smelter_alloy_rose_gold")
  
  event.recipes.thermal.smelter("1x extendedcrafting:basic_component", [`1x extendedcrafting:black_iron_slate`, 'thermal:upgrade_augment_1', iron_gear]).id("extendedcrafting:basic_component")
  event.recipes.thermal.smelter("1x extendedcrafting:advanced_component", [`1x extendedcrafting:black_iron_slate`, 'thermal:upgrade_augment_2', "extendedcrafting:luminessence"]).id("extendedcrafting:advanced_component")
  event.recipes.thermal.smelter("1x extendedcrafting:elite_component", [`1x extendedcrafting:black_iron_slate`, 'thermal:upgrade_augment_3', "extendedcrafting:crystaltine_ingot"]).id("extendedcrafting:elite_component")
  event.recipes.thermal.smelter("1x extendedcrafting:ultimate_component", [`1x extendedcrafting:black_iron_slate`, 'thermal_extra:upgrade_augment', 'minecraft:dragon_egg']).id("extendedcrafting:ultimate_component")
  
  event.recipes.thermal.smelter("1x extendedcrafting:the_ultimate_component", [`1x extendedcrafting:black_iron_slate`, 'mysticalagradditions:creative_essence', "extendedcrafting:the_ultimate_nugget"]).id("extendedcrafting:the_ultimate_component")

  //Certus Quartz

  event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 2000
      },
      {
        "item": "thermal:blizz_powder"
      }
    ],
    "result": [
      {
        "item": "minecraft:ice"
      }
    ],
    "energy": 3000
  }).id("thermal:crystallizer/ice")

  event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 500
      },
      {
        "tag": "forge:dusts/certus_quartz"
      }
    ],
    "result": [
      {
        "item": "ae2:certus_quartz_crystal"
      }
    ],
    "energy": 3000
  }).id("thermal:crystallizer/certus_quartz_crystal")

  //Crystalizer
  event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 500
      },
      {
        "tag": "forge:dusts/amethyst"
      }
    ],
    "result": [
      {
        "item": "minecraft:amethyst_shard"
      }
    ],
    "energy": 5000
  }).id("thermal:crystallizer/amethyst_shard")

  //RF Coil
  event.custom({
    "type": "thermal:bottler",
    "ingredients": [
      {
        "item": "submerged:coil"
      },
      {
        "fluid": "thermal:redstone",
        "amount": 200
      }
    ],
    "result": [
      {
        "item": "thermal:rf_coil"
      }
    ],
    "experience": 0.1
  }).id("thermal:rf_coil")

  //Black Iron Plate

  event.custom({
    "type": "thermal:press",
    "ingredient": {
      "tag": "forge:ingots/black_iron"
    },
    "result": [
      {
        "item": 'extendedcrafting:black_iron_slate'
      }
    ]
  }).id("extendedcrafting:black_iron_slate")

  //Diamond Gear

  event.custom({
    "type": "thermal:press",
    "ingredient": [
      {
        "tag": "forge:gems/diamond",
        "count": 4
      },
      {
        "item": "thermal:press_gear_die"
      }
    ],
    "result": 
      {
        "item": 'thermal:diamond_gear'
      }
    
  }).id("submerged:diamond_gear")



  event.remove({id: "thermal:machines/pulverizer/pulverizer_andesite"})
  event.remove({id: "thermal:machines/pulverizer/pulverizer_diorite"})
  event.remove({id: "thermal:machines/pulverizer/pulverizer_granite"})
  event.remove({id: "thermal:machines/smelter/smelter_alloy_netherite"})




})