import { Names } from "../connection/links";
import { BlockName, blockNames } from "./blockNames";
import { ItemName, itemNames } from "./itemNames";

export type Id = Names
export type DataType = "Block"|"Item"
export function idToText(id:Names){
    let capitilize = true;
    return id.split("").map(letter=>{
        if(capitilize){
            capitilize = false;
            return letter.toUpperCase();
        }
        if(letter==="_"){
            capitilize=true;
            return " ";
        }
        return letter;
    }).join("");
}
export const ids = Array.from(new Set([...itemNames,...blockNames]));