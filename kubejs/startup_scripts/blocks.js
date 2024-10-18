// priority: 0

StartupEvents.registry('block', event => {
    
    event.create('submerged:air_block')
    .hardness(0.5)
    .displayName('Air Block')		
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true)
    
    event.create('submerged:fire_block')
    .hardness(0.5)
    .displayName('Fire Block')		
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true)
    
    event.create('submerged:water_block')
    .hardness(0.5)
    .displayName('Water Block')		
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true)
    
    event.create('submerged:earth_block')
    .hardness(0.5)
    .displayName('Earth Block')		
    .tagBlock('minecraft:mineable/pickaxe')
    .stoneSoundType()
    .fullBlock(true)

    event.create('submerged:storage_core')
    .hardness(0.5)
    .displayName('Storage Core')		
    .tagBlock('minecraft:mineable/axe')
    .woodSoundType()
    .fullBlock(true)

    event.create('submerged:gravely_mulch')
    .hardness(0.5)
    .displayName('Gravely Mulch')		
    .tagBlock('minecraft:mineable/pickaxe')
    .gravelSoundType()
    .fullBlock(true)

    event.create('submerged:sandy_mulch')
    .hardness(0.6)
    .displayName('Sandy Mulch')		
    .tagBlock('minecraft:mineable/shovel')
    .sandSoundType()
    .fullBlock(true)

    event.create('submerged:dirty_mulch')
    .hardness(0.6)
    .displayName('Dirty Mulch')		
    .tagBlock('minecraft:mineable/shovel')
    .sandSoundType()
    .fullBlock(true)

    event.create('submerged:nether_mulch')
    .hardness(0.6)
    .displayName('Nether Mulch')		
    .tagBlock('minecraft:mineable/shovel')
    .sandSoundType()
    .fullBlock(true)

    event.create('submerged:dust_block')
    .hardness(0.6)
    .displayName('Dust Block')		
    .tagBlock('minecraft:mineable/shovel')
    .sandSoundType()
    .fullBlock(true)

    //Gravel Ore Blocks

    let orePieces = JsonIO.read('kubejs/orePieces.json').orePieces
    orePieces.forEach(element => { 

      let lowercase = element.toLowerCase()
      event.create(`submerged:${lowercase}_gravel_ore`)
      .textureAll(`submerged:block/${lowercase}_gravel_ore`)
      .hardness(0.6)
      .tagBlock('minecraft:mineable/shovel')
      .tagBoth('submerged:gravel_ores')
      .displayName(`${element} Gravel Ore`)
      .gravelSoundType()
      .requiresTool(true)
      .fullBlock(true)
    })
})

BlockEvents.modification(event => {
    /*
    event.modify('minecraft:stone', block => {
        block.destroySpeed = 0.2
        block.requiresTool = false
    })
    */
})
 
 