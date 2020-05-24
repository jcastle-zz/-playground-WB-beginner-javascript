console.log('Maps');

/*
  Similar to an object but with key differences. Benefit is that keys can be any type. Dictionary, separate topic, is a way to store metadata about something else. Order is guaranteed.

  Use map if need to maintain order of items. Downside to map is that there is no literal. Have to create new map and pass items into it. Can pass array of multiple arrays.

  Can put functions inside objects as a method. Can't do that with maps.

  JSON can be used and turned into text. Transfer object or array, convert to portable format. This is done with JSON.stringify(). Will turn JSON into string. JSON.parse() will turn back into object.

  JSON does not handle maps. 
*/

const myMap = new Map();
// set()
myMap.set('name', 'Wes');
console.log(myMap);

const score = 200;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Cat');
prizes.set(300, 'Dog');

console.log(`you win a ${prizes.get(score)}`);

const ul = document.querySelector('.prizes');
for (const [points, value] of prizes) {
  // console.log(points, value); temporary variable of prize, log first item as key and second as value. now destructured as an array.
  const li = `<li>${points} - ${value}</li>`;
  ul.insertAdjacentHTML('beforeend', li);
}
// .has()
// .delete()
