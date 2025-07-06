import Connection, { addCount, ItemCount } from "./connection/connection";
import Count from "./connection/countItems";
import esbuild from "esbuild"
import { isItem, ItemName, itemNames } from "./object/itemNames";
import { BlockName, blockNames, isBlock } from "./object/blockNames";
import imageSearch from "./imageSearch";
import { TagName, tagToItems } from "./object/tags";
import { place } from "./transformation/place";
import { recipes } from "./connection/recipe";
import { Id, ids, idToText } from "./object/id";
import * as d3 from "d3";
import { HierarchyNode, HierarchyPointLink, HierarchyPointNode } from "d3";
import { doubleTree } from "./tree/doubleTree";
import Fuse from "fuse.js";
import { breakSidebar } from "./breakResult/breakSidebar";
import { CookieMap } from "./breakResult/cookieMap";
import { updateVariableConnections } from "./connection/variableConnections";
import { createIcon } from "./display/icon";
import { entityLoot } from "./transformation/entityLoot";
import { links, Names } from "./connection/links";
import { imageName } from "./imageName";
function getUrlId():Id{
  let id:Id = "stone";
    const searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has("id")){
        id = searchParams.get("id") as Id;
    }else{
        searchParams.set("id",id)
        window.location.href = window.location.pathname + '?' + searchParams.toString();
    }
    return id
}
export function getDepth():number{
  const searchParams = new URLSearchParams(window.location.search);
  if(searchParams.has("depth")){
    let depth = searchParams.get("depth");
    if(depth===null)return 5
    return Number(depth)
  }
  return 5;
}
const id = getUrlId()
const tree = new doubleTree(id);
const sideBar = new breakSidebar(id)
const header = document.getElementById("item-header")!
const icon = document.getElementById("item-icon") as HTMLImageElement
icon.className = "result-image";
export function updateId(id:Names){
  sideBar.setId(id)
  document.title = idToText(id)
  const img = createIcon(id);
  icon.src = `assets/${imageName(id)}.png`
  header.appendChild(img)
  header.textContent = idToText(id)
}
Object.keys(entityLoot).forEach(key=>{
  if(itemNames.includes(key as ItemName)){
    console.log(key)
  }
})
export function setId(id:Id){
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set("id",id)
  history.pushState({id}, "", `?${searchParams.toString()}`);
  updateId(id)
  tree.drawGraph(id)
}
updateId(id)
export function drawGraph(id:Id){
  tree.drawGraph(id)
}
window.addEventListener("popstate",(event)=>{
  const id = getUrlId();
  tree.drawGraph(id)
  updateId(id)
})
let cookiemap = new CookieMap("break")
let count = 0;
let total = 0;
itemNames.forEach(item=>{
  if(isBlock(item)){
    total++;
    if(cookiemap.get(item).length){
      count++;
    }
  }
})
let percentage = (count/total*100).toFixed(1)
console.log(`${percentage} percent mined`)
/*
interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  parent?: TreeNode | null;
  side: "left" | "right"|"center";
  collapsed?: boolean;
}
const rootNode: TreeNode = {
  id: "root",
  name: "Root",
  side: "center",
  children: [
    {
      id: "left1",
      name: "Left Node 1",
      side: "left",
      children: [{
        id:"iodjfs",
        name:"lol",
        side:"left",
      },
    {
        id:"dol",
        name:"gol",
        side:"left",
      }],
    },
    {
      id: "right1",
      name: "Right Node 1",
      side: "right",
      children: [{
        id:"iodauihshdjfs",
        name:"duhfw",
        side:"right",
      },
    {
        id:"dofsefsel",
        name:"gadsfol",
        side:"right",
      }],
    },
  ],
};

const linkGen = d3.linkHorizontal<HierarchyPointLink<TreeNode>, HierarchyPointNode<TreeNode>>()
  .x(d => -d.y)
  .y(d => -d.x);

const width = 800;
const height = 600;

const svg = d3.select("#graph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create groups for left and right
const g = svg.append("g").attr("transform", `translate(${width / 2}, ${0})`);
const leftGroup = g.append("g").attr("class", "left-tree");
const rightGroup = g.append("g").attr("class", "right-tree");

function updateTree(root: TreeNode) {
  const leftData = d3.hierarchy(root, d => d.side === "left" || d.side === "center" ? d.children : null);
  const rightData = d3.hierarchy(root, d => d.side === "right" || d.side === "center" ? d.children : null);

  const treeLayout = d3.tree<TreeNode>().size([height, width / 2]);

  // LEFT TREE
  const leftTree = treeLayout(leftData);
  leftGroup.selectAll("path.link")
    .data(leftTree.links())
    .join("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal<HierarchyPointLink<TreeNode>, HierarchyPointNode<TreeNode>>()
  .x(d => -d.y)
  .y(d => d.x));

  leftGroup.selectAll("circle.node")
    .data(leftTree.descendants())
    .join("circle")
    .attr("class", "node")
    .attr("r", 5)
    .attr("cx", d => -d.y)
    .attr("cy", d => d.x);

  // RIGHT TREE
  const rightTree = treeLayout(rightData);
  rightGroup.selectAll("path.link")
    .data(rightTree.links())
    .join("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal<HierarchyPointLink<TreeNode>, HierarchyPointNode<TreeNode>>()
    .x(d => d.y)
    .y(d => d.x)
    );

  rightGroup.selectAll("circle.node")
    .data(rightTree.descendants())
    .join("circle")
    .attr("class", "node")
    .attr("r", 5)
    .attr("cx", d => d.y)
    .attr("cy", d => d.x);
}

updateTree(rootNode);
/*
function toggleNode(d: TreeNode) {
  if (d.children) {
    d.collapsed = !d.collapsed;
    if (d.collapsed) {
      d._children = d.children;
      d.children = [];
    } else {
      d.children = d._children;
    }
    updateTree(rootNode);
  }
}
  */
/*
function createItemImage(itemName:ItemName){
    //imageSearch(itemName)
    //return;
    const imgtag = document.createElement("img");
    let betterName = itemName.replace("","").split("")
    imgtag.height = 30;
    imgtag.width = 30;
    imgtag.src = `item/${betterName.join("")}.png`;
    imgtag.onerror = ()=>{
        imgtag.src = `item/${betterName.join("")}.gif`
    }
    imgtag.onload = ()=>{
        const naturalWidth = imgtag.naturalWidth;
        const displayWidth = imgtag.clientWidth;
        console.log(naturalWidth,displayWidth)

        if (displayWidth > naturalWidth) {
            imgtag.style.imageRendering = "pixelated"
        }
    }
    //onerror="this.src='img/undefined.jpg';"
    //imgtag.src = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.21.6/assets/minecraft/textures/item/${betterName.join("")}.png`;
    let capitilize = true
    for(let i = 0;i<betterName.length;i++){
        if(capitilize){
            betterName[i]=betterName[i].toUpperCase()
            capitilize = false;
        }else{
            if(betterName[i]==="_")capitilize = true
        }
    }
    //imgtag.src = `https://minecraft.wiki/images/${betterName.join("")}_JE1_BE2.png`
    document.body.appendChild(imgtag)
    //body?.append(imgtag)
}
itemNames.forEach(createItemImage)
const connections:Connection[] = []

itemNames.forEach(item=>{
    if(place(item)===undefined)console.log(item)
})
//console.log(connections)
*/