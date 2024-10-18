// priority: 0

ServerEvents.recipes(event => {

  //Extended Crafting

  //Luminessence
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "GRG",
      "PGP",
      "GRG"
    ],
    "key": {
      "G": {
        "item": "minecraft:glowstone_dust"
      },
      "R": {
        "item": "minecraft:redstone"
      },
      "P": {
        "item": "minecraft:gunpowder"
      }
    },
    "result": {
      "item": 'extendedcrafting:luminessence',
      "count": 1
    }
  }).id(`extendedcrafting:luminessence`)

  //Crystaltine
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "DDDDD",
      "ELLLE",
      "EDDDE",
      "ELLLE",
      "DDDDD"
    ],
    "key": {
      "D": {
        "item":  "mysticalagriculture:diamond_essence"
      },
      "L": {
        "item":  "minecraft:lapis_lazuli"
      },
      "E": {
        "tag":  "forge:ingots/lead"
      }
    },
    "result": {
      "item": 'extendedcrafting:crystaltine_ingot',
      "count": 1
    }
  }).id(`extendedcrafting:crystaltine_ingot`)

  //Shrine Key
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      "  AAA  ",
      "  AAA  ",
      "   A   ",
      "   ABB ",
      "   A   ",
      "   ABB "
    ],
    "key": {
      "A": {
        "item": "minecraft:stick"
      },
      "B": {
        "item": "caveopolis:mixed_stone_ingot"
      }
    },
    "result": {
      "item": "submerged:shrine_skeleton_key",
    }
  }).id(`extendedcrafting:shrine_skeleton_key`)

  //Earth Key
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCBAA",
      "ACDDDCA",
      "BDEFEDB",
      "CDF FDC",
      "BDEFEDB",
      "ACDDDCA",
      "AABCBAA"
    ],
    "key": {
      "A": {
        "item": "minecraft:grass_block"
      },
      "B": {
        "item": "submerged:shrine_key_fragment"
      },
      "C": {
        "item": "mysticalagriculture:earth_essence"
      },
      "D": {
        "item": "caveopolis:green_dirt"
      },
      "E": {
        "item": "caveopolis:green_colored_log"
      },
      "F": {
        "item": "minecraft:melon"
      }
    },
    "result": {
      "item": "roomopolis:earth_key"
    }
  }).id(`submerged:earth_key`)

  //Fire Key
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCBAA",
      "ACDDDCA",
      "BDEFEDB",
      "CDF FDC",
      "BDEFEDB",
      "ACDDDCA",
      "AABCBAA"
    ],
    "key": {
      "A": {
        "item": "minecraft:netherrack"
      },
      "B": {
        "item": "submerged:shrine_key_fragment"
      },
      "C": {
        "item": "mysticalagriculture:fire_essence"
      },
      "D": {
        "item": "minecraft:magma_block"
      },
      "E": {
        "item": "igleelib:lava_shard"
      },
      "F": {
        "item": "minecraft:campfire"
      }
    },
    "result": {
      "item": "roomopolis:fire_key"
    }
  }).id(`submerged:fire_key`)

  //Water Key
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCBAA",
      "ACDDDCA",
      "BDEFEDB",
      "CDFGFDC",
      "BDEFEDB",
      "ACDDDCA",
      "AABCBAA"
    ],
    "key": {
      "A": {
        "item": "minecraft:lapis_block"
      },
      "B": {
        "item": "submerged:shrine_key_fragment"
      },
      "C": {
        "item": "mysticalagriculture:water_essence"
      },
      "D": {
        "item": "thermal:diving_fabric"
      },
      "E": {
        "item": "aquaculture:fish_bones"
      },
      "F": {
        "item": "aquaculture:fish_fillet_raw"
      },
      "G": {
        "item": "minecraft:heart_of_the_sea"
      }
    },
    "result": {
      "item": "roomopolis:water_key"
    }
  }).id(`submerged:water_key`)

  //Air Key
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCBAA",
      "ACDDDCA",
      "BDEFEDB",
      "CDF FDC",
      "BDEFEDB",
      "ACDDDCA",
      "AABCBAA"
    ],
    "key": {
      "A": {
        "item": "supplementaries:feather_block"
      },
      "B": {
        "item": "submerged:shrine_key_fragment"
      },
      "C": {
        "item": "mysticalagriculture:air_essence"
      },
      "D": {
        "item": "caveopolis:yellow_dirt"
      },
      "E": {
        "item": "opolisutilities:floating_block_item"
      },
      "F": {
        "item": "minecraft:glass_bottle"
      }
    },
    "result": {
      "item": "roomopolis:air_key"
    }
  }).id(`submerged:air_key`)

  //Ultimate Ingot (WIP)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCDDDCBA",
      "BEFGHGFEB",
      "CIJKLKJIC",
      "MNKOPOKNM",
      "MQLRSRLQM",
      "MNKOPOKNM",
      "CIJKLKJIC",
      "BEFGHGFEB",
      "ABCDDDCBA"
    ],
    "key": {
      "A": {
        "item": "thermal:invar_ingot"
      },
      "B": {
        "item": "thermal:bronze_ingot"
      },
      "C": {
        "item": "minecraft:nether_brick"
      },
      "D": {
        "item": "aquaculture:neptunium_ingot"
      },
      "E": {
        "item": "thermal:signalum_ingot"
      },
      "F": {
        "item": "thermal_extra:twinite_ingot"
      },
      "G": {
        "item": "thermal:steel_ingot"
      },
      "H": {
        "item": "thermal:lead_ingot"
      },
      "I": {
        "item": "thermal_extra:shellite_ingot"
      },
      "J": {
        "item": "thermal_extra:soul_infused_ingot"
      },
      "K": {
        "item": "caveopolis:mixed_stone_ingot"
      },
      "L": {
        "item": "thermal:electrum_ingot"
      },
      "M": {
        "item": "aquaculture:neptunium_ingot"
      },
      "N": {
        "item": "thermal:rose_gold_ingot"
      },
      "O": {
        "item": "thermal:constantan_ingot"
      },
      "P": {
        "item": "thermal:lumium_ingot"
      },
      "Q": {
        "item": "minecraft:netherite_ingot"
      },
      "R": {
        "item": "thermal_extra:dragonsteel_ingot"
      },
      "S": {
        "item": "thermal:enderium_ingot"
      }
    },
    "result": {
      "item": "extendedcrafting:the_ultimate_ingot"
    }
  }).id(`extendedcrafting:the_ultimate_ingot`)


  //Creative Essence
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABBBBBAA",
      "ABCCCCCBA",
      "BDEFFFEGB",
      "BDFHIHFGB",
      "BDFIJIFGB",
      "BDFHIHFGB",
      "BDEFFFEGB",
      "ABKKKKKBA",
      "AABBBBBAA"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:inferium_essence"
      },
      "B": {
        "item": "mysticalagriculture:prudentium_essence"
      },
      "C": {
        "item": "submerged:fire_block"
      },
      "D": {
        "item": "submerged:air_block"
      },
      "E": {
        "item": "mysticalagriculture:dragon_egg_essence"
      },
      "F": {
        "item": "mysticalagriculture:diamond_essence"
      },
      "G": {
        "item": "submerged:water_block"
      },
      "H": {
        "item": "mysticalagriculture:nether_star_essence"
      },
      "I": {
        "item": "mysticalagriculture:netherite_essence"
      },
      "J": {
        "item": "mysticalagradditions:insanium_essence"
      },
      "K": {
        "item": "submerged:earth_block"
      }
    },
    "result": {
      "item": "mysticalagradditions:creative_essence"
    }
  }).id(`submerged:creative_essence`)

  //

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABBCBBA",
      "ABCDCBA",
      "ABBCBBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:prismarine_shard"
      },
      "B": {
        "item": "minecraft:prismarine_crystals"
      },
      "C": {
        "item": "minecraft:heart_of_the_sea"
      },
      "D": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:guardian_eye"
    }
  }).id(`submerged:guardian_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABCCA ",
      "ABCBDCA",
      "ACBEDCA",
      "ACDDDCA",
      " ACCCA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:sugar"
      },
      "B": {
        "item": "minecraft:fermented_spider_eye"
      },
      "C": {
        "item": "thermal:redstone_mushroom_spores"
      },
      "D": {
        "item": "minecraft:glistering_melon_slice"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:witch_eye"
    }
  }).id(`endrem:witch_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABBCBBA",
      "ABCDCBA",
      "ABBCBBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:bone"
      },
      "B": {
        "item": "opolisutilities:bundled_flesh"
      },
      "C": {
        "item": "farmersdelight:bone_broth"
      },
      "D": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:undead_eye"
    }
  }).id(`submerged:undead_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABCBA ",
      "ABDEDBA",
      "ABEFEBA",
      "ABDEDBA",
      " ABCBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:nether_brick"
      },
      "B": {
        "item": "minecraft:blaze_rod"
      },
      "C": {
        "item": "minecraft:ghast_tear"
      },
      "D": {
        "tag": "forge:dusts/netherite"
      },
      "E": {
        "item": "mysticalagradditions:nether_star_shard"
      },
      "F": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:nether_eye"
    }
  }).id(`submerged:nether_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCDCBA",
      "ABDEDBA",
      "ABCDCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:water_agglomeratio"
      },
      "B": {
        "item": "thermal:blizz_rod"
      },
      "C": {
        "item": "mysticalagriculture:ice_essence"
      },
      "D": {
        "item": "thermal:frost_melon_slice"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:cold_eye"
    }
  }).id(`submerged:cold_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCDCBA",
      "ABDEDBA",
      "ABCDCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "extendedcrafting:redstone_ingot"
      },
      "B": {
        "item": "thermal:signalum_dust"
      },
      "C": {
        "item": "minecraft:sticky_piston"
      },
      "D": {
        "item": "mysticalagriculture:redstone_essence"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:rogue_eye"
    }
  }).id(`submerged:rogue_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCDCBA",
      "ABDEDBA",
      "ABCDCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:crimson_stem"
      },
      "B": {
        "item": "minecraft:stone_button"
      },
      "C": {
        "item": "minecraft:cobblestone"
      },
      "D": {
        "type": "forge:nbt",
        "item": "minecraft:crossbow",
        "count": 1,
        "nbt": "{Damage:0}"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:corrupted_eye"
    }
  }).id(`submerged:corrupted_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCCCBA",
      "ABCDCBA",
      "ABCCCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:blaze_rod"
      },
      "B": {
        "item": "minecraft:obsidian"
      },
      "C": {
        "item": "minecraft:rotten_flesh"
      },
      "D": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:cursed_eye"
    }
  }).id(`submerged:cursed_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCDCBA",
      "ABDEDBA",
      "ABCDCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:nether_wart"
      },
      "B": {
        "item": "minecraft:lodestone"
      },
      "C": {
        "item": "minecraft:recovery_compass"
      },
      "D": {
        "item": "minecraft:compass"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:lost_eye"
    }
  }).id(`submerged:lost_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCDCBA",
      "ABDEDBA",
      "ABCDCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "opolisutilities:ender_pearl_fragment"
      },
      "B": {
        "item": "mysticalagriculture:imperium_essence"
      },
      "C": {
        "item": "minecraft:enchanted_book",
      },
      "D": {
        "item": "minecraft:experience_bottle"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:magical_eye"
    }
  }).id(`submerged:magical_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCDCBA",
      "ABDEDBA",
      "ABCDCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:golden_carrot"
      },
      "B": {
        "item": "thermal:netherite_nugget"
      },
      "C": {
        "item": "minecraft:black_dye"
      },
      "D": {
        "item": "thermal_extra:twinite_ingot"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:evil_eye"
    }
  }).id(`submerged:evil_eye`)


  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " ABBBA ",
      "ABCDCBA",
      "ABDEDBA",
      "ABCDCBA",
      " ABBBA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "minecraft:red_sandstone"
      },
      "B": {
        "item": "minecraft:sandstone"
      },
      "C": {
        "item": "submerged:sandy_mulch"
      },
      "D": {
        "item": "thermal_extra:soul_sand_dust"
      },
      "E": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:old_eye"
    }
  }).id(`submerged:old_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  AAA  ",
      " AAAAA ",
      "AABCBAA",
      "AACDCAA",
      "AABCBAA",
      " AAAAA ",
      "  AAA  "
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:experience_essence"
      },
      "B": {
        "item": "thermal:xp_crystal"
      },
      "C": {
        "item": "mysticalagriculture:enchanter"
      },
      "D": {
        "item": "submerged:eye_core"
      }
    },
    "result": {
      "item": "endrem:cryptic_eye"
    }
  }).id(`submerged:cryptic_eye`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       ",
      "  ABC  ",
      " DEFGH ",
      " IFFFJ ",
      " KLFMN ",
      "  OPQ  ",
      "       "
    ],
    "key": {
      "A": {
        "item": "endrem:lost_eye"
      },
      "B": {
        "item": "endrem:magical_eye"
      },
      "C": {
        "item": "endrem:cursed_eye"
      },
      "D": {
        "item": "endrem:cryptic_eye"
      },
      "E": {
        "item": "endrem:exotic_eye"
      },
      "F": {
        "item": "submerged:eye_core"
      },
      "G": {
        "item": "endrem:rogue_eye"
      },
      "H": {
        "item": "endrem:corrupted_eye"
      },
      "I": {
        "item": "endrem:black_eye"
      },
      "J": {
        "item": "endrem:wither_eye"
      },
      "K": {
        "type": "forge:nbt",
        "item": "endrem:undead_eye",
        "count": 1,
        "nbt": "{Damage:0}"
      },
      "L": {
        "item": "endrem:cold_eye"
      },
      "M": {
        "item": "endrem:witch_eye"
      },
      "N": {
        "item": "endrem:old_eye"
      },
      "O": {
        "item": "endrem:nether_eye"
      },
      "P": {
        "item": "endrem:guardian_eye"
      },
      "Q": {
        "item": "endrem:evil_eye"
      }
    },
    "result": {
      "item": "submerged:ender_eye_curio",
    }
  }).id(`submerged:ender_eye_curio`)

  //Neptunes Bounty

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "BBBBBBBBB",
      "BCBCBCBCB",
      "BBBBBBBBB",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "caveopolis:cyan_colored_wooden_planks"
      },
      "B": {
        "item": "caveopolis:green_colored_wooden_planks"
      },
      "C": {
        "item": "thermal_extra:dragonsteel_ingot"
      }
    },
    "result": {
      "item": "aquaculture:neptunes_bounty"
    }
  }).id(`submerged:neptunes_bounty`)

  //Endgame

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABABABABA",
      "BACACACAB",
      "ACDCDCDCA",
      "BACEEECAB",
      "ACDEEEDCA",
      "BACEEECAB",
      "ACDCDCDCA",
      "BACACACAB",
      "ABABABABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:smooth_stone"
      },
      "B": {
        "item": "thermal:bronze_ingot"
      },
      "C": {
        "item": "minecraft:clay"
      },
      "D": {
        "item": "thermal:coal_coke"
      },
      "E": {
        "item": "minecraft:lapis_lazuli"
      }
    },
    "result": {
      "item": "submerged:basic_technium_ingot"
    }
  }).id(`submerged:basic_technium_ingot`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABCDDDCBA",
      "ABDDEDDBA",
      "ABDEFEDBA",
      "ABDDEDDBA",
      "ABCDDDCBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "thermal:invar_ingot"
      },
      "B": {
        "item": "systeams:boiler_pipe"
      },
      "C": {
        "item": "thermal:constantan_gear"
      },
      "D": {
        "item": "thermal:steel_gear"
      },
      "E": {
        "item": "thermal:constantan_ingot"
      },
      "F": {
        "item": "submerged:basic_technium_ingot"
      }
    },
    "result": {
      "item": "submerged:advanced_technium_ingot"
    }
  }).id(`submerged:advanced_technium_ingot`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAABAAAA",
      "ACCBDBCCA",
      "ACCBDBCCA",
      "ABBEDEBBA",
      "BDDDFDDDB",
      "ABBEDEBBA",
      "ACCBDBCCA",
      "ACCBDBCCA",
      "AAAABAAAA"
    ],
    "key": {
      "A": {
        "item": "thermal:signalum_ingot"
      },
      "B": {
        "item": "minecraft:amethyst_shard"
      },
      "C": {
        "item": "thermal:lead_plate"
      },
      "D": {
        "item": "thermal:electrum_ingot"
      },
      "E": {
        "item": "thermal:electrum_gear"
      },
      "F": {
        "item": "submerged:advanced_technium_ingot"
      }
    },
    "result": {
      "item": "submerged:elite_technium_ingot"
    }
  }).id(`submerged:elite_technium_ingot`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABBBBBAA",
      "ABCCCCCBA",
      "BCCCDCCCB",
      "BCCDDDCCB",
      "BCDDEDDCB",
      "BCCDDDCCB",
      "BCCCDCCCB",
      "ABCCCCCBA",
      "AABBBBBAA"
    ],
    "key": {
      "A": {
        "item": "thermal:diamond_gear"
      },
      "B": {
        "item": "thermal:emerald_dust"
      },
      "C": {
        "item": "thermal:niter"
      },
      "D": {
        "item": "caveopolis:mixed_stone_ingot"
      },
      "E": {
        "item": "submerged:elite_technium_ingot"
      }
    },
    "result": {
      "item": "submerged:ultimate_technium_ingot"
    }
  }).id(`submerged:ultimate_technium_ingot`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAABBBAAA",
      "AACCCCCAA",
      "ACDDCDDCA",
      "BCDCCCDCB",
      "BCCCECCCB",
      "BCDCCCDCB",
      "ACDDCDDCA",
      "AACCCCCAA",
      "AAABBBAAA"
    ],
    "key": {
      "A": {
        "item": "minecraft:netherite_ingot"
      },
      "B": {
        "item": "thermal:lumium_plate"
      },
      "C": {
        "item": "extendedcrafting:black_iron_ingot"
      },
      "D": {
        "item": "mysticalagriculture:soulstone"
      },
      "E": {
        "item": "submerged:ultimate_technium_ingot"
      }
    },
    "result": {
      "item": "submerged:hellish_technium_ingot"
    }
  }).id(`submerged:hellish_technium_ingot`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAABCCCC",
      "AAAABCCCC",
      "AAAABCCCC",
      "AAAADCCCC",
      "BBBDEDBBB",
      "FFFFDGGGG",
      "FFFFBGGGG",
      "FFFFBGGGG",
      "FFFFBGGGG"
    ],
    "key": {
      "A": {
        "item": "submerged:fire_block"
      },
      "B": {
        "item": "minecraft:obsidian"
      },
      "C": {
        "item": "submerged:air_block"
      },
      "D": {
        "item": "minecraft:nether_star"
      },
      "E": {
        "item": "submerged:hellish_technium_ingot"
      },
      "F": {
        "item": "submerged:earth_block"
      },
      "G": {
        "item": "submerged:water_block"
      }
    },
    "result": {
      "item": "submerged:voided_technium_ingot"
    }
  }).id(`submerged:voided_technium_ingot`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABCDDDCBA",
      "ABCDEDCBA",
      "ABCDDDCBA",
      "ABCCCCCBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "thermal_extra:shellite_ingot"
      },
      "B": {
        "item": "extendedcrafting:luminessence"
      },
      "C": {
        "item": "mysticalagriculture:prosperity_ingot"
      },
      "D": {
        "item": "aquaculture:neptunium_ingot"
      },
      "E": {
        "item": "submerged:voided_technium_ingot"
      }
    },
    "result": {
      "item": "submerged:final_technium_ingot"
    }
  }).id(`submerged:final_technium_ingot`)


  //Endgame Singularities

  event.custom({
    "type": "extendedcrafting:compressor",
    "powerCost": 500000,
    "inputCount": 1,
    "ingredient": {
      "item": "submerged:final_technium_ingot"
    },
    "catalyst": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "result": Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:techopolis"}')
  }).id(`submerged:techopolis_singularity`)

  event.custom({
    "type": "extendedcrafting:compressor",
    "powerCost": 500000,
    "inputCount": 128,
    "ingredient": {
      "item": "submerged:cactus_slice"
    },
    "catalyst": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "result": Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:desertopolis"}')
  }).id(`submerged:desertopolis_singularity`)

  event.custom({
    "type": "extendedcrafting:compressor",
    "powerCost": 500000,
    "inputCount": 10000,
    "ingredient": {
      "tag": "caveopolis:colored_stone"
    },
    "catalyst": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "result": Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:caveopolis"}')
  }).id(`submerged:caveopolis_singularity`)

  event.custom({
    "type": "extendedcrafting:compressor",
    "powerCost": 500000,
    "inputCount": 8,
    "ingredient": {
      "item": "minecraft:heart_of_the_sea"
    },
    "catalyst": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "result": Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:seaopolis"}')
  }).id(`submerged:seaopolis_singularity`)

  event.custom({
    "type": "extendedcrafting:compressor",
    "powerCost": 500000,
    "inputCount": 5000,
    "ingredient": {
      "item": "minecraft:netherrack"
    },
    "catalyst": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "result": Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:infernopolis"}')
  }).id(`submerged:infernopolis_singularity`)

  event.custom({
    "type": "extendedcrafting:compressor",
    "powerCost": 500000,
    "inputCount": 200,
    "ingredient": {
      "item": "submerged:void_ingot"
    },
    "catalyst": {
      "item": "extendedcrafting:ultimate_catalyst"
    },
    "result": Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:stoneopolis"}')
  }).id(`submerged:stoneopolis_singularity`)



  //Signs Sign

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "         ",
      "   ABA   ",
      "   BCB   ",
      "   ABA   ",
      "         ",
      "         ",
      "         "
    ],
    "key": {
      "A": {
        "item": "opolisutilities:b_bucks"
      },
      "B": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "C": {
        "item": "minecraft:oak_sign"
      }
    },
    "result": {
      "item": "submerged:signs_sign",
    }
  }).id(`submerged:signs_sign`)
  
  //Ultimate Singularity

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCDEF   ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         ",
      "         "
    ],
    "key": {
      "A": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:seaopolis\"}"
      },
      "B": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:caveopolis\"}"
      },
      "C": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:techopolis\"}"
      },
      "D": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:infernopolis\"}"
      },
      "E": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:stoneopolis\"}"
      },
      "F": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:desertopolis\"}"
      }
    },
    "result": {
      "item": "extendedcrafting:ultimate_singularity",
    }
  }).id(`submerged:ultimate_singularity`)

})