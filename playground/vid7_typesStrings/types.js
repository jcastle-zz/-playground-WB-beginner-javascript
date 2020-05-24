/* eslint-disable */

console.log('hello');

// three ways to make strings in JS - with ', ", `

// usually stick with single quotes and backticks
// single and double quotes same thing, need both for using apostrophe in text, can get around this with backticks
// escape apostrophes with /

const firstName = 'Wes';
const lastName = "Castle";
const middleName = `Roland`;

const sentence = `use this to get around using sentences with apostrophes, it is like'd`

// possibly always go with backticks to allow for using variables
const sentenceInterpolation = `this makes interpolation easier with variables like ${firstName}`

const html = `
    <div>
        <h2>${firstName}</h2>
        <p>${lastName}</p>
    </div>
`;

document.body.innerHTML = html;
