console.log('it works');

// adding HTML with JS
const item = document.querySelector('.item');
console.log(item.innerHTML);

const width = 500;
const src = `https://picsum.photos/200/${width}`;
const desc = 'Cute Pup';

const myHTML = `
    <div class = 'wrapper'>
        <h2>Cute ${desc}</h2>
        <img src='${src}' alt='${desc}'/>
    </div>
`;

item.innerHTML = myHTML;
console.log(item.innerHTML);

// created HTML string above with myHTML
// if you want to dynamically change an element then need to pull it out of the string
const itemImage = document.querySelector('.wrapper img');
itemImage.classList.add('round');
console.log(itemImage);

// turn a string into a DOM element
// range is collection of HTML elements to work with
const myFragment = document.createRange()
.createContextualFragment(myHTML);

// console.log(myFragment.querySelector('img'));
// console.log(myFragment);

// prints to screen
document.body.appendChild(myFragment);