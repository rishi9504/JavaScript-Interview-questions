### High level overview of JS

JavaScript (JS) is a versatile, high-level programming language that is widely used for web development, but it also has applications in server-side development, mobile apps, game development, and more. Here's a high-level overview of JavaScript:

### 1. **Purpose and History**
   - **Purpose**: Originally developed to make web pages interactive, JavaScript is now a full-fledged, multi-paradigm language that supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles.
   - **History**: JavaScript was created in 1995 by Brendan Eich while working at Netscape. It was initially named "Mocha," then "LiveScript," and finally "JavaScript" as part of a marketing strategy. Despite the name, JavaScript is not related to Java.

### 2. **Core Features**
   - **Interpreted Language**: JavaScript is typically executed directly by the browser's JavaScript engine, rather than being compiled ahead of time.
   - **Dynamically Typed**: Variables in JavaScript do not require a specific type declaration, and the type can change at runtime.
   - **Event-Driven**: JavaScript is often used to handle events (like user actions) in a web page, allowing for dynamic, interactive user experiences.
   - **Prototype-Based Object Orientation**: JavaScript uses prototypes for inheritance rather than classical inheritance models like in Java or C++.
   - **First-Class Functions**: Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
   - **Asynchronous Programming**: JavaScript supports asynchronous operations, notably through the use of callbacks, promises, and the `async`/`await` syntax, allowing for non-blocking operations.

### 3. **Environment**
   - **Browser**: JavaScript is most commonly executed in web browsers, where it interacts with the Document Object Model (DOM) to manipulate web pages.
   - **Node.js**: JavaScript can also run on servers using Node.js, which provides a runtime environment that allows for the development of server-side applications.

### 4. **Key Language Constructs**
   - **Variables**: Declared using `var`, `let`, or `const`. `let` and `const` (introduced in ES6) provide block-level scoping, while `var` is function-scoped.
   - **Data Types**: JavaScript supports primitive types like `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`, as well as objects, arrays, and functions.
   - **Operators**: Includes arithmetic operators (`+`, `-`, `*`, `/`), comparison operators (`==`, `===`, `!=`, `!==`), logical operators (`&&`, `||`, `!`), and more.
   - **Control Structures**: JavaScript supports `if...else`, `switch`, `for`, `while`, and `do...while` loops, as well as `try...catch` for error handling.
   - **Functions**: Functions can be declared using function expressions, function declarations, arrow functions (`=>`), or as methods within objects.

### 5. **Advanced Concepts**
   - **Closures**: A closure is a function that remembers its lexical scope even when the function is executed outside that scope. This is fundamental to JavaScript's function scoping and async patterns.
   - **Promises and Async/Await**: Promises represent the eventual completion (or failure) of an asynchronous operation, and `async`/`await` syntax makes working with promises more readable and synchronous-looking.
   - **Modules**: JavaScript supports modular code organization. ES6 introduced native modules with `import` and `export` statements, enabling better code reuse and maintainability.
   - **Event Loop**: The event loop is a core mechanism that allows JavaScript to handle asynchronous operations. It allows non-blocking execution by processing events and executing callbacks from the event queue.

### 6. **Ecosystem and Libraries**
   - **Frameworks**: Popular JavaScript frameworks include React, Angular, and Vue.js for front-end development, and Express.js for back-end development.
   - **Libraries**: JavaScript has a rich ecosystem of libraries, such as jQuery (for DOM manipulation), Lodash (for utility functions), and D3.js (for data visualization).
   - **Package Management**: npm (Node Package Manager) is the default package manager for Node.js, providing access to a vast repository of JavaScript libraries and tools.

### 7. **Evolution**
   - **ECMAScript (ES)**: JavaScript is standardized by ECMAScript. The most significant update was ES6 (also known as ES2015), which introduced many modern features like classes, arrow functions, and template literals. Subsequent versions (ES7, ES8, etc.) have continued to add new features and improvements.
   - **Tooling**: Modern JavaScript development often involves tools like Babel (for transpiling ES6+ code to ES5), Webpack (for module bundling), and ESLint (for linting).

### 8. **Usage**
   - **Web Development**: JavaScript is the cornerstone of web development, enabling interactive and dynamic content on web pages.
   - **Server-Side Development**: With Node.js, JavaScript is also used for back-end development, enabling full-stack JavaScript applications.
   - **Mobile Development**: JavaScript frameworks like React Native allow for cross-platform mobile app development.
   - **Game Development**: JavaScript is used in browser-based games and frameworks like Phaser.


JavaScript is a powerful, flexible, and widely-used language that has grown far beyond its original scope as a simple scripting language for web browsers. Its role in modern web development is crucial, and its usage in other areas like server-side development, mobile apps, and even desktop applications continues to grow. Understanding JavaScript is essential for anyone involved in web or full-stack development.

### Javascript engine and runtime

JavaScript engines and runtimes are fundamental concepts that power the execution of JavaScript code. Understanding them helps clarify how JavaScript works under the hood, both in web browsers and on the server side.

### JavaScript Engine

A **JavaScript engine** is a program or an interpreter that executes JavaScript code. It takes the source code written in JavaScript, compiles or interprets it, and then runs it. Modern JavaScript engines are highly optimized to improve performance.

#### Key Components of a JavaScript Engine

1. **Parser**:
   - The engine first parses the JavaScript code, converting it into an Abstract Syntax Tree (AST). This involves lexical analysis (tokenizing the code) and syntactic analysis (ensuring the code structure is correct).
   
2. **Interpreter**:
   - The interpreter translates the AST into bytecode, which is a lower-level representation of the code that the engine can execute directly. In older engines, this bytecode would be executed line-by-line.

