import { CookieMap } from "../breakResult/cookieMap"
import { BlockName } from "../object/blockNames"
import { Id } from "../object/id"
import { ItemName, itemNames } from "../object/itemNames"
import { ChestName } from "../transformation/chestLoot"
import { entityLoot, EntityName, isEntity } from "../transformation/entityLoot"
import { placement } from "../transformation/place"
import { useItem } from "../transformation/useItem"
import { useTool } from "../transformation/useTool"
import { blockItemDrops } from "./blocks"
import { chestItemLoot } from "./chests"
import { entityItemLoot } from "./entities"
import { Process, Processes } from "./process"
import { recipes } from "./recipe"
export type Names = ItemName|BlockName|ChestName|EntityName;
export const links:Map<Names,{
    up:{
        item:Names
        process:Process
        icon?:Id
    }[],
    down:{
        item:Names
        process:Process
        icon?:Id
    }[]
}> = new Map()
function mirrorLinks(before:Names,after:Id,process:Process,icon?:Id,){
    if(links.get(before)===undefined)links.set(before,{up:[],down:[]})
    links.get(before)?.down.push({
        item:after,
        icon,
        process
    })
    if(links.get(after)===undefined)links.set(after,{up:[],down:[]})
    links.get(after)?.up.push({
        item:before,
        icon,
        process
    })
}
placement.forEach((placed,item)=>{
    mirrorLinks(item,placed,"place",item)
})
useTool.forEach(([input,tool,output])=>{
    mirrorLinks(input,output,tool);
})
useItem.forEach(([input,item,output])=>{
    mirrorLinks(input,output,"useItem",item)
})
recipes.forEach(recipe=>{
    recipe.ingredients.forEach((ingredient,inputIndex)=>{
        let icon:Id|undefined = Processes[recipe.process][0]
        if(icon===undefined){
            if(recipe.ingredients.length>1){
                const options = recipe.ingredients.filter((_,id)=>id!==inputIndex)
                icon = options[Math.floor(Math.random()*options.length)].id
            }
        }
        mirrorLinks(ingredient.id,recipe.result.id,recipe.process,icon)
    })
})
const cookieMap = new CookieMap("break")
itemNames.forEach(itemName=>{
    cookieMap.get(itemName).forEach(drop=>{
        mirrorLinks(itemName,drop as Id,"transform");
    })
})
blockItemDrops.forEach((items,block)=>{
    items.forEach(item=>{
        cookieMap.get(item).forEach(drop=>{
            mirrorLinks(block,drop as Id,"breakBlock",item);
        })
    })
})
chestItemLoot.forEach((items,chest)=>{
    items.forEach(item=>{
        cookieMap.get(item).forEach(drop=>{
            mirrorLinks(chest,drop as Id,"lootChest",item);
        })
    })
})
Object.keys(entityLoot).forEach((entity)=>{
    cookieMap.get(entity).forEach(drop=>{
        if(isEntity(drop)){
            (entityItemLoot.get(drop)??[]).forEach(item=>{
                mirrorLinks(entity as EntityName,item as Id,"killEntity");
            })
        }
    })
})
export function addLink(itemName:Id,drop:Id){
    mirrorLinks(itemName,drop,"transform");
    mirrorLinks(itemName,drop as Id,"breakBlock",itemName);
    blockItemDrops.forEach((items,block)=>{
        if(items.includes(drop as ItemName)){
            mirrorLinks(block,drop,"breakBlock",itemName);
        }
    })
    chestItemLoot.forEach((items,chest)=>{
        if(items.includes(drop as ItemName)){
            mirrorLinks(chest,drop,"lootChest",itemName);
        }
    })
}
export function removeLink(itemName:Id,drop:Id){
    let up = links.get(drop)?.up
    if(up){
        for (let i = up.length - 1; i >= 0; i--) {
            if (up[i].item===itemName&&(up[i].process==="transform"||up[i].process==="breakBlock")) {
                up.splice(i, 1);
            }
        }
    }
    let down = links.get(itemName)?.down
    if(down){
        for (let i = down.length - 1; i >= 0; i--) {
            if (down[i].item===drop&&(down[i].process==="transform"||down[i].process==="breakBlock")) {
                down.splice(i, 1);
            }
        }
    }
    console.log(links.get(drop)?.up)
}