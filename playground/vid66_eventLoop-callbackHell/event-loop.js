/*
JS is asyncronous or non-blocking. JS is a single-threaded meaning on one thing can run at once. JS will put off items in the web API and when the callstack has a free second, it will reach into callback queue and run it. If there are multiple things queued, JS will run through the sequence based on timers or timing of call.

Used for fetching data from APIs. Send call to API and while waiting on the data to come back, can do something else.
*/
// console.log('event-loop');

// console.log('Starting');
// setTimeout(function() {
//   console.log('Running');
// }, 2000);

// console.log('Ending');

/* 
Exercise
1. Change the text to Go when clicked.
2. Make it circle after 2 secs.
3. Make it red after 0.5 secs.
4. Make it square after 0.25 secs.
5. Make it purple after 0.3 secs.
6. Fade out after 0.5 secs.
7. Finish
*/

// This is an example of callback hell. Nested timeouts for animation. Solution to callback hell is promises. Code for something that will happen in the future.
const go = document.querySelector('.go');
go.addEventListener('click', function(e) {
  const el = e.currentTarget;
  el.textContent = 'Go!'; // change the text to go when clicked
  console.log(el);
  setTimeout(function() {
    el.classList.add('circle'); // make it a circle after two seconds
    setTimeout(function() {
      el.classList.add('red'); // make it red after 0.5 secs
      setTimeout(function() {
        el.classList.remove('circle');
        setTimeout(function() {
          el.classList.remove('red');
          el.classList.add('purple'); // make purple after 0.3 secs, remove red
          setTimeout(function() {
            el.classList.add('fadeOut');
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});
