console.log('new objects');

// New keyword - date, array, objects
// New keyword returns values within an object
// Everything in JS is an objects
// Using new keyword opens up object to using various methods
const myDate = new Date('August 11, 2025');
console.dir(myDate);
console.log(myDate.getFullYear());
console.log(typeof myDate);

// Array literal syntax
const names = new Array(['wes', 'kait']);
console.dir(names);

// Object literal syntax
const wes = new Object({ name: 'wes' });
console.dir(wes);

function Pizza() {
  console.log('Making a pizza');
}

// Using a new keyword, creates a new object that is an instance of the function
const pepporoniPizza = new Pizza();
console.log(pepporoniPizza);
console.log(pepporoniPizza.constructor);
console.log(pepporoniPizza instanceof Pizza);
