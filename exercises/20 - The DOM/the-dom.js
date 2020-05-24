// select element on the page
// use querySelector() to select item
// in order to use elements on the page - .querySelector() and .querySelectorAll()
const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
console.log(p);
console.log(divs);

// choosing element by class - first element in .item class
const imgs = document.querySelectorAll('.item img');
console.log(imgs);

// choosing element by drilling down into the class
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
console.log(item2);

// using dir to display object information for the element/object
// shows outer and inner HTML
// shows parent Element/Node
const heading = document.querySelector('h2');
console.dir(heading);

// use .textContent to place text on the page
// first console log is original text in H2
console.log(heading.textContent);

// remove style elements
console.log(heading.innerText);

// changes H2 and prints to page
heading.textContent = 'Joe is cool';
console.dir(heading.textContent);

// innerHTML will show what is included in the element
console.log(heading.innerHTML);

// outerHTML will show what element is outside the current element
console.log(heading.outerHTML);

// grabbing pizza class and outputting to page
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// method, takes two elements - position, text
// add text onto front or back of element
// can't seem to get this one working right
pizzaList.insertAdjacentElement('afterbegin', p);

// classes!!
// look in _proto_ for methods to manipulate classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

// attributes
pic.alt = 'cute pup'; //setter
console.log(pic.alt); //getter

pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));

// use data-name and datasets in html to create custom metadata attributes
const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function(){
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
})