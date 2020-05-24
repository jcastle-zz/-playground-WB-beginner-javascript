console.log('creating strings');

// const item = document.querySelector('.item');
// // console.log(item.innerHTML); // shows all HTML within the class

// const src = `https://picsum.photos/200`;
// const desc = `cute pup`;

// // using innerHTML as a setter
// const myHTML = `

// <div className="items">
//     <h2>${desc}</h2>
//     <img src="${src}" alt="${desc}"/>
// </div>

// `;
// item.innerHTML = myHTML;
// console.log(myHTML);

// turn string into DOM element
const myFragment = document.createRange();
console.log(myFragment);

// if you want to create HTML as a string, can turn into DOM nodes with create contextual framework

// XSS - cross site scripting
// if somebody puts HTML into input box, it could render on the page
// injecting style tags into webpage
