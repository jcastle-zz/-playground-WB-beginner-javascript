// classes - when select element, there is a classlist with it
const pic = document.querySelector('.nice');
console.log(pic.classList);

// __proto__ shows methods for working with the class
pic.classList.add('open');
pic.classList.remove('cool');

function toggleRound() {
  pic.classList.toggle('round'); // add if there, remove if not
}
pic.addEventListener('click', toggleRound);
