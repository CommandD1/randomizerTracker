import { CookieMap } from "../breakResult/cookieMap";
import { isBlock } from "../object/blockNames";
import { Id } from "../object/id";
import { isItem } from "../object/itemNames";
import { isChest } from "../transformation/chestLoot";
import { isEntity } from "../transformation/entityLoot";
import { blockItemDrops } from "./blocks";
import { chestItemLoot } from "./chests";
import Connection, { connections } from "./connection";
import { entityItemLoot } from "./entities";
const cookieMap = new CookieMap("break")
export let variableConnections:Connection[] = [...connections];
export function updateVariableConnections(){
    variableConnections = []
    blockItemDrops.forEach((items,block)=>{
        items.forEach(item=>{
            cookieMap.get(item).forEach(drop=>{
                variableConnections.push({
                    inputs:[block],
                    inputTypes:["Block"],
                    process:"breakBlock",
                    output:drop as Id,
                    outputType:"Item"
                })
            })
        })
    })
    cookieMap.keys().forEach(key=>{
        cookieMap.get(key).forEach(element=>{
            if(element==="nothing")return;
            if(isEntity(element)){
                (entityItemLoot.get(element)??[]).forEach(item=>{
                    let connection:Connection = {
                        inputs:[key as Id],
                        inputTypes:["Block"],
                        process:"breakBlock",//"killEntity",
                        output:item as Id,
                        outputType:"Item"
                    }
                    variableConnections.push(connection)
                })
            }else if(isChest(element)){
                (chestItemLoot.get(element)??[]).forEach(item=>{
                    let connection:Connection = {
                        inputs:[key as Id],
                        inputTypes:["Block"],
                        process:"breakBlock",//"lootChest",
                        output:item as Id,
                        outputType:"Item"
                    }
                    variableConnections.push(connection)
                })
            }else{
                let connection:Connection = {
                    inputs:[key as Id],
                    inputTypes:["Block"],
                    process:"breakBlock",
                    output:element as Id,
                    outputType:"Item"
                }
                variableConnections.push(connection)
            }
            
        })
    })
    variableConnections.push(...connections)
}