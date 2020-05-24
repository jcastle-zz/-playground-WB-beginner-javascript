console.log('it works');

// create elements with HTML
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'alternate text';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// print elements to webpage
// document.body.appendChild(myParagraph);
// not a good way to do this because of reflow on the page
document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// better way to do this
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// we need to add something to the top of the page, like a heading
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// create an unordered list with numbers one to five
const myList = document.createElement('ul');
myDiv.classList.add('unordered-list');
console.log(myList);

const listOne = document.createElement('li');
listOne.textContent = 'Item #1';
console.log(listOne);

const listTwo = document.createElement('li');
listTwo.textContent = 'Item #2';
console.log(listTwo);

const listThree = document.createElement('li');
listThree.textContent = 'Item #3';
console.log(listThree);

const listFour = document.createElement('li');
listFour.textContent = 'Item #4';
console.log(listFour);

const listFive = document.createElement('li');
listFive.textContent = 'Item #5';
console.log(listFive);

myDiv.appendChild(myList);
myDiv.appendChild(listOne);
myDiv.appendChild(listTwo);
myDiv.appendChild(listThree);
myDiv.appendChild(listFour);
myDiv.appendChild(listFive);
document.body.appendChild(myDiv);