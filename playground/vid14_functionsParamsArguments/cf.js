console.log('functions - params & arguments');

/*
Not great to reach outside the function to gather data

const bill = 100;
const taxRate = 0.13;

function calculateBil() {
  console.log('Running Bill!');
  const total = bill * 1 + taxRate;
  return total;
}

const myBill = calculateBil();
console.log(`Your total is $${calculateBil()}`);
*/

/*
Turn variables bill and taxRate into parameters of the function
Parameters are placeholders
Variables inside function are scoped only to function
function calculateBill(billAmount, taxRate) {
  console.log('Running Bill!');
  const total = billAmount * (1 + taxRate);
  return total;
}

Pass values to function through arguments
Can pass undefined if don't want to put in new value
const myTotal = calculateBill(100, undefined);
console.log(myTotal);

Can also pass variables as arguments
const wesBill = 200;
const wesTaxRate = 0.2;
const wesTotal = calculateBill(wesBill, wesTaxRate);
console.log(wesTotal);
*/

// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('Joe');
// console.log(greeting);

// Functions can take in other functions
// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name) {
//   return `Hey ${name.toUpperCase()}`;
// }

// const newGreeting = yell(doctorize('Joe'));
// console.log(newGreeting);

// Can set defaults for the function

function helloToday(name = '') {
  return `${name}`;
}

const helloTodayGreet = helloToday('Joe');
console.log(helloTodayGreet);
