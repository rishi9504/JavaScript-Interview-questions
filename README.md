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


# 5. What is lexical environment?

A lexical environment is a concept in programming languages that defines the association between identifiers (variables, functions, etc.) and their values or references within a specific scope. It is a data structure that holds variables and their values, as well as references to outer environments.

In JavaScript, each time a function is invoked or a block of code is executed, a new lexical environment is created. A lexical environment consists of two main components:

Environment Record: It is a record that holds all the identifiers (variables, functions, etc.) and their corresponding values within the current scope. It can be thought of as a container for variables and functions. The environment record can be either declarative (for variables defined with let, const, var, function declarations, etc.) or object-based (for variables created with this or function parameters).

Outer Environment Reference: It is a reference to the outer lexical environment, forming a chain of nested environments. This reference allows for variable lookup in outer scopes when an identifier is not found in the current environment. It enables access to variables from the enclosing scopes or parent functions.

Lexical environments are essential for scoping and variable resolution in programming languages. They provide the context for interpreting and executing code. When a variable is referenced, the lexical environment chain is traversed until the variable is found or an error is thrown if it is not found in any environment.

Lexical environments also play a crucial role in function closures, where an inner function retains access to its outer function's variables even after the outer function has finished executing. The lexical environment chain allows the inner function to access and "close over" those variables.

Overall, lexical environments are fundamental to how variables and functions are organized and accessed within a program's scope hierarchy, ensuring proper scoping and variable resolution during runtime.

# 6. Difference between setTimeOut and setInterval in javascript.

setTimeout and setInterval are both functions in JavaScript that allow you to schedule the execution of a function or a piece of code at a later time. However, there are some key differences between them:

Execution Timing:

setTimeout: It executes the provided function once after a specified delay (in milliseconds). After the delay, the function is executed only once.
setInterval: It executes the provided function repeatedly at a specified interval (in milliseconds) until it is cleared using clearInterval. The function is executed multiple times at regular intervals.
Number of Executions:

setTimeout: It executes the function only once after the specified delay.
setInterval: It executes the function repeatedly at the specified interval until clearInterval is called to stop the execution.
Handling Multiple Invocations:

setTimeout: If the delay is set to 0 or very low, the function will be placed in the event queue and executed as soon as the call stack is clear. If multiple setTimeout calls are made, each will be executed after its respective delay.
setInterval: If the execution of a function takes longer than the specified interval, subsequent invocations may be delayed or skipped. The interval specifies the minimum time between function invocations.
Stopping the Execution:

setTimeout: The execution can be stopped by calling clearTimeout and passing the timeout identifier returned by the setTimeout function.
setInterval: The execution can be stopped by calling clearInterval and passing the interval identifier returned by the setInterval function.
In summary, setTimeout is used to execute a function once after a specified delay, while setInterval is used to execute a function repeatedly at a specified interval until it is explicitly stopped. Both functions have their own use cases depending on the desired timing and behavior of your code.

# 7. What is event loop in JavaScript?

The event loop is a crucial component of JavaScript's concurrency model, responsible for managing the execution of code in a single-threaded environment. It handles the asynchronous execution of tasks, such as handling user input, network requests, timers, and other events.

In JavaScript, the event loop continuously checks for tasks in a loop, and when a task is found, it executes it. The event loop consists of two main components:

Call Stack: The call stack is a data structure that keeps track of the currently executing function or code. Whenever a function is called, it is pushed onto the call stack, and when a function completes its execution, it is popped off the stack.

Task Queue: The task queue (also known as the message queue) holds the tasks that are ready to be executed. These tasks include events like user interactions (e.g., click, keypress), timer callbacks, and network responses. When a task is ready, it is added to the task queue.

The event loop follows a specific sequence to process tasks:

The JavaScript engine starts executing the code synchronously, line by line, pushing functions onto the call stack.

When an asynchronous task, such as a timer callback or an event, is encountered, it is offloaded to a separate thread (if available) and put into the task queue once it completes.

The event loop continuously checks if the call stack is empty. If the call stack is empty and there are tasks in the task queue, it takes the first task from the queue and pushes it onto the call stack for execution.

