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
    let showGrandUnicorn = cornify_count==15;

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

    if(showGrandUnicorn){
        //clicking 15 times to summon the grand unicorn which is centered in the screen
        div.style.top="50%";
        div.style.left="50%";
        div.style.zIndex=143143143;
    }else{
        //otherwisw we randomize he position
        div.style.top=Math.round(Math.random()*100)+"%";
        div.style.left=Math.round(Math.round() * 100)+ "%";

        transform += " rotate(" + Math.round(Math.round() * 10-5)+ "deg)";
    }

    //create the image element
    let img=document.createElement("img");
    img.style.opacity = 0;
    img.style.transition = 'all .1s linear';
    img.alt="A lovely unicorn or rainbow";
    img.onload= function(){
        img.style.opacity = 1;

    }

    //Used as a cache buster so the browser makes a new request every time
    // instead of using the previous , cached one.

    let currentTime=new Date();
    let submitTime = currentTime.getTime();

    if(showGrandUnicorn){
        //caching doesn't matter for the grand unicorn
        submitTime = 0;
    }

    //Contruct our Unicorn and rainbow request
    let url=`https://www.cornify.com/corns/${
        Math.random() > 0.5 ? "r" : "u"
    }${Math.ceil(Math.random() * 7)}.gif`;

    //add your unicorns if requested 
    if(options && (options.y || options.younicorns)){
        url += "&y=" + (options.y ? options.y : options.younicorns);

        if(Math.random() > 0.5){
            //flip horizontally at random 
            if(transform.length > 0){
                transform += " scaleX(-1)";
            }
        }
    }

    div.style.transform=transform;
    div.style.MozTransform=transform;
    div.style.webkitTransform=transform;

    img.setAttribute("src", url);

    //Add a nice hover wiggle
    img.style.transition="all .1s linear";

    div.onmouseover=function(){
        let size= 1 + Math.round(Math.random() * 10)/100;
        let angle=Math.round(Math.random() * 20 -10);
        let result="rotate(" + angle + "deg) scale(" + size + "," + size + ")";
        img.style.transform=result;
        img.style.MozTransform=result;
        img.style.webkitTransform=result;

    };

    div.onmouseout=function(){
        let size=0.9 + Math.round(Math.random() *10) /100;
        let angle = Math.round(Math.random() * 6 -3);
        let result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
        img.style.transform=result;
        img.style.MozTransform=result;
        img.style.webkitTransform=result;
    };

    //Append our container Div on the page

}