3. **JIT Compiler**:
   - Modern JavaScript engines use Just-In-Time (JIT) compilation to improve performance. The JIT compiler translates frequently executed code into machine code at runtime, optimizing it for faster execution. This process involves:
     - **Baseline Compiler**: Quickly converts bytecode to machine code without heavy optimizations.
     - **Optimizing Compiler**: Identifies "hot" code paths that are executed frequently and applies aggressive optimizations to make them run faster.

4. **Garbage Collector**:
   - JavaScript engines include a garbage collector, which automatically manages memory allocation and deallocation. It frees up memory that is no longer in use, preventing memory leaks and ensuring efficient memory usage.

#### Examples of JavaScript Engines

- **V8**: Developed by Google, V8 is the engine used in Google Chrome and Node.js. It is known for its high performance and is written in C++.
- **SpiderMonkey**: Developed by Mozilla, SpiderMonkey is used in the Firefox browser. It was the first JavaScript engine ever created.
- **JavaScriptCore** (also known as Nitro): Developed by Apple, it powers Safari and other WebKit-based browsers.
- **Chakra**: Developed by Microsoft, Chakra was used in the Edge browser before it switched to Chromium.

### JavaScript Runtime

A **JavaScript runtime** is an environment where JavaScript code is executed. It includes the JavaScript engine and provides additional APIs and tools needed to run JavaScript code outside the context of the engine itself.

#### Key Components of a JavaScript Runtime

1. **JavaScript Engine**:
   - The runtime includes the engine, which compiles and executes the code.

2. **Runtime Environment**:
   - Provides built-in libraries and APIs that JavaScript code can use. These include:
     - **Global Objects**: Objects like `Math`, `Date`, and `String` that are available globally.
     - **Console API**: Functions like `console.log()` for outputting messages to the console.
     - **Timers**: Functions like `setTimeout()` and `setInterval()` for scheduling tasks.
     - **Event Loop**: Manages the execution of code, event handling, and async tasks.

3. **Event Loop and Callback Queue**:
   - The event loop is a core feature of the runtime that handles asynchronous operations. It continuously checks the call stack and the callback queue, processing tasks asynchronously to ensure non-blocking execution.
   - **Call Stack**: Keeps track of the active function calls.
   - **Callback Queue**: Queues up tasks like I/O operations, timers, and event handlers to be processed by the event loop.

4. **External APIs and Bindings**:
   - The runtime environment often provides access to external APIs that are not part of the JavaScript language itself. For instance:
     - **DOM API**: In browsers, the runtime includes the Document Object Model (DOM) API, which allows JavaScript to interact with HTML and CSS to manipulate web pages.
     - **File System API**: In Node.js, the runtime includes APIs to interact with the file system, network, and more.

#### Examples of JavaScript Runtimes

- **Web Browsers**: Browsers like Chrome, Firefox, Safari, and Edge provide JavaScript runtimes that include the JavaScript engine (e.g., V8 in Chrome) and a host of APIs for interacting with the web page (DOM, BOM, etc.).
- **Node.js**: A runtime environment for running JavaScript on the server-side. It uses the V8 engine but adds APIs for file systems, networking, and other server-related tasks.


- **JavaScript Engine**: The core component responsible for executing JavaScript code. It parses, interprets, compiles, and executes the code, with modern engines using JIT compilation for performance optimization.
- **JavaScript Runtime**: A broader environment that includes the JavaScript engine and additional APIs and tools necessary to run JavaScript code, either in a web browser (with DOM access) or in other environments like Node.js (with file system and network access).

Understanding the distinction between the engine and the runtime is crucial for grasping how JavaScript operates in different contexts, whether it's in the browser, on a server, or even in embedded systems.


### Execution contexts in js

In JavaScript, an **execution context** is an abstract concept that represents the environment in which the JavaScript code is evaluated and executed. Every time a piece of code runs in JavaScript, it runs inside an execution context. Understanding execution contexts is crucial to mastering the behavior of JavaScript, especially how variables, functions, and the `this` keyword work.

### Types of Execution Contexts

1. **Global Execution Context**
2. **Function Execution Context**
3. **Eval Execution Context** (rarely used and generally discouraged)

### 1. Global Execution Context

- **Global Scope**: The global execution context is created when your JavaScript code first runs. It's associated with the global object, which is `window` in browsers and `global` in Node.js. Variables and functions declared outside of any function are considered global and belong to this context.
  
- **Properties**:
  - **Creation Phase**: During this phase, the global object is created, and `this` is set to reference the global object. The JavaScript engine also sets up memory for all variables and function declarations.
  - **Execution Phase**: The code is executed line by line, and variables are assigned their values.

- **Example**:
  ```javascript
  var x = 10;
  function greet() {
      console.log("Hello, World!");
  }
  greet(); // Output: Hello, World!
  ```

  In this example, the global execution context is responsible for executing the code, including the `greet` function.

### 2. Function Execution Context

- **Function Scope**: Each time a function is invoked, a new function execution context is created. This context is specific to that function call and includes everything needed to execute the function: its own `arguments`, variables, and `this` value.
  
- **Properties**:
  - **Creation Phase**: The engine sets up the environment for the function, including the creation of the `arguments` object (which holds all the arguments passed to the function) and hoisting (which involves setting up memory for variable and function declarations inside the function).
  - **Execution Phase**: The function's code is executed line by line, and variables are assigned their values.

- **Example**:
  ```javascript
  function sum(a, b) {
      var result = a + b;
      return result;
  }
  var total = sum(5, 10); // total is 15
  ```

  When `sum` is called, a new function execution context is created for that specific call, handling the `a` and `b` parameters and the `result` variable.

### 3. Eval Execution Context

- **Eval Scope**: The `eval()` function, which can execute JavaScript code represented as a string, creates its own execution context. However, using `eval()` is generally discouraged because it can lead to security issues and performance degradation.

- **Example**:
  ```javascript
  eval("var x = 2 + 2; console.log(x);"); // Output: 4
  ```

  In this case, `eval` creates a new execution context to evaluate the code `"var x = 2 + 2; console.log(x);"`.

