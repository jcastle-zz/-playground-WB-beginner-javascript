console.log('Object Ref & Values');

/*
When comparing objects, done by objects themselves. If contents are the same in the object, the object is not considered the same.

When objects and arrays that point to original variable, it does not create a new object, it only reference original object.

*/

// These are not the same objects even though props/values are the same.
const person1 = {
  name: 'wes',
  last: 'bos',
  clothing: {
    shirts: 10,
    pants: 2,
  },
};

const person2 = {
  name: 'wes',
  last: 'bos',
};

// Easiest way to copy an object is by using a spread (...). This example shows creating person3 by copying person1. Not a reference, but a copy. Spread operator does a shallow copy.
// This only goes one level deep, so won't get clothing prop/values.
const person3 = { ...person1 };

// If you want deep clone of all object properties. Most likely way is to use a utility library like Lodash. Can use _.cloneDeep(objects).
// For reference and import go to https://unpkg.com/lodash@4.17.15/lodash.js.

// Can add spread values together. Can also add in more prop/values although ESLint doesn't like it. ;-0
const people = {
  ...person2,
  ...person3,
};
