import { BlockName } from "../object/blockNames";
import { ItemName } from "../object/itemNames";
import { TagName } from "../object/tags";
import { Process } from "../connection/process";
//change to own processes
export const useTool:[BlockName,Process,BlockName][] = [
    ["waxed_oxidized_chiseled_copper","axe","oxidized_chiseled_copper"],
    ["waxed_weathered_chiseled_copper","axe","weathered_chiseled_copper"],
    ["waxed_exposed_chiseled_copper","axe","exposed_chiseled_copper"],
    ["waxed_chiseled_copper","axe","chiseled_copper"],
    ["oxidized_chiseled_copper","axe","weathered_chiseled_copper"],
    ["weathered_chiseled_copper","axe","exposed_chiseled_copper"],
    ["exposed_chiseled_copper","axe","chiseled_copper"],


    ["waxed_oxidized_copper","axe","oxidized_copper"],
    ["waxed_weathered_copper","axe","weathered_copper"],
    ["waxed_exposed_copper","axe","exposed_copper"],
    ["waxed_copper_block","axe","copper_block"],
    ["oxidized_copper","axe","weathered_copper"],
    ["weathered_copper","axe","exposed_copper"],
    ["exposed_copper","axe","copper_block"],

    ["waxed_oxidized_copper_bulb","axe","oxidized_copper_bulb"],
    ["waxed_weathered_copper_bulb","axe","weathered_copper_bulb"],
    ["waxed_exposed_copper_bulb","axe","exposed_copper_bulb"],
    ["waxed_copper_bulb","axe","copper_bulb"],
    ["oxidized_copper_bulb","axe","weathered_copper_bulb"],
    ["weathered_copper_bulb","axe","exposed_copper_bulb"],
    ["exposed_copper_bulb","axe","copper_bulb"],

    ["waxed_oxidized_copper_door","axe","oxidized_copper_door"],
    ["waxed_weathered_copper_door","axe","weathered_copper_door"],
    ["waxed_exposed_copper_door","axe","exposed_copper_door"],
    ["waxed_copper_door","axe","copper_door"],
    ["oxidized_copper_door","axe","weathered_copper_door"],
    ["weathered_copper_door","axe","exposed_copper_door"],
    ["exposed_copper_door","axe","copper_door"],

    ["waxed_oxidized_copper_grate","axe","oxidized_copper_grate"],
    ["waxed_weathered_copper_grate","axe","weathered_copper_grate"],
    ["waxed_exposed_copper_grate","axe","exposed_copper_grate"],
    ["waxed_copper_grate","axe","copper_grate"],
    ["oxidized_copper_grate","axe","weathered_copper_grate"],
    ["weathered_copper_grate","axe","exposed_copper_grate"],
    ["exposed_copper_grate","axe","copper_grate"],

    ["waxed_oxidized_copper_trapdoor","axe","oxidized_copper_trapdoor"],
    ["waxed_weathered_copper_trapdoor","axe","weathered_copper_trapdoor"],
    ["waxed_exposed_copper_trapdoor","axe","exposed_copper_trapdoor"],
    ["waxed_copper_trapdoor","axe","copper_trapdoor"],
    ["oxidized_copper_trapdoor","axe","weathered_copper_trapdoor"],
    ["weathered_copper_trapdoor","axe","exposed_copper_trapdoor"],
    ["exposed_copper_trapdoor","axe","copper_trapdoor"],

    ["waxed_oxidized_cut_copper","axe","oxidized_cut_copper"],
    ["waxed_weathered_cut_copper","axe","weathered_cut_copper"],
    ["waxed_exposed_cut_copper","axe","exposed_cut_copper"],
    ["waxed_cut_copper","axe","cut_copper"],
    ["oxidized_cut_copper","axe","weathered_cut_copper"],
    ["weathered_cut_copper","axe","exposed_cut_copper"],
    ["exposed_cut_copper","axe","cut_copper"],

    ["waxed_oxidized_cut_copper_slab","axe","oxidized_cut_copper_slab"],
    ["waxed_weathered_cut_copper_slab","axe","weathered_cut_copper_slab"],
    ["waxed_exposed_cut_copper_slab","axe","exposed_cut_copper_slab"],
    ["waxed_cut_copper_slab","axe","cut_copper_slab"],
    ["oxidized_cut_copper_slab","axe","weathered_cut_copper_slab"],
    ["weathered_cut_copper_slab","axe","exposed_cut_copper_slab"],
    ["exposed_cut_copper_slab","axe","cut_copper_slab"],

    ["waxed_oxidized_cut_copper_stairs","axe","oxidized_cut_copper_stairs"],
    ["waxed_weathered_cut_copper_stairs","axe","weathered_cut_copper_stairs"],
    ["waxed_exposed_cut_copper_stairs","axe","exposed_cut_copper_stairs"],
    ["waxed_cut_copper_stairs","axe","cut_copper_stairs"],
    ["oxidized_cut_copper_stairs","axe","weathered_cut_copper_stairs"],
    ["weathered_cut_copper_stairs","axe","exposed_cut_copper_stairs"],
    ["exposed_cut_copper_stairs","axe","cut_copper_stairs"],

    ["coarse_dirt","hoe","dirt"],
    //todo
] as const;