### Components of an Execution Context

Every execution context consists of three main parts:

1. **Variable Environment**:
   - Contains all the variables and function declarations in the execution context, including the `arguments` object for functions.
   - Handles **hoisting**, where variable and function declarations are moved to the top of their respective scopes during the creation phase.

2. **Lexical Environment**:
   - Similar to the variable environment but also includes the reference to the outer environment (parent execution context).
   - This allows for **scope chaining**, where JavaScript searches for variables up the scope chain if they are not found in the current scope.

3. **`this` Binding**:
   - Determines the value of `this` within the execution context.
   - In the global context, `this` refers to the global object (`window` in browsers).
   - In function contexts, `this` can vary depending on how the function is called (e.g., method call, constructor call, etc.).

### Execution Context Lifecycle

1. **Creation Phase**:
   - **Global Context**: The global object and `this` are created.
   - **Function Context**: The arguments object is created, and local variables and functions are hoisted.
   
2. **Execution Phase**:
   - The code is executed line by line, and variables are assigned values.

3. **Function Calls**:
   - Each function call creates a new execution context that is added to the **call stack**. When the function finishes executing, its context is popped off the stack, and control returns to the previous context.

### Call Stack

The **call stack** is a stack data structure that manages execution contexts in JavaScript. When a function is called, a new execution context is created and pushed onto the stack. When the function completes, its execution context is removed from the stack.

- **Example**:
  ```javascript
  function first() {
      console.log("First");
      second();
  }

  function second() {
      console.log("Second");
      third();
  }

  function third() {
      console.log("Third");
  }

  first();
  ```

  - **Call Stack**:
    1. `first()` is called, and its execution context is pushed onto the stack.
    2. `second()` is called within `first()`, adding another context to the stack.
    3. `third()` is called within `second()`, adding a third context.
    4. Once `third()` finishes, its context is popped, and control returns to `second()`, and so on.


- **Execution Context**: Represents the environment where JavaScript code is executed. It manages the scope and value of variables, functions, and `this`.
- **Global Execution Context**: Created when the script starts executing; there's only one global context.
- **Function Execution Context**: Created each time a function is called, managing its local variables, arguments, and scope.
- **Components**: Consist of the variable environment, lexical environment, and `this` binding.
- **Call Stack**: Manages the execution contexts, ensuring the correct order of function calls.

Understanding execution contexts and the call stack is crucial for grasping how JavaScript handles scope, closures, and the `this` keyword.


### The call stack in js

The **call stack** in JavaScript is a fundamental data structure used to manage the execution of function calls. It plays a crucial role in how JavaScript handles function invocation, recursion, and the flow of program execution. Understanding the call stack is key to debugging, especially when dealing with stack overflow errors or understanding the sequence of function calls.

### What is the Call Stack?

The call stack is a **stack data structure** that keeps track of function calls in a program. It operates on the principle of **LIFO** (Last In, First Out), meaning the last function that was called is the first one to finish execution and be removed from the stack.

### How the Call Stack Works

1. **Function Invocation**:
   - When a function is invoked, a new **execution context** is created for that function.
   - This execution context contains information about the function, such as its arguments, local variables, and the value of `this`.
   - The new execution context is pushed onto the call stack.

2. **Execution**:
   - The JavaScript engine starts executing the code inside the function.
   - If the function calls another function, a new execution context is created for that function, and it is also pushed onto the call stack.

3. **Function Return**:
   - When a function finishes executing, its execution context is popped off the call stack.
   - Control is then returned to the previous execution context on the stack.

4. **Global Execution Context**:
   - At the base of the call stack is the global execution context, which represents the environment for the entire script.
   - The global execution context remains on the stack until the program finishes execution.

### Example of the Call Stack in Action

Consider the following code:

```javascript
function firstFunction() {
    console.log("First function start");
    secondFunction();
    console.log("First function end");
}

function secondFunction() {
    console.log("Second function start");
    thirdFunction();
    console.log("Second function end");
}

function thirdFunction() {
    console.log("Third function start");
    console.log("Third function end");
}

firstFunction();
```

#### Execution Flow:

1. **Global Context**:
   - When the script is executed, the global execution context is created and pushed onto the stack.
   
2. **firstFunction() Call**:
   - `firstFunction` is called. A new execution context for `firstFunction` is created and pushed onto the stack.
   - The console logs "First function start".

3. **secondFunction() Call**:
   - Inside `firstFunction`, `secondFunction` is called. A new execution context for `secondFunction` is created and pushed onto the stack.
   - The console logs "Second function start".

4. **thirdFunction() Call**:
   - Inside `secondFunction`, `thirdFunction` is called. A new execution context for `thirdFunction` is created and pushed onto the stack.
   - The console logs "Third function start" and "Third function end".

5. **Return from thirdFunction**:
   - `thirdFunction` completes execution, and its execution context is popped off the stack.
   - Control returns to `secondFunction`, which logs "Second function end".

6. **Return from secondFunction**:
   - `secondFunction` completes execution, and its execution context is popped off the stack.
   - Control returns to `firstFunction`, which logs "First function end".

7. **Return from firstFunction**:
   - `firstFunction` completes execution, and its execution context is popped off the stack.
   - The stack is now back to the global execution context.

#### Call Stack Visualization:

At different points in execution, the call stack looks like this:

- **Initial State**: `[ Global Execution Context ]`
- **After `firstFunction` call**: `[ Global Execution Context, firstFunction Execution Context ]`
- **After `secondFunction` call**: `[ Global Execution Context, firstFunction Execution Context, secondFunction Execution Context ]`
- **After `thirdFunction` call**: `[ Global Execution Context, firstFunction Execution Context, secondFunction Execution Context, thirdFunction Execution Context ]`
- **After `thirdFunction` returns**: `[ Global Execution Context, firstFunction Execution Context, secondFunction Execution Context ]`
- **After `secondFunction` returns**: `[ Global Execution Context, firstFunction Execution Context ]`
- **After `firstFunction` returns**: `[ Global Execution Context ]`

