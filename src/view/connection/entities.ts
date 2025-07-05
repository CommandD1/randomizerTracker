import { ItemName } from "../object/itemNames";
import { entityLoot, EntityName as EntityName } from "../transformation/entityLoot";

export const entityItemLoot:Map<EntityName,ItemName[]> = new Map()
Object.entries(entityLoot).forEach(([key,value])=>{
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
    entityItemLoot.set(key as EntityName,loot)
})
const Test:{
    [_:string]:{
        random_sequence:string,
        type: "entity",
        pools?:ReadonlyArray<{
            bonus_rolls:0,
            entries:ReadonlyArray<{
                type:"item" | "tag" | "empty" | "loot_table" | "alternatives",
                name?:string,
            }>,
            rolls:1 | {
                readonly type: "uniform";
                readonly max: 3;
                readonly min: 1;
            },
        }>
    }
} = entityLoot