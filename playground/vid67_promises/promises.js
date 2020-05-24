/* 
Promises - Solution to callback hell. Idea of an IOU for something that will happen in the future. A timer, data returned from API, access to webcam or microphone. We often don't get data immediately back, we get a promise.
*/

function makePizza(toppings) {
  return new Promise(function(resolve, reject) {
    // wait 1 sec for pizza to cook
    setTimeout(function() {
      // when ready, resolve promise
      resolve(`Here is your pizza with the toppings ${toppings.join(' ')}`);
    }, 1000);
    // if something went wrong, we can reject this promise
  });
}

makePizza(['pepperoni']).then(function(pizza) {
  console.log(pizza);
});