### Stack Overflow

A **stack overflow** occurs when the call stack exceeds its size limit. This usually happens with deeply recursive functions that do not have a proper base case to stop the recursion.

- **Example**:
  ```javascript
  function recursiveFunction() {
      recursiveFunction();
  }

  recursiveFunction();
  ```

  In this example, `recursiveFunction` calls itself indefinitely, causing the call stack to grow until it exceeds the memory limit and throws a "stack overflow" error.


- **Call Stack**: A stack data structure that keeps track of function calls in a program.
- **LIFO**: Last In, First Out principle governs the operation of the call stack.
- **Execution Context**: Every time a function is called, an execution context is created and pushed onto the stack. When the function returns, the context is popped off.
- **Stack Overflow**: Occurs when the call stack exceeds its memory limit, often due to uncontrolled recursion.

Understanding the call stack is essential for debugging and optimizing JavaScript code, as it gives insight into the order and depth of function calls and how JavaScript handles execution flow.
### Scope in js

In JavaScript, **scope** refers to the context in which variables, functions, and objects are accessible or visible. Understanding scope is fundamental to knowing how variables and functions are organized, how they interact with each other, and how they can be accessed.

### Types of Scope

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**
4. **Lexical Scope**

### 1. Global Scope

- **Definition**: Variables declared outside any function or block are in the global scope. These variables are accessible from anywhere in the code, including within functions and blocks.

- **Global Object**:
  - In a browser, the global scope is associated with the `window` object. Variables declared in the global scope become properties of the `window` object.
  - In Node.js, the global scope is associated with the `global` object.

- **Example**:
  ```javascript
  var globalVar = "I am global";

  function checkGlobalScope() {
      console.log(globalVar); // Accessible
  }

  checkGlobalScope(); // Output: "I am global"
  console.log(globalVar); // Output: "I am global"
  ```

  In this example, `globalVar` is accessible both inside and outside the `checkGlobalScope` function because it is in the global scope.

### 2. Function Scope

- **Definition**: Variables declared inside a function are in the function scope. These variables are only accessible within the function in which they are defined and cannot be accessed from outside the function.

- **Function Scope with `var`**:
  - The `var` keyword is function-scoped, meaning that variables declared with `var` are confined to the function in which they are declared.

- **Example**:
  ```javascript
  function checkFunctionScope() {
      var functionScopedVar = "I am inside a function";
      console.log(functionScopedVar); // Accessible
  }

  checkFunctionScope(); // Output: "I am inside a function"
  console.log(functionScopedVar); // Error: functionScopedVar is not defined
  ```

  Here, `functionScopedVar` is only accessible inside the `checkFunctionScope` function. Trying to access it outside the function results in an error.

### 3. Block Scope

- **Definition**: Variables declared inside a block (a set of curly braces `{}`), such as within an `if` statement, `for` loop, or any block of code, are block-scoped when declared with `let` or `const`.

- **Block Scope with `let` and `const`**:
  - The `let` and `const` keywords introduced block scope in JavaScript, allowing variables to be confined to the block in which they are declared.

- **Example**:
  ```javascript
  if (true) {
      let blockScopedVar = "I am inside a block";
      console.log(blockScopedVar); // Accessible
  }

  console.log(blockScopedVar); // Error: blockScopedVar is not defined
  ```

  In this example, `blockScopedVar` is only accessible within the `if` block. Attempting to access it outside the block results in an error.

### 4. Lexical Scope (Static Scope)

- **Definition**: Lexical scope refers to the fact that the scope of variables is determined by the structure of the code at the time it is written, not by the order in which functions are called. This means that a function’s scope chain is determined by where the function is defined in the code, not where it is called from.

- **Scope Chain**:
  - The scope chain is the hierarchy of scopes that JavaScript uses to resolve variable names. If a variable is not found in the current scope, JavaScript will look in the outer scope, and so on, until it reaches the global scope.

- **Example**:
  ```javascript
  function outerFunction() {
      let outerVar = "I am outside!";

      function innerFunction() {
          console.log(outerVar); // Accessible due to lexical scope
      }

      innerFunction();
  }

  outerFunction(); // Output: "I am outside!"
  ```

  In this example, `innerFunction` can access `outerVar` because of lexical scope. Even though `outerVar` is declared in the outer function, it is accessible within the inner function due to the scope chain.

### Hoisting and Scope

- **Hoisting**: In JavaScript, variable and function declarations are "hoisted" to the top of their containing scope during the compilation phase. However, the actual assignment of values occurs where the code is written.

- **Example with `var`**:
  ```javascript
  console.log(hoistedVar); // Output: undefined
  var hoistedVar = "I am hoisted";
  ```

  Here, the declaration of `hoistedVar` is hoisted to the top of the scope, but its assignment is not, leading to `undefined` when it is accessed before the assignment.

- **Hoisting with `let` and `const`**:
  ```javascript
  console.log(notHoistedVar); // Error: Cannot access 'notHoistedVar' before initialization
  let notHoistedVar = "I am not hoisted";
  ```

  Variables declared with `let` or `const` are also hoisted, but they remain uninitialized until their declaration is encountered in the code, leading to a `ReferenceError` if accessed before initialization.


- **Global Scope**: Variables accessible from anywhere in the code.
- **Function Scope**: Variables accessible only within the function in which they are defined.
- **Block Scope**: Variables accessible only within the block in which they are defined, introduced with `let` and `const`.
- **Lexical Scope**: Scope determined by the location of functions in the code; functions can access variables from their outer (parent) scopes.

