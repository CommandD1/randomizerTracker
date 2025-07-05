import { imageName } from "../imageName";
import { setId } from "../main";
import { Id } from "../object/id";

export function createIcon(id:Id){
    const img = document.createElement('img');
      img.src = `assets/${imageName(id)}.png`
      img.className = "result-image";
      /*
      img.onerror = ()=>{
        img.onerror=null; 
        img.src=`assets/${id}.gif`;
      }
        */
      img.alt = id;
    return img
}