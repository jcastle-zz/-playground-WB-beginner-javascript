console.log('Arrays');

/*
Arrays - Used for holding list of items where order matters. Each thing is an item and where it is located is an index. Number of items is length. Can be any data type.

[] for arrays, {} for objects. Call array literal. Array not own data type, it is an object. To check if something is an array do array.isArray(names).
*/

const names = ['wes', 'kait', 'joe'];
console.log(names);

// To access things in an array, you use their index. Arrays are zero based or start at 0.
console.log(names[1]);

// Check to see how many items are in the array use .length.
console.log(names.length);

// Arrays loaded with methods for working with it.
// Mutable methods perform mutations on the array. When something changes the original version.
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const numbersBackwards = numbers.reverse();
// console.log(numbersBackwards);
// console.log(numbers); // some methods modify the initial array

// // Immutable do not change the original array, simply return a new array. In addition.
// const newNumbers = [1, 2, 3, 4, 5];
// const sliceNumbers = newNumbers.slice(2, 4);
// console.log(sliceNumbers);
// console.log(newNumbers);

// // Any time you use mutation methods but don't want the array to be mutated you need to take a copy of original array.
// const numbersReversed = [...newNumbers]; // this makes a copy of numbersReversed
// numbersReversed.reverse();
// console.log(numbersReversed);

// Most basic thing to do with array is to add items.
// Use push to add value to end of array
names.push('steve');
const names2 = [...names, 'steve']; // copy array and add an item
console.log(names2);

// Unshift add value to front of the array.
names.unshift('mel');

// Slice and splice. Slice is immutable and splice is mutable.

// Add items to the middle, use the spread [...] method.
const bikes = ['specialized', 'huffy', 'schwinn'];
const newBikes = [...bikes.slice(0, 2), 'benotto', ...bikes.slice(2)]; // start at last value and don't add an end, it will go there for you
console.log(newBikes);

// To find the index number of an item in the array.
const bikeIndex = bikes.findIndex(bike => bike === 'specialized');
console.log(bikeIndex);

const comments = [
  { text: 'Cool Beans', id: 123 },
  { text: 'good bikes', id: 433 },
];

// eslint-disable-next-line no-shadow
function deleteComment(id, comments) {
  // first find the index of the item in the array
  const commentIndex = comments.findIndex(comment => comment.id === id);
  return [
    // make new array with that item in it
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];
}
console.log(deleteComment(123, comments));
