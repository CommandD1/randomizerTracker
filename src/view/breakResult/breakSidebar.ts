import Fuse from "fuse.js";
import { Id, ids, idToText } from "../object/id";
import { CookieMap } from "./cookieMap";
import { drawGraph, setId, updateId } from "../main";
import { createIcon } from "../display/icon";
import { entityLoot, EntityName, isEntity } from "../transformation/entityLoot";
import { entityItemLoot } from "../connection/entities";
import { isBlock } from "../object/blockNames";
import { isItem } from "../object/itemNames";
import { chestLoot, ChestName, isChest } from "../transformation/chestLoot";
import { chestItemLoot } from "../connection/chests";
import { addLink, Names, removeLink } from "../connection/links";
import { imageName } from "../imageName";
export class breakSidebar{
  input:HTMLInputElement = document.getElementById('search-input') as HTMLInputElement;
  resultsList:HTMLUListElement = document.getElementById('results') as HTMLUListElement;
  itemList:HTMLElement  = document.getElementById('item-list')!;
  addButton:HTMLElement  = document.getElementById('add-button')!;
  searchInput:HTMLInputElement = document.getElementById('search-input') as HTMLInputElement;
  cookiemap = new CookieMap("break")
  fuse = new Fuse([...ids,...Object.keys(entityLoot),...Object.keys(chestLoot),"nothing"], {
      threshold: 0.3
  })
  constructor(private id:Names){
    this.input.addEventListener('input', () => {
      const query = this.input.value.trim();
      if (query === '') {
        this.resultsList.innerHTML = '';
        return;
      }
      const fuseResults = this.fuse.search(query).map(res => res);
      this.renderResults(fuseResults);
    });

    this.addButton.addEventListener('click', () => {
      const newItem = this.searchInput.value.trim() as Id;
      if(newItem && !this.cookiemap.has(this.id,newItem)){
        this.cookiemap.add(this.id,newItem);
        this.renderList();
        addLink(this.id,newItem);
        drawGraph(this.id)
        this.searchInput.value = "";
      }
    });
  }
  setId(id:Names){
    this.id = id
    this.renderList()
  }
  renderResults(results:any[]){
    this.resultsList.innerHTML = '';
    results.slice(0, 5).forEach(item => {
      const li = document.createElement('li');
      li.classList.add('result-item');
      const img = createIcon(imageName(item.item as Names) as Id);
      img.onclick = ()=>{
        setId(item.item as Id)
      }
      li.appendChild(img);
      
      const span = document.createElement("span");
      span.className = "result-text"
      span.textContent = item.item;
      li.appendChild(span)
      li.addEventListener('click', (e) => {
        if(e.target===img)return
        this.input.value = item.item;
        this.resultsList.innerHTML = '';
      });
      
      this.resultsList.appendChild(li);
    }
  )}
  
  renderList(){
    this.itemList.innerHTML = '';
    this.cookiemap.get(this.id).forEach(element=>{
      const itemDiv = document.createElement('div');
      if(isBlock(element)||isItem(element)){
        itemDiv.className = 'list-item';
        const img = createIcon(element as Id);
        img.onclick = ()=>{
          setId(element as Id)
        }
        itemDiv.appendChild(img)
        const a = document.createElement('a');
        a.textContent = idToText(element as Id);
        itemDiv.appendChild(a)
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = () => {
          this.cookiemap.remove(this.id,element);
          this.renderList();
          removeLink(this.id,element as Id);
          drawGraph(this.id)
        };
        itemDiv.appendChild(removeBtn);
      }else{
        const megaDiv = document.createElement('div');
        megaDiv.className = 'mega-item';
        const header = document.createElement('div');
        header.className = 'mega-header';

        const title = document.createElement('span');
        title.className = 'mega-title';
        title.textContent = idToText(element as Id);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = () => {
          this.cookiemap.remove(this.id,element);
          this.renderList();
          removeLink(this.id,element as Id);
          drawGraph(this.id)
        };

        header.appendChild(title);
        header.appendChild(removeBtn);
        megaDiv.appendChild(header);

        // Child list
        const ul = document.createElement('ul');
        ul.className = 'mega-children';
        let lootTable:any[] = []
        if(isEntity(element))lootTable = (entityItemLoot.get(element as EntityName)??[]);
        if(isChest(element))lootTable = (chestItemLoot.get(element as ChestName)??[]);
        lootTable.forEach(childText => {
          const li = document.createElement('li');
          const img = createIcon(childText)
          img.onclick = ()=>{
            setId(childText as Id)
          }
          li.appendChild(img)
          const span = document.createElement('span');
          span.textContent = idToText(childText as Id);
          li.appendChild(span)
          
          ul.appendChild(li);
        });

        megaDiv.appendChild(ul);
        itemDiv.appendChild(megaDiv);
        /*
        ().forEach(e=>{
          let chunk = document.createElement("div")
          chunk.className = 'list-item';
          const img = createIcon(e);
          img.onclick = ()=>{
            setId(e)
          }
          chunk.appendChild(img)
          const a = document.createElement('a');
          a.textContent = idToText(e);
          chunk.appendChild(a)
          itemDiv.appendChild(chunk)
        })
        */
      }

        
        this.itemList.appendChild(itemDiv);
    })
  }
}