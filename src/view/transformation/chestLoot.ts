export const chestLoot = {"abandoned_mineshaft":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "golden_apple",
          "weight": 20
        },
        {
          "type": "item",
          "name": "enchanted_golden_apple"
        },
        {
          "type": "item",
          "name": "name_tag",
          "weight": 30
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "book",
          "weight": 10
        },
        {
          "type": "item",
          "name": "iron_pickaxe",
          "weight": 5
        },
        {
          "type": "empty",
          "weight": 5
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "redstone",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "lapis_lazuli",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "glow_berries",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "melon_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "pumpkin_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "beetroot_seeds",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "rail",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "powered_rail",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "detector_rail",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "activator_rail",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 16.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "torch",
          "weight": 15
        }
      ],
      "rolls": 3.0
    }
  ],
  "random_sequence": "chests/abandoned_mineshaft"
},
"ancient_city":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "enchanted_golden_apple"
        },
        {
          "type": "item",
          "name": "music_disc_otherside"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "compass",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "sculk_catalyst",
          "weight": 2
        },
        {
          "type": "item",
          "name": "name_tag",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.8
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 50.0,
                "min": 30.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_hoe",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "lead",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "diamond_horse_armor",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "saddle",
          "weight": 2
        },
        {
          "type": "item",
          "name": "music_disc_13",
          "weight": 2
        },
        {
          "type": "item",
          "name": "music_disc_cat",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 50.0,
                "min": 30.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_leggings",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "swift_sneak"
            }
          ],
          "name": "book",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "sculk",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "sculk_sensor",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "candle",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 15.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "amethyst_shard",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "experience_bottle",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 15.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "glow_berries",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_leggings",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "echo_shard",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "disc_fragment_5",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "set_potion",
              "id": "strong_regeneration"
            }
          ],
          "name": "potion",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "book",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "book",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 15.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 15.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "soul_torch",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 15.0,
                "min": 6.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 7
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 10.0,
        "min": 5.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 75
        },
        {
          "type": "item",
          "name": "ward_armor_trim_smithing_template",
          "weight": 4
        },
        {
          "type": "item",
          "name": "silence_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/ancient_city"
},
"ancient_city_ice_box":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "effects": [
                {
                  "type": "night_vision",
                  "duration": {
                    "type": "uniform",
                    "max": 10.0,
                    "min": 7.0
                  }
                },
                {
                  "type": "blindness",
                  "duration": {
                    "type": "uniform",
                    "max": 7.0,
                    "min": 5.0
                  }
                }
              ],
              "function": "set_stew_effect"
            },
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "suspicious_stew"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "golden_carrot"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "baked_potato"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "packed_ice",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "snowball",
          "weight": 4
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 10.0,
        "min": 4.0
      }
    }
  ],
  "random_sequence": "chests/ancient_city_ice_box"
},
"bastion_bridge":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "lodestone"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.5,
                "min": 0.1
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "crossbow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 28.0,
                "min": 10.0
              },
              "function": "set_count"
            }
          ],
          "name": "spectral_arrow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 8.0
              },
              "function": "set_count"
            }
          ],
          "name": "gilded_blackstone"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "crying_obsidian"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "gold_block"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_sword"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_chestplate"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_helmet"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_leggings"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_boots"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_axe"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 2.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "string"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "leather"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 17.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_nugget"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 11
        },
        {
          "type": "item",
          "name": "snout_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 9
        },
        {
          "type": "item",
          "name": "netherite_upgrade_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/bastion_bridge"
},
"bastion_hoglin_stable":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_shovel",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.95,
                "min": 0.15
              },
              "function": "set_damage"
            },
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_pickaxe",
          "weight": 12
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "netherite_scrap",
          "weight": 8
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "ancient_debris",
          "weight": 12
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "ancient_debris",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "saddle",
          "weight": 12
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_block",
          "weight": 16
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 17.0,
                "min": 8.0
              },
              "function": "set_count"
            }
          ],
          "name": "golden_carrot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_apple",
          "weight": 10
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_axe"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "crying_obsidian"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "glowstone"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gilded_blackstone"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "soul_sand"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "crimson_nylium"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "leather"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 17.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "string"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "porkchop"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "cooked_porkchop"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "crimson_fungus"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "crimson_roots"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 3.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 11
        },
        {
          "type": "item",
          "name": "snout_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 9
        },
        {
          "type": "item",
          "name": "netherite_upgrade_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/bastion_hoglin_stable"
},
"bastion_other":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_pickaxe",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "diamond_shovel",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.9,
                "min": 0.1
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "crossbow",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "ancient_debris",
          "weight": 12
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "netherite_scrap",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 22.0,
                "min": 10.0
              },
              "function": "set_count"
            }
          ],
          "name": "spectral_arrow",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "piglin_banner_pattern",
          "weight": 9
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "music_disc_pigstep",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 17.0,
                "min": 6.0
              },
              "function": "set_count"
            }
          ],
          "name": "golden_carrot",
          "weight": 12
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_apple",
          "weight": 9
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "soul_speed"
            }
          ],
          "name": "book",
          "weight": 10
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.9,
                "min": 0.1
              },
              "function": "set_damage"
            },
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_sword",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "iron_block",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "soul_speed"
            }
          ],
          "name": "golden_boots"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_axe"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "gold_block",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "crossbow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_sword"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_chestplate"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_helmet"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_leggings"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "golden_boots"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "crying_obsidian",
          "weight": 2
        }
      ],
      "rolls": 2.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gilded_blackstone",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "chain"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "magma_cream",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone_block"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_nugget"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "obsidian"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "string"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 17.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "cooked_porkchop"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 3.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 11
        },
        {
          "type": "item",
          "name": "snout_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 9
        },
        {
          "type": "item",
          "name": "netherite_upgrade_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/bastion_other"
},
"bastion_treasure":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "netherite_ingot",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "ancient_debris",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "netherite_scrap",
          "weight": 8
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "ancient_debris",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.8
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_sword",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.8
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_chestplate",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.8
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_helmet",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.8
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_leggings",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.8
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_boots",
          "weight": 6
        },
        {
          "type": "item",
          "name": "diamond_sword",
          "weight": 6
        },
        {
          "type": "item",
          "name": "diamond_chestplate",
          "weight": 5
        },
        {
          "type": "item",
          "name": "diamond_helmet",
          "weight": 5
        },
        {
          "type": "item",
          "name": "diamond_boots",
          "weight": 5
        },
        {
          "type": "item",
          "name": "diamond_leggings",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "enchanted_golden_apple",
          "weight": 2
        }
      ],
      "rolls": 3.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 25.0,
                "min": 12.0
              },
              "function": "set_count"
            }
          ],
          "name": "spectral_arrow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_block"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_block"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "crying_obsidian"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 23.0,
                "min": 8.0
              },
              "function": "set_count"
            }
          ],
          "name": "quartz"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 15.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "gilded_blackstone"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "magma_cream"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 3.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 11
        },
        {
          "type": "item",
          "name": "snout_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "netherite_upgrade_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/bastion_treasure"
},
"buried_treasure":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "heart_of_the_sea"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "tnt",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 5.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "prismarine_crystals",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "leather_chestplate"
        },
        {
          "type": "item",
          "name": "iron_sword"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 1.0,
        "min": 0.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "cooked_cod"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "cooked_salmon"
        }
      ],
      "rolls": 2.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "potion"
        }
      ],
      "functions": [
        {
          "function": "set_potion",
          "id": "water_breathing"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 2.0,
        "min": 0.0
      }
    }
  ],
  "random_sequence": "chests/buried_treasure"
},
"desert_pyramid":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone",
          "weight": 25
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "spider_eye",
          "weight": 25
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "rotten_flesh",
          "weight": 25
        },
        {
          "type": "item",
          "name": "saddle",
          "weight": 20
        },
        {
          "type": "item",
          "name": "iron_horse_armor",
          "weight": 15
        },
        {
          "type": "item",
          "name": "golden_horse_armor",
          "weight": 10
        },
        {
          "type": "item",
          "name": "diamond_horse_armor",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "book",
          "weight": 20
        },
        {
          "type": "item",
          "name": "golden_apple",
          "weight": 20
        },
        {
          "type": "item",
          "name": "enchanted_golden_apple",
          "weight": 2
        },
        {
          "type": "empty",
          "weight": 15
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gunpowder",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "rotten_flesh",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "string",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "sand",
          "weight": 10
        }
      ],
      "rolls": 4.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "dune_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/desert_pyramid"
},
"end_city_treasure":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "beetroot_seeds",
          "weight": 5
        },
        {
          "type": "item",
          "name": "saddle",
          "weight": 3
        },
        {
          "type": "item",
          "name": "iron_horse_armor"
        },
        {
          "type": "item",
          "name": "golden_horse_armor"
        },
        {
          "type": "item",
          "name": "diamond_horse_armor"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_sword",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_boots",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_chestplate",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_leggings",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_helmet",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_pickaxe",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_shovel",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_sword",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_boots",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_chestplate",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_leggings",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_helmet",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_pickaxe",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 39.0,
                "min": 20.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_shovel",
          "weight": 3
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 6.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 14
        },
        {
          "type": "item",
          "name": "spire_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/end_city_treasure"
},
"igloo_chest":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "apple",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget",
          "weight": 10
        },
        {
          "type": "item",
          "name": "stone_axe",
          "weight": 2
        },
        {
          "type": "item",
          "name": "rotten_flesh",
          "weight": 10
        },
        {
          "type": "item",
          "name": "emerald"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "golden_apple"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/igloo_chest"
},
"jungle_temple":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bamboo",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "rotten_flesh",
          "weight": 16
        },
        {
          "type": "item",
          "name": "saddle",
          "weight": 3
        },
        {
          "type": "item",
          "name": "iron_horse_armor"
        },
        {
          "type": "item",
          "name": "golden_horse_armor"
        },
        {
          "type": "item",
          "name": "diamond_horse_armor"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": 30.0,
              "options": "#on_random_loot"
            }
          ],
          "name": "book"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 6.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "wild_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/jungle_temple"
},
"jungle_temple_dispenser":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow",
          "weight": 30
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 2.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/jungle_temple_dispenser"
},
"nether_bridge":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 15
        },
        {
          "type": "item",
          "name": "golden_sword",
          "weight": 5
        },
        {
          "type": "item",
          "name": "golden_chestplate",
          "weight": 5
        },
        {
          "type": "item",
          "name": "flint_and_steel",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "nether_wart",
          "weight": 5
        },
        {
          "type": "item",
          "name": "saddle",
          "weight": 10
        },
        {
          "type": "item",
          "name": "golden_horse_armor",
          "weight": 8
        },
        {
          "type": "item",
          "name": "iron_horse_armor",
          "weight": 5
        },
        {
          "type": "item",
          "name": "diamond_horse_armor",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "obsidian",
          "weight": 2
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 14
        },
        {
          "type": "item",
          "name": "rib_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/nether_bridge"
},
"pillager_outpost":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "crossbow"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 1.0,
        "min": 0.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "potato",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "carrot",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "dark_oak_log"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "experience_bottle",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "string",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "tripwire_hook",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "book"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "goat_horn"
        }
      ],
      "functions": [
        {
          "function": "set_instrument",
          "options": "#regular_goat_horns"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 1.0,
        "min": 0.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "sentry_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/pillager_outpost"
},
"ruined_portal":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "obsidian",
          "weight": 40
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "flint",
          "weight": 40
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 18.0,
                "min": 9.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_nugget",
          "weight": 40
        },
        {
          "type": "item",
          "name": "flint_and_steel",
          "weight": 40
        },
        {
          "type": "item",
          "name": "fire_charge",
          "weight": 40
        },
        {
          "type": "item",
          "name": "golden_apple",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 24.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_sword",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_axe",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_hoe",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_shovel",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_pickaxe",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_boots",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_chestplate",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_helmet",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "golden_leggings",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "glistering_melon_slice",
          "weight": 5
        },
        {
          "type": "item",
          "name": "golden_horse_armor",
          "weight": 5
        },
        {
          "type": "item",
          "name": "light_weighted_pressure_plate",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "golden_carrot",
          "weight": 5
        },
        {
          "type": "item",
          "name": "clock",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "name": "bell"
        },
        {
          "type": "item",
          "name": "enchanted_golden_apple"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_block"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 4.0
      }
    }
  ],
  "random_sequence": "chests/ruined_portal"
},
"shipwreck_map":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "decoration": "red_x",
              "function": "exploration_map",
              "skip_existing_chunks": false,
              "zoom": 1
            },
            {
              "function": "set_name",
              "name": {
                "translate": "filled_map.buried_treasure"
              },
              "target": "item_name"
            }
          ],
          "name": "map"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "compass"
        },
        {
          "type": "item",
          "name": "map"
        },
        {
          "type": "item",
          "name": "clock"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "paper",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "feather",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "book",
          "weight": 5
        }
      ],
      "rolls": 3.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "coast_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/shipwreck_map"
},
"shipwreck_supply":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "paper",
          "weight": 8
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "potato",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "moss_block",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "poisonous_potato",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "carrot",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 21.0,
                "min": 8.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "effects": [
                {
                  "type": "night_vision",
                  "duration": {
                    "type": "uniform",
                    "max": 10.0,
                    "min": 7.0
                  }
                },
                {
                  "type": "jump_boost",
                  "duration": {
                    "type": "uniform",
                    "max": 10.0,
                    "min": 7.0
                  }
                },
                {
                  "type": "weakness",
                  "duration": {
                    "type": "uniform",
                    "max": 8.0,
                    "min": 6.0
                  }
                },
                {
                  "type": "blindness",
                  "duration": {
                    "type": "uniform",
                    "max": 7.0,
                    "min": 5.0
                  }
                },
                {
                  "type": "poison",
                  "duration": {
                    "type": "uniform",
                    "max": 20.0,
                    "min": 10.0
                  }
                },
                {
                  "type": "saturation",
                  "duration": {
                    "type": "uniform",
                    "max": 10.0,
                    "min": 7.0
                  }
                }
              ],
              "function": "set_stew_effect"
            }
          ],
          "name": "suspicious_stew",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 24.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "rotten_flesh",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "pumpkin",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bamboo",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gunpowder",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "tnt"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "leather_helmet",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "leather_chestplate",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "leather_leggings",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "leather_boots",
          "weight": 3
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 10.0,
        "min": 3.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "coast_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/shipwreck_supply"
},
"shipwreck_treasure":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 90
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 40
        },
        {
          "type": "item",
          "name": "diamond",
          "weight": 5
        },
        {
          "type": "item",
          "name": "experience_bottle",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 6.0,
        "min": 3.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_nugget",
          "weight": 50
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "lapis_lazuli",
          "weight": 20
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "coast_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/shipwreck_treasure"
},
"simple_dungeon":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "saddle",
          "weight": 20
        },
        {
          "type": "item",
          "name": "golden_apple",
          "weight": 15
        },
        {
          "type": "item",
          "name": "enchanted_golden_apple",
          "weight": 2
        },
        {
          "type": "item",
          "name": "music_disc_otherside",
          "weight": 2
        },
        {
          "type": "item",
          "name": "music_disc_13",
          "weight": 15
        },
        {
          "type": "item",
          "name": "music_disc_cat",
          "weight": 15
        },
        {
          "type": "item",
          "name": "name_tag",
          "weight": 20
        },
        {
          "type": "item",
          "name": "golden_horse_armor",
          "weight": 10
        },
        {
          "type": "item",
          "name": "iron_horse_armor",
          "weight": 15
        },
        {
          "type": "item",
          "name": "diamond_horse_armor",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "book",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "name": "bread",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 20
        },
        {
          "type": "item",
          "name": "bucket",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "redstone",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "melon_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "pumpkin_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "beetroot_seeds",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gunpowder",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "rotten_flesh",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "string",
          "weight": 10
        }
      ],
      "rolls": 3.0
    }
  ],
  "random_sequence": "chests/simple_dungeon"
},
"spawn_bonus_chest":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "stone_axe"
        },
        {
          "type": "item",
          "name": "wooden_axe",
          "weight": 3
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "stone_pickaxe"
        },
        {
          "type": "item",
          "name": "wooden_pickaxe",
          "weight": 3
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "apple",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "salmon",
          "weight": 3
        }
      ],
      "rolls": 3.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "stick",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "oak_planks",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "oak_log",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "spruce_log",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "birch_log",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "jungle_log",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "acacia_log",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "dark_oak_log",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "mangrove_log",
          "weight": 3
        }
      ],
      "rolls": 4.0
    }
  ],
  "random_sequence": "chests/spawn_bonus_chest"
},
"stronghold_corridor":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "ender_pearl",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "redstone",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "apple",
          "weight": 15
        },
        {
          "type": "item",
          "name": "iron_pickaxe",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_sword",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_chestplate",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_helmet",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_leggings",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_boots",
          "weight": 5
        },
        {
          "type": "item",
          "name": "golden_apple"
        },
        {
          "type": "item",
          "name": "saddle"
        },
        {
          "type": "item",
          "name": "iron_horse_armor"
        },
        {
          "type": "item",
          "name": "golden_horse_armor"
        },
        {
          "type": "item",
          "name": "diamond_horse_armor"
        },
        {
          "type": "item",
          "name": "music_disc_otherside"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": 30.0,
              "options": "#on_random_loot"
            }
          ],
          "name": "book"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 9
        },
        {
          "type": "item",
          "name": "eye_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/stronghold_corridor"
},
"stronghold_crossing":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 9.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "redstone",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "apple",
          "weight": 15
        },
        {
          "type": "item",
          "name": "iron_pickaxe"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": 30.0,
              "options": "#on_random_loot"
            }
          ],
          "name": "book"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/stronghold_crossing"
},
"stronghold_library":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "book",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "paper",
          "weight": 20
        },
        {
          "type": "item",
          "name": "map"
        },
        {
          "type": "item",
          "name": "compass"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": 30.0,
              "options": "#on_random_loot"
            }
          ],
          "name": "book",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 10.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "eye_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/stronghold_library"
},
"trial_chambers_corridor":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.9,
                "min": 0.4
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_axe"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "honeycomb"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            }
          ],
          "name": "stone_axe",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            }
          ],
          "name": "stone_pickaxe",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "ender_pearl",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bamboo_hanging_sign",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "bamboo_planks",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "scaffolding",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "torch",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 20.0,
                "min": 8.0
              },
              "function": "set_count"
            }
          ],
          "name": "tuff",
          "weight": 3
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/trial_chambers/corridor"
},
"trial_chambers_entrance":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "trial_key"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "stick",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "wooden_axe",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "honeycomb",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 2.0
      }
    }
  ],
  "random_sequence": "chests/trial_chambers/entrance"
},
"trial_chambers_intersection":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "diamond_block"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald_block",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.5,
                "min": 0.1
              },
              "function": "set_damage"
            }
          ],
          "name": "diamond_axe",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.5,
                "min": 0.1
              },
              "function": "set_damage"
            }
          ],
          "name": "diamond_pickaxe",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "cake",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 20.0,
                "min": 8.0
              },
              "function": "set_count"
            }
          ],
          "name": "amethyst_shard",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_block",
          "weight": 20
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/trial_chambers/intersection"
},
"trial_chambers_intersection_barrel":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.9,
                "min": 0.4
              },
              "function": "set_damage"
            },
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_axe"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            }
          ],
          "name": "diamond_pickaxe"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            }
          ],
          "name": "compass"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bucket"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            }
          ],
          "name": "golden_axe",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            }
          ],
          "name": "golden_pickaxe",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 15.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "bamboo_planks",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 6.0
              },
              "function": "set_count"
            }
          ],
          "name": "baked_potato",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/trial_chambers/intersection_barrel"
},
"trial_chambers_reward":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_rare",
          "weight": 8
        },
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_common",
          "weight": 2
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_common"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "chance": 0.25,
          "condition": "random_chance"
        }
      ],
      "entries": [
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_unique"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward"
},
"trial_chambers_reward_common":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 2.0
              },
              "function": "set_count"
            },
            {
              "function": "set_potion",
              "id": "poison"
            }
          ],
          "name": "tipped_arrow",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wind_charge",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "honey_bottle",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "amplifier": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "function": "set_ominous_bottle_amplifier"
            }
          ],
          "name": "ominous_bottle",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "wind_charge"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward_common"
},
"trial_chambers_reward_ominous":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_ominous_rare",
          "weight": 8
        },
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_ominous_common",
          "weight": 2
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_ominous_common"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "chance": 0.75,
          "condition": "random_chance"
        }
      ],
      "entries": [
        {
          "type": "loot_table",
          "value": "chests/trial_chambers/reward_ominous_unique"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward_ominous"
},
"trial_chambers_reward_ominous_common":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 8.0
              },
              "function": "set_count"
            }
          ],
          "name": "wind_charge",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 12.0,
                "min": 4.0
              },
              "function": "set_count"
            },
            {
              "function": "set_potion",
              "id": "strong_slowness"
            }
          ],
          "name": "tipped_arrow",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "amplifier": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_ominous_bottle_amplifier"
            }
          ],
          "name": "ominous_bottle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward_ominous_common"
},
"trial_chambers_reward_ominous_rare":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "emerald_block",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_block",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 20.0,
                "min": 5.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "crossbow",
          "weight": 4
        },
        {
          "type": "item",
          "name": "golden_apple",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 20.0,
                "min": 10.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_axe",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 20.0,
                "min": 10.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_chestplate",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": [
                "knockback",
                "punch",
                "smite",
                "looting",
                "multishot"
              ]
            }
          ],
          "name": "book",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": [
                "breach",
                "density"
              ]
            }
          ],
          "name": "book",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "enchantments": {
                "wind_burst": 1.0
              },
              "function": "set_enchantments"
            }
          ],
          "name": "book",
          "weight": 2
        },
        {
          "type": "item",
          "name": "diamond_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward_ominous_rare"
},
"trial_chambers_reward_ominous_unique":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "enchanted_golden_apple",
          "weight": 3
        },
        {
          "type": "item",
          "name": "flow_armor_trim_smithing_template",
          "weight": 3
        },
        {
          "type": "item",
          "name": "flow_banner_pattern",
          "weight": 2
        },
        {
          "type": "item",
          "name": "music_disc_creator"
        },
        {
          "type": "item",
          "name": "heavy_core"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward_ominous_unique"
},
"trial_chambers_reward_rare":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.5
              },
              "function": "set_damage"
            }
          ],
          "name": "shield",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 15.0,
                "min": 5.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "bow",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 20.0,
                "min": 5.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "crossbow",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 10.0,
                "min": 0.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_axe",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 10.0,
                "min": 0.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "iron_chestplate",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "golden_carrot",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": [
                "sharpness",
                "bane_of_arthropods",
                "efficiency",
                "fortune",
                "silk_touch",
                "feather_falling"
              ]
            }
          ],
          "name": "book",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": [
                "riptide",
                "loyalty",
                "channeling",
                "impaling",
                "mending"
              ]
            }
          ],
          "name": "book",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 15.0,
                "min": 5.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_chestplate"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_with_levels",
              "levels": {
                "type": "uniform",
                "max": 15.0,
                "min": 5.0
              },
              "options": "#on_random_loot"
            }
          ],
          "name": "diamond_axe"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward_rare"
},
"trial_chambers_reward_unique":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "golden_apple",
          "weight": 4
        },
        {
          "type": "item",
          "name": "bolt_armor_trim_smithing_template",
          "weight": 3
        },
        {
          "type": "item",
          "name": "guster_banner_pattern",
          "weight": 2
        },
        {
          "type": "item",
          "name": "music_disc_precipice",
          "weight": 2
        },
        {
          "type": "item",
          "name": "trident"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/trial_chambers/reward_unique"
},
"trial_chambers_supply":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 14.0,
                "min": 4.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 4.0
              },
              "function": "set_count"
            },
            {
              "function": "set_potion",
              "id": "poison"
            }
          ],
          "name": "tipped_arrow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 4.0
              },
              "function": "set_count"
            },
            {
              "function": "set_potion",
              "id": "slowness"
            }
          ],
          "name": "tipped_arrow"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "baked_potato",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "glow_berries",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "acacia_planks"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "moss_block"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone_meal"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 10.0,
                "min": 5.0
              },
              "function": "set_count"
            }
          ],
          "name": "tuff"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "torch"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "set_potion",
              "id": "regeneration"
            }
          ],
          "name": "potion"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "set_potion",
              "id": "strength"
            }
          ],
          "name": "potion"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "damage": {
                "type": "uniform",
                "max": 0.8,
                "min": 0.15
              },
              "function": "set_damage"
            }
          ],
          "name": "stone_pickaxe",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 1.0,
              "function": "set_count"
            }
          ],
          "name": "milk_bucket"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/trial_chambers/supply"
},
"underwater_ruin_big":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget",
          "weight": 10
        },
        {
          "type": "item",
          "name": "emerald"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "golden_apple"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "book",
          "weight": 5
        },
        {
          "type": "item",
          "name": "leather_chestplate"
        },
        {
          "type": "item",
          "name": "golden_helmet"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "fishing_rod",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "decoration": "red_x",
              "function": "exploration_map",
              "skip_existing_chunks": false,
              "zoom": 1
            },
            {
              "function": "set_name",
              "name": {
                "translate": "filled_map.buried_treasure"
              },
              "target": "item_name"
            }
          ],
          "name": "map",
          "weight": 10
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/underwater_ruin_big"
},
"underwater_ruin_small":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 10
        },
        {
          "type": "item",
          "name": "stone_axe",
          "weight": 2
        },
        {
          "type": "item",
          "name": "rotten_flesh",
          "weight": 5
        },
        {
          "type": "item",
          "name": "emerald"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 2.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "leather_chestplate"
        },
        {
          "type": "item",
          "name": "golden_helmet"
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "fishing_rod",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "decoration": "red_x",
              "function": "exploration_map",
              "skip_existing_chunks": false,
              "zoom": 1
            },
            {
              "function": "set_name",
              "name": {
                "translate": "filled_map.buried_treasure"
              },
              "target": "item_name"
            }
          ],
          "name": "map",
          "weight": 5
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/underwater_ruin_small"
},
"village_armorer":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 4
        },
        {
          "type": "item",
          "name": "iron_helmet"
        },
        {
          "type": "item",
          "name": "emerald"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_armorer"
},
"village_butcher":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "emerald"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "porkchop",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "beef",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "mutton",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 3
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_butcher"
},
"village_cartographer":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "map",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "paper",
          "weight": 15
        },
        {
          "type": "item",
          "name": "compass",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "stick",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_cartographer"
},
"village_desert_house":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "clay_ball"
        },
        {
          "type": "item",
          "name": "green_dye"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "cactus",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 10
        },
        {
          "type": "item",
          "name": "book"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "dead_bush",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_desert_house"
},
"village_fisher":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "emerald"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "cod",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "salmon"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "water_bucket"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "barrel"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat_seeds",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 2
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_fisher"
},
"village_fletcher":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "emerald"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "arrow",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "feather",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "egg",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "flint",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "stick",
          "weight": 6
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_fletcher"
},
"village_mason":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "clay_ball"
        },
        {
          "type": "item",
          "name": "flower_pot"
        },
        {
          "type": "item",
          "name": "stone",
          "weight": 2
        },
        {
          "type": "item",
          "name": "stone_bricks",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 4
        },
        {
          "type": "item",
          "name": "yellow_dye"
        },
        {
          "type": "item",
          "name": "smooth_stone"
        },
        {
          "type": "item",
          "name": "emerald"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_mason"
},
"village_plains_house":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget"
        },
        {
          "type": "item",
          "name": "dandelion",
          "weight": 2
        },
        {
          "type": "item",
          "name": "poppy"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "potato",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "apple",
          "weight": 10
        },
        {
          "type": "item",
          "name": "book"
        },
        {
          "type": "item",
          "name": "feather"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "oak_sapling",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_plains_house"
},
"village_savanna_house":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_nugget"
        },
        {
          "type": "item",
          "name": "short_grass",
          "weight": 5
        },
        {
          "type": "item",
          "name": "tall_grass",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "acacia_sapling",
          "weight": 10
        },
        {
          "type": "item",
          "name": "saddle"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "torch"
        },
        {
          "type": "item",
          "name": "bucket"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_savanna_house"
},
"village_shepherd":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "white_wool",
          "weight": 6
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "black_wool",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gray_wool",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "brown_wool",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "light_gray_wool",
          "weight": 2
        },
        {
          "type": "item",
          "name": "emerald"
        },
        {
          "type": "item",
          "name": "shears"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 6.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 6
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_shepherd"
},
"village_snowy_house":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "blue_ice"
        },
        {
          "type": "item",
          "name": "snow_block",
          "weight": 4
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "potato",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "beetroot_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "name": "beetroot_soup"
        },
        {
          "type": "item",
          "name": "furnace"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "snowball",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_snowy_house"
},
"village_taiga_house":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_nugget"
        },
        {
          "type": "item",
          "name": "fern",
          "weight": 2
        },
        {
          "type": "item",
          "name": "large_fern",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "potato",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "sweet_berries",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "pumpkin_seeds",
          "weight": 5
        },
        {
          "type": "item",
          "name": "pumpkin_pie"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "spruce_sapling",
          "weight": 5
        },
        {
          "type": "item",
          "name": "spruce_sign"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "spruce_log",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_taiga_house"
},
"village_tannery":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "leather"
        },
        {
          "type": "item",
          "name": "leather_chestplate",
          "weight": 2
        },
        {
          "type": "item",
          "name": "leather_boots",
          "weight": 2
        },
        {
          "type": "item",
          "name": "leather_helmet",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 5
        },
        {
          "type": "item",
          "name": "leather_leggings",
          "weight": 2
        },
        {
          "type": "item",
          "name": "saddle"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 5.0,
        "min": 1.0
      }
    }
  ],
  "random_sequence": "chests/village/village_tannery"
},
"village_temple":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "redstone",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "rotten_flesh",
          "weight": 7
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "lapis_lazuli"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "emerald"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_temple"
},
"village_toolsmith":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 15
        },
        {
          "type": "item",
          "name": "iron_pickaxe",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal"
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "stick",
          "weight": 20
        },
        {
          "type": "item",
          "name": "iron_shovel",
          "weight": 5
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_toolsmith"
},
"village_weaponsmith":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "diamond",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 5.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bread",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "apple",
          "weight": 15
        },
        {
          "type": "item",
          "name": "iron_pickaxe",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_sword",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_chestplate",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_helmet",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_leggings",
          "weight": 5
        },
        {
          "type": "item",
          "name": "iron_boots",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "obsidian",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 7.0,
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "oak_sapling",
          "weight": 5
        },
        {
          "type": "item",
          "name": "saddle",
          "weight": 3
        },
        {
          "type": "item",
          "name": "iron_horse_armor"
        },
        {
          "type": "item",
          "name": "golden_horse_armor"
        },
        {
          "type": "item",
          "name": "diamond_horse_armor"
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 8.0,
        "min": 3.0
      }
    }
  ],
  "random_sequence": "chests/village/village_weaponsmith"
},
"woodland_mansion":{
  "type": "chest",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "lead",
          "weight": 20
        },
        {
          "type": "item",
          "name": "golden_apple",
          "weight": 15
        },
        {
          "type": "item",
          "name": "enchanted_golden_apple",
          "weight": 2
        },
        {
          "type": "item",
          "name": "music_disc_13",
          "weight": 15
        },
        {
          "type": "item",
          "name": "music_disc_cat",
          "weight": 15
        },
        {
          "type": "item",
          "name": "name_tag",
          "weight": 20
        },
        {
          "type": "item",
          "name": "chainmail_chestplate",
          "weight": 10
        },
        {
          "type": "item",
          "name": "diamond_hoe",
          "weight": 15
        },
        {
          "type": "item",
          "name": "diamond_chestplate",
          "weight": 5
        },
        {
          "type": "item",
          "functions": [
            {
              "function": "enchant_randomly",
              "options": "#on_random_loot"
            }
          ],
          "name": "book",
          "weight": 10
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 3.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gold_ingot",
          "weight": 5
        },
        {
          "type": "item",
          "name": "bread",
          "weight": 20
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "wheat",
          "weight": 20
        },
        {
          "type": "item",
          "name": "bucket",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "redstone",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "coal",
          "weight": 15
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "melon_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "pumpkin_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "beetroot_seeds",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            }
          ],
          "name": "resin_clump",
          "weight": 50
        }
      ],
      "rolls": {
        "type": "uniform",
        "max": 4.0,
        "min": 1.0
      }
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "bone",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "gunpowder",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "rotten_flesh",
          "weight": 10
        },
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 8.0,
                "min": 1.0
              },
              "function": "set_count"
            }
          ],
          "name": "string",
          "weight": 10
        }
      ],
      "rolls": 3.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty"
        },
        {
          "type": "item",
          "name": "vex_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "chests/woodland_mansion"
},
} as const;
export type ChestName = keyof typeof chestLoot;
export function isChest(value: string): value is ChestName {
  return value in chestLoot
}