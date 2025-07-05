import { BlockName } from "../object/blockNames";
import { ItemName } from "../object/itemNames";
import { tagNames, tagToItems } from "../object/tags";
import { blockDrops } from "../transformation/blockDrops";

export const blockItemDrops:Map<BlockName,ItemName[]> = new Map()
Object.entries(blockDrops).forEach(([block,drop])=>{
    const drops:ItemName[] = []
    if("pools" in drop){
        for(let pool of drop.pools){
            for(let entry of pool.entries){
                if(entry.type==="item"){
                    drops.push(entry.name)
                }else{
                    for(let child of entry.children){
                        if(child.type==="item"){
                            drops.push(child.name)
                        }else{
                            if(child.type ==="alternatives"){
                                for(let i of child.children){
                                    drops.push(i.name)
                                }
                            }else{
                                if(child.name==="sherds"){
                                    drops.push(...tagToItems("#decorated_pot_ingredients"))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    blockItemDrops.set(block as BlockName,drops);
})