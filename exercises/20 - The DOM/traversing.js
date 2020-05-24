console.log('this works');

// traversing - often need to select element based on position
const wes = document.querySelector('.wes');
console.log(wes);

// use this to display nodes related to class .wes
console.log(wes.childNodes);

// click on item in browser and use $0, $0.childElementCount
// $0.children, $0.previousElementSibling
// these are for elements
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// can also do this for text nodes
/*
el.childNodes
el.firstChild
el.lastChild
el.previousSibling
el.nextSibling
el.parentNode
*/

// remove an element
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);