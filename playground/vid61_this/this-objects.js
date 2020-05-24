console.log('this keyword');

// This keyword refers to instance of an object that a function is bound
// This refers to the thing to the left of the dot of a method

// const button1 = document.querySelector('.one');
// const button2 = document.querySelector('.two');

// function tellMeAboutTheButton() {
//   console.log(this);
// }

// // this keyword is bound to the button
// button1.addEventListener('click', tellMeAboutTheButton);
// button2.addEventListener('click', tellMeAboutTheButton);

// This refers to the instance of the thing that was made
// Function that creates an object is called a constructor
function Pizza(toppings = [], customer) {
  console.log('Making a pizza');
  console.log(this);
  // store information about the pizza being made
  this.toppings = toppings;
  this.customer = customer;
}

const pepporoniPizza = new Pizza(['pepporoni'], 'wes');
console.log(pepporoniPizza);
console.log(pepporoniPizza.constructor);
console.log(pepporoniPizza instanceof Pizza);
