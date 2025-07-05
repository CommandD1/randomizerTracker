export const blockDrops = {"acacia_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_button"
},
"acacia_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "acacia_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "acacia_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_door"
},
"acacia_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_fence"
},
"acacia_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_fence_gate"
},
"acacia_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_hanging_sign"
},
"acacia_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "acacia_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "acacia_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_leaves"
},
"acacia_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_log"
},
"acacia_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_planks"
},
"acacia_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_pressure_plate"
},
"acacia_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_sapling"
},
"acacia_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_sign"
},
"acacia_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "acacia_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "acacia_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_slab"
},
"acacia_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_stairs"
},
"acacia_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_trapdoor"
},
"acacia_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/acacia_wood"
},
"activator_rail":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "activator_rail"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/activator_rail"
},
"allium":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "allium"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/allium"
},
"amethyst_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "amethyst_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/amethyst_block"
},
"amethyst_cluster":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "amethyst_cluster"
            },
            {
              "type": "alternatives",
              "children": [
                {
                  "type": "item",
                  "conditions": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "#cluster_max_harvestables"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 4.0,
                      "function": "set_count"
                    },
                    {
                      "enchantment": "fortune",
                      "formula": "ore_drops",
                      "function": "apply_bonus"
                    }
                  ],
                  "name": "amethyst_shard"
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
                      "function": "explosion_decay"
                    }
                  ],
                  "name": "amethyst_shard"
                }
              ]
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/amethyst_cluster"
},
"ancient_debris":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "ancient_debris"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/ancient_debris"
},
"andesite":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "andesite"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/andesite"
},
"andesite_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "andesite_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "andesite_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/andesite_slab"
},
"andesite_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "andesite_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/andesite_stairs"
},
"andesite_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "andesite_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/andesite_wall"
},
"anvil":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "anvil"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/anvil"
},
"attached_melon_stem":{
  "type": "block",
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
                "type": "binomial",
                "n": 3.0,
                "p": 0.53333336
              },
              "function": "set_count"
            }
          ],
          "name": "melon_seeds"
        }
      ],
      "functions": [
        {
          "function": "explosion_decay"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/attached_melon_stem"
},
"attached_pumpkin_stem":{
  "type": "block",
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
                "type": "binomial",
                "n": 3.0,
                "p": 0.53333336
              },
              "function": "set_count"
            }
          ],
          "name": "pumpkin_seeds"
        }
      ],
      "functions": [
        {
          "function": "explosion_decay"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/attached_pumpkin_stem"
},
"azalea":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "azalea"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/azalea"
},
"azalea_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "azalea_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "azalea"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/azalea_leaves"
},
"azure_bluet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "azure_bluet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/azure_bluet"
},
"bamboo":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo"
},
"bamboo_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_block"
},
"bamboo_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_button"
},
"bamboo_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "bamboo_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "bamboo_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_door"
},
"bamboo_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_fence"
},
"bamboo_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_fence_gate"
},
"bamboo_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_hanging_sign"
},
"bamboo_mosaic":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_mosaic"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_mosaic"
},
"bamboo_mosaic_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "bamboo_mosaic_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "bamboo_mosaic_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_mosaic_slab"
},
"bamboo_mosaic_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_mosaic_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_mosaic_stairs"
},
"bamboo_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_planks"
},
"bamboo_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_pressure_plate"
},
"bamboo_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_sapling"
},
"bamboo_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_sign"
},
"bamboo_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "bamboo_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "bamboo_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_slab"
},
"bamboo_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_stairs"
},
"bamboo_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bamboo_trapdoor"
},
"barrel":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "barrel"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/barrel"
},
"basalt":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "basalt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/basalt"
},
"beacon":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "beacon"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/beacon"
},
"beehive":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "functions": [
                {
                  "function": "copy_components",
                  "include": [
                    "bees"
                  ],
                  "source": "block_entity"
                },
                {
                  "block": "beehive",
                  "function": "copy_state",
                  "properties": [
                    "honey_level"
                  ]
                }
              ],
              "name": "beehive"
            },
            {
              "type": "item",
              "name": "beehive"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/beehive"
},
"beetroots":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "block": "beetroots",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "3"
                  }
                }
              ],
              "name": "beetroot"
            },
            {
              "type": "item",
              "name": "beetroot_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "beetroots",
          "condition": "block_state_property",
          "properties": {
            "age": "3"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "enchantment": "fortune",
              "formula": "binomial_with_bonus_count",
              "function": "apply_bonus",
              "parameters": {
                "extra": 3,
                "probability": 0.5714286
              }
            }
          ],
          "name": "beetroot_seeds"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/beetroots"
},
"bee_nest":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "bees"
              ],
              "source": "block_entity"
            },
            {
              "block": "bee_nest",
              "function": "copy_state",
              "properties": [
                "honey_level"
              ]
            }
          ],
          "name": "bee_nest"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bee_nest"
},
"bell":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bell"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bell"
},
"big_dripleaf":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "big_dripleaf"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/big_dripleaf"
},
"big_dripleaf_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "big_dripleaf"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/big_dripleaf_stem"
},
"birch_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_button"
},
"birch_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "birch_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "birch_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_door"
},
"birch_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_fence"
},
"birch_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_fence_gate"
},
"birch_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_hanging_sign"
},
"birch_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "birch_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "birch_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_leaves"
},
"birch_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_log"
},
"birch_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_planks"
},
"birch_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_pressure_plate"
},
"birch_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_sapling"
},
"birch_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_sign"
},
"birch_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "birch_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "birch_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_slab"
},
"birch_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_stairs"
},
"birch_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_trapdoor"
},
"birch_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/birch_wood"
},
"blackstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blackstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blackstone"
},
"blackstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "blackstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "blackstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blackstone_slab"
},
"blackstone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blackstone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blackstone_stairs"
},
"blackstone_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blackstone_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blackstone_wall"
},
"black_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "black_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_banner"
},
"black_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "black_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "black_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_bed"
},
"black_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "black_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "black_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "black_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "black_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_candle"
},
"black_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "black_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_candle_cake"
},
"black_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_carpet"
},
"black_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_concrete"
},
"black_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_concrete_powder"
},
"black_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_glazed_terracotta"
},
"black_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "black_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_shulker_box"
},
"black_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_stained_glass"
},
"black_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_stained_glass_pane"
},
"black_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_terracotta"
},
"black_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "black_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/black_wool"
},
"blast_furnace":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "blast_furnace"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blast_furnace"
},
"blue_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "blue_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_banner"
},
"blue_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "blue_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "blue_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_bed"
},
"blue_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "blue_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "blue_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "blue_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "blue_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_candle"
},
"blue_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "blue_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_candle_cake"
},
"blue_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_carpet"
},
"blue_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_concrete"
},
"blue_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_concrete_powder"
},
"blue_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_glazed_terracotta"
},
"blue_ice":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_ice"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_ice"
},
"blue_orchid":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_orchid"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_orchid"
},
"blue_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "blue_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_shulker_box"
},
"blue_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_stained_glass"
},
"blue_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_stained_glass_pane"
},
"blue_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_terracotta"
},
"blue_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/blue_wool"
},
"bone_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bone_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bone_block"
},
"bookshelf":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "bookshelf"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": 3.0,
                  "function": "set_count"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "book"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bookshelf"
},
"brain_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brain_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brain_coral"
},
"brain_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "brain_coral_block"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dead_brain_coral_block"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brain_coral_block"
},
"brain_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brain_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brain_coral_fan"
},
"brewing_stand":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "brewing_stand"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brewing_stand"
},
"bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bricks"
},
"brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brick_slab"
},
"brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brick_stairs"
},
"brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brick_wall"
},
"brown_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "brown_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_banner"
},
"brown_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "brown_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "brown_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_bed"
},
"brown_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "brown_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "brown_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "brown_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "brown_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_candle"
},
"brown_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "brown_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_candle_cake"
},
"brown_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_carpet"
},
"brown_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_concrete"
},
"brown_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_concrete_powder"
},
"brown_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_glazed_terracotta"
},
"brown_mushroom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_mushroom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_mushroom"
},
"brown_mushroom_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "brown_mushroom_block"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": {
                    "type": "uniform",
                    "max": 2.0,
                    "min": -6.0
                  },
                  "function": "set_count"
                },
                {
                  "function": "limit_count",
                  "limit": {
                    "min": 0.0
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "brown_mushroom"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_mushroom_block"
},
"brown_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "brown_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_shulker_box"
},
"brown_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_stained_glass"
},
"brown_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_stained_glass_pane"
},
"brown_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_terracotta"
},
"brown_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/brown_wool"
},
"bubble_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bubble_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bubble_coral"
},
"bubble_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "bubble_coral_block"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dead_bubble_coral_block"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bubble_coral_block"
},
"bubble_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bubble_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/bubble_coral_fan"
},
"budding_amethyst":{
  "type": "block",
  "random_sequence": "blocks/budding_amethyst"
},
"cactus":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cactus"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cactus"
},
"cake":{
  "type": "block",
  "random_sequence": "blocks/cake"
},
"calcite":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "calcite"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/calcite"
},
"calibrated_sculk_sensor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "calibrated_sculk_sensor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/calibrated_sculk_sensor"
},
"campfire":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "campfire"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 2.0,
                  "function": "set_count"
                }
              ],
              "name": "charcoal"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/campfire"
},
"candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/candle"
},
"candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/candle_cake"
},
"carrots":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "carrot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "carrots",
          "condition": "block_state_property",
          "properties": {
            "age": "7"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "enchantment": "fortune",
              "formula": "binomial_with_bonus_count",
              "function": "apply_bonus",
              "parameters": {
                "extra": 3,
                "probability": 0.5714286
              }
            }
          ],
          "name": "carrot"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/carrots"
},
"cartography_table":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cartography_table"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cartography_table"
},
"carved_pumpkin":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "carved_pumpkin"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/carved_pumpkin"
},
"cauldron":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cauldron"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cauldron"
},
"cave_vines":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "cave_vines",
          "condition": "block_state_property",
          "properties": {
            "berries": "true"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "glow_berries"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cave_vines"
},
"cave_vines_plant":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "cave_vines_plant",
          "condition": "block_state_property",
          "properties": {
            "berries": "true"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "glow_berries"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cave_vines_plant"
},
"chain":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chain"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chain"
},
"cherry_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_button"
},
"cherry_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "cherry_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "cherry_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_door"
},
"cherry_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_fence"
},
"cherry_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_fence_gate"
},
"cherry_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_hanging_sign"
},
"cherry_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "cherry_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "cherry_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_leaves"
},
"cherry_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_log"
},
"cherry_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_planks"
},
"cherry_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_pressure_plate"
},
"cherry_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_sapling"
},
"cherry_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_sign"
},
"cherry_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cherry_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cherry_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_slab"
},
"cherry_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_stairs"
},
"cherry_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_trapdoor"
},
"cherry_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cherry_wood"
},
"chest":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "chest"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chest"
},
"chipped_anvil":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chipped_anvil"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chipped_anvil"
},
"chiseled_bookshelf":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_bookshelf"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_bookshelf"
},
"chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_copper"
},
"chiseled_deepslate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_deepslate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_deepslate"
},
"chiseled_nether_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_nether_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_nether_bricks"
},
"chiseled_polished_blackstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_polished_blackstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_polished_blackstone"
},
"chiseled_quartz_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_quartz_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_quartz_block"
},
"chiseled_red_sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_red_sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_red_sandstone"
},
"chiseled_resin_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_resin_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_resin_bricks"
},
"chiseled_sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_sandstone"
},
"chiseled_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_stone_bricks"
},
"chiseled_tuff":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_tuff"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_tuff"
},
"chiseled_tuff_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_tuff_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chiseled_tuff_bricks"
},
"chorus_flower":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "condition": "survives_explosion"
            },
            {
              "condition": "entity_properties",
              "entity": "this",
              "predicate": {}
            }
          ],
          "name": "chorus_flower"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chorus_flower"
},
"chorus_plant":{
  "type": "block",
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
                "max": 1.0,
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "chorus_fruit"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/chorus_plant"
},
"clay":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "clay"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": 4.0,
                  "function": "set_count"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "clay_ball"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/clay"
},
"closed_eyeblossom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "closed_eyeblossom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/closed_eyeblossom"
},
"coal_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "coal_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/coal_block"
},
"coal_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "coal_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "coal"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/coal_ore"
},
"coarse_dirt":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "coarse_dirt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/coarse_dirt"
},
"cobbled_deepslate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cobbled_deepslate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobbled_deepslate"
},
"cobbled_deepslate_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cobbled_deepslate_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cobbled_deepslate_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobbled_deepslate_slab"
},
"cobbled_deepslate_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cobbled_deepslate_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobbled_deepslate_stairs"
},
"cobbled_deepslate_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cobbled_deepslate_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobbled_deepslate_wall"
},
"cobblestone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cobblestone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobblestone"
},
"cobblestone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cobblestone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cobblestone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobblestone_slab"
},
"cobblestone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cobblestone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobblestone_stairs"
},
"cobblestone_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cobblestone_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobblestone_wall"
},
"cobweb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "cobweb"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "string"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cobweb"
},
"cocoa":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cocoa",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "2"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cocoa_beans"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cocoa"
},
"comparator":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "comparator"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/comparator"
},
"composter":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "explosion_decay"
            }
          ],
          "name": "composter"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "composter",
          "condition": "block_state_property",
          "properties": {
            "level": "8"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bone_meal"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/composter"
},
"conduit":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "conduit"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/conduit"
},
"copper_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "copper_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/copper_block"
},
"copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/copper_bulb"
},
"copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/copper_door"
},
"copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/copper_grate"
},
"copper_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "copper_ore"
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
                },
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "raw_copper"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/copper_ore"
},
"copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/copper_trapdoor"
},
"cornflower":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cornflower"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cornflower"
},
"cracked_deepslate_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cracked_deepslate_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cracked_deepslate_bricks"
},
"cracked_deepslate_tiles":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cracked_deepslate_tiles"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cracked_deepslate_tiles"
},
"cracked_nether_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cracked_nether_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cracked_nether_bricks"
},
"cracked_polished_blackstone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cracked_polished_blackstone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cracked_polished_blackstone_bricks"
},
"cracked_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cracked_stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cracked_stone_bricks"
},
"crafter":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crafter"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crafter"
},
"crafting_table":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crafting_table"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crafting_table"
},
"creaking_heart":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "creaking_heart"
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
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 1
                  }
                },
                {
                  "function": "limit_count",
                  "limit": {
                    "max": 9.0
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "resin_clump"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/creaking_heart"
},
"creeper_head":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "creeper_head"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/creeper_head"
},
"crimson_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_button"
},
"crimson_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "crimson_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "crimson_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_door"
},
"crimson_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_fence"
},
"crimson_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_fence_gate"
},
"crimson_fungus":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_fungus"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_fungus"
},
"crimson_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_hanging_sign"
},
"crimson_hyphae":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_hyphae"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_hyphae"
},
"crimson_nylium":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "crimson_nylium"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "netherrack"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_nylium"
},
"crimson_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_planks"
},
"crimson_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_pressure_plate"
},
"crimson_roots":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_roots"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_roots"
},
"crimson_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_sign"
},
"crimson_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "crimson_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "crimson_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_slab"
},
"crimson_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_stairs"
},
"crimson_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_stem"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_stem"
},
"crimson_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crimson_trapdoor"
},
"crying_obsidian":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crying_obsidian"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/crying_obsidian"
},
"cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cut_copper"
},
"cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cut_copper_slab"
},
"cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cut_copper_stairs"
},
"cut_red_sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cut_red_sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cut_red_sandstone"
},
"cut_red_sandstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cut_red_sandstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cut_red_sandstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cut_red_sandstone_slab"
},
"cut_sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cut_sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cut_sandstone"
},
"cut_sandstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cut_sandstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cut_sandstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cut_sandstone_slab"
},
"cyan_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "cyan_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_banner"
},
"cyan_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "cyan_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "cyan_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_bed"
},
"cyan_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "cyan_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "cyan_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "cyan_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "cyan_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_candle"
},
"cyan_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "cyan_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_candle_cake"
},
"cyan_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_carpet"
},
"cyan_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_concrete"
},
"cyan_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_concrete_powder"
},
"cyan_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_glazed_terracotta"
},
"cyan_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "cyan_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_shulker_box"
},
"cyan_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_stained_glass"
},
"cyan_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_stained_glass_pane"
},
"cyan_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_terracotta"
},
"cyan_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cyan_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/cyan_wool"
},
"damaged_anvil":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "damaged_anvil"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/damaged_anvil"
},
"dandelion":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dandelion"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dandelion"
},
"dark_oak_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_button"
},
"dark_oak_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "dark_oak_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "dark_oak_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_door"
},
"dark_oak_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_fence"
},
"dark_oak_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_fence_gate"
},
"dark_oak_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_hanging_sign"
},
"dark_oak_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "dark_oak_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "dark_oak_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "condition": "survives_explosion"
            },
            {
              "chances": [
                0.005,
                0.0055555557,
                0.00625,
                0.008333334,
                0.025
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "name": "apple"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_leaves"
},
"dark_oak_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_log"
},
"dark_oak_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_planks"
},
"dark_oak_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_pressure_plate"
},
"dark_oak_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_sapling"
},
"dark_oak_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_sign"
},
"dark_oak_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "dark_oak_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "dark_oak_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_slab"
},
"dark_oak_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_stairs"
},
"dark_oak_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_trapdoor"
},
"dark_oak_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_oak_wood"
},
"dark_prismarine":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_prismarine"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_prismarine"
},
"dark_prismarine_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "dark_prismarine_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "dark_prismarine_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_prismarine_slab"
},
"dark_prismarine_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_prismarine_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dark_prismarine_stairs"
},
"daylight_detector":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "daylight_detector"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/daylight_detector"
},
"dead_brain_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_brain_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_brain_coral"
},
"dead_brain_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_brain_coral_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_brain_coral_block"
},
"dead_brain_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_brain_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_brain_coral_fan"
},
"dead_bubble_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_bubble_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_bubble_coral"
},
"dead_bubble_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_bubble_coral_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_bubble_coral_block"
},
"dead_bubble_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_bubble_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_bubble_coral_fan"
},
"dead_bush":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "items": "shears"
                  }
                }
              ],
              "name": "dead_bush"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": {
                    "type": "uniform",
                    "max": 2.0,
                    "min": 0.0
                  },
                  "function": "set_count"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "stick"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_bush"
},
"dead_fire_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_fire_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_fire_coral"
},
"dead_fire_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_fire_coral_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_fire_coral_block"
},
"dead_fire_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_fire_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_fire_coral_fan"
},
"dead_horn_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_horn_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_horn_coral"
},
"dead_horn_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_horn_coral_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_horn_coral_block"
},
"dead_horn_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_horn_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_horn_coral_fan"
},
"dead_tube_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_tube_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_tube_coral"
},
"dead_tube_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_tube_coral_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_tube_coral_block"
},
"dead_tube_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_tube_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dead_tube_coral_fan"
},
"decorated_pot":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "dynamic",
              "conditions": [
                {
                  "block": "decorated_pot",
                  "condition": "block_state_property",
                  "properties": {
                    "cracked": "true"
                  }
                }
              ],
              "name": "sherds"
            },
            {
              "type": "item",
              "functions": [
                {
                  "function": "copy_components",
                  "include": [
                    "pot_decorations"
                  ],
                  "source": "block_entity"
                }
              ],
              "name": "decorated_pot"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/decorated_pot"
},
"deepslate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "cobbled_deepslate"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate"
},
"deepslate_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "deepslate_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_bricks"
},
"deepslate_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "deepslate_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "deepslate_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_brick_slab"
},
"deepslate_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "deepslate_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_brick_stairs"
},
"deepslate_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "deepslate_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_brick_wall"
},
"deepslate_coal_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_coal_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "coal"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_coal_ore"
},
"deepslate_copper_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_copper_ore"
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
                },
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "raw_copper"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_copper_ore"
},
"deepslate_diamond_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_diamond_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "diamond"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_diamond_ore"
},
"deepslate_emerald_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_emerald_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "emerald"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_emerald_ore"
},
"deepslate_gold_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_gold_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "raw_gold"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_gold_ore"
},
"deepslate_iron_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_iron_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "raw_iron"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_iron_ore"
},
"deepslate_lapis_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_lapis_ore"
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
                },
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "lapis_lazuli"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_lapis_ore"
},
"deepslate_redstone_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "deepslate_redstone_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": {
                    "type": "uniform",
                    "max": 5.0,
                    "min": 4.0
                  },
                  "function": "set_count"
                },
                {
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 1
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "redstone"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_redstone_ore"
},
"deepslate_tiles":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "deepslate_tiles"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_tiles"
},
"deepslate_tile_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "deepslate_tile_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "deepslate_tile_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_tile_slab"
},
"deepslate_tile_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "deepslate_tile_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_tile_stairs"
},
"deepslate_tile_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "deepslate_tile_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/deepslate_tile_wall"
},
"detector_rail":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "detector_rail"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/detector_rail"
},
"diamond_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "diamond_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/diamond_block"
},
"diamond_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "diamond_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "diamond"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/diamond_ore"
},
"diorite":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "diorite"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/diorite"
},
"diorite_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "diorite_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "diorite_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/diorite_slab"
},
"diorite_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "diorite_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/diorite_stairs"
},
"diorite_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "diorite_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/diorite_wall"
},
"dirt":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dirt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dirt"
},
"dirt_path":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dirt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dirt_path"
},
"dispenser":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "dispenser"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dispenser"
},
"dragon_egg":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "dragon_egg"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dragon_egg"
},
"dragon_head":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "dragon_head"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dragon_head"
},
"dried_kelp_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dried_kelp_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dried_kelp_block"
},
"dripstone_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dripstone_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dripstone_block"
},
"dropper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "dropper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/dropper"
},
"emerald_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "emerald_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/emerald_block"
},
"emerald_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "emerald_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "emerald"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/emerald_ore"
},
"enchanting_table":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "enchanting_table"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/enchanting_table"
},
"ender_chest":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "ender_chest"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": 8.0,
                  "function": "set_count"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "obsidian"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/ender_chest"
},
"end_rod":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "end_rod"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/end_rod"
},
"end_stone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "end_stone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/end_stone"
},
"end_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "end_stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/end_stone_bricks"
},
"end_stone_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "end_stone_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "end_stone_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/end_stone_brick_slab"
},
"end_stone_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "end_stone_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/end_stone_brick_stairs"
},
"end_stone_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "end_stone_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/end_stone_brick_wall"
},
"exposed_chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "exposed_chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_chiseled_copper"
},
"exposed_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "exposed_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_copper"
},
"exposed_copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "exposed_copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_copper_bulb"
},
"exposed_copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "exposed_copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "exposed_copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_copper_door"
},
"exposed_copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "exposed_copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_copper_grate"
},
"exposed_copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "exposed_copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_copper_trapdoor"
},
"exposed_cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "exposed_cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_cut_copper"
},
"exposed_cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "exposed_cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "exposed_cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_cut_copper_slab"
},
"exposed_cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "exposed_cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/exposed_cut_copper_stairs"
},
"farmland":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dirt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/farmland"
},
"fern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "items": "shears"
                  }
                }
              ],
              "name": "fern"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "chance": 0.125,
                  "condition": "random_chance"
                }
              ],
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 2
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "wheat_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/fern"
},
"fire":{
  "type": "block",
  "random_sequence": "blocks/fire"
},
"fire_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "fire_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/fire_coral"
},
"fire_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "fire_coral_block"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dead_fire_coral_block"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/fire_coral_block"
},
"fire_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "fire_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/fire_coral_fan"
},
"fletching_table":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "fletching_table"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/fletching_table"
},
"flowering_azalea":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flowering_azalea"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/flowering_azalea"
},
"flowering_azalea_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "flowering_azalea_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "flowering_azalea"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/flowering_azalea_leaves"
},
"flower_pot":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/flower_pot"
},
"frogspawn":{
  "type": "block",
  "random_sequence": "blocks/frogspawn"
},
"frosted_ice":{
  "type": "block",
  "random_sequence": "blocks/frosted_ice"
},
"furnace":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "furnace"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/furnace"
},
"gilded_blackstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "gilded_blackstone"
            },
            {
              "type": "alternatives",
              "children": [
                {
                  "type": "item",
                  "conditions": [
                    {
                      "chances": [
                        0.1,
                        0.14285715,
                        0.25,
                        1.0
                      ],
                      "condition": "table_bonus",
                      "enchantment": "fortune"
                    }
                  ],
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
                  "name": "gold_nugget"
                },
                {
                  "type": "item",
                  "name": "gilded_blackstone"
                }
              ],
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ]
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gilded_blackstone"
},
"glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/glass"
},
"glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/glass_pane"
},
"glowstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
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
                    "max": 4.0,
                    "min": 2.0
                  },
                  "function": "set_count"
                },
                {
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 1
                  }
                },
                {
                  "function": "limit_count",
                  "limit": {
                    "max": 4.0,
                    "min": 1.0
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "glowstone_dust"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/glowstone"
},
"glow_lichen":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "condition": "match_tool",
              "predicate": {
                "items": "shears"
              }
            }
          ],
          "functions": [
            {
              "add": true,
              "conditions": [
                {
                  "block": "glow_lichen",
                  "condition": "block_state_property",
                  "properties": {
                    "down": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "glow_lichen",
                  "condition": "block_state_property",
                  "properties": {
                    "up": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "glow_lichen",
                  "condition": "block_state_property",
                  "properties": {
                    "north": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "glow_lichen",
                  "condition": "block_state_property",
                  "properties": {
                    "south": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "glow_lichen",
                  "condition": "block_state_property",
                  "properties": {
                    "west": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "glow_lichen",
                  "condition": "block_state_property",
                  "properties": {
                    "east": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "count": -1.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "glow_lichen"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/glow_lichen"
},
"gold_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gold_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gold_block"
},
"gold_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "gold_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "raw_gold"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gold_ore"
},
"granite":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "granite"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/granite"
},
"granite_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "granite_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "granite_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/granite_slab"
},
"granite_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "granite_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/granite_stairs"
},
"granite_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "granite_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/granite_wall"
},
"grass_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "grass_block"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dirt"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/grass_block"
},
"gravel":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "gravel"
            },
            {
              "type": "alternatives",
              "children": [
                {
                  "type": "item",
                  "conditions": [
                    {
                      "chances": [
                        0.1,
                        0.14285715,
                        0.25,
                        1.0
                      ],
                      "condition": "table_bonus",
                      "enchantment": "fortune"
                    }
                  ],
                  "name": "flint"
                },
                {
                  "type": "item",
                  "name": "gravel"
                }
              ],
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ]
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gravel"
},
"gray_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "gray_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_banner"
},
"gray_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "gray_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "gray_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_bed"
},
"gray_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "gray_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "gray_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "gray_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "gray_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_candle"
},
"gray_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "gray_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_candle_cake"
},
"gray_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_carpet"
},
"gray_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_concrete"
},
"gray_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_concrete_powder"
},
"gray_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_glazed_terracotta"
},
"gray_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "gray_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_shulker_box"
},
"gray_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_stained_glass"
},
"gray_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_stained_glass_pane"
},
"gray_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_terracotta"
},
"gray_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gray_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/gray_wool"
},
"green_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "green_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_banner"
},
"green_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "green_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "green_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_bed"
},
"green_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "green_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "green_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "green_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "green_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_candle"
},
"green_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "green_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_candle_cake"
},
"green_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_carpet"
},
"green_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_concrete"
},
"green_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_concrete_powder"
},
"green_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_glazed_terracotta"
},
"green_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "green_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_shulker_box"
},
"green_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_stained_glass"
},
"green_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_stained_glass_pane"
},
"green_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_terracotta"
},
"green_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "green_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/green_wool"
},
"grindstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "grindstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/grindstone"
},
"hanging_roots":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "items": "shears"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "hanging_roots"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/hanging_roots"
},
"hay_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "hay_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/hay_block"
},
"heavy_core":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "heavy_core"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/heavy_core"
},
"heavy_weighted_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "heavy_weighted_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/heavy_weighted_pressure_plate"
},
"honeycomb_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "honeycomb_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/honeycomb_block"
},
"honey_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "honey_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/honey_block"
},
"hopper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "hopper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/hopper"
},
"horn_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "horn_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/horn_coral"
},
"horn_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "horn_coral_block"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dead_horn_coral_block"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/horn_coral_block"
},
"horn_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "horn_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/horn_coral_fan"
},
"ice":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "ice"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/ice"
},
"infested_chiseled_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "chiseled_stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/infested_chiseled_stone_bricks"
},
"infested_cobblestone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cobblestone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/infested_cobblestone"
},
"infested_cracked_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cracked_stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/infested_cracked_stone_bricks"
},
"infested_deepslate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "deepslate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/infested_deepslate"
},
"infested_mossy_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mossy_stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/infested_mossy_stone_bricks"
},
"infested_stone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/infested_stone"
},
"infested_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/infested_stone_bricks"
},
"iron_bars":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "iron_bars"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/iron_bars"
},
"iron_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "iron_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/iron_block"
},
"iron_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "iron_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "iron_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/iron_door"
},
"iron_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "iron_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "raw_iron"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/iron_ore"
},
"iron_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "iron_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/iron_trapdoor"
},
"jack_o_lantern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jack_o_lantern"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jack_o_lantern"
},
"jukebox":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jukebox"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jukebox"
},
"jungle_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_button"
},
"jungle_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "jungle_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "jungle_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_door"
},
"jungle_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_fence"
},
"jungle_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_fence_gate"
},
"jungle_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_hanging_sign"
},
"jungle_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "jungle_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.025,
                    0.027777778,
                    0.03125,
                    0.041666668,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "jungle_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_leaves"
},
"jungle_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_log"
},
"jungle_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_planks"
},
"jungle_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_pressure_plate"
},
"jungle_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_sapling"
},
"jungle_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_sign"
},
"jungle_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "jungle_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "jungle_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_slab"
},
"jungle_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_stairs"
},
"jungle_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_trapdoor"
},
"jungle_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/jungle_wood"
},
"kelp":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "kelp"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/kelp"
},
"kelp_plant":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "kelp"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/kelp_plant"
},
"ladder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "ladder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/ladder"
},
"lantern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lantern"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lantern"
},
"lapis_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lapis_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lapis_block"
},
"lapis_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "lapis_ore"
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
                },
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "lapis_lazuli"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lapis_ore"
},
"large_amethyst_bud":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "large_amethyst_bud"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/large_amethyst_bud"
},
"large_fern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "large_fern",
          "condition": "block_state_property",
          "properties": {
            "half": "lower"
          }
        },
        {
          "condition": "location_check",
          "offsetY": 1,
          "predicate": {
            "block": {
              "blocks": "large_fern",
              "state": {
                "half": "upper"
              }
            }
          }
        }
      ],
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "items": "shears"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 2.0,
                  "function": "set_count"
                }
              ],
              "name": "fern"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chance": 0.125,
                  "condition": "random_chance"
                }
              ],
              "name": "wheat_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "large_fern",
          "condition": "block_state_property",
          "properties": {
            "half": "upper"
          }
        },
        {
          "condition": "location_check",
          "offsetY": -1,
          "predicate": {
            "block": {
              "blocks": "large_fern",
              "state": {
                "half": "lower"
              }
            }
          }
        }
      ],
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "items": "shears"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 2.0,
                  "function": "set_count"
                }
              ],
              "name": "fern"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chance": 0.125,
                  "condition": "random_chance"
                }
              ],
              "name": "wheat_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/large_fern"
},
"lava_cauldron":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cauldron"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lava_cauldron"
},
"lectern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lectern"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lectern"
},
"lever":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lever"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lever"
},
"lightning_rod":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lightning_rod"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lightning_rod"
},
"light_blue_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "light_blue_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_banner"
},
"light_blue_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "light_blue_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "light_blue_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_bed"
},
"light_blue_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "light_blue_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "light_blue_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "light_blue_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "light_blue_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_candle"
},
"light_blue_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "light_blue_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_candle_cake"
},
"light_blue_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_carpet"
},
"light_blue_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_concrete"
},
"light_blue_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_concrete_powder"
},
"light_blue_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_glazed_terracotta"
},
"light_blue_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "light_blue_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_shulker_box"
},
"light_blue_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_stained_glass"
},
"light_blue_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_stained_glass_pane"
},
"light_blue_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_terracotta"
},
"light_blue_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_blue_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_blue_wool"
},
"light_gray_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "light_gray_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_banner"
},
"light_gray_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "light_gray_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "light_gray_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_bed"
},
"light_gray_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "light_gray_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "light_gray_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "light_gray_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "light_gray_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_candle"
},
"light_gray_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "light_gray_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_candle_cake"
},
"light_gray_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_carpet"
},
"light_gray_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_concrete"
},
"light_gray_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_concrete_powder"
},
"light_gray_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_glazed_terracotta"
},
"light_gray_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "light_gray_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_shulker_box"
},
"light_gray_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_stained_glass"
},
"light_gray_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_stained_glass_pane"
},
"light_gray_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_terracotta"
},
"light_gray_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_gray_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_gray_wool"
},
"light_weighted_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "light_weighted_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/light_weighted_pressure_plate"
},
"lilac":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "lilac",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "lilac"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lilac"
},
"lily_of_the_valley":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lily_of_the_valley"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lily_of_the_valley"
},
"lily_pad":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lily_pad"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lily_pad"
},
"lime_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "lime_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_banner"
},
"lime_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "lime_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "lime_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_bed"
},
"lime_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "lime_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "lime_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "lime_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "lime_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_candle"
},
"lime_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "lime_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_candle_cake"
},
"lime_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_carpet"
},
"lime_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_concrete"
},
"lime_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_concrete_powder"
},
"lime_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_glazed_terracotta"
},
"lime_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "lime_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_shulker_box"
},
"lime_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_stained_glass"
},
"lime_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_stained_glass_pane"
},
"lime_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_terracotta"
},
"lime_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lime_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lime_wool"
},
"lodestone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lodestone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/lodestone"
},
"loom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "loom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/loom"
},
"magenta_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "magenta_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_banner"
},
"magenta_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "magenta_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "magenta_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_bed"
},
"magenta_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "magenta_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "magenta_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "magenta_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "magenta_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_candle"
},
"magenta_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "magenta_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_candle_cake"
},
"magenta_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_carpet"
},
"magenta_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_concrete"
},
"magenta_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_concrete_powder"
},
"magenta_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_glazed_terracotta"
},
"magenta_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "magenta_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_shulker_box"
},
"magenta_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_stained_glass"
},
"magenta_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_stained_glass_pane"
},
"magenta_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_terracotta"
},
"magenta_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magenta_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magenta_wool"
},
"magma_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "magma_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/magma_block"
},
"mangrove_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_button"
},
"mangrove_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "mangrove_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "mangrove_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_door"
},
"mangrove_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_fence"
},
"mangrove_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_fence_gate"
},
"mangrove_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_hanging_sign"
},
"mangrove_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "mangrove_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "chances": [
                    0.02,
                    0.022222223,
                    0.025,
                    0.033333335,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": {
                    "type": "uniform",
                    "max": 2.0,
                    "min": 1.0
                  },
                  "function": "set_count"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "stick"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_leaves"
},
"mangrove_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_log"
},
"mangrove_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_planks"
},
"mangrove_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_pressure_plate"
},
"mangrove_propagule":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "mangrove_propagule",
          "condition": "block_state_property",
          "properties": {
            "age": "4"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_propagule"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_propagule"
},
"mangrove_roots":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_roots"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_roots"
},
"mangrove_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_sign"
},
"mangrove_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "mangrove_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "mangrove_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_slab"
},
"mangrove_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_stairs"
},
"mangrove_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_trapdoor"
},
"mangrove_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mangrove_wood"
},
"medium_amethyst_bud":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "medium_amethyst_bud"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/medium_amethyst_bud"
},
"melon":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "melon"
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
                },
                {
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 1
                  }
                },
                {
                  "function": "limit_count",
                  "limit": {
                    "max": 9.0
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "melon_slice"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/melon"
},
"melon_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "0"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.06666667
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "1"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.13333334
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "2"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.2
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "3"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.26666668
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "4"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.33333334
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "5"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.4
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "6"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.46666667
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "melon_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "7"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.53333336
              },
              "function": "set_count"
            }
          ],
          "name": "melon_seeds"
        }
      ],
      "functions": [
        {
          "function": "explosion_decay"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/melon_stem"
},
"mossy_cobblestone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mossy_cobblestone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_cobblestone"
},
"mossy_cobblestone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "mossy_cobblestone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "mossy_cobblestone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_cobblestone_slab"
},
"mossy_cobblestone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mossy_cobblestone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_cobblestone_stairs"
},
"mossy_cobblestone_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mossy_cobblestone_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_cobblestone_wall"
},
"mossy_stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mossy_stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_stone_bricks"
},
"mossy_stone_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "mossy_stone_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "mossy_stone_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_stone_brick_slab"
},
"mossy_stone_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mossy_stone_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_stone_brick_stairs"
},
"mossy_stone_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mossy_stone_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mossy_stone_brick_wall"
},
"moss_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "moss_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/moss_block"
},
"moss_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "moss_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/moss_carpet"
},
"mud":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mud"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mud"
},
"muddy_mangrove_roots":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "muddy_mangrove_roots"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/muddy_mangrove_roots"
},
"mud_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mud_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mud_bricks"
},
"mud_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "mud_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "mud_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mud_brick_slab"
},
"mud_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mud_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mud_brick_stairs"
},
"mud_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mud_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mud_brick_wall"
},
"mushroom_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mushroom_stem"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mushroom_stem"
},
"mycelium":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "mycelium"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dirt"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/mycelium"
},
"netherite_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "netherite_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/netherite_block"
},
"netherrack":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "netherrack"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/netherrack"
},
"nether_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "nether_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_bricks"
},
"nether_brick_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "nether_brick_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_brick_fence"
},
"nether_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "nether_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "nether_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_brick_slab"
},
"nether_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "nether_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_brick_stairs"
},
"nether_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "nether_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_brick_wall"
},
"nether_gold_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "nether_gold_ore"
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
                },
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "gold_nugget"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_gold_ore"
},
"nether_portal":{
  "type": "block",
  "random_sequence": "blocks/nether_portal"
},
"nether_quartz_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "nether_quartz_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "ore_drops",
                  "function": "apply_bonus"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "quartz"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_quartz_ore"
},
"nether_sprouts":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "items": "shears"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "nether_sprouts"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_sprouts"
},
"nether_wart":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "nether_wart",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "3"
                  }
                }
              ],
              "count": {
                "type": "uniform",
                "max": 4.0,
                "min": 2.0
              },
              "function": "set_count"
            },
            {
              "conditions": [
                {
                  "block": "nether_wart",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "3"
                  }
                }
              ],
              "enchantment": "fortune",
              "formula": "uniform_bonus_count",
              "function": "apply_bonus",
              "parameters": {
                "bonusMultiplier": 1
              }
            }
          ],
          "name": "nether_wart"
        }
      ],
      "functions": [
        {
          "function": "explosion_decay"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_wart"
},
"nether_wart_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "nether_wart_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/nether_wart_block"
},
"note_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "note_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/note_block"
},
"oak_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_button"
},
"oak_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "oak_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "oak_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_door"
},
"oak_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_fence"
},
"oak_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_fence_gate"
},
"oak_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_hanging_sign"
},
"oak_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "oak_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "oak_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "condition": "survives_explosion"
            },
            {
              "chances": [
                0.005,
                0.0055555557,
                0.00625,
                0.008333334,
                0.025
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "name": "apple"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_leaves"
},
"oak_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_log"
},
"oak_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_planks"
},
"oak_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_pressure_plate"
},
"oak_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_sapling"
},
"oak_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_sign"
},
"oak_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "oak_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "oak_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_slab"
},
"oak_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_stairs"
},
"oak_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_trapdoor"
},
"oak_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oak_wood"
},
"observer":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "observer"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/observer"
},
"obsidian":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "obsidian"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/obsidian"
},
"ochre_froglight":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "ochre_froglight"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/ochre_froglight"
},
"open_eyeblossom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "open_eyeblossom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/open_eyeblossom"
},
"orange_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "orange_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_banner"
},
"orange_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "orange_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "orange_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_bed"
},
"orange_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "orange_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "orange_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "orange_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "orange_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_candle"
},
"orange_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "orange_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_candle_cake"
},
"orange_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_carpet"
},
"orange_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_concrete"
},
"orange_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_concrete_powder"
},
"orange_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_glazed_terracotta"
},
"orange_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "orange_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_shulker_box"
},
"orange_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_stained_glass"
},
"orange_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_stained_glass_pane"
},
"orange_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_terracotta"
},
"orange_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_tulip"
},
"orange_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/orange_wool"
},
"oxeye_daisy":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxeye_daisy"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxeye_daisy"
},
"oxidized_chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxidized_chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_chiseled_copper"
},
"oxidized_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxidized_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_copper"
},
"oxidized_copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxidized_copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_copper_bulb"
},
"oxidized_copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "oxidized_copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "oxidized_copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_copper_door"
},
"oxidized_copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxidized_copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_copper_grate"
},
"oxidized_copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxidized_copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_copper_trapdoor"
},
"oxidized_cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxidized_cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_cut_copper"
},
"oxidized_cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "oxidized_cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "oxidized_cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_cut_copper_slab"
},
"oxidized_cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxidized_cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/oxidized_cut_copper_stairs"
},
"packed_ice":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "packed_ice"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/packed_ice"
},
"packed_mud":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "packed_mud"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/packed_mud"
},
"pale_hanging_moss":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "any_of",
          "terms": [
            {
              "condition": "match_tool",
              "predicate": {
                "items": "shears"
              }
            },
            {
              "condition": "match_tool",
              "predicate": {
                "predicates": {
                  "enchantments": [
                    {
                      "enchantments": "silk_touch",
                      "levels": {
                        "min": 1
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_hanging_moss"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_hanging_moss"
},
"pale_moss_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_moss_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_moss_block"
},
"pale_moss_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "pale_moss_carpet",
              "condition": "block_state_property",
              "properties": {
                "bottom": "true"
              }
            }
          ],
          "functions": [
            {
              "function": "explosion_decay"
            }
          ],
          "name": "pale_moss_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_moss_carpet"
},
"pale_oak_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_button"
},
"pale_oak_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "pale_oak_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "pale_oak_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_door"
},
"pale_oak_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_fence"
},
"pale_oak_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_fence_gate"
},
"pale_oak_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_hanging_sign"
},
"pale_oak_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "pale_oak_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "pale_oak_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_leaves"
},
"pale_oak_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_log"
},
"pale_oak_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_planks"
},
"pale_oak_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_pressure_plate"
},
"pale_oak_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_sapling"
},
"pale_oak_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_sign"
},
"pale_oak_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "pale_oak_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "pale_oak_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_slab"
},
"pale_oak_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_stairs"
},
"pale_oak_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_trapdoor"
},
"pale_oak_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pale_oak_wood"
},
"pearlescent_froglight":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pearlescent_froglight"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pearlescent_froglight"
},
"peony":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "peony",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "peony"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/peony"
},
"petrified_oak_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "petrified_oak_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "petrified_oak_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/petrified_oak_slab"
},
"piglin_head":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "piglin_head"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/piglin_head"
},
"pink_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "pink_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_banner"
},
"pink_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "pink_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "pink_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_bed"
},
"pink_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "pink_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pink_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pink_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "pink_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_candle"
},
"pink_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "pink_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_candle_cake"
},
"pink_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_carpet"
},
"pink_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_concrete"
},
"pink_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_concrete_powder"
},
"pink_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_glazed_terracotta"
},
"pink_petals":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "pink_petals",
                  "condition": "block_state_property",
                  "properties": {
                    "flower_amount": "1"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pink_petals",
                  "condition": "block_state_property",
                  "properties": {
                    "flower_amount": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pink_petals",
                  "condition": "block_state_property",
                  "properties": {
                    "flower_amount": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pink_petals",
                  "condition": "block_state_property",
                  "properties": {
                    "flower_amount": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "pink_petals"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_petals"
},
"pink_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "pink_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_shulker_box"
},
"pink_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_stained_glass"
},
"pink_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_stained_glass_pane"
},
"pink_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_terracotta"
},
"pink_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_tulip"
},
"pink_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pink_wool"
},
"piston":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "piston"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/piston"
},
"pitcher_crop":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "0"
                  }
                },
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "half": "lower"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 1.0,
                  "function": "set_count"
                }
              ],
              "name": "pitcher_pod"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "1"
                  }
                },
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "half": "lower"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 1.0,
                  "function": "set_count"
                }
              ],
              "name": "pitcher_pod"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "2"
                  }
                },
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "half": "lower"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 1.0,
                  "function": "set_count"
                }
              ],
              "name": "pitcher_pod"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "3"
                  }
                },
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "half": "lower"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 1.0,
                  "function": "set_count"
                }
              ],
              "name": "pitcher_pod"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "4"
                  }
                },
                {
                  "block": "pitcher_crop",
                  "condition": "block_state_property",
                  "properties": {
                    "half": "lower"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 1.0,
                  "function": "set_count"
                }
              ],
              "name": "pitcher_plant"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pitcher_crop"
},
"pitcher_plant":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "pitcher_plant",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "pitcher_plant"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pitcher_plant"
},
"player_head":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "profile",
                "note_block_sound",
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "player_head"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/player_head"
},
"podzol":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "podzol"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dirt"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/podzol"
},
"pointed_dripstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pointed_dripstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pointed_dripstone"
},
"polished_andesite":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_andesite"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_andesite"
},
"polished_andesite_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "polished_andesite_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "polished_andesite_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_andesite_slab"
},
"polished_andesite_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_andesite_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_andesite_stairs"
},
"polished_basalt":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_basalt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_basalt"
},
"polished_blackstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone"
},
"polished_blackstone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_bricks"
},
"polished_blackstone_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "polished_blackstone_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "polished_blackstone_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_brick_slab"
},
"polished_blackstone_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_brick_stairs"
},
"polished_blackstone_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_brick_wall"
},
"polished_blackstone_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_button"
},
"polished_blackstone_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_pressure_plate"
},
"polished_blackstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "polished_blackstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "polished_blackstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_slab"
},
"polished_blackstone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_stairs"
},
"polished_blackstone_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_blackstone_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_blackstone_wall"
},
"polished_deepslate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_deepslate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_deepslate"
},
"polished_deepslate_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "polished_deepslate_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "polished_deepslate_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_deepslate_slab"
},
"polished_deepslate_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_deepslate_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_deepslate_stairs"
},
"polished_deepslate_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_deepslate_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_deepslate_wall"
},
"polished_diorite":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_diorite"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_diorite"
},
"polished_diorite_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "polished_diorite_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "polished_diorite_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_diorite_slab"
},
"polished_diorite_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_diorite_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_diorite_stairs"
},
"polished_granite":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_granite"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_granite"
},
"polished_granite_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "polished_granite_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "polished_granite_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_granite_slab"
},
"polished_granite_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_granite_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_granite_stairs"
},
"polished_tuff":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_tuff"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_tuff"
},
"polished_tuff_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "polished_tuff_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "polished_tuff_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_tuff_slab"
},
"polished_tuff_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_tuff_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_tuff_stairs"
},
"polished_tuff_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "polished_tuff_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/polished_tuff_wall"
},
"poppy":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "poppy"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/poppy"
},
"potatoes":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "potato"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "potatoes",
          "condition": "block_state_property",
          "properties": {
            "age": "7"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "enchantment": "fortune",
              "formula": "binomial_with_bonus_count",
              "function": "apply_bonus",
              "parameters": {
                "extra": 3,
                "probability": 0.5714286
              }
            }
          ],
          "name": "potato"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "potatoes",
          "condition": "block_state_property",
          "properties": {
            "age": "7"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chance": 0.02,
              "condition": "random_chance"
            }
          ],
          "name": "poisonous_potato"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potatoes"
},
"potted_acacia_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "acacia_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_acacia_sapling"
},
"potted_allium":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "allium"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_allium"
},
"potted_azalea_bush":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "azalea"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_azalea_bush"
},
"potted_azure_bluet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "azure_bluet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_azure_bluet"
},
"potted_bamboo":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bamboo"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_bamboo"
},
"potted_birch_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "birch_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_birch_sapling"
},
"potted_blue_orchid":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "blue_orchid"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_blue_orchid"
},
"potted_brown_mushroom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "brown_mushroom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_brown_mushroom"
},
"potted_cactus":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cactus"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_cactus"
},
"potted_cherry_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cherry_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_cherry_sapling"
},
"potted_closed_eyeblossom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "closed_eyeblossom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_closed_eyeblossom"
},
"potted_cornflower":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cornflower"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_cornflower"
},
"potted_crimson_fungus":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_fungus"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_crimson_fungus"
},
"potted_crimson_roots":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "crimson_roots"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_crimson_roots"
},
"potted_dandelion":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dandelion"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_dandelion"
},
"potted_dark_oak_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dark_oak_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_dark_oak_sapling"
},
"potted_dead_bush":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "dead_bush"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_dead_bush"
},
"potted_fern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "fern"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_fern"
},
"potted_flowering_azalea_bush":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flowering_azalea"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_flowering_azalea_bush"
},
"potted_jungle_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "jungle_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_jungle_sapling"
},
"potted_lily_of_the_valley":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "lily_of_the_valley"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_lily_of_the_valley"
},
"potted_mangrove_propagule":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "mangrove_propagule"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_mangrove_propagule"
},
"potted_oak_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oak_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_oak_sapling"
},
"potted_open_eyeblossom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "open_eyeblossom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_open_eyeblossom"
},
"potted_orange_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "orange_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_orange_tulip"
},
"potted_oxeye_daisy":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "oxeye_daisy"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_oxeye_daisy"
},
"potted_pale_oak_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pale_oak_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_pale_oak_sapling"
},
"potted_pink_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pink_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_pink_tulip"
},
"potted_poppy":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "poppy"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_poppy"
},
"potted_red_mushroom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_mushroom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_red_mushroom"
},
"potted_red_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_red_tulip"
},
"potted_spruce_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_spruce_sapling"
},
"potted_torchflower":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "torchflower"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_torchflower"
},
"potted_warped_fungus":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_fungus"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_warped_fungus"
},
"potted_warped_roots":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_roots"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_warped_roots"
},
"potted_white_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_white_tulip"
},
"potted_wither_rose":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "flower_pot"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "wither_rose"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/potted_wither_rose"
},
"powder_snow":{
  "type": "block",
  "random_sequence": "blocks/powder_snow"
},
"powder_snow_cauldron":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cauldron"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/powder_snow_cauldron"
},
"powered_rail":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "powered_rail"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/powered_rail"
},
"prismarine":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "prismarine"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/prismarine"
},
"prismarine_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "prismarine_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/prismarine_bricks"
},
"prismarine_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "prismarine_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "prismarine_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/prismarine_brick_slab"
},
"prismarine_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "prismarine_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/prismarine_brick_stairs"
},
"prismarine_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "prismarine_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "prismarine_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/prismarine_slab"
},
"prismarine_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "prismarine_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/prismarine_stairs"
},
"prismarine_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "prismarine_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/prismarine_wall"
},
"pumpkin":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "pumpkin"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pumpkin"
},
"pumpkin_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "0"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.06666667
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "1"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.13333334
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "2"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.2
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "3"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.26666668
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "4"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.33333334
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "5"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.4
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "6"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.46666667
              },
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "pumpkin_stem",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "7"
                  }
                }
              ],
              "count": {
                "type": "binomial",
                "n": 3.0,
                "p": 0.53333336
              },
              "function": "set_count"
            }
          ],
          "name": "pumpkin_seeds"
        }
      ],
      "functions": [
        {
          "function": "explosion_decay"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/pumpkin_stem"
},
"purple_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "purple_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_banner"
},
"purple_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "purple_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "purple_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_bed"
},
"purple_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "purple_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "purple_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "purple_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "purple_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_candle"
},
"purple_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "purple_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_candle_cake"
},
"purple_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_carpet"
},
"purple_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_concrete"
},
"purple_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_concrete_powder"
},
"purple_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_glazed_terracotta"
},
"purple_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "purple_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_shulker_box"
},
"purple_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_stained_glass"
},
"purple_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_stained_glass_pane"
},
"purple_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_terracotta"
},
"purple_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purple_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purple_wool"
},
"purpur_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purpur_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purpur_block"
},
"purpur_pillar":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purpur_pillar"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purpur_pillar"
},
"purpur_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "purpur_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "purpur_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purpur_slab"
},
"purpur_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "purpur_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/purpur_stairs"
},
"quartz_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "quartz_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/quartz_block"
},
"quartz_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "quartz_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/quartz_bricks"
},
"quartz_pillar":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "quartz_pillar"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/quartz_pillar"
},
"quartz_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "quartz_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "quartz_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/quartz_slab"
},
"quartz_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "quartz_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/quartz_stairs"
},
"rail":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "rail"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/rail"
},
"raw_copper_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "raw_copper_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/raw_copper_block"
},
"raw_gold_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "raw_gold_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/raw_gold_block"
},
"raw_iron_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "raw_iron_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/raw_iron_block"
},
"redstone_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "redstone_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/redstone_block"
},
"redstone_lamp":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "redstone_lamp"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/redstone_lamp"
},
"redstone_ore":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "redstone_ore"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": {
                    "type": "uniform",
                    "max": 5.0,
                    "min": 4.0
                  },
                  "function": "set_count"
                },
                {
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 1
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "redstone"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/redstone_ore"
},
"redstone_torch":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "redstone_torch"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/redstone_torch"
},
"redstone_wire":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "redstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/redstone_wire"
},
"red_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "red_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_banner"
},
"red_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "red_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "red_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_bed"
},
"red_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "red_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "red_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "red_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "red_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_candle"
},
"red_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "red_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_candle_cake"
},
"red_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_carpet"
},
"red_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_concrete"
},
"red_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_concrete_powder"
},
"red_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_glazed_terracotta"
},
"red_mushroom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_mushroom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_mushroom"
},
"red_mushroom_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "red_mushroom_block"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": {
                    "type": "uniform",
                    "max": 2.0,
                    "min": -6.0
                  },
                  "function": "set_count"
                },
                {
                  "function": "limit_count",
                  "limit": {
                    "min": 0.0
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "red_mushroom"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_mushroom_block"
},
"red_nether_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_nether_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_nether_bricks"
},
"red_nether_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "red_nether_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "red_nether_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_nether_brick_slab"
},
"red_nether_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_nether_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_nether_brick_stairs"
},
"red_nether_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_nether_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_nether_brick_wall"
},
"red_sand":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_sand"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_sand"
},
"red_sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_sandstone"
},
"red_sandstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "red_sandstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "red_sandstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_sandstone_slab"
},
"red_sandstone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_sandstone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_sandstone_stairs"
},
"red_sandstone_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_sandstone_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_sandstone_wall"
},
"red_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "red_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_shulker_box"
},
"red_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_stained_glass"
},
"red_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_stained_glass_pane"
},
"red_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_terracotta"
},
"red_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_tulip"
},
"red_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "red_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/red_wool"
},
"reinforced_deepslate":{
  "type": "block",
  "random_sequence": "blocks/reinforced_deepslate"
},
"repeater":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "repeater"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/repeater"
},
"resin_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "resin_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/resin_block"
},
"resin_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "resin_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/resin_bricks"
},
"resin_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "resin_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/resin_brick_slab"
},
"resin_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "resin_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/resin_brick_stairs"
},
"resin_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "resin_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/resin_brick_wall"
},
"resin_clump":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": true,
              "conditions": [
                {
                  "block": "resin_clump",
                  "condition": "block_state_property",
                  "properties": {
                    "down": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "resin_clump",
                  "condition": "block_state_property",
                  "properties": {
                    "up": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "resin_clump",
                  "condition": "block_state_property",
                  "properties": {
                    "north": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "resin_clump",
                  "condition": "block_state_property",
                  "properties": {
                    "south": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "resin_clump",
                  "condition": "block_state_property",
                  "properties": {
                    "west": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "resin_clump",
                  "condition": "block_state_property",
                  "properties": {
                    "east": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "count": -1.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "resin_clump"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/resin_clump"
},
"respawn_anchor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "respawn_anchor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/respawn_anchor"
},
"rooted_dirt":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "rooted_dirt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/rooted_dirt"
},
"rose_bush":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "rose_bush",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "rose_bush"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/rose_bush"
},
"sand":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sand"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sand"
},
"sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sandstone"
},
"sandstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "sandstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "sandstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sandstone_slab"
},
"sandstone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sandstone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sandstone_stairs"
},
"sandstone_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sandstone_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sandstone_wall"
},
"scaffolding":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "scaffolding"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/scaffolding"
},
"sculk":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sculk"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sculk"
},
"sculk_catalyst":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sculk_catalyst"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sculk_catalyst"
},
"sculk_sensor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sculk_sensor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sculk_sensor"
},
"sculk_shrieker":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sculk_shrieker"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sculk_shrieker"
},
"sculk_vein":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "condition": "match_tool",
              "predicate": {
                "predicates": {
                  "enchantments": [
                    {
                      "enchantments": "silk_touch",
                      "levels": {
                        "min": 1
                      }
                    }
                  ]
                }
              }
            }
          ],
          "functions": [
            {
              "add": true,
              "conditions": [
                {
                  "block": "sculk_vein",
                  "condition": "block_state_property",
                  "properties": {
                    "down": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "sculk_vein",
                  "condition": "block_state_property",
                  "properties": {
                    "up": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "sculk_vein",
                  "condition": "block_state_property",
                  "properties": {
                    "north": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "sculk_vein",
                  "condition": "block_state_property",
                  "properties": {
                    "south": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "sculk_vein",
                  "condition": "block_state_property",
                  "properties": {
                    "west": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "conditions": [
                {
                  "block": "sculk_vein",
                  "condition": "block_state_property",
                  "properties": {
                    "east": "true"
                  }
                }
              ],
              "count": 1.0,
              "function": "set_count"
            },
            {
              "add": true,
              "count": -1.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "sculk_vein"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sculk_vein"
},
"seagrass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "items": "shears"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "seagrass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/seagrass"
},
"sea_lantern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "sea_lantern"
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
                },
                {
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 1
                  }
                },
                {
                  "function": "limit_count",
                  "limit": {
                    "max": 5.0,
                    "min": 1.0
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "prismarine_crystals"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sea_lantern"
},
"sea_pickle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "sea_pickle",
                  "condition": "block_state_property",
                  "properties": {
                    "pickles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "sea_pickle",
                  "condition": "block_state_property",
                  "properties": {
                    "pickles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "sea_pickle",
                  "condition": "block_state_property",
                  "properties": {
                    "pickles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "sea_pickle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sea_pickle"
},
"short_grass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "items": "shears"
                  }
                }
              ],
              "name": "short_grass"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "chance": 0.125,
                  "condition": "random_chance"
                }
              ],
              "functions": [
                {
                  "enchantment": "fortune",
                  "formula": "uniform_bonus_count",
                  "function": "apply_bonus",
                  "parameters": {
                    "bonusMultiplier": 2
                  }
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "wheat_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/short_grass"
},
"shroomlight":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "shroomlight"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/shroomlight"
},
"shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/shulker_box"
},
"skeleton_skull":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "skeleton_skull"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/skeleton_skull"
},
"slime_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "slime_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/slime_block"
},
"small_amethyst_bud":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "small_amethyst_bud"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/small_amethyst_bud"
},
"small_dripleaf":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "items": "shears"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "small_dripleaf"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/small_dripleaf"
},
"smithing_table":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smithing_table"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smithing_table"
},
"smoker":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "smoker"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smoker"
},
"smooth_basalt":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_basalt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_basalt"
},
"smooth_quartz":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_quartz"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_quartz"
},
"smooth_quartz_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "smooth_quartz_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "smooth_quartz_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_quartz_slab"
},
"smooth_quartz_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_quartz_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_quartz_stairs"
},
"smooth_red_sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_red_sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_red_sandstone"
},
"smooth_red_sandstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "smooth_red_sandstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "smooth_red_sandstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_red_sandstone_slab"
},
"smooth_red_sandstone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_red_sandstone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_red_sandstone_stairs"
},
"smooth_sandstone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_sandstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_sandstone"
},
"smooth_sandstone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "smooth_sandstone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "smooth_sandstone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_sandstone_slab"
},
"smooth_sandstone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_sandstone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_sandstone_stairs"
},
"smooth_stone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "smooth_stone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_stone"
},
"smooth_stone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "smooth_stone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "smooth_stone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/smooth_stone_slab"
},
"sniffer_egg":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sniffer_egg"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sniffer_egg"
},
"snow":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "entity_properties",
          "entity": "this",
          "predicate": {}
        }
      ],
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "alternatives",
              "children": [
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "1"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 1.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "2"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 2.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "3"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 3.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "4"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 4.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "5"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 5.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "6"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 6.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "7"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 7.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "8"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 8.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snowball"
                }
              ],
              "conditions": [
                {
                  "condition": "inverted",
                  "term": {
                    "condition": "match_tool",
                    "predicate": {
                      "predicates": {
                        "enchantments": [
                          {
                            "enchantments": "silk_touch",
                            "levels": {
                              "min": 1
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            {
              "type": "alternatives",
              "children": [
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "1"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 1.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snow"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "2"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 2.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snow"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "3"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 3.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snow"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "4"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 4.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snow"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "5"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 5.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snow"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "6"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 6.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snow"
                },
                {
                  "type": "item",
                  "conditions": [
                    {
                      "block": "snow",
                      "condition": "block_state_property",
                      "properties": {
                        "layers": "7"
                      }
                    }
                  ],
                  "functions": [
                    {
                      "add": false,
                      "count": 7.0,
                      "function": "set_count"
                    }
                  ],
                  "name": "snow"
                },
                {
                  "type": "item",
                  "name": "snow_block"
                }
              ]
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/snow"
},
"snow_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "snow_block"
            },
            {
              "type": "item",
              "functions": [
                {
                  "add": false,
                  "count": 4.0,
                  "function": "set_count"
                },
                {
                  "function": "explosion_decay"
                }
              ],
              "name": "snowball"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/snow_block"
},
"soul_campfire":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "soul_campfire"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 1.0,
                  "function": "set_count"
                }
              ],
              "name": "soul_soil"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/soul_campfire"
},
"soul_fire":{
  "type": "block",
  "random_sequence": "blocks/soul_fire"
},
"soul_lantern":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "soul_lantern"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/soul_lantern"
},
"soul_sand":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "soul_sand"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/soul_sand"
},
"soul_soil":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "soul_soil"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/soul_soil"
},
"soul_torch":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "soul_torch"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/soul_torch"
},
"spawner":{
  "type": "block",
  "random_sequence": "blocks/spawner"
},
"sponge":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sponge"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sponge"
},
"spore_blossom":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spore_blossom"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spore_blossom"
},
"spruce_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_button"
},
"spruce_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "spruce_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "spruce_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_door"
},
"spruce_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_fence"
},
"spruce_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_fence_gate"
},
"spruce_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_hanging_sign"
},
"spruce_leaves":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "spruce_leaves"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chances": [
                    0.05,
                    0.0625,
                    0.083333336,
                    0.1
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "spruce_sapling"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "inverted",
          "term": {
            "condition": "any_of",
            "terms": [
              {
                "condition": "match_tool",
                "predicate": {
                  "items": "shears"
                }
              },
              {
                "condition": "match_tool",
                "predicate": {
                  "predicates": {
                    "enchantments": [
                      {
                        "enchantments": "silk_touch",
                        "levels": {
                          "min": 1
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "chances": [
                0.02,
                0.022222223,
                0.025,
                0.033333335,
                0.1
              ],
              "condition": "table_bonus",
              "enchantment": "fortune"
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stick"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_leaves"
},
"spruce_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_log"
},
"spruce_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_planks"
},
"spruce_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_pressure_plate"
},
"spruce_sapling":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_sapling"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_sapling"
},
"spruce_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_sign"
},
"spruce_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "spruce_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "spruce_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_slab"
},
"spruce_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_stairs"
},
"spruce_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_trapdoor"
},
"spruce_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "spruce_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/spruce_wood"
},
"sticky_piston":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sticky_piston"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sticky_piston"
},
"stone":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "stone"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "cobblestone"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone"
},
"stonecutter":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stonecutter"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stonecutter"
},
"stone_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_bricks"
},
"stone_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "stone_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stone_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_brick_slab"
},
"stone_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_brick_stairs"
},
"stone_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_brick_wall"
},
"stone_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_button"
},
"stone_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_pressure_plate"
},
"stone_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "stone_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "stone_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_slab"
},
"stone_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stone_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stone_stairs"
},
"stripped_acacia_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_acacia_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_acacia_log"
},
"stripped_acacia_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_acacia_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_acacia_wood"
},
"stripped_bamboo_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_bamboo_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_bamboo_block"
},
"stripped_birch_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_birch_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_birch_log"
},
"stripped_birch_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_birch_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_birch_wood"
},
"stripped_cherry_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_cherry_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_cherry_log"
},
"stripped_cherry_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_cherry_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_cherry_wood"
},
"stripped_crimson_hyphae":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_crimson_hyphae"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_crimson_hyphae"
},
"stripped_crimson_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_crimson_stem"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_crimson_stem"
},
"stripped_dark_oak_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_dark_oak_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_dark_oak_log"
},
"stripped_dark_oak_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_dark_oak_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_dark_oak_wood"
},
"stripped_jungle_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_jungle_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_jungle_log"
},
"stripped_jungle_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_jungle_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_jungle_wood"
},
"stripped_mangrove_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_mangrove_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_mangrove_log"
},
"stripped_mangrove_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_mangrove_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_mangrove_wood"
},
"stripped_oak_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_oak_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_oak_log"
},
"stripped_oak_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_oak_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_oak_wood"
},
"stripped_pale_oak_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_pale_oak_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_pale_oak_log"
},
"stripped_pale_oak_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_pale_oak_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_pale_oak_wood"
},
"stripped_spruce_log":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_spruce_log"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_spruce_log"
},
"stripped_spruce_wood":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_spruce_wood"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_spruce_wood"
},
"stripped_warped_hyphae":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_warped_hyphae"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_warped_hyphae"
},
"stripped_warped_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "stripped_warped_stem"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/stripped_warped_stem"
},
"sugar_cane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sugar_cane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sugar_cane"
},
"sunflower":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "sunflower",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "sunflower"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sunflower"
},
"suspicious_gravel":{
  "type": "block",
  "random_sequence": "blocks/suspicious_gravel"
},
"suspicious_sand":{
  "type": "block",
  "random_sequence": "blocks/suspicious_sand"
},
"sweet_berry_bush":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "sweet_berry_bush",
          "condition": "block_state_property",
          "properties": {
            "age": "3"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sweet_berries"
        }
      ],
      "functions": [
        {
          "add": false,
          "count": {
            "type": "uniform",
            "max": 3.0,
            "min": 2.0
          },
          "function": "set_count"
        },
        {
          "enchantment": "fortune",
          "formula": "uniform_bonus_count",
          "function": "apply_bonus",
          "parameters": {
            "bonusMultiplier": 1
          }
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "sweet_berry_bush",
          "condition": "block_state_property",
          "properties": {
            "age": "2"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "sweet_berries"
        }
      ],
      "functions": [
        {
          "add": false,
          "count": {
            "type": "uniform",
            "max": 2.0,
            "min": 1.0
          },
          "function": "set_count"
        },
        {
          "enchantment": "fortune",
          "formula": "uniform_bonus_count",
          "function": "apply_bonus",
          "parameters": {
            "bonusMultiplier": 1
          }
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/sweet_berry_bush"
},
"tall_grass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "tall_grass",
          "condition": "block_state_property",
          "properties": {
            "half": "lower"
          }
        },
        {
          "condition": "location_check",
          "offsetY": 1,
          "predicate": {
            "block": {
              "blocks": "tall_grass",
              "state": {
                "half": "upper"
              }
            }
          }
        }
      ],
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "items": "shears"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 2.0,
                  "function": "set_count"
                }
              ],
              "name": "short_grass"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chance": 0.125,
                  "condition": "random_chance"
                }
              ],
              "name": "wheat_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "tall_grass",
          "condition": "block_state_property",
          "properties": {
            "half": "upper"
          }
        },
        {
          "condition": "location_check",
          "offsetY": -1,
          "predicate": {
            "block": {
              "blocks": "tall_grass",
              "state": {
                "half": "lower"
              }
            }
          }
        }
      ],
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "items": "shears"
                  }
                }
              ],
              "functions": [
                {
                  "add": false,
                  "count": 2.0,
                  "function": "set_count"
                }
              ],
              "name": "short_grass"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                },
                {
                  "chance": 0.125,
                  "condition": "random_chance"
                }
              ],
              "name": "wheat_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tall_grass"
},
"tall_seagrass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "items": "shears"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": 2.0,
              "function": "set_count"
            }
          ],
          "name": "seagrass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tall_seagrass"
},
"target":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "target"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/target"
},
"terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/terracotta"
},
"tinted_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tinted_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tinted_glass"
},
"tnt":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "tnt",
              "condition": "block_state_property",
              "properties": {
                "unstable": "false"
              }
            }
          ],
          "name": "tnt"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tnt"
},
"torch":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "torch"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/torch"
},
"torchflower":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "torchflower"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/torchflower"
},
"torchflower_crop":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "torchflower_seeds"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/torchflower_crop"
},
"trapped_chest":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name"
              ],
              "source": "block_entity"
            }
          ],
          "name": "trapped_chest"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/trapped_chest"
},
"trial_spawner":{
  "type": "block",
  "random_sequence": "blocks/trial_spawner"
},
"tripwire":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "string"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tripwire"
},
"tripwire_hook":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tripwire_hook"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tripwire_hook"
},
"tube_coral":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tube_coral"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tube_coral"
},
"tube_coral_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "tube_coral_block"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "dead_tube_coral_block"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tube_coral_block"
},
"tube_coral_fan":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tube_coral_fan"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tube_coral_fan"
},
"tuff":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tuff"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff"
},
"tuff_bricks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tuff_bricks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff_bricks"
},
"tuff_brick_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "tuff_brick_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "tuff_brick_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff_brick_slab"
},
"tuff_brick_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tuff_brick_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff_brick_stairs"
},
"tuff_brick_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tuff_brick_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff_brick_wall"
},
"tuff_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "tuff_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "tuff_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff_slab"
},
"tuff_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tuff_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff_stairs"
},
"tuff_wall":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "tuff_wall"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/tuff_wall"
},
"turtle_egg":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "turtle_egg"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/turtle_egg"
},
"twisting_vines":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "twisting_vines"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "chances": [
                    0.33,
                    0.55,
                    0.77,
                    1.0
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "twisting_vines"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/twisting_vines"
},
"twisting_vines_plant":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "twisting_vines"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "chances": [
                    0.33,
                    0.55,
                    0.77,
                    1.0
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "twisting_vines"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/twisting_vines_plant"
},
"vault":{
  "type": "block",
  "random_sequence": "blocks/vault"
},
"verdant_froglight":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "verdant_froglight"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/verdant_froglight"
},
"vine":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "items": "shears"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "vine"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/vine"
},
"warped_button":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_button"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_button"
},
"warped_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "warped_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "warped_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_door"
},
"warped_fence":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_fence"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_fence"
},
"warped_fence_gate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_fence_gate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_fence_gate"
},
"warped_fungus":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_fungus"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_fungus"
},
"warped_hanging_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_hanging_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_hanging_sign"
},
"warped_hyphae":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_hyphae"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_hyphae"
},
"warped_nylium":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "match_tool",
                  "predicate": {
                    "predicates": {
                      "enchantments": [
                        {
                          "enchantments": "silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "name": "warped_nylium"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "survives_explosion"
                }
              ],
              "name": "netherrack"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_nylium"
},
"warped_planks":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_planks"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_planks"
},
"warped_pressure_plate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_pressure_plate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_pressure_plate"
},
"warped_roots":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_roots"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_roots"
},
"warped_sign":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_sign"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_sign"
},
"warped_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "warped_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "warped_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_slab"
},
"warped_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_stairs"
},
"warped_stem":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_stem"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_stem"
},
"warped_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_trapdoor"
},
"warped_wart_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "warped_wart_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/warped_wart_block"
},
"water_cauldron":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "cauldron"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/water_cauldron"
},
"waxed_chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_chiseled_copper"
},
"waxed_copper_block":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_copper_block"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_copper_block"
},
"waxed_copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_copper_bulb"
},
"waxed_copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "waxed_copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "waxed_copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_copper_door"
},
"waxed_copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_copper_grate"
},
"waxed_copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_copper_trapdoor"
},
"waxed_cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_cut_copper"
},
"waxed_cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "waxed_cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "waxed_cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_cut_copper_slab"
},
"waxed_cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_cut_copper_stairs"
},
"waxed_exposed_chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_exposed_chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_chiseled_copper"
},
"waxed_exposed_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_exposed_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_copper"
},
"waxed_exposed_copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_exposed_copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_copper_bulb"
},
"waxed_exposed_copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "waxed_exposed_copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "waxed_exposed_copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_copper_door"
},
"waxed_exposed_copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_exposed_copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_copper_grate"
},
"waxed_exposed_copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_exposed_copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_copper_trapdoor"
},
"waxed_exposed_cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_exposed_cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_cut_copper"
},
"waxed_exposed_cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "waxed_exposed_cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "waxed_exposed_cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_cut_copper_slab"
},
"waxed_exposed_cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_exposed_cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_exposed_cut_copper_stairs"
},
"waxed_oxidized_chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_oxidized_chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_chiseled_copper"
},
"waxed_oxidized_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_oxidized_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_copper"
},
"waxed_oxidized_copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_oxidized_copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_copper_bulb"
},
"waxed_oxidized_copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "waxed_oxidized_copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "waxed_oxidized_copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_copper_door"
},
"waxed_oxidized_copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_oxidized_copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_copper_grate"
},
"waxed_oxidized_copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_oxidized_copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_copper_trapdoor"
},
"waxed_oxidized_cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_oxidized_cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_cut_copper"
},
"waxed_oxidized_cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "waxed_oxidized_cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "waxed_oxidized_cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_cut_copper_slab"
},
"waxed_oxidized_cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_oxidized_cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_oxidized_cut_copper_stairs"
},
"waxed_weathered_chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_weathered_chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_chiseled_copper"
},
"waxed_weathered_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_weathered_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_copper"
},
"waxed_weathered_copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_weathered_copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_copper_bulb"
},
"waxed_weathered_copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "waxed_weathered_copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "waxed_weathered_copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_copper_door"
},
"waxed_weathered_copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_weathered_copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_copper_grate"
},
"waxed_weathered_copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_weathered_copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_copper_trapdoor"
},
"waxed_weathered_cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_weathered_cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_cut_copper"
},
"waxed_weathered_cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "waxed_weathered_cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "waxed_weathered_cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_cut_copper_slab"
},
"waxed_weathered_cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "waxed_weathered_cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/waxed_weathered_cut_copper_stairs"
},
"weathered_chiseled_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "weathered_chiseled_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_chiseled_copper"
},
"weathered_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "weathered_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_copper"
},
"weathered_copper_bulb":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "weathered_copper_bulb"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_copper_bulb"
},
"weathered_copper_door":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "weathered_copper_door",
              "condition": "block_state_property",
              "properties": {
                "half": "lower"
              }
            }
          ],
          "name": "weathered_copper_door"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_copper_door"
},
"weathered_copper_grate":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "weathered_copper_grate"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_copper_grate"
},
"weathered_copper_trapdoor":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "weathered_copper_trapdoor"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_copper_trapdoor"
},
"weathered_cut_copper":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "weathered_cut_copper"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_cut_copper"
},
"weathered_cut_copper_slab":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "weathered_cut_copper_slab",
                  "condition": "block_state_property",
                  "properties": {
                    "type": "double"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "weathered_cut_copper_slab"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_cut_copper_slab"
},
"weathered_cut_copper_stairs":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "weathered_cut_copper_stairs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weathered_cut_copper_stairs"
},
"weeping_vines":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "weeping_vines"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "chances": [
                    0.33,
                    0.55,
                    0.77,
                    1.0
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "weeping_vines"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weeping_vines"
},
"weeping_vines_plant":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "items": "shears"
                      }
                    },
                    {
                      "condition": "match_tool",
                      "predicate": {
                        "predicates": {
                          "enchantments": [
                            {
                              "enchantments": "silk_touch",
                              "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "name": "weeping_vines"
            },
            {
              "type": "item",
              "conditions": [
                {
                  "chances": [
                    0.33,
                    0.55,
                    0.77,
                    1.0
                  ],
                  "condition": "table_bonus",
                  "enchantment": "fortune"
                }
              ],
              "name": "weeping_vines"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/weeping_vines_plant"
},
"wet_sponge":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "wet_sponge"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/wet_sponge"
},
"wheat":{
  "type": "block",
  "functions": [
    {
      "function": "explosion_decay"
    }
  ],
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "item",
              "conditions": [
                {
                  "block": "wheat",
                  "condition": "block_state_property",
                  "properties": {
                    "age": "7"
                  }
                }
              ],
              "name": "wheat"
            },
            {
              "type": "item",
              "name": "wheat_seeds"
            }
          ]
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "block": "wheat",
          "condition": "block_state_property",
          "properties": {
            "age": "7"
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "enchantment": "fortune",
              "formula": "binomial_with_bonus_count",
              "function": "apply_bonus",
              "parameters": {
                "extra": 3,
                "probability": 0.5714286
              }
            }
          ],
          "name": "wheat_seeds"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/wheat"
},
"white_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "white_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_banner"
},
"white_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "white_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "white_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_bed"
},
"white_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "white_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "white_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "white_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "white_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_candle"
},
"white_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "white_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_candle_cake"
},
"white_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_carpet"
},
"white_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_concrete"
},
"white_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_concrete_powder"
},
"white_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_glazed_terracotta"
},
"white_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "white_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_shulker_box"
},
"white_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_stained_glass"
},
"white_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_stained_glass_pane"
},
"white_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_terracotta"
},
"white_tulip":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_tulip"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_tulip"
},
"white_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "white_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/white_wool"
},
"wither_rose":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "wither_rose"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/wither_rose"
},
"wither_skeleton_skull":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "wither_skeleton_skull"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/wither_skeleton_skull"
},
"yellow_banner":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "item_name",
                "hide_additional_tooltip",
                "banner_patterns",
                "rarity"
              ],
              "source": "block_entity"
            }
          ],
          "name": "yellow_banner"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_banner"
},
"yellow_bed":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "block": "yellow_bed",
              "condition": "block_state_property",
              "properties": {
                "part": "head"
              }
            }
          ],
          "name": "yellow_bed"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_bed"
},
"yellow_candle":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "conditions": [
                {
                  "block": "yellow_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "2"
                  }
                }
              ],
              "count": 2.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "yellow_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "3"
                  }
                }
              ],
              "count": 3.0,
              "function": "set_count"
            },
            {
              "add": false,
              "conditions": [
                {
                  "block": "yellow_candle",
                  "condition": "block_state_property",
                  "properties": {
                    "candles": "4"
                  }
                }
              ],
              "count": 4.0,
              "function": "set_count"
            },
            {
              "function": "explosion_decay"
            }
          ],
          "name": "yellow_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_candle"
},
"yellow_candle_cake":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "yellow_candle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_candle_cake"
},
"yellow_carpet":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_carpet"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_carpet"
},
"yellow_concrete":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_concrete"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_concrete"
},
"yellow_concrete_powder":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_concrete_powder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_concrete_powder"
},
"yellow_glazed_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_glazed_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_glazed_terracotta"
},
"yellow_shulker_box":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "function": "copy_components",
              "include": [
                "custom_name",
                "container",
                "lock",
                "container_loot"
              ],
              "source": "block_entity"
            }
          ],
          "name": "yellow_shulker_box"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_shulker_box"
},
"yellow_stained_glass":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_stained_glass"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_stained_glass"
},
"yellow_stained_glass_pane":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "match_tool",
          "predicate": {
            "predicates": {
              "enchantments": [
                {
                  "enchantments": "silk_touch",
                  "levels": {
                    "min": 1
                  }
                }
              ]
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_stained_glass_pane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_stained_glass_pane"
},
"yellow_terracotta":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_terracotta"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_terracotta"
},
"yellow_wool":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "survives_explosion"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "yellow_wool"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/yellow_wool"
},
"zombie_head":{
  "type": "block",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "zombie_head"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "blocks/zombie_head"
},
} as const;