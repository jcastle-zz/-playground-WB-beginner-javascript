const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = document.querySelector('img');
const heading = document.querySelector('h2');
// prints out heading, but has a lot of props and methods to it
console.log(heading);

// change to console.dir() to show the object properties of the element
// provides parent element, out/inner html, scroll height/width
console.dir(heading);

// using textContent displays the text in the h2 tags, this is a getter, same as innerText
console.log(heading.textContent);

// using textContent as a setter
heading.textContent = 'Wes is cool';

// provides inside elements from h2
console.log(heading.innerHTML);

// provides outer elements from h2
console.log(heading.outerHTML);

// capture and add content onto end of current text in element
// slow way to add text, better way is insertAdjacentElement or insertAdjacentText
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

pizzaList.textContent = `${pizzaList.textContent} + pizza`;

// insertAdjacentText - method, takes two params
pizzaList.insertAdjacentText('beforeend', 'pizza');
pizzaList.insertAdjacentText('afterbegin', 'pizza');

// MDN has list of elements props and methods
