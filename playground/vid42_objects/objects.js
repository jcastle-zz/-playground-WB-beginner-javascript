console.log('objects');

/*
Objects are a fundamental building block of JS. Everything in JS is an object. Objects allow us to group together properties and values. Many uses to storing data and creating custom types. Order of the properties does not matter.
*/

// Never rely on order of which you put into object to render the same way.
// Object literal is with {}
// Other type is to use newObject (like in Java)

const age = 100;
const person = {
  name: 'wes', // property on left, value on right - can be any type of object itself
  age, // use same rules for variables for properties of object, can have props with dash
  'cool-dash': true,
  '777': true, // always put comma at end, not necessary but helps for adding more attributes, it's called trailing comma or comma dangle
  clothing: {
    // can nest objects as deep as you want
    shirts: 10,
    pants: 2,
  },

  // Methods - a function that lives inside an object
  // This - this is always equal to the left of the dot, here it is person
  sayHello(greeting = 'Hey') {
    return `${greeting} ${this.name}`;
  },
};

person.job = 'web developer'; // add property to object
person.age = 50; // change property of age in object person, props about the object can change even though there is a const age not tied to person

// Can freeze an object to where it can never be changed. Use Object.freeze()
// Accessing properties. person.age, person.name, person.clothing
// Use square bracket notation for accessing properties that won't work with ()

console.log(person.clothing.pants); // can go as deep as needed to access value

// to remove a property use delete.age
