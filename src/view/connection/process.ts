import { BlockName } from "../object/blockNames";
import { Id } from "../object/id";

export const Processes
//:{[processName:string]:Id[]}
= {
    inventoryCrafting:[],
    craftingTable:["crafting_table"],
    stoneCutter:["stonecutter"],
    furnace:["furnace"],
    blastFurnace:["blast_furnace","furnace"],
    smoker:["smoker","furnace"],
    campfire:["campfire","soul_campfire"],

    breakBlock:[],
    place:[],
    useItem:[],
    changeBlock:[],
    transform:[],

    killEntity:[],
    lootChest:[],

    axe:["netherite_axe","diamond_axe","golden_axe","iron_axe","stone_axe","wooden_axe"],
    hoe:["netherite_hoe","diamond_hoe","golden_hoe","iron_hoe","stone_hoe","wooden_hoe"],

} as const
export type Process = keyof typeof Processes;