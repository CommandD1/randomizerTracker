import Connection, { addCount, ItemCount } from "./connection";
import Count from "./countItems";
import { isItem, ItemName } from "../object/itemNames";
import {recipeStructures} from "../transformation/recipeStructures";
import { TagName, tagToItems } from "../object/tags";
import { Process } from "./process";
interface Recipe {
    ingredients:ItemCount[],
    result:ItemCount,
    process:Process
}
export const recipes:Recipe[] = [];
recipeStructures.forEach(recipe=>{
    switch(recipe.type){
        case "smithing_trim":
        case "crafting_special_armordye":
        case "crafting_special_bannerduplicate":
        case "crafting_special_bookcloning":
        case "crafting_decorated_pot":
        case "crafting_special_firework_rocket":
        case "crafting_special_firework_star":
        case "crafting_special_firework_star_fade":
        case "crafting_special_mapcloning":
        case "crafting_special_mapextending":
        case "crafting_special_repairitem":
        case "crafting_special_shielddecoration":
        case "crafting_special_tippedarrow":
            return;
        case "crafting_shapeless":{
            const createConnection = (lastIngredient:ItemName)=>{
                recipes.push({
                    ingredients:[...count.toItemCount(),{
                        id:lastIngredient,
                        count:1
                    }],
                    result:recipe.result,
                    process:recipe.ingredients.length>4?"craftingTable":"inventoryCrafting"
                })
            } 
            const count = new Count<ItemName>();
            recipe.ingredients.forEach((ingredient,index)=>{
                if(index===recipe.ingredients.length-1){
                    if(typeof ingredient ==="object"){
                        ingredient.forEach(createConnection)
                        return
                    }
                    if(isItem(ingredient)){
                        createConnection(ingredient)
                    }else{
                        tagToItems(ingredient).forEach(createConnection)
                    }
                    return
                }
                if(typeof ingredient ==="object"){console.log(recipe);throw "shapeless option overflow"}
                if(isItem(ingredient)){
                    count.add(ingredient)
                }else{
                    throw "tag to early in crafting_shapeless"
                }
            })
        }return
        case "crafting_shaped":{
            const count = new Count();
            let craftingTable:boolean = false
            if(recipe.pattern.length===3)craftingTable = true
            recipe.pattern.forEach(layer=>{
                const row = layer.split("")
                if(row.length===3)craftingTable = true
                row.forEach(letter=>{
                    if(letter===" ")return;
                    count.add(letter)
                })
            })
            const possibleIngredients = Object.entries(recipe.key) as [string,ItemName|ItemName[]|TagName][];
            const countIngredients = ((ingredients:[string,ItemName][],index:number)=>{
                if(index===possibleIngredients.length){
                    recipes.push({
                        ingredients:count.mappedItemCount(ingredients),
                        result:recipe.result,
                        process:craftingTable?"craftingTable":"inventoryCrafting"
                    })
                    return;
                }
                const [from,to] = possibleIngredients[index];
                if(Array.isArray(to)){
                    to.forEach((element:ItemName)=>{
                        countIngredients([...ingredients,[possibleIngredients[index][0],element]],index+1)
                    })
                    return

                }
                if(isItem(to)){
                    ingredients.push([from,to])
                    countIngredients(ingredients,index+1)
                }else{
                    tagToItems(to).forEach((element:ItemName)=>{
                        countIngredients([...ingredients,[possibleIngredients[index][0],element]],index+1)
                    })
                }
                
            })
            countIngredients([],0);
        }return
        case "stonecutting":
            recipes.push({
                    ingredients:[{
                        id:recipe.ingredient,
                        count:1
                    }],
                    result:recipe.result,
                    process:"stoneCutter"
                })
            return
        case "smelting":{
            const createConnection = (ingredient:ItemName)=>{
                recipes.push({
                    ingredients:[{
                        id:ingredient,
                        count:1
                    }],
                    result:addCount(recipe.result),
                    process:"furnace"
                })
            } 
            if(typeof recipe.ingredient === "object"){
                recipe.ingredient.forEach(createConnection)
                return
            }
            if(isItem(recipe.ingredient)){
                createConnection(recipe.ingredient)
            }else{
                tagToItems(recipe.ingredient).forEach(createConnection)
            }
        }return
        case "blasting":{
            const createConnection = (ingredient:ItemName)=>{
                recipes.push({
                    ingredients:[{
                        id:ingredient,
                        count:1
                    }],
                    result:addCount(recipe.result),
                    process:"blastFurnace"
                })
            } 
            if(typeof recipe.ingredient === "object"){
                recipe.ingredient.forEach(createConnection)
                return
            }
            createConnection(recipe.ingredient)
        }return
        case "smoking":{
            recipes.push({
                ingredients:[{
                    id:recipe.ingredient,
                    count:1
                }],
                result:addCount(recipe.result),
                process:"smoker"
            })
        }return
        case "campfire_cooking":{
            recipes.push({
                ingredients:[{
                    id:recipe.ingredient,
                    count:1
                }],
                result:addCount(recipe.result),
                process:"campfire"
            })
        }return
        case "crafting_transmute":{
            tagToItems(recipe.input).forEach(id=>{
                recipes.push({
                    ingredients:[{
                        id,
                        count:1
                    },{
                        id:recipe.material,
                        count:1
                    }],
                    result:{
                        id:recipe.result,
                        count:1
                    },
                    process:"inventoryCrafting"
                })
            })
        }return
        default:
            return
    }
})


