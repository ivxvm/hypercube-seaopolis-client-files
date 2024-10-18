// priority: 0

ServerEvents.recipes(event => {

  //Farmers Delight

  //Raw Fillets
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "tag": "forge:raw_fishes"
      }
    ],
    "result": [
      {
        "count": 2, "item": "aquaculture:fish_fillet_raw"
      },
      {
        "count": 1,"item": "aquaculture:fish_bones"
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  }).id(`submerged:farmersdelight/cutting_board/raw_fillets`)


  //Bones
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:bone_block"
      }
    ],
    "result": [
      {
        "count": 3,"item": "minecraft:bone"
      }
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  }).id(`submerged:cutting/bone_blocks`)


  //Key Fragment
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "submerged:skeleton_key"
      }
    ],
    "result": [
      {"count": 5,"item": "submerged:key_fragment"}
    ],
    "tool": {
      "tag": "forge:tools/hammers"
    }
  }).id(`submerged:farmersdelight/cutting_board/key_fragment`)

  //Key Fragment, ALL KEYS
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "tag": "roomopolis:keys"
      }
    ],
    "result": [
      {"count": 3,"item": "submerged:key_fragment"}
    ],
    "tool": {
      "tag": "forge:tools/hammers"
    }
  }).id(`submerged:farmersdelight/cutting_board/key_fragment_all_keys`)

  //Shrine Key Fragment
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "submerged:shrine_skeleton_key"
      }
    ],
    "result": [
      {"count": 3,"item": "submerged:shrine_key_fragment"}
    ],
    "tool": {
      "tag": "forge:tools/hammers"
    }
  }).id(`submerged:farmersdelight/cutting_board/shrine_key_fragment`)

  //Sharp Bone
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:bone"
      }
    ],
    "result": [
      {"count": 1,"item": "aquamirae:sharp_bones"}
    ],
    "tool": {
      "tag": "forge:tools/knives"
    }
  }).id(`submerged:farmersdelight/cutting_board/sharp_bones`)

  //Cod Slice Fix

  event.remove({ id: 'farmersdelight:cutting/cod' })

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:cod"
      }
    ],
    "result": [
      {
        "count": 2,"item": "farmersdelight:cod_slice"
      },
      {
        "count": 1,"item": "minecraft:bone_meal"
      }
    ],
    "tool": {
      "tag": "forge:tools/paxels"
    }
  }).id('farmersdelight:cutting/cod_paxels')

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:cod"
      }
    ],
    "result": [
      {
        "count": 2,"item": "farmersdelight:cod_slice"
      },
      {
        "count": 1,"item": "minecraft:bone_meal"
      }
    ],
    "tool": {
      "tag": "forge:tools/axes"
    }
  }).id('farmersdelight:cutting/cod_axe')

  //Salmon Slice Fix

  event.remove({ id: 'farmersdelight:cutting/salmon' })

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:salmon"
      }
    ],
    "result": [
      {
        "count": 2,"item": "farmersdelight:salmon_slice"
      },
      {
        "count": 1,"item": "minecraft:bone_meal"
      }
    ],
    "tool": {
      "tag": "forge:tools/paxels"
    }
  }).id('farmersdelight:cutting/salmon_paxel')

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:salmon"
      }
    ],
    "result": [
      {
        "count": 2,"item": "farmersdelight:salmon_slice"
      },
      {
        "count": 1,"item": "minecraft:bone_meal"
      }
    ],
    "tool": {
      "tag": "forge:tools/axes"
    }
  }).id('farmersdelight:cutting/salmon_axe')

  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": "minecraft:cactus"
      }
    ],
    "result": [
      {
        "count": 4,"item": "submerged:cactus_slice"
      }
    ],
    "tool": {
      "tag": "forge:tools/paxels"
    }
  }).id('submerged:cactus_slice')

})