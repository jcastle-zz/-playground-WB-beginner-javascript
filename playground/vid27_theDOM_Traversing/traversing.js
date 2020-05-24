console.log('traversing');

// involves moving through the DOM and removing elements
// traversing means going up, down, over
// looking at all elements inside an element

// difference between node and element
const wes = document.querySelector('.wes');

console.log(wes);

// wes.children results in em
// wes.childNodes provides three things
// everything a node but if wrapped in tag then an element
// using nodes is not best way to find and use elements, better to use querySelector

// element properties
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// node properties
console.log(wes.children);
console.log(wes.childNodes);
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

// $0 provides currently selected element on page in the console

// removing elements - method on every node to remove element
// $0.remove()
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove(); // removes from DOM and webpage but stays in memory
