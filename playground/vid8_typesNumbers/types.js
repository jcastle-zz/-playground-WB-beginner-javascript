console.log('hello world');

// only one type of number in JS, simply just number
// keyword in JS to check typeof value - typof variable

// integer is whole number, float is a decimal

const age = 100;
const float = 100.1;
const name = 'Wes';

// can use logical operators with variables - +, -, /, *
const a = 10;
const b = 2;

// plus sign is loaded, meaning it can be used to concatnate a string with number - 1 + '1' = 11

// along with numbers, we have helper methods used for doing math - Math.???
// Math.round() - pass value, it will round up or down depending on number
// Math.floor() - provides lower end of number
// Math.ceil() - provides upper end of number
// Math.random()- provides random number between 0 and 1

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
console.log(`each kid gets ${eachKidGets}`);

// modolo operator provides remainder
const dadGets = smarties % kids;
console.log(`dad gets ${dadGets}`);

// don't store money in dollars and cents because of floating point calculation, store all prices in cents, when you want to show money to people, divide by 0 and round the cents

// JS has infinity and negative infinity, there is a max computers can calculate with numbers
// ** is to the power of - infinity and negative infinity are both numbers in JS

// NaN - not a number, occurs when trying to do math with something that is not a number
