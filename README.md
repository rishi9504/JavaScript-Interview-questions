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
In other words: in JavaScript, functions carry a reference to a private "box of state", to which only they (and any other functions declared within the same lexical environment) have access. This box of the state is invisible to the caller of the function, delivering an excellent mechanism for data-hiding and encapsulation.

And remember: functions in JavaScript can be passed around like variables (first-class functions), meaning these pairings of functionality and state can be passed around your program: similar to how you might pass an instance of a class around in C++.

If JavaScript did not have closures, then more states would have to be passed between functions explicitly, making parameter lists longer and code noisier.

So, if you want a function to always have access to a private piece of state, you can use a closure.

...and frequently we do want to associate the state with a function. For example, in Java or C++, when you add a private instance variable and a method to a class, you are associating the state with functionality.

In C and most other common languages, after a function returns, all the local variables are no longer accessible because the stack-frame is destroyed. In JavaScript, if you declare a function within another function, then the local variables of the outer function can remain accessible after returning from it. In this way, in the code above, secret remains available to the function object inner, after it has been returned from foo.

Uses of Closures
Closures are useful whenever you need a private state associated with a function. This is a very common scenario - and remember: JavaScript did not have a class syntax until 2015, and it still does not have a private field syntax. Closures meet this need.

Private Instance Variables
In the following code, the function toString closes over the details of the car.
```
function Car(manufacturer, model, year, color) {
  return {
    toString() {
      return `${manufacturer} ${model} (${year}, ${color})`
    }
  }
}

const car = new Car('Aston Martin', 'V8 Vantage', '2012', 'Quantum Silver')
console.log(car.toString())
```

Functional Programming
In the following code, the function inner closes over both fn and args.
```
function curry(fn) {
  const args = []
  return function inner(arg) {
    if(args.length === fn.length) return fn(...args)
    args.push(arg)
    return inner
  }
}

function add(a, b) {
  return a + b
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)()) // 5

```
Event-Oriented Programming
In the following code, function onClick closes over variable BACKGROUND_COLOR.
```
const $ = document.querySelector.bind(document)
const BACKGROUND_COLOR = 'rgba(200, 200, 242, 1)'

function onClick() {
  $('body').style.background = BACKGROUND_COLOR
}

$('button').addEventListener('click', onClick)
<button>Set background color</button>
```
Modularization

In the following example, all the implementation details are hidden inside an immediately executed function expression. The functions tick and toString close over the private state and functions they need to complete their work. Closures have enabled us to modularize and encapsulate our code.
```
let namespace = {};

(function foo(n) {
  let numbers = []

  function format(n) {
    return Math.trunc(n)
  }

  function tick() {
    numbers.push(Math.random() * 100)
  }

  function toString() {
    return numbers.map(format)
  }

  n.counter = {
    tick,
    toString
  }
}(namespace))

const counter = namespace.counter
counter.tick()
counter.tick()
console.log(counter.toString())
```
Examples


Example 1
This example shows that the local variables are not copied in the closure: the closure maintains a reference to the original variables themselves. It is as though the stack-frame stays alive in memory even after the outer function exits.
```
function foo() {
  let x = 42
  let inner = () => console.log(x)
  x = x + 1
  return inner
}

foo()() // logs 43
```
Example 2
In the following code, three methods log, increment, and update all close over the same lexical environment.

And every time createObject is called, a new execution context (stack frame) is created and a completely new variable x, and a new set of functions (log etc.) are created, that close over this new variable.
```
function createObject() {
  let x = 42;
  return {
    log() { console.log(x) },
    increment() { x++ },
    update(value) { x = value }
  }
}

const o = createObject()
o.increment()
o.log() // 43
o.update(5)
o.log() // 5
const p = createObject()
p.log() // 42
```


Example 3
If you are using variables declared using var, be careful you understand which variable you are closing over. Variables declared using var are hoisted. This is much less of a problem in modern JavaScript due to the introduction of let and const.

In the following code, each time around the loop, a new function inner is created, which closes over i. But because var i is hoisted outside the loop, all of these inner functions close over the same variable, meaning that the final value of i (3) is printed, three times.
```
function foo() {
  var result = []
  for (var i = 0; i < 3; i++) {
    result.push(function inner() { console.log(i) } )
  }

  return result
}

const result = foo()
// The following will print `3`, three times...
for (var i = 0; i < 3; i++) {
  result[i]() 
}
```
Final points:
Whenever a function is declared in JavaScript closure is created.
Returning a function from inside another function is the classic example of closure, because the state inside the outer function is implicitly available to the returned inner function, even after the outer function has completed execution.
Whenever you use eval() inside a function, a closure is used. The text you eval can reference local variables of the function, and in the non-strict mode, you can even create new local variables by using eval('var foo = …').
When you use new Function(…) (the Function constructor) inside a function, it does not close over its lexical environment: it closes over the global context instead. The new function cannot reference the local variables of the outer function.
A closure in JavaScript is like keeping a reference (NOT a copy) to the scope at the point of function declaration, which in turn keeps a reference to its outer scope, and so on, all the way to the global object at the top of the scope chain.
A closure is created when a function is declared; this closure is used to configure the execution context when the function is invoked.
A new set of local variables is created every time a function is called.

# Code details:
1.Number Guessing game: Stored in a single file with same name,this file is made for user to guess the randomly generated number according to the hints given in the browser window.


2.Random Story Generator : This example will work on two files (main.js and index.html) for generating a random story each time the user clicks on the button. The US/UK radio buttons can be used to change the measurements provided in the story. User can also enter his name in the story using the top text field.
