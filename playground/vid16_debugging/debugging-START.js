// Two parts to debugging - tools for when things go wrong and then a mindset of how to be a good problem solver.

const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   console.log(person.name);
// });

// // Console Methods - console.log(), console.info(), console.error(), console.warn(), console.table(), console.count(), console.group()
// people.forEach((person, index) => {
//   if (person.name === 'Wes') {
//     console.error('dumb name');
//   }
// });

// console.group(), use console.groupEnd() with same string
// function doALotOfStuff() {
//   console.group('doing some stuff');
//   console.log('hey, im one');
//   console.warn('watch out');
//   console.error('hey');
//   console.groupEnd('doing some stuff');
// }
// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`);
//   console.log(`person.country = ${person.country}`);
//   console.log(`person.cool = ${person.cool}`);
//   console.groupEnd(`${person.name}`);
// });

// console.table()
// console.table(people);

// Callstack - trace back through functions
// <anonymous 1:1> - means the function was called through inspector otherwise it will list a line where it was called in the code.

// Grabbing Elements - refers to getting elements from the DOM.
// $0 returns what is selected on the page or in elements tab. Last element clicked.
// $1 returns second to last element clicked.
// $ and $$ - only able to run in console, not in code. Doesn't work with JQuery. $('p') and $$('p') will display contents of element.

// Breakpoints
people.forEach((person, index) => {
  // debugger; // only works in dev tools, will pause JS from running, can go anywhere in code and allows for walk-through progression with code
  console.log(`${person.name}`);
});
// Can set breakpoints in file in the console.

// Scope

// Network Requests - in console, shows all files that are working

// Break On Attribute - sets breakpoint on attribute setting, not used that often but helpful when thrown into random code base and don't know what's going on

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
