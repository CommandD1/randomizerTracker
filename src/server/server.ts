import { ItemName, itemNames } from "../view/object/itemNames";
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const downloadFile = async (url: string, outputPath: string) => {
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    console.log(url)
    throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
  }
  const fileStream = createWriteStream(outputPath);
  await pipeline(response.body, fileStream);
  console.log(`Downloaded to ${outputPath}`);
};
async function getImage(query:Id){
    return new Promise((res)=>{

        let capitilize = true;
        let cleanedQuery = query.replace("","").split("").map(letter=>{
            if(capitilize){
                capitilize = false;
                return letter.toUpperCase();
            }
            if(letter==="_")capitilize=true;
            return letter;
        }).join("");
        
        const a =  fetch(`https://minecraft.wiki/api.php?action=query&titles=${cleanedQuery}&prop=pageimages&format=json&pithumbsize=500`)
        //const a = fetch(`https://minecraft.wiki/api.php?action=query&list=allimages&ailimit=50&aiprefix=${cleanedQuery}&format=json`)
        
        a.then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Use text first
      })
      .then(text => {
        try {
          let json:{
            query:{
            allimages:{
                name:string,
                timestamp:string,
                url:string,
                descriptionurl:string,
                descriptionshorturl:string
            }[]
            
            }
        } = JSON.parse(text);
        const images = json.query.allimages
        let counter = 0;
        Promise.all(images.map(image=>{
            return new Promise((r)=>{
                if(!image.name.endsWith(".png")){
                    r("")
                    return;
                }
                downloadFile(`https://minecraft.wiki/images/thumb/${image.name}/500px-${image.name}`,`src/public/img/${query.replace("","")}${counter}.png`).then(
                    ()=>r("")
                )
                counter++;
            })
        })).then(()=>res(""))
        

        } catch (err) {
          console.error('Failed to parse JSON:', text);
        }
      });
      
        
        /*
        try{
            json = await response.json();
        }catch(error){
            throw error
        }
        json.query.allimages.forEach(image=>{
            console.log(image.name.replace(cleanedQuery+"_","").replace(".png",""))
        })
        */
        /*
        Object.values(json.query.pages).forEach(entry=>{
            if("thumbnail" in entry){
                const fileUrl = entry.thumbnail?.source;
                if(fileUrl!==undefined){
                    const png = fileUrl.match(/\.png\?/)?.[0]
                    console.log(fileUrl)
                    downloadFile(fileUrl,`./src/public/img/${query.replace("","")}${png?".png":".gif"}`)
                }
            }
        })
            */
    })
}
import { access } from 'fs/promises';
import { constants } from 'fs';
import { response } from "express";
import { blockNames } from "../view/object/blockNames";
import { Id } from "../view/object/id";
async function fileExists(filePath: string): Promise<boolean> {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}


async function test(){
    const lost:string[] = []
    //run with block
    for(let itemName of blockNames){
        if(await fileExists(`./src/public/item/${itemName.replace("","")}.png`))continue;
        if(await fileExists(`./src/public/item/${itemName.replace("","")}.gif`))continue;
        //lost.push(itemName.replace("","").replaceAll("_"," "))
        //console.log(itemName.replace("",""))
        //console.log(itemName)
        if(await fileExists(`./src/public/img/${itemName.replace("","")}0.png`))continue
        await getImage(itemName)
        await setTimeout(()=>{},1000)
    }
    console.log(lost)
    /*
    for(const name of itemNames){
        await getImage(name)
        await setTimeout(()=>{},1000)
        }
        */
    
}
test()

