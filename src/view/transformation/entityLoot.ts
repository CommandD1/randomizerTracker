export const entityLoot = {"allay":{
  "type": "entity",
  "random_sequence": "entities/allay"
},
"armadillo":{
  "type": "entity",
  "random_sequence": "entities/armadillo"
},
"armor_stand_entity":{
  "type": "entity",
  "random_sequence": "entities/armor_stand"
},
"axolotl":{
  "type": "entity",
  "random_sequence": "entities/axolotl"
},
"bat":{
  "type": "entity",
  "random_sequence": "entities/bat"
},
"bee":{
  "type": "entity",
  "random_sequence": "entities/bee"
},
"blaze":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "blaze_rod"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/blaze"
},
"bogged":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "arrow"
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "bone"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase",
              "limit": 1
            },
            {
              "function": "set_potion",
              "id": "poison"
            }
          ],
          "name": "tipped_arrow"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/bogged"
},
"breeze":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
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
            },
            {
              "count": {
                "type": "uniform",
                "max": 2.0,
                "min": 1.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "breeze_rod"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/breeze"
},
"camel":{
  "type": "entity",
  "random_sequence": "entities/camel"
},
"cat":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            }
          ],
          "name": "string"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/cat"
},
"cave_spider":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "string"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": -1.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "spider_eye"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/cave_spider"
},
"chicken_entity":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "feather"
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
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "chicken"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/chicken"
},
"cod_entity":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "cod"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "chance": 0.05,
          "condition": "random_chance"
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
  "random_sequence": "entities/cod"
},
"cow":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
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
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "beef"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/cow"
},
"creaking":{
  "type": "entity",
  "random_sequence": "entities/creaking"
},
"creeper":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "gunpowder"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "entity_properties",
          "entity": "attacker",
          "predicate": {
            "type": "#skeletons"
          }
        }
      ],
      "entries": [
        {
          "type": "tag",
          "expand": true,
          "name": "creeper_drop_music_discs"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/creeper"
},
"dolphin":{
  "type": "entity",
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "cod"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/dolphin"
},
"donkey":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/donkey"
},
"drowned":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rotten_flesh"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.13,
            "per_level_above_first": 0.02
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.11
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "copper_ingot"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/drowned"
},
"elder_guardian":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "prismarine_shard"
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "cod",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "prismarine_crystals",
          "weight": 2
        },
        {
          "type": "empty"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "wet_sponge"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.035,
            "per_level_above_first": 0.01
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.025
        }
      ],
      "entries": [
        {
          "type": "loot_table",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "value": "gameplay/fishing/fish"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "empty",
          "weight": 4
        },
        {
          "type": "item",
          "name": "tide_armor_trim_smithing_template"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/elder_guardian"
},
"enderman":{
  "type": "entity",
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "ender_pearl"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/enderman"
},
"endermite":{
  "type": "entity",
  "random_sequence": "entities/endermite"
},
"ender_dragon":{
  "type": "entity",
  "random_sequence": "entities/ender_dragon"
},
"evoker":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "totem_of_undying"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "emerald"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/evoker"
},
"fox":{
  "type": "entity",
  "random_sequence": "entities/fox"
},
"frog":{
  "type": "entity",
  "random_sequence": "entities/frog"
},
"ghast":{
  "type": "entity",
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "ghast_tear"
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "gunpowder"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/ghast"
},
"giant":{
  "type": "entity",
  "random_sequence": "entities/giant"
},
"glow_squid":{
  "type": "entity",
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
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "glow_ink_sac"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/glow_squid"
},
"goat":{
  "type": "entity",
  "random_sequence": "entities/goat"
},
"guardian":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "prismarine_shard"
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "cod",
          "weight": 2
        },
        {
          "type": "item",
          "functions": [
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "prismarine_crystals",
          "weight": 2
        },
        {
          "type": "empty"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.035,
            "per_level_above_first": 0.01
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.025
        }
      ],
      "entries": [
        {
          "type": "loot_table",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "value": "gameplay/fishing/fish"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/guardian"
},
"hoglin":{
  "type": "entity",
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
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "porkchop"
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
                "max": 1.0,
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/hoglin"
},
"horse":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/horse"
},
"husk":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rotten_flesh"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.035,
            "per_level_above_first": 0.01
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.025
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "iron_ingot"
        },
        {
          "type": "item",
          "name": "carrot"
        },
        {
          "type": "item",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "potato"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/husk"
},
"illusioner":{
  "type": "entity",
  "random_sequence": "entities/illusioner"
},
"iron_golem":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            }
          ],
          "name": "poppy"
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
                "min": 3.0
              },
              "function": "set_count"
            }
          ],
          "name": "iron_ingot"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/iron_golem"
},
"llama":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/llama"
},
"magma_cube":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "condition": "inverted",
              "term": {
                "condition": "damage_source_properties",
                "predicate": {
                  "source_entity": {
                    "type": "frog"
                  }
                }
              }
            },
            {
              "condition": "entity_properties",
              "entity": "this",
              "predicate": {
                "type_specific": {
                  "type": "slime",
                  "size": {
                    "min": 2
                  }
                }
              }
            }
          ],
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": -2.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "magma_cream"
        },
        {
          "type": "item",
          "conditions": [
            {
              "condition": "damage_source_properties",
              "predicate": {
                "source_entity": {
                  "type": "frog",
                  "type_specific": {
                    "type": "frog",
                    "variant": "warm"
                  }
                }
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
          "name": "pearlescent_froglight"
        },
        {
          "type": "item",
          "conditions": [
            {
              "condition": "damage_source_properties",
              "predicate": {
                "source_entity": {
                  "type": "frog",
                  "type_specific": {
                    "type": "frog",
                    "variant": "cold"
                  }
                }
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
          "name": "verdant_froglight"
        },
        {
          "type": "item",
          "conditions": [
            {
              "condition": "damage_source_properties",
              "predicate": {
                "source_entity": {
                  "type": "frog",
                  "type_specific": {
                    "type": "frog",
                    "variant": "temperate"
                  }
                }
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
          "name": "ochre_froglight"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/magma_cube"
},
"mooshroom":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
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
                "max": 3.0,
                "min": 1.0
              },
              "function": "set_count"
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "beef"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/mooshroom"
},
"mule":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/mule"
},
"ocelot":{
  "type": "entity",
  "random_sequence": "entities/ocelot"
},
"panda":{
  "type": "entity",
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
          "name": "bamboo"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/panda"
},
"parrot":{
  "type": "entity",
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
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "feather"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/parrot"
},
"phantom":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "phantom_membrane"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/phantom"
},
"pig":{
  "type": "entity",
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
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "porkchop"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/pig"
},
"piglin":{
  "type": "entity",
  "random_sequence": "entities/piglin"
},
"piglin_brute":{
  "type": "entity",
  "random_sequence": "entities/piglin_brute"
},
"pillager":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "entity_properties",
          "entity": "this",
          "predicate": {
            "type_specific": {
              "type": "raider",
              "is_captain": true
            }
          }
        }
      ],
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
              "amplifier": {
                "type": "uniform",
                "max": 4.0,
                "min": 0.0
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
  "random_sequence": "entities/pillager"
},
"player":{
  "type": "entity",
  "random_sequence": "entities/player"
},
"polar_bear":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "cod",
          "weight": 3
        },
        {
          "type": "item",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "salmon"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/polar_bear"
},
"pufferfish_entity":{
  "type": "entity",
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
          "name": "pufferfish"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "chance": 0.05,
          "condition": "random_chance"
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
  "random_sequence": "entities/pufferfish"
},
"rabbit_entity":{
  "type": "entity",
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rabbit_hide"
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
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rabbit"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.13,
            "per_level_above_first": 0.03
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.1
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "rabbit_foot"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/rabbit"
},
"ravager":{
  "type": "entity",
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
          "name": "saddle"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/ravager"
},
"salmon_entity":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "salmon"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "chance": 0.05,
          "condition": "random_chance"
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
  "random_sequence": "entities/salmon"
},
"sheep":{
  "type": "entity",
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
            },
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "mutton"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "alternatives",
          "children": [
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "white",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/white"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "orange",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/orange"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "magenta",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/magenta"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "light_blue",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/light_blue"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "yellow",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/yellow"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "lime",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/lime"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "pink",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/pink"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "gray",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/gray"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "light_gray",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/light_gray"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "cyan",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/cyan"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "purple",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/purple"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "blue",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/blue"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "brown",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/brown"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "green",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/green"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "red",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/red"
            },
            {
              "type": "loot_table",
              "conditions": [
                {
                  "condition": "entity_properties",
                  "entity": "this",
                  "predicate": {
                    "type_specific": {
                      "type": "sheep",
                      "color": "black",
                      "sheared": false
                    }
                  }
                }
              ],
              "value": "entities/sheep/black"
            }
          ]
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/sheep"
},
"shulker":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.5625,
            "per_level_above_first": 0.0625
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.5
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "shulker_shell"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/shulker"
},
"silverfish":{
  "type": "entity",
  "random_sequence": "entities/silverfish"
},
"skeleton":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "arrow"
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "bone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/skeleton"
},
"skeleton_horse":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "bone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/skeleton_horse"
},
"slime":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "entity_properties",
          "entity": "this",
          "predicate": {
            "type_specific": {
              "type": "slime",
              "size": 1
            }
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "conditions": [
            {
              "condition": "inverted",
              "term": {
                "condition": "damage_source_properties",
                "predicate": {
                  "source_entity": {
                    "type": "frog"
                  }
                }
              }
            }
          ],
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "slime_ball"
        },
        {
          "type": "item",
          "conditions": [
            {
              "condition": "damage_source_properties",
              "predicate": {
                "source_entity": {
                  "type": "frog"
                }
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
          "name": "slime_ball"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/slime"
},
"sniffer":{
  "type": "entity",
  "random_sequence": "entities/sniffer"
},
"snow_golem":{
  "type": "entity",
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
                "max": 15.0,
                "min": 0.0
              },
              "function": "set_count"
            }
          ],
          "name": "snowball"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/snow_golem"
},
"spider":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "string"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
      "entries": [
        {
          "type": "item",
          "functions": [
            {
              "add": false,
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": -1.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "spider_eye"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/spider"
},
"squid":{
  "type": "entity",
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
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "ink_sac"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/squid"
},
"stray":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "arrow"
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "bone"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase",
              "limit": 1
            },
            {
              "function": "set_potion",
              "id": "slowness"
            }
          ],
          "name": "tipped_arrow"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/stray"
},
"strider":{
  "type": "entity",
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
                "min": 2.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "string"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/strider"
},
"tadpole":{
  "type": "entity",
  "random_sequence": "entities/tadpole"
},
"trader_llama":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "leather"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/trader_llama"
},
"tropical_fish_entity":{
  "type": "entity",
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
          "name": "tropical_fish"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "chance": 0.05,
          "condition": "random_chance"
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
  "random_sequence": "entities/tropical_fish"
},
"turtle":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "seagrass",
          "weight": 3
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "damage_source_properties",
          "predicate": {
            "tags": [
              {
                "expected": true,
                "id": "is_lightning"
              }
            ]
          }
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "bowl"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/turtle"
},
"vex":{
  "type": "entity",
  "random_sequence": "entities/vex"
},
"villager":{
  "type": "entity",
  "random_sequence": "entities/villager"
},
"vindicator":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        }
      ],
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "emerald"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/vindicator"
},
"wandering_trader":{
  "type": "entity",
  "random_sequence": "entities/wandering_trader"
},
"warden":{
  "type": "entity",
  "pools": [
    {
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "item",
          "name": "sculk_catalyst"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/warden"
},
"witch":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "glowstone_dust"
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "sugar"
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "spider_eye"
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "glass_bottle"
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "gunpowder"
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "stick",
          "weight": 2
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
                "max": 8.0,
                "min": 4.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "redstone"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/witch"
},
"wither":{
  "type": "entity",
  "random_sequence": "entities/wither"
},
"wither_skeleton":{
  "type": "entity",
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
                "min": -1.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "coal"
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "bone"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.035,
            "per_level_above_first": 0.01
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.025
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "wither_skeleton_skull"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/wither_skeleton"
},
"wolf":{
  "type": "entity",
  "random_sequence": "entities/wolf"
},
"zoglin":{
  "type": "entity",
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
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rotten_flesh"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/zoglin"
},
"zombie":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rotten_flesh"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.035,
            "per_level_above_first": 0.01
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.025
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "iron_ingot"
        },
        {
          "type": "item",
          "name": "carrot"
        },
        {
          "type": "item",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "potato"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/zombie"
},
"zombie_horse":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rotten_flesh"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/zombie_horse"
},
"zombie_villager":{
  "type": "entity",
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
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rotten_flesh"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.035,
            "per_level_above_first": 0.01
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.025
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "iron_ingot"
        },
        {
          "type": "item",
          "name": "carrot"
        },
        {
          "type": "item",
          "functions": [
            {
              "conditions": [
                {
                  "condition": "any_of",
                  "terms": [
                    {
                      "condition": "entity_properties",
                      "entity": "this",
                      "predicate": {
                        "flags": {
                          "is_on_fire": true
                        }
                      }
                    },
                    {
                      "condition": "entity_properties",
                      "entity": "direct_attacker",
                      "predicate": {
                        "equipment": {
                          "mainhand": {
                            "predicates": {
                              "enchantments": [
                                {
                                  "enchantments": "#smelts_loot"
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "function": "furnace_smelt"
            }
          ],
          "name": "potato"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/zombie_villager"
},
"zombified_piglin":{
  "type": "entity",
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
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "rotten_flesh"
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
                "max": 1.0,
                "min": 0.0
              },
              "function": "set_count"
            },
            {
              "count": {
                "type": "uniform",
                "max": 1.0,
                "min": 0.0
              },
              "enchantment": "looting",
              "function": "enchanted_count_increase"
            }
          ],
          "name": "gold_nugget"
        }
      ],
      "rolls": 1.0
    },
    {
      "bonus_rolls": 0.0,
      "conditions": [
        {
          "condition": "killed_by_player"
        },
        {
          "condition": "random_chance_with_enchanted_bonus",
          "enchanted_chance": {
            "type": "linear",
            "base": 0.035,
            "per_level_above_first": 0.01
          },
          "enchantment": "looting",
          "unenchanted_chance": 0.025
        }
      ],
      "entries": [
        {
          "type": "item",
          "name": "gold_ingot"
        }
      ],
      "rolls": 1.0
    }
  ],
  "random_sequence": "entities/zombified_piglin"
}
} as const;
export type EntityName = keyof typeof entityLoot;
export function isEntity(value: string): value is EntityName {
  return value in entityLoot
}