Understanding scope in JavaScript is crucial for managing variables, avoiding conflicts, and correctly implementing functions and closures. It allows for better organization and control over how data flows and is accessed throughout a program.
### Scope chain in js

The **scope chain** in JavaScript is a mechanism that determines the order in which variables and functions are looked up when they are used. When you reference a variable or a function, JavaScript first looks in the current scope. If it doesn't find it there, it continues looking in the outer scope, and this continues until it reaches the global scope. This chain of scopes is known as the scope chain.

### How the Scope Chain Works

1. **Global Scope**: The outermost scope in JavaScript is the global scope. Any variables or functions defined here are accessible from anywhere in your code.
  
2. **Local Scope (Function Scope)**: Each function in JavaScript has its own local scope. Variables declared within a function are not accessible outside that function.

3. **Block Scope**: With the introduction of `let` and `const` in ES6, JavaScript now has block-level scope, which applies to variables declared within a block (e.g., inside `{}`).

### Scope Chain Example

Let's look at an example to understand how the scope chain works:

```javascript
var globalVar = "I am global";

function outerFunction() {
    var outerVar = "I am in outerFunction";

    function innerFunction() {
        var innerVar = "I am in innerFunction";

        console.log(innerVar);   // Output: I am in innerFunction
        console.log(outerVar);   // Output: I am in outerFunction
        console.log(globalVar);  // Output: I am global
    }

    innerFunction();
}

outerFunction();
```

#### Explanation:

1. **Global Scope**:
   - `globalVar` is defined in the global scope. It is accessible anywhere in the script.

2. **outerFunction Scope**:
   - When `outerFunction` is called, a new execution context is created with its own local scope.
   - `outerVar` is defined within this local scope.

3. **innerFunction Scope**:
   - When `innerFunction` is called, another execution context is created with its own local scope.
   - `innerVar` is defined within this local scope.
   - `innerFunction` has access to `innerVar`, `outerVar` (from its parent `outerFunction` scope), and `globalVar` (from the global scope).

### Scope Chain in Action

- When `innerFunction` is executed, the JavaScript engine first looks for `innerVar` in the local scope of `innerFunction`.
- Since `innerVar` is found, it logs its value. 
- When `outerVar` is referenced, the engine doesn’t find it in `innerFunction`'s local scope, so it looks up the scope chain to `outerFunction`'s scope, where it finds `outerVar`.
- Finally, when `globalVar` is referenced, the engine looks up the scope chain again, reaching the global scope and finding `globalVar`.

### The Scope Chain and Closures

The scope chain is also critical to understanding **closures** in JavaScript. A closure occurs when an inner function retains access to variables from its outer function's scope even after the outer function has completed execution.

```javascript
function makeCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter(); // Output: 1
counter(); // Output: 2
```

#### Explanation:

- When `makeCounter` is called, it returns an inner function that increments and logs `count`.
- Even after `makeCounter` has finished executing, the inner function retains access to the `count` variable because of the scope chain. This retained access is what defines a closure.

### Key Points About the Scope Chain

- **Chain Structure**: The scope chain is formed by the nested structure of scopes, where each function or block scope can access variables in its own scope and in the scopes of its parent functions or blocks, up to the global scope.
  
- **No Backward Access**: A scope can only access variables from its own scope and those above it in the chain. It cannot access variables declared in scopes that are deeper or defined after it.

- **Global Scope at the Top**: The global scope is always at the top of the scope chain. If a variable is not found anywhere in the chain, it results in a `ReferenceError`.


- The **scope chain** in JavaScript is a series of scopes linked together, where each scope can access variables from its own context and the outer (parent) scopes, up to the global scope.
- **Local variables** in a function are prioritized over global variables with the same name.
- **Closures** utilize the scope chain to remember variables from outer scopes, even after those scopes have finished execution.
- **Lexical scoping** determines the structure of the scope chain based on the location of functions and blocks in the code.
### Scoping in practice

Scoping in practice in JavaScript involves understanding how variables are accessed and manipulated in different contexts—global, function, and block scopes. By applying the concepts of scoping, developers can write more predictable, maintainable, and bug-free code.

### Practical Examples of Scoping in JavaScript

#### 1. **Global Scope**
Variables declared in the global scope are accessible from anywhere in the code.

```javascript
// Global variable
var globalVar = "I'm global!";

function printGlobalVar() {
    console.log(globalVar); // Accesses the global variable
}

printGlobalVar(); // Output: "I'm global!"

// Modifying global variable
globalVar = "Global variable modified!";
console.log(globalVar); // Output: "Global variable modified!"
```

**Best Practices:**
- Avoid polluting the global scope with too many variables. Use functions or modules to encapsulate code.
- Consider using `const` or `let` instead of `var` to avoid unintentional global variable creation.

#### 2. **Function Scope**

Variables declared within a function are only accessible within that function.

```javascript
function scopeExample() {
    var functionScopedVar = "I'm inside a function!";
    console.log(functionScopedVar); // Accessible here
}

scopeExample();

console.log(functionScopedVar); // Error: functionScopedVar is not defined
```

**Best Practices:**
- Use function scope to create private variables that should not be accessed outside the function.
- Use functions to encapsulate logic and prevent variables from leaking into the global scope.

#### 3. **Block Scope with `let` and `const`**

Block scope confines variables to the block (e.g., within `{}`) in which they are declared.

```javascript
if (true) {
    let blockScopedVar = "I'm inside a block!";
    const anotherBlockScopedVar = "I'm also inside a block!";
    console.log(blockScopedVar); // Output: "I'm inside a block!"
    console.log(anotherBlockScopedVar); // Output: "I'm also inside a block!"
}

console.log(blockScopedVar); // Error: blockScopedVar is not defined
console.log(anotherBlockScopedVar); // Error: anotherBlockScopedVar is not defined
```

