const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// Handle named for specific function passed into an event handler
function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

// functionality for the button - addEventListener() uses type of event and callback function. Callback function is a regular function where browser takes care of calling the function. Most common way is through an anonymous function.

// Event types that may be helpful - event.type, event.bubble

// Three steps for event listeners - get something, do something, listen for something
butts.addEventListener('click', function() {
  console.log('Im an anon!');
});
coolButton.addEventListener('click', hooray);

// Don't have to call the function handleClick(), can just use handleClick
// Binding - taking a function and attaching it to an element
// To remove eventListener, it must be named. Anonymous functions cannot be removed.
butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// Events - event object has a lot of info about when an event fires.
// Difference between event.target and event.currentTarget. Pulls same element, difference is with elements nested inside element being listened to.
// In most cases you want to use event.currentTarget.
// Can use e for parameter of an event.
function handleBuyButtonClick(e) {
  const button = e.target;
  console.log(button.textContent);
  console.log('You are buying it!');
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// With ten buttons, how do you know which one is clicked. It is in the event object. Modify eventHandler to handle param.

// Propagation means calling on multiple elements at the same time. Can stop propagation with event.stopPropagation()
window.addEventListener('click', handleBuyButtonClick);

// Capture is opposite of propagation. Look at W3C, has diagram, has to do with layers where element is on the page.

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(e) {
  console.log(e.currentTarget);
  console.log(this); // This keyword is always equal to the left of the dot. Here it is photoEl.
});

// Don't use this in event listeners because of nested functions causing confusion on what this is calling. Use e.currentTarget and e.target.
