console.log('hello world');

const paragraph=document.createElement('p');
const heading_3=document.createElement('h3');
const division=document.createElement('div');
const heading_1=document.createElement('h1');

paragraph.textContent="Hey I’m red!";
heading_3.textContent="I’m a blue h3!";
heading_1.textContent="I’m in a div";

division.appendChild(heading_1);

console.log(paragraph);