**Best Practices:**
- Prefer `let` and `const` over `var` for block-scoped variables.
- Use `const` for variables that should not be reassigned and `let` for variables that might change.

#### 4. **Avoiding Variable Shadowing**

Variable shadowing occurs when a variable declared within a certain scope has the same name as a variable in an outer scope, effectively "shadowing" the outer variable.

```javascript
let outerVar = "Outer";

function shadowingExample() {
    let outerVar = "Inner";
    console.log(outerVar); // Output: "Inner"
}

shadowingExample();
console.log(outerVar); // Output: "Outer"
```

**Best Practices:**
- Be cautious of variable names that might unintentionally shadow outer variables.
- Use meaningful and distinct variable names to avoid confusion.

#### 5. **Closures and Scoping**

Closures are a powerful feature of JavaScript that allows a function to access variables from an outer function even after the outer function has returned.

```javascript
function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        console.log(outerVar); // Accesses outerVar from the outer scope
    }

    return innerFunction;
}

const closure = outerFunction();
closure(); // Output: "Outer"
```

**Best Practices:**
- Use closures to create private variables and methods.
- Understand the memory implications of closures, as they can keep variables in memory longer than expected.

#### 6. **Hoisting and Scoping**

Hoisting refers to the behavior in JavaScript where variable and function declarations are moved to the top of their scope before execution. However, variables declared with `let` and `const` are not initialized until their declaration is reached.

```javascript
console.log(hoistedVar); // Output: undefined (due to hoisting)
var hoistedVar = "I am hoisted!";

console.log(notHoistedVar); // Error: Cannot access 'notHoistedVar' before initialization
let notHoistedVar = "I am not hoisted!";
```

**Best Practices:**
- Understand hoisting to avoid bugs related to accessing variables before they are declared.
- Prefer `let` and `const` to `var` to avoid issues with hoisting and to maintain block scope.


Scoping in JavaScript determines how variables are accessed in different parts of your code. By understanding and correctly applying scoping rules, you can:

- **Encapsulate** code effectively, reducing the risk of unintended interactions between variables.
- **Avoid bugs** related to variable shadowing, hoisting, and closures.
- **Write clear and maintainable** code by using appropriate scoping practices, such as preferring `let` and `const` over `var`.

Mastering scoping and its practical implications will significantly improve the quality and reliability of your JavaScript code.
### Variable env: Hoisting and tdz

### Variable Environment in JavaScript: Hoisting and the Temporal Dead Zone (TDZ)

In JavaScript, the **variable environment** is a part of the execution context that stores the variables and functions defined in a particular scope. Understanding the concepts of **hoisting** and the **Temporal Dead Zone (TDZ)** is crucial to grasp how JavaScript handles variable declarations and initializations.

### Hoisting

**Hoisting** is a behavior in JavaScript where variable and function declarations are moved ("hoisted") to the top of their containing scope during the compile phase, before the code is executed. This means that you can use a variable or function before its declaration in the code.

#### Example of Hoisting with `var`

```javascript
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted!";
console.log(hoistedVar); // Output: "I am hoisted!"
```

#### Explanation:

- When JavaScript runs the code, it first hoists the declaration of `hoistedVar` to the top of its scope.
- The first `console.log(hoistedVar);` executes before the variable is assigned, so it prints `undefined`.
- After the assignment, `hoistedVar` has the value `"I am hoisted!"`.

**Key Points About `var` Hoisting**:
- Only the declaration is hoisted, not the assignment. That's why the first log shows `undefined` instead of `"I am hoisted!"`.
- `var` declarations are hoisted to the top of the function scope or global scope.

#### Function Hoisting

Functions declared using the `function` keyword are also hoisted, but in a slightly different way:

```javascript
hoistedFunction(); // Output: "I am a hoisted function!"

function hoistedFunction() {
    console.log("I am a hoisted function!");
}
```

- The entire function definition is hoisted, so you can call `hoistedFunction` before it's defined in the code.

### Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** refers to the period between the entering of the scope and the actual variable declaration, during which the variable cannot be accessed. Variables declared with `let` and `const` are hoisted, but unlike `var`, they are not initialized with `undefined`. This is where the TDZ comes into play.

#### Example of TDZ with `let` and `const`

```javascript
console.log(tdzVar); // Error: Cannot access 'tdzVar' before initialization
let tdzVar = "I am in the TDZ!";
console.log(tdzVar); // Output: "I am in the TDZ!"
```

#### Explanation:

- The `let` declaration is hoisted to the top of its block scope, but it is not initialized.
- The first `console.log(tdzVar);` is in the TDZ, so accessing `tdzVar` results in a `ReferenceError`.
- Once the variable is declared (`let tdzVar = "I am in the TDZ!";`), it can be accessed normally.

**Key Points About TDZ**:
- **TDZ applies to `let` and `const`**: Variables declared with `let` and `const` exist in the scope from the start but cannot be accessed until the actual declaration is encountered.
- **No default initialization**: Unlike `var`, which is initialized with `undefined`, `let` and `const` remain uninitialized in the TDZ.
- **Helps catch errors**: TDZ can help catch errors where a variable is used before it is initialized, which would otherwise go unnoticed with `var`.

### Combining Hoisting and TDZ

Understanding how hoisting and the TDZ work together is essential for writing predictable JavaScript code.

```javascript
console.log(varVar);  // Output: undefined (due to hoisting)
console.log(letVar);  // Error: Cannot access 'letVar' before initialization
console.log(constVar); // Error: Cannot access 'constVar' before initialization

var varVar = "I am var!";
let letVar = "I am let!";
const constVar = "I am const!";
```

- **`varVar`**: Hoisted and initialized with `undefined`, so the first log statement works, but shows `undefined`.
- **`letVar` and `constVar`**: Hoisted but not initialized, so they are in the TDZ until the declaration is reached, causing a `ReferenceError` if accessed before then.


