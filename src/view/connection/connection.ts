import { BlockName } from "../object/blockNames"
import { DataType, Id } from "../object/id"
import { ItemName } from "../object/itemNames"
import { Process } from "./process"
import { placement } from "../transformation/place"
import { useItem } from "../transformation/useItem"
import { useTool } from "../transformation/useTool"
import { recipes } from "./recipe"
import { links } from "./links"
import { blockDrops } from "../transformation/blockDrops"
import { blockItemDrops } from "./blocks"
export type ItemCount = {
    id:ItemName,
    count:number
}
export function addCount({id,count}:{id:ItemName,count?:number}):ItemCount{
    return {
        id,
        count:count===undefined?1:count
    }
}
export default interface Connection{
    inputs:Id[],
    inputTypes:DataType[],
    process:Process,
    output:Id,
    outputType:DataType,
}
export const connections:Connection[] = [
    ...Array.from(placement,([item,block]):Connection=>{return{
        inputs:[item],
        inputTypes:["Item"],
        process:"place",
        output:block,
        outputType:"Block"
    }}),
    ...useTool.map(([input,tool,output]):Connection=>{return{
        inputs:[input],
        inputTypes:["Block"],
        process:tool,
        output,
        outputType:"Block"
    }}),
    ...useItem.map(([input,item,output]):Connection=>{return{
        inputs:[input,item],
        inputTypes:["Block","Item"],
        process:"useItem",
        output,
        outputType:"Block"
    }}),
    ...recipes.map((recipe):Connection=>{return{
        inputs:recipe.ingredients.map(ingredient=>ingredient.id),
        inputTypes:Array(recipe.ingredients.length).fill("Item"),
        process:recipe.process,
        output:recipe.result.id,
        outputType:"Item"
    }}),
]
//add other connections