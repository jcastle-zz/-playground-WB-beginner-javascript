console.log('forms');

// Common to work with forms and methods. A lot of time will be events and inputs.
const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  console.log(e);
  // e.preventDefault(); // Use this to prevent going to the hyperlink and seeing action in the log.
});

// To see the console log before page changes, use preserve log in the console within settings.

const signupForm = document.querySelector('[name="signup"]'); // Using [] to call CSS form name from HTML file.

signupForm.addEventListener('submit', function(e) {
  console.log(e);
});

// Can use required attribute on HTML element form to force user input.
// No reason to run querySelector is using name on HTML elements.

// Other types of events with forms - keyup, keydown, focus, blur, etc.
// Focus and blur used for styling

// Accessibility - things to consider.
// Difference between buttons and links - buttons used for actions inside the application, links are for actions outside the application.
// Things that are not keyboard accessible should not have an image attached to them. In HTML element, add class. If you mean for something to be a button that is not a button tag, use role="button" and give tabindex="0".

// keycode.info - can bind key to event in application