The task is executed on the call stack until completion or until another asynchronous task is encountered. In the latter case, the process repeats, and the new task is offloaded to the task queue.

This cycle continues, with the event loop constantly checking for new tasks and pushing them onto the call stack for execution.

The event loop allows JavaScript to handle asynchronous tasks efficiently without blocking the main thread. It ensures that time-consuming or blocking operations don't hinder the responsiveness of the user interface and enables the execution of code in a non-blocking, event-driven manner.

It's important to note that the event loop is a simplified explanation of JavaScript's concurrency model, and there are more complex aspects to consider, such as microtasks, job queues, and browser-specific implementation details.

# 8. Why does A child class constructor cannot make use of this reference until the super() method has been called.

In object-oriented programming, when you create a child class that extends a parent class, the child class inherits the properties and behaviors of the parent class. This inheritance includes the constructors of the parent class.

When you create an instance of the child class, the constructor of the child class is called. At this point, the constructor needs to initialize the state of the child class and possibly perform some additional actions specific to the child class.

However, before the child class constructor can do its own initialization, it needs to ensure that the parent class has been properly initialized. This is because the child class depends on the state and behavior provided by the parent class.

To ensure proper initialization of the parent class, the child class constructor must call the constructor of the parent class using the super() method. The super() method is used to invoke the constructor of the parent class and allows the parent class to initialize its own state.

Once the super() method is called and the parent class has been initialized, the child class constructor can safely make use of the this reference to access its own properties and methods, as well as any inherited properties and methods from the parent class.

If the child class constructor were to use the this reference before the super() method is called, it could potentially access uninitialized properties or methods inherited from the parent class, leading to undefined behavior or errors. Therefore, it is a language rule to call the super() method as the first statement in the child class constructor to ensure proper initialization of the parent class before the child class can use the this reference.


# 9. Rest operator in Javascript.

In JavaScript, the rest operator is represented by three consecutive dots (...) and is used in function declarations or array literals to capture multiple function arguments or array elements into a single array.

When used as a function parameter, the rest operator allows a function to accept any number of arguments as an array. Here's an example:

```
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
```

In the example above, the sum function accepts any number of arguments and uses the rest operator (...numbers) to capture them into an array called numbers. This allows us to pass in multiple arguments, and they are automatically converted into an array within the function body.

The rest operator can also be used with array literals to extract the remaining elements of an array into a new array. Here's an example:

```
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```
In the example above, the rest operator (...rest) is used to capture the remaining elements of the array [1, 2, 3, 4, 5] into a new array called rest. The first element is assigned to the variable first, and the second element is assigned to second.

The rest operator is a useful feature in JavaScript that allows you to work with variable numbers of arguments or extract parts of an array conveniently.

# 10. shallow copy and deep copy in javascript

In JavaScript, when you assign or copy objects or arrays, there are two common approaches: shallow copy and deep copy. These approaches determine how the original and copied objects are related and whether changes to one affect the other. Let's explore both concepts:

Shallow Copy:

Shallow copying creates a new object or array and copies the references of the original values. It means that changes made to the copied object's properties or array elements will also affect the original object.
Shallow copying can be done using various methods, such as Object.assign(), the spread operator (...), and the Array.slice() method.
Here's an example of shallow copying an object:
```
const originalObject = { a: 1, b: 2 };
const shallowCopy = Object.assign({}, originalObject);

// Modifying the shallow copy
shallowCopy.b = 3;

console.log(originalObject); // Output: { a: 1, b: 2 }
console.log(shallowCopy); // Output: { a: 1, b: 3 }
```
In the example above, the Object.assign() method is used to create a shallow copy of the originalObject. Modifying the shallowCopy does not affect the originalObject, but changes to nested objects or arrays within the original object would still be reflected in the shallow copy.

Deep Copy:

Deep copying creates a completely independent copy of an object or array, including all nested objects and arrays. Changes made to the copied object or array do not affect the original.
Deep copying is commonly implemented using recursion or specialized libraries like lodash's cloneDeep().
Here's an example of deep copying an object:
```
const originalObject = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modifying the deep copy
deepCopy.b.c = 3;

console.log(originalObject); // Output: { a: 1, b: { c: 2 } }
console.log(deepCopy); // Output: { a: 1, b: { c: 3 } }
```

