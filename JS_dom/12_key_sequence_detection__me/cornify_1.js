let cornify_count=0;

let cornify_add=function (options){

    //track how often we cornified
    cornify_count += 1;

    //Prepare our variables
    let cornify_url="https://www.cornify.com/";
    let numType='px';
    let heightRandom=Math.random() * 0.75;
    let windowHeight=768;
    let windowWidth=1024;
    let height=0;
    let width=0;
    let de=document.documentElement;
    let transform="translate(-50%, -50%)";
    let showGrandUnicorn=cornify_count==15;

    //create a container for our 'corn or 'bow'.
    let div=document.createElement("div");
    div.style.position="fixed";
    div.className="__cornify_unicorn";
    div.style.zIndex=143143;
    div.style.outline=0;
    div.onclick=cornify_add;

    //get the window width and height - requires some corss browser checking.
    if(typeof window.innerHeight == "number"){
        windowHeight=window.innerHeight;
        windowWidth=window.innerWidth;

    }else if(de && de.clientHeight){
        windowHeight=de.clientHeight;
        windowWidth=de.clientWidth;

    }else {
        numType="%";
        height=Math.round(height * 100) + "%";
    }

}