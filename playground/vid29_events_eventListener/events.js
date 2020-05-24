const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// Handle named for specific function passed into an event handler
function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

// functionality for the button - addEventListner() uses type of event and callback function. Callback function is a regular function where browser takes care of calling the function. Most common way is through an anonymous function.

// Three steps for event listners - get something, do something, listen for something
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

function handleBuyButtonClick(event) {
  console.log('You clicked a button!');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

// buyButton is parameter and can be named anything, window passing this value
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);
  console.log(this);
});
