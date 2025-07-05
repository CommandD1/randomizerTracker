import { ItemCount } from "./connection";
import { ItemName } from "../object/itemNames";

export default class Count<T>{
    count:Map<T,number>
    constructor(){
        this.count = new Map();
    }
    add(id:T){
        const before = this.count.get(id)
        if(before===undefined){
            if(!this.count.has(id))this.count.set(id,1);
        }else{
            this.count.set(id,before+1)
        }
    }
    get(id:T){
        return this.count.get(id)
    }
    toItemCount():{id:T,count:number}[]{

        return Array.from(this.count).map(([id,count])=>{return {
            id,
            count
        }})
    }
    mappedItemCount(map:[T,ItemName][]):ItemCount[]{
        return map.map(([placeholder,id])=>{return {
            id,
            count:this.count.get(placeholder)??0
        }})
    }
}