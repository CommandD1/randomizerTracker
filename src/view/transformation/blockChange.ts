import { BlockName } from "../object/blockNames";

export const blockChange:[BlockName,BlockName,BlockName][] = [
    ["anvil","air","chipped_anvil"],
    ["chipped_anvil","air","damaged_anvil"],

    ["red_concrete_powder","water","red_concrete"],
    ["blue_concrete_powder","water","blue_concrete"],
    ["cyan_concrete_powder","water","cyan_concrete"],
    ["gray_concrete_powder","water","gray_concrete"],
    ["lime_concrete_powder","water","lime_concrete"],
    ["pink_concrete_powder","water","pink_concrete"],
    ["black_concrete_powder","water","black_concrete"],
    ["brown_concrete_powder","water","brown_concrete"],
    ["green_concrete_powder","water","green_concrete"],
    ["white_concrete_powder","water","white_concrete"],
    ["orange_concrete_powder","water","orange_concrete"],
    ["purple_concrete_powder","water","purple_concrete"],
    ["yellow_concrete_powder","water","yellow_concrete"],
    ["magenta_concrete_powder","water","magenta_concrete"],
    ["light_blue_concrete_powder","water","light_blue_concrete"],
    ["light_gray_concrete_powder","water","light_gray_concrete"],

    ["melon_stem","melon","attached_melon_stem"],
    ["pumpkin_stem","pumpkin","attached_pumpkin_stem"],
    
    ["dirt","azalea","rooted_dirt"],
    //todo
] as const