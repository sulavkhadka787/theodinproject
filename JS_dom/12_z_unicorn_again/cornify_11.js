let cornify_count = 0;

let cornify_add = function (options){
    
    cornify_count += 1;

    // Prepare our lovely variables.

    let cornify_url="https://www.cornify.com/";
    let numType= "px";
    let heightRandom =Math.random() * 0.75;
    let windowHeight = 768;
    let windowWidth = 1024;
    let height=0;
    let width=0;
    let de=document.documentElement;
    let transform="translate(-50%, -50%)";
    let showGrandUnicorn = cornify_count == 15;

    //Create a container for our 'corn or bow'.
    let div=document.createElement("div");
    div.style.position = "fixed";
    div.className = "__cornify_unicorn";
    div.style.zIndex = 143143;
    div.style.outline = 0;
    div.onclick = cornify_add;

    //Get the window width and height - requires some cross browser checking
    if(typeof window.innerHeight == "number"){
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
    }else if(de && de.clientHeight){
        windowHeight = de && de.clientHeight;
        windowWidth = de.clientWidth;
    }else{
        numType = "%";
        height = Math.round(height * 100) + "%";
    }

    if(showGrandUnicorn){
        //Clicking 15 times summons the grand unicorn which is centered on the screen
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.zIndex = 143143143;
    }else{
        //otherwise we randomize the position
        div.style.top= Math.round(Math.random() * 100) + "%";
        div.style.left = Math.round(Math.random() * 100) + "%";

        transform += " rotate(" + Math.round(Math.random() * 10 - 5) + "deg)";

    }

    //Create the image element
    let img=document.createElement("img");
    img.style.opacity = 0;
    img.style.transition = "all .1s linear";
    img.alt = "A lovely unicorn or rainbow";
    img.onload = function(){
        img.style.opacity = 1;
    };

    //Used as a cache buster so the browser makes a new request every time instead of using the previous , cached one
    let currentTime = new Date();
    let submitTime = currentTime.getTime();

    if(showGrandUnicorn){
        //Caching doesn't matter for the grand unicorn
        submitTime = 0;
    }

    //Construct our uniorn & rainbow request
    let url=`https://www.cornify.com/corns/${
        Math.random() > 0.5 ? "r" : "u"
    }${Math.ceil(Math.random() * 7)}.gif`;
    

}