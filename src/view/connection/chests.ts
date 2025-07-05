import { ItemName } from "../object/itemNames";
import { chestLoot, ChestName } from "../transformation/chestLoot";

export const chestItemLoot:Map<ChestName,ItemName[]> = new Map()
Object.entries(chestLoot).forEach(([key,value])=>{
    let loot:ItemName[] = [];
    if("pools" in value){
        for(let pool of value.pools){
            for(let entry of pool.entries){
                switch(entry.type){
                    case"item":{
                        loot.push(entry.name)
                    }continue
                    default:{
                    }continue
                }
            }
        }
    }
    chestItemLoot.set(key as ChestName,loot)
})
const Test:{
    [_:string]:{
        random_sequence:string,
        type: "chest",
        pools?:ReadonlyArray<{
            bonus_rolls:0,
            entries:ReadonlyArray<{
                type:"item" | "tag" | "empty" | "loot_table" | "alternatives",
                name?:string,
            }>,
            
        }>
    }
} = chestLoot