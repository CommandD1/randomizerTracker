import { BlockName, isBlock } from "../object/blockNames";
import { ItemName } from "../object/itemNames";

export const placement = new Map<ItemName,BlockName>([
    ["bamboo","bamboo_sapling"],
    ["wheat_seeds","wheat"],
    ["carrot","carrots"],
    ["potato","potatoes"],
    ["beetroot_seeds","beetroots"],
    ["melon_seeds","melon_stem"],
    ["pumpkin_seeds","pumpkin_stem"],
    ["pitcher_pod","pitcher_crop"],
    ["cocoa_beans","cocoa"],
    ["sweet_berries","sweet_berry_bush"],
    ["glow_berries","cave_vines"],
    
    ["powder_snow_bucket","powder_snow"],
    ["water_bucket","water"],
    ["lava_bucket","lava"],

    ["flint_and_steel","fire"],
    ["redstone","redstone_wire"],
])
export function place(item:ItemName):BlockName|undefined{
    if(isBlock(item))return item
    if(placement.has(item))return placement.get(item)
    return
}