In the example above, JSON.stringify() is used to convert the originalObject to a JSON string, and then JSON.parse() is used to parse it back into a new object. This process creates a deep copy. Modifying the deepCopy object does not affect the originalObject.

It's important to note that deep copying has some limitations. It may not work as expected for objects or arrays containing functions, circular references, or other non-serializable values. Additionally, deep copying can be slower and less efficient compared to shallow copying.

Therefore, depending on your specific use case, you should choose the appropriate copying technique—shallow copy or deep copy—to achieve the desired behavior while considering the performance and limitations of each approach.

# 11. What are map and reduce in Javascript?

In JavaScript, map() and reduce() are two higher-order functions that are commonly used to work with arrays.

map():

The map() method creates a new array by iterating over an existing array and applying a provided function to each element. It returns a new array with the same length as the original array, where each element is the result of the applied function.
The syntax for map() is as follows: array.map(callback(currentValue, index, array))
Here's an example of using map() to double each element in an array:
```
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

```
In the example above, the map() function is called on the numbers array. The provided callback function (number) => number * 2 multiplies each element by 2, and the resulting array [2, 4, 6, 8, 10] is returned.

reduce():

The reduce() method reduces an array to a single value by executing a provided function for each element of the array. It takes an accumulator and the current element as arguments and returns the accumulated result.
The syntax for reduce() is as follows: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
Here's an example of using reduce() to calculate the sum of all elements in an array:
```
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

```
In the example above, the reduce() function is called on the numbers array. The callback function (accumulator, currentValue) => accumulator + currentValue adds each element to the accumulator, starting from an initial value of 0. The final result, which is the sum of all elements, is 15.

Both map() and reduce() are powerful tools for manipulating arrays in JavaScript. map() is useful when you want to transform each element of an array and create a new array with the transformed values. reduce() is handy when you need to perform calculations or aggregations on the elements of an array to derive a single value.

# 12. Promise and Callback in Javascript.

In JavaScript, both promises and callbacks are mechanisms used for handling asynchronous operations. They allow you to manage the flow of execution and handle the results of asynchronous tasks. However, they have different approaches and syntax.

Callbacks:

Callbacks are functions that are passed as arguments to other functions and executed once an asynchronous operation completes.
Callbacks have been a traditional way of handling asynchronous operations in JavaScript before the introduction of promises.
Here's an example of using a callback to handle an asynchronous operation:
```
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = 'Some data';
    callback(null, data); // Invoke the callback with the result
  }, 2000);
}

// Using the fetchData function with a callback
fetchData((error, result) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Result:', result);
  }
});

```
In the example above, the fetchData function performs an asynchronous operation (simulated with setTimeout) and invokes the provided callback function once the operation is complete. The callback is called with two parameters: error (if any) and result.

Promises:

Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow you to chain operations using methods like .then() and .catch().
Promises provide a more structured and readable way to handle asynchronous code compared to callbacks.
Here's an example of using a promise to handle an asynchronous operation:
```
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = 'Some data';
      resolve(data); // Resolve the promise with the result
      // reject(new Error('Something went wrong')); // Reject the promise with an error
    }, 2000);
  });
}

// Using the fetchData function with a promise
fetchData()
  .then((result) => {
    console.log('Result:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  ```
In the example above, the fetchData function returns a promise. Inside the promise's executor function, you can perform the asynchronous operation and call resolve to fulfill the promise with a value or reject to reject it with an error. The promise is then used with .then() to handle the resolved value and .catch() to handle any errors.

Promises provide better control flow and error handling compared to callbacks, especially when dealing with multiple asynchronous operations. They allow you to chain multiple asynchronous operations together and handle success or failure using the .then() and .catch() methods.

It's worth mentioning that with the introduction of ES6 and later versions, promises have become the preferred approach for handling asynchronous operations in JavaScript. Promises provide a more intuitive and readable syntax and have additional features like async/await that further simplify asynchronous code.
# 
