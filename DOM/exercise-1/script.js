console.log('hello world');

const body=document.body;
const paragraph=document.createElement('p');

const paraNode=document.createTextNode("This is new");
const heading_3=document.createElement('h3');
const division=document.createElement('div');
const heading_1=document.createElement('h1');
const paragraph2=document.createElement('p');

division.setAttribute('style','border:2px solid black; background:pink');
paragraph.innerHTML="Hey I’m red!";
console.log(paragraph);
heading_3.textContent="I’m a blue h3!";
heading_1.textContent="I’m in a div";
paragraph2.textContent="I am in a div TOOO!!!"

body.appendChild(paragraph);
paragraph.appendChild(paraNode);
body.appendChild(heading_3);
body.appendChild(division);
division.appendChild(heading_1);
division.appendChild(paragraph2);

console.log(document);

function alert(){
    console.log('hello alert');
    return 'hello zz';
}

console.log('alert',alert);
console.log('alert()',alert());
alert();

const btn =document.getElementById('btn');
btn.addEventListener('click',function(e){
    console.log(e);
});

btn.addEventListener('click',function(e){
    e.target.style.background='blue';
})