- **Hoisting**: Moves declarations to the top of the scope during compilation. For `var`, the declaration is hoisted and initialized with `undefined`. For functions declared with `function`, the entire function is hoisted.
- **TDZ (Temporal Dead Zone)**: The period between the start of the scope and the variable declaration where variables declared with `let` or `const` cannot be accessed, leading to a `ReferenceError` if accessed in this zone.

By understanding hoisting and TDZ, you can avoid common pitfalls in JavaScript, such as unexpected `undefined` values and `ReferenceError`s, and write cleaner, more predictable code.
### this keyword

The `this` keyword in JavaScript is a fundamental concept that often causes confusion because its value depends on how and where it is used. Understanding `this` is crucial for working with objects, methods, and various programming patterns in JavaScript.

### What is `this`?

- **`this`** is a special keyword in JavaScript that refers to the context in which a function is executed. It points to an object, and that object depends on how the function is called.

### How `this` Works in Different Contexts

#### 1. **Global Context**

In the global execution context (outside of any function), `this` refers to the global object.

- In a browser environment, the global object is `window`.
- In Node.js, the global object is `global`.

```javascript
console.log(this); // In a browser, this will log the window object.
```

#### 2. **Function Context**

When `this` is used inside a regular function (not an arrow function), its value depends on how the function is called:

- **Simple function call**: `this` refers to the global object (`window` in browsers).

```javascript
function showThis() {
    console.log(this);
}

showThis(); // In a browser, logs the window object.
```

- **Strict mode**: In strict mode (`'use strict';`), `this` is `undefined` inside a regular function.

```javascript
'use strict';

function showThis() {
    console.log(this);
}

showThis(); // Logs undefined.
```

- **Method call**: When a function is called as a method of an object, `this` refers to the object on which the method was called.

```javascript
const person = {
    name: "Alice",
    greet: function() {
        console.log(this.name);
    }
};

person.greet(); // Logs "Alice"
```

#### 3. **Arrow Functions**

Arrow functions do not have their own `this` binding. Instead, they inherit `this` from the surrounding (lexical) context.

```javascript
const person = {
    name: "Alice",
    greet: function() {
        const innerGreet = () => {
            console.log(this.name);
        };
        innerGreet();
    }
};

person.greet(); // Logs "Alice"
```

Here, `innerGreet` is an arrow function, so it inherits `this` from the `greet` function's context, which is the `person` object.

#### 4. **Event Handlers**

In the context of an event handler, `this` refers to the element that received the event.

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(this); // Logs the button element
});
```

#### 5. **Constructors and `new` Keyword**

When a function is used as a constructor with the `new` keyword, `this` refers to the newly created instance of the object.

```javascript
function Person(name) {
    this.name = name;
}

const person1 = new Person("Bob");
console.log(person1.name); // Logs "Bob"
```

#### 6. **Explicit Binding with `call`, `apply`, and `bind`**

- **`call` and `apply`**: You can explicitly set `this` when calling a function using `call` or `apply`.

```javascript
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person = { name: "Alice" };

