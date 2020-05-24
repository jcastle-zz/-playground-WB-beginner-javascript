console.log('scope');

// scope - where are the variables and functions available to me?

// First type of scope is global variables - variables available anywhere in the application. These are variables out in the open accessed from anywhere on the page.
const first = 'wes';

// In console, type window. Global object. Var variables attached to window variable. Shouldn't make window global variables.

// Function scope - when variable created inside function, those variables only available inside function.
// Scope lookup - if variable not found in function, JS will go one-level up to find the variable.

// Block scope - set of curly bracket denotes a block.

// JS is lexical or static scoped. The way variable or scope look up happens is where the variable is defined not where it is run.

// Having global variables is bad form and can lead to problems.

// Just like variables, functions can be locally scoped. Can do function inside of a function but generally don't do that.

// Hoisting - when run file, will move all declarations to the top of the file. So they will run. Better to define function then call them. Or place them in util and import as needed.
