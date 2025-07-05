export default async function imageSearch(query:string){
    let capitilize = true;
    let cleanedQuery = query.replace("","").split("").map(letter=>{
        if(capitilize){
            capitilize = false;
            return letter.toUpperCase();
        }
        if(letter==="_")capitilize=true;
        return letter;
    }).join("");
    const response = await fetch(`https://minecraft.wiki/api.php?action=query&list=allimages&format=json&aiprefix=${cleanedQuery}`)
    console.log(response)
}