// Real power in JS comes from functions. Functions group together sets of instructions, take in value, do some work, then return a value.

// Functions are defined and later called. Function block is {}, anything inside is a function body. Anything inside is part of function.

// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  // variable total only available inside of function
  console.log('Running Calculate Bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  // keyword, returns variable
  return total;
}

// Function Call. Or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

// function call or run of the function
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(`Your total is $${myBill4}`);
