console.log('ways to declare functions');

// JS functions are first-class citizens. What this means is that JS funcations are values in and of themselves. They can be passed into other functions. They can be numbers, objects, strings. Functions can be stored in variables, handled and moved around.

// Using this function as baseline to show different ways to declare a function.
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous function - function without a name. Not valid JS in this case here. Are valid when using as callbacks and IIFE (Immediately Invoked Function Expression).
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expression - store function as value in a variable.
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// Hoisting - calling a function before running it. JS allows for it but should not be standard practice.

// Arrow function - addition to JS in last couple of years. Concise syntax. Don't have own scope with this keyword. Arrow functions are anonymous functions, always need to be declared in a variable.
// start with variable = parameter to pass into function => return logic in function
// can get ride of parantheses if only one parameter
const inchesToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
const add = (a, b = 3) => a + b;

// returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

// IIFE (Immediately Invoked Function Expression) - wrap function in parantheses. Parantheses alreays run first in JS. Was popular before block scope. Often handy to declare functions inside this type of function and variables can't leak inside.
(function() {
  console.log('Running the anon function');
  return 'You are cool';
})();

// Methods - is simply a function that lives inside and object.
const wes = {
  name: 'Wes Bos',
  // Method
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  // short hand Method - most common
  yellHi() {
    console.log('HEY WES!');
  },
  // arrow function
  whisperHi: () => {
    console.log('hi wess, i am a mouse');
  },
};

// Callback functions - name used for functions when something will happen when something is done. When somebody clicks something run this, or this amount of time passed run this.
// Click callback - 1st way
const button = document.querySelector('.clickMe');
function handleClick() {
  console.log('Great Clicking');
}
button.addEventListener('click', handleClick);

// 2nd way
const button2 = document.querySelector('.clickMe2');
button.addEventListener('click', function() {
  console.log('nice job');
});

// timer callback
setTimeout(function() {
  console.log('done, time to eat');
}, 1000);
