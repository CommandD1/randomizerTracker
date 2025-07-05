import { Names } from "./connection/links";
import { isBlock } from "./object/blockNames";
import { isItem, itemNames } from "./object/itemNames";
import { isChest } from "./transformation/chestLoot";
import { isEntity } from "./transformation/entityLoot";

export function imageName(name:Names){
    if(isItem(name))return name;
    if(isBlock(name))return name;
    if(isEntity(name)){
        if(isItem(`${name}_spawn_egg`))return `${name}_spawn_egg`
        return "armor_stand";
    }
    if(isChest(name))return "chest"
    return name
}