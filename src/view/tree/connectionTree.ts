import { connections } from "../connection/connection";
import { variableConnections } from "../connection/variableConnections";
import { TreeNode } from "./doubleTree";
import { Id } from "../object/id";
import { Process, Processes as processes } from "../connection/process";
import { links, Names } from "../connection/links";
export function connectionTree(id:Id,depth:number,visited?:Set<Id>,process?:Process):TreeNode{
    if(visited===undefined)visited = new Set()
    if(depth===0)return{
        name:id
    }
    if(visited.has(id))return{
        name:id
    }
    const children:TreeNode[] = []
    visited.add(id);
    variableConnections.forEach(connection=>{
        if(connection.inputs.includes(id)){
            children.push(connectionTree(connection.output,depth-1,visited,connection.process))
        }
    })
    if(process===undefined)return{
        name:id,
        children
    } 
    return {
        name:id,
        processName:process,
        processId:processes[process][0],
        children
    }
}
export function connectionTreeChildren(id:Id,depth:number,visited?:Set<Id>):TreeNode[]{
    if(visited===undefined)visited = new Set();
    if(depth===0)return[];
    if(visited.has(id))return[];
    visited.add(id);
    const children:TreeNode[] = [];
    variableConnections.forEach(connection=>{
        if(connection.inputs.includes(id)){
            children.push({
                processName:connection.process,
                processId:processes[connection.process][0],
                name:connection.output,
                children:connectionTreeChildren(connection.output,depth-1,visited)
            })
        }
    })
    return children;
}
function linkColor(process:Process){
    switch(process){
        case "breakBlock":
            return "#00cc00";
        case "transform":
            return "#0000cc"
        default:
            return ""
    }
}
export function shortestDownToIdTree(rootId: Id, depth: number): TreeNode[] {
    const visited = new Set<Names>();
    const nodeMap = new Map<Names, TreeNode>();
    const rootNode: TreeNode = {
        name: rootId,
        children: []
    };
    nodeMap.set(rootId, rootNode);
    visited.add(rootId);
    const queue: Array<{ id: Names; depth: number; parent: TreeNode }> = [
        { id: rootId, depth, parent: rootNode }
    ];
    while (queue.length > 0) {
        const { id, depth, parent } = queue.shift()!;
        if (depth === 0) continue;

        
        links.get(id)?.down.forEach(({item,icon,process})=>{
            if(visited.has(item))return;
            visited.add(item);
            let processId:Process|Id|undefined = processes[process][0];
            if(processId===undefined)processId = icon;
            const childNode: TreeNode = {
                name: item,
                processId,
                processName: process,
                children: [],
                color:linkColor(process)
            };
            if(parent.children===undefined)parent.children=[];
            parent.children.push(childNode);
            nodeMap.set(item, childNode);
            queue.push({ id: item, depth: depth - 1, parent: childNode });
        })
        
        /*
        for (const connection of variableConnections) {
            if (connection.inputs.includes(id)) {
                const childId = connection.output;
                if (!visited.has(childId)) {
                    visited.add(childId);
                    let processId:Id|undefined = processes[connection.process][0]
                    if(processId===undefined){
                        if(connection.inputs.length>1){
                            const options = connection.inputs.filter((inputId)=>inputId!==id)
                            processId = options[Math.floor(Math.random()*options.length)]
                        }
                    }
                    function getColor(){
                        switch(connection.process){
                            case "breakBlock":return "#00cc00"
                            default: return ""
                        }
                    }
                    const childNode: TreeNode = {
                        name: childId,
                        processId,
                        processName: connection.process,
                        children: [],
                        color:getColor()
                    };
                    if(parent.children===undefined)parent.children=[];
                    parent.children.push(childNode);
                    nodeMap.set(childId, childNode);
                    queue.push({ id: childId, depth: depth - 1, parent: childNode });
                }
            }
        }
        */ 
    }
    return rootNode.children as TreeNode[];
}
export function shortestUpToIdTree(rootId: Id, depth: number): TreeNode[] {
    const visited = new Set<Names>();
    const nodeMap = new Map<Names, TreeNode>();
    const rootNode: TreeNode = {
        name: rootId,
        children: []
    };
    nodeMap.set(rootId, rootNode);
    visited.add(rootId);
    const queue: Array<{ id: Names; depth: number; parent: TreeNode }> = [
        { id: rootId, depth, parent: rootNode }
    ];
    while (queue.length > 0) {
        const { id, depth, parent } = queue.shift()!;
        if (depth === 0) continue;
        
        links.get(id)?.up.forEach(({item,icon,process})=>{
            if(visited.has(item))return
            visited.add(item);
            let processId:Process|Id|undefined = processes[process][0];
            if(processId===undefined)processId = icon;
            const childNode: TreeNode = {
                name: item as Names,
                processId,
                processName: process,
                children: [],
                color:linkColor(process)
            };
            if(parent.children===undefined)parent.children=[];
            parent.children.push(childNode);
            nodeMap.set(item, childNode);
            queue.push({ id: item as Names, depth: depth - 1, parent: childNode });
            
        })
            
        /*
        for (const connection of variableConnections) {
            if (connection.output===id) {
                connection.inputs.forEach((input,inputIndex)=>{
                    const childId = input;
                    if (!visited.has(childId)) {
                        visited.add(childId);
                        let processId:Id|undefined = processes[connection.process][0]
                        if(processId===undefined){
                            if(connection.inputs.length>1){
                                const options = connection.inputs.filter((_,id)=>id!==inputIndex)
                                processId = options[Math.floor(Math.random()*options.length)]
                            }
                        }
                        const childNode: TreeNode = {
                            name: childId,
                            processId,
                            processName: connection.process,
                            children: [],
                            color:connection.process==="breakBlock"?"#00cc00":""
                        };
                        if(parent.children===undefined)parent.children=[];
                        parent.children.push(childNode);
                        nodeMap.set(childId, childNode);
                        queue.push({ id: childId, depth: depth - 1, parent: childNode });
                    }
                })
            }
        }
        */
            
    }
    return rootNode.children as TreeNode[];
}