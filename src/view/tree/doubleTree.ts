import * as d3 from "d3";
import { Id, idToText } from "../object/id";
import { connectionTree, shortestDownToIdTree, connectionTreeChildren, shortestUpToIdTree } from "./connectionTree";
import { Process } from "../connection/process";
import { updateId } from "../main";
import { Names } from "../connection/links";
import { imageName } from "../imageName";
export interface TreeNode {
  processName?: Process;
  processId?: Id
  name: Names;
  children?: TreeNode[];
  color?:string;
}

export class doubleTree{
    width = 1250;
    height = 530;
    rectWidth = 30;
    rectHeight = 30;
    nodePictureSize = 25;
    linkPictureSize = 15;
    nodeHeightPadding = 40;
    nodeWidthPadding = 5;
    constructor(id:Id){
       this.drawGraph(id)
    }
    drawGraph(id:Names){
        if(window.innerWidth < 599){
            console.log("Screen too narrow. Graph not rendered.");
            return;
        }
         d3.select("#graph").select("svg").remove();
         const svg = d3.select(document.getElementById("graph"))
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);
            
        const downG = svg.append("g")
        const downRoot = d3.hierarchy({
            name:id,
            children:shortestDownToIdTree(id,10)
        } as TreeNode);
        const downTreeLayout = d3.tree<TreeNode>()
        .nodeSize([this.rectWidth + this.nodeWidthPadding, this.rectHeight + this.nodeHeightPadding])
        .separation(()=>1)
        downTreeLayout(downRoot);
        this.updateObjects(downG,downRoot,1)

        const upG = svg.append("g")
        const upRoot = d3.hierarchy({
            name: id,
            children: shortestUpToIdTree(id,10)
        } as TreeNode);
        const upTreeLayout = d3.tree<TreeNode>()
        .nodeSize([this.rectWidth + this.nodeWidthPadding, this.rectHeight + this.nodeHeightPadding])
        .separation(()=>1)
        upTreeLayout(upRoot);
        this.updateObjects(upG,upRoot,-1)
        
        
        
        
       const zoom = d3.zoom<SVGSVGElement, unknown>()
           .scaleExtent([0.5, 2]) 
           .on('zoom', (event) => {
                upG.attr('transform', event.transform)
                downG.attr('transform', event.transform);
           });
        svg.call(zoom as any);
        svg.call(zoom.transform as any,d3.zoomIdentity.translate(this.width / 2, this.height / 2))
    }
    updateObjects(g:d3.Selection<SVGGElement, unknown, null, undefined>,root:d3.HierarchyNode<TreeNode>,flip:1|-1){
        const linkGen = d3.linkVertical<d3.HierarchyPointLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
            .x(d => d.x+this.rectWidth/2)
            .y(d => flip*d.y+this.rectHeight/2);
        g.selectAll(".link")
            .data(root.links() as d3.HierarchyPointLink<TreeNode>[])
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", d=>linkGen(d))
            .style("stroke",(d)=>{
                return d.target.data.color??"#333333"
            });
        const images = g.selectAll(".link-image")
            .data(root.links())
            .enter()
            .append("image")
            .attr("class", "link-image")
            .attr("href", d => d.target.data.processId===undefined?"":`assets/${imageName(d.target.data.processId)}.png`)
            .attr("width", this.linkPictureSize)
            .attr("height", this.linkPictureSize)
            .attr("x", d => ((d.source.x??0)+(d.target.x??0)+this.rectWidth-this.linkPictureSize)/2) 
            .attr("y", d => (flip*((d.source.y??0)+(d.target.y??0))+this.rectHeight-this.linkPictureSize)/2)
            /*
            .each(function(d) {
                this.onerror = function() {
                    this.setAttribute("xlink:href", `assets/${d.target.data.processId}.gif`);
                };
            })
                */
        const node = g.selectAll(".node")
            .data(root.descendants())
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", d => `translate(${d.x??0 - this.rectWidth / 2}, ${flip*(d.y??0)})`);
         node.append("rect")
            .attr("width", this.rectWidth)
            .attr("height", this.rectHeight)
            .attr("fill", "#aaaaaa")
            .attr("stroke", "#555")
            .attr("rx", 6)
            .attr("ry", 6);
        const tooltip = d3.select("#tooltip");
        node.append("image")
            .attr("href", d => `assets/${imageName(d.data.name)}.png`)
            .attr("x", this.rectWidth/2-this.nodePictureSize/2)
            .attr("y", this.rectHeight/2-this.nodePictureSize/2)
            .attr("width", this.nodePictureSize)
            .attr("height", this.nodePictureSize)
            /*
            .each(function(d) {
                this.onerror = function() {
                    this.setAttribute("href", `assets/${d.data.name}.gif`);
                };
            })
                */
            .on("click",(event,d)=>{
                history.pushState({id:d.data.name}, "", `?id=${d.data.name}`);
                updateId(d.data.name)
                this.drawGraph(d.data.name)
            })
            .on("mouseover", (event, d) => {
                tooltip
                .style("opacity", 1)
                .html(idToText(d.data.name))
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px");
            })
            .on("mouseout", () => {
                tooltip.style("opacity", 0);
            });

    }
}