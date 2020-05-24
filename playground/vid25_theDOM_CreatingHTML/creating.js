console.log('HTML');

// Create HTML in document with document.createElement();
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P'; // add text to element p
myParagraph.classList.add('special'); // add class to element p
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Better to do this in reverse order because everytime you use appendChild it causes the page to reflow
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// Here is what should be done to not have reflow
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// Oh shoot, we need to add something to the top of the div above
const heading = document.createElement('h2');
heading.textContent = 'cool things';

// insertAdjacentElements - beforebegin, afterbegin, beforeend, afterend
myDiv.insertAdjacentElement('afterbegin', heading);

// created a list with above element keywords
