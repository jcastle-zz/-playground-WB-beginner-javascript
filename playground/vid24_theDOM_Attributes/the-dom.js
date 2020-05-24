// Attributes - anything that is provided to element with additional info

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

// Add attributes in DOM for img
pic.addEventListener('click', toggleRound());
pic.alt = 'Cute pup';

// window.addEventListener('load', function());
// makes window wait to load all elements and attributes before changing attribute

// get, set, has attribute methods; has returns true or false
pic.setAttribute('alt', 'Really cute pup');
console.log(pic.getAttribute('alt'));

// Shouldn't go and make a bunch of custom attributes in case new HTML spec adds it, will result in conflicts
// Vary rarely use set and get attributes

// Use data attributes - put data-something in HTML file, then call based on data name
// Can call all data attributes with .dataset
