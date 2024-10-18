/*

WorldgenEvents.add(event => {

    const {anchors} = event

  event.addOre(ore => {

    ore.biomes = 'caveopolis:colored_caves' 		
    ore.id = 'stoneopolis:add_blank_color_core_ore'
    ore.addTarget = ('#caveopolis:colored_stones', 'minecraft:diamond_block')
    ore.count([50, 100]).squared().triangleHeight(              
        anchors.absolute(10),
        anchors.absolute(60)  
      )                             
    ore.size = 64


    // note all of the above syntax may be mixed and matched individually
  })
})
*/