greet.call(person);  // Logs "Hello, Alice"
greet.apply(person); // Logs "Hello, Alice"
```

- **`bind`**: `bind` returns a new function with a specific `this` value.

```javascript
const boundGreet = greet.bind(person);
boundGreet(); // Logs "Hello, Alice"
```


- **Global Context**: `this` refers to the global object (`window` in browsers).
- **Function Context**: `this` depends on how the function is called. It could refer to the global object, be `undefined` in strict mode, or refer to an object if used as a method.
- **Arrow Functions**: `this` is lexically bound and refers to the context in which the arrow function was defined.
- **Event Handlers**: `this` refers to the element that received the event.
- **Constructors**: `this` refers to the newly created object instance when using `new`.
- **Explicit Binding**: `call`, `apply`, and `bind` can explicitly set `this` to a specific value.

Understanding the behavior of `this` in different contexts helps you write clearer, more predictable JavaScript code, especially when dealing with objects, methods, and event-driven programming.
### regular functions vs arrow functions

Regular functions and arrow functions are two types of functions in JavaScript, each with its own characteristics and use cases. Here’s a detailed comparison of the two:

### Regular Functions

**Syntax:**
```javascript
function regularFunction(param1, param2) {
    // function body
}
```

**Characteristics:**

1. **`this` Binding:**
   - Regular functions have their own `this` context, which depends on how the function is called. It can be the global object, the object the function is called on (in method calls), or `undefined` in strict mode.
   - Example:
     ```javascript
     const obj = {
         name: 'Alice',
         greet: function() {
             console.log(this.name);
         }
     };
     
     obj.greet(); // Output: Alice
     ```

2. **Arguments Object:**
   - Regular functions have access to the `arguments` object, which is an array-like object containing all the arguments passed to the function.
   - Example:
     ```javascript
     function sum() {
         let total = 0;
         for (let i = 0; i < arguments.length; i++) {
             total += arguments[i];
         }
         return total;
     }
     
     console.log(sum(1, 2, 3)); // Output: 6
     ```

3. **Constructors:**
   - Regular functions can be used as constructors with the `new` keyword to create instances of objects.
   - Example:
     ```javascript
     function Person(name) {
         this.name = name;
     }
     
     const person1 = new Person('Bob');
     console.log(person1.name); // Output: Bob
     ```

4. **Function Declarations:**
   - Regular functions can be declared using function declarations or function expressions.
   - Example of function expression:
     ```javascript
     const myFunction = function() {
         console.log('Hello');
     };
     
     myFunction(); // Output: Hello
     ```

### Arrow Functions

**Syntax:**
```javascript
const arrowFunction = (param1, param2) => {
    // function body
};
```

**Characteristics:**

1. **`this` Binding:**
   - Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical context where the arrow function is defined.
   - Example:
     ```javascript
     const obj = {
         name: 'Alice',
         greet: function() {
             const innerGreet = () => {
                 console.log(this.name);
             };
             innerGreet();
         }
     };
     
     obj.greet(); // Output: Alice
     ```

2. **No `arguments` Object:**
   - Arrow functions do not have their own `arguments` object. To access arguments in an arrow function, you need to use rest parameters or access them from an outer function.
   - Example:
     ```javascript
     const sum = (...args) => {
         return args.reduce((total, num) => total + num, 0);
     };
     
     console.log(sum(1, 2, 3)); // Output: 6
     ```

3. **Not Constructible:**
   - Arrow functions cannot be used as constructors and will throw an error if used with the `new` keyword.
   - Example:
     ```javascript
     const Person = (name) => {
         this.name = name; // Error: `this` is not bound as expected
     };
     
     // const person1 = new Person('Bob'); // Throws an error
     ```

4. **Concise Syntax:**
   - Arrow functions offer a more concise syntax, especially for functions with a single expression. The curly braces and `return` keyword can be omitted in such cases.
   - Example:
     ```javascript
     const add = (a, b) => a + b;
     
     console.log(add(2, 3)); // Output: 5
     ```

### Key Differences

1. **`this` Behavior:**
   - Regular functions: `this` depends on the call site.
   - Arrow functions: `this` is lexically bound, inherited from the surrounding scope.

2. **`arguments` Object:**
   - Regular functions: Have their own `arguments` object.
   - Arrow functions: Do not have their own `arguments` object.

3. **Constructors:**
   - Regular functions: Can be used as constructors with `new`.
   - Arrow functions: Cannot be used as constructors.

4. **Syntax:**
   - Regular functions: Can be verbose, especially for single-expression functions.
   - Arrow functions: Offer a more concise syntax for single-expression functions.


- Use **regular functions** when you need a function that can be used as a constructor, or when you need its own `this` context or `arguments` object.
- Use **arrow functions** for shorter, concise functions, especially when you want to inherit `this` from an outer scope and don't need the `arguments` object or constructor capabilities.

Choosing the appropriate type of function depends on your specific needs and the context in which the function is used.
### primitives vs Objects(reference types)

In JavaScript, data types are categorized into **primitives** and **objects (reference types)**. Understanding the differences between these categories is crucial for effective programming in JavaScript.

### Primitives

**Primitives** are basic data types that are immutable (cannot be changed) and are compared by their value. They are stored directly in the variable. JavaScript has six primitive types:

1. **String**: Represents a sequence of characters.
   ```javascript
   let str = "Hello, world!";
   ```

2. **Number**: Represents both integer and floating-point numbers.
   ```javascript
   let num = 42;
   ```

3. **BigInt**: Represents integers with arbitrary precision.
   ```javascript
   let bigInt = 1234567890123456789012345678901234567890n;
   ```

4. **Boolean**: Represents `true` or `false`.
   ```javascript
   let bool = true;
   ```

5. **Undefined**: Represents a variable that has been declared but not assigned a value.
   ```javascript
   let undefinedVar;
   ```

6. **Null**: Represents the intentional absence of any object value.
   ```javascript
   let nullVar = null;
   ```

**Characteristics of Primitives:**
- **Immutable**: Once a primitive value is created, it cannot be changed. Operations on primitives create new values rather than modifying the existing ones.
- **Pass-by-Value**: When a primitive is assigned to a new variable or passed to a function, a copy of the value is created.

**Example:**
```javascript
let a = 5;
let b = a;
b = 10;

console.log(a); // Output: 5
console.log(b); // Output: 10
```

In this example, `a` remains `5` because `b` was assigned a copy of the value of `a`, not a reference to `a`.

### Objects (Reference Types)

**Objects** are more complex data types that can store collections of values and functions. They are compared by reference rather than by value. JavaScript has several built-in object types, including:

1. **Object**: A generic object with key-value pairs.
   ```javascript
   let obj = { name: "Alice", age: 25 };
   ```

2. **Array**: An ordered collection of values.
   ```javascript
   let arr = [1, 2, 3, 4];
   ```

3. **Function**: A callable object.
   ```javascript
   function greet() {
       console.log("Hello!");
   }
   ```

4. **Date**: Represents dates and times.
   ```javascript
   let today = new Date();
   ```

5. **RegExp**: Represents regular expressions.
   ```javascript
   let pattern = /abc/;
   ```

6. **Map** and **Set**: Collection types for storing unique values or key-value pairs.
   ```javascript
   let map = new Map();
   let set = new Set();
   ```

**Characteristics of Objects:**
- **Mutable**: Objects can be modified after they are created. Properties can be added, removed, or changed.
- **Pass-by-Reference**: When an object is assigned to a new variable or passed to a function, a reference to the object is created, not a copy.

**Example:**
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name); // Output: "Bob"
console.log(obj2.name); // Output: "Bob"
```

In this example, `obj1` and `obj2` refer to the same object in memory. Changing `obj2` affects `obj1` because they both reference the same object.

### Key Differences

1. **Storage**:
   - **Primitives**: Stored directly in the variable.
   - **Objects**: Stored as references to memory locations.

2. **Immutability**:
   - **Primitives**: Immutable; operations create new values.
   - **Objects**: Mutable; properties can be modified.

3. **Comparison**:
   - **Primitives**: Compared by value.
   - **Objects**: Compared by reference.

4. **Pass-by**:
   - **Primitives**: Pass-by-value; a copy is passed.
   - **Objects**: Pass-by-reference; the reference is passed.


- **Primitives** (e.g., string, number, boolean) are simple, immutable values that are compared by their value.
- **Objects** (e.g., objects, arrays, functions) are complex, mutable structures compared by reference.

Understanding these differences helps in managing data effectively and avoiding common pitfalls related to variable assignments and function arguments in JavaScript.
