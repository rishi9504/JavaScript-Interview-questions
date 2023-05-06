# JavaScript-Interview-Questions

# Questions:

# 1. How can I remove a specific item from an array in JavaScript?

Find the index of the array element you want to remove using indexOf, and then remove that index with splice.

The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

```
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array);
```

The second parameter of splice is the number of elements to remove. Note that splice modifies the array in place and returns a new array containing the elements that have been removed.

# 2. What does "use strict" do in JavaScript, and what is the reasoning behind it?

"use strict" is a directive introduced in ECMAScript 5 (ES5) that enables strict mode, which is a way to write JavaScript code in a more secure and optimized way. When you add "use strict" at the beginning of a script or function, the code inside that scope is interpreted in strict mode.

Strict mode enforces a stricter set of rules for JavaScript code execution. Some of the changes introduced by strict mode include:

  Variables must be declared before they can be used, which helps prevent accidental global variable declarations.

  Assignments to non-writable properties or non-existing variables throw errors, rather than failing silently.

  The delete operator is not allowed on non-configurable properties.

  The eval function cannot create variables in the scope where it was called.

  Functions cannot have duplicate named parameters.

  this is undefined in functions called with no context, rather than defaulting to the global object.

The reasoning behind strict mode is to prevent common coding mistakes and improve the performance of JavaScript programs. By enforcing stricter rules, strict mode helps developers write code that is more optimized, secure, and easier to debug.

Additionally, strict mode was introduced to address some of the quirks and inconsistencies in earlier versions of JavaScript. By making certain behaviors of JavaScript code more predictable and consistent, strict mode helps developers write more reliable and maintainable code.
Read more about strict mode here: https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/

# 3. How do I redirect to another webpage?

window.location.replace(...) is better than using window.location.href, because replace() does not keep the originating page in the session history, meaning the user won't get stuck in a never-ending back-button fiasco.

If you want to simulate someone clicking on a link, use location.href

If you want to simulate an HTTP redirect, use location.replace

For example:

```
// similar behavior as an HTTP redirect
window.location.replace("http://stackoverflow.com");

// similar behavior as clicking on a link
window.location.href = "http://stackoverflow.com";
```

# 4. How do JavaScript closures work?

A closure is a pairing of:

1. A function and
2. A reference to that function's outer scope (lexical environment)
A lexical environment is part of every execution context (stack frame) and is a map between identifiers (i.e. local variable names) and values.

Every function in JavaScript maintains a reference to its outer lexical environment. This reference is used to configure the execution context created when a function is invoked. This reference enables code inside the function to "see" variables declared outside the function, regardless of when and where the function is called.

If a function was called by a function, which in turn was called by another function, then a chain of references to outer lexical environments is created. This chain is called the scope chain.

In the following code, inner forms a closure with the lexical environment of the execution context created when foo is invoked, closing over variable secret:
```
function foo() {
  const secret = Math.trunc(Math.random() * 100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`
```

# Code details:
1.Number Guessing game: Stored in a single file with same name,this file is made for user to guess the randomly generated number according to the hints given in the browser window.


2.Random Story Generator : This example will work on two files (main.js and index.html) for generating a random story each time the user clicks on the button. The US/UK radio buttons can be used to change the measurements provided in the story. User can also enter his name in the story using the top text field.
