import { ItemName } from "../object/itemNames"

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