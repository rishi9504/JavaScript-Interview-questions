Part 1

### Brief introduction to JavaScript

JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic content on websites. It is one of the core technologies of web development, alongside HTML and CSS. JavaScript allows developers to add behavior to web pages, enabling features like form validation, interactive maps, animated graphics, and more.

**Key Features of JavaScript:**

1. **Client-Side Scripting:** JavaScript runs directly in the web browser, meaning it can interact with the user without needing to communicate with the server constantly.

2. **Interactivity:** JavaScript enables interactive features such as sliders, pop-ups, form validation, and real-time updates without reloading the page.

3. **Event-Driven:** JavaScript can respond to user actions like clicks, hovers, and key presses, making web applications responsive and dynamic.

4. **Versatility:** While initially designed for client-side scripting, JavaScript has grown to be used on the server side as well, thanks to environments like Node.js.

5. **Compatibility:** JavaScript is supported by all modern web browsers, making it a standard tool for web developers.

6. **Frameworks and Libraries:** JavaScript has a rich ecosystem of frameworks and libraries like React, Angular, and Vue.js, which simplify the development of complex applications.

JavaScript's ability to enhance user experience and its wide range of applications make it a fundamental language for web development.

### Linking a javascript file

To link a JavaScript file to an HTML document, you use the `<script>` tag. This tag can be placed in either the `<head>` or `<body>` section of your HTML file, but it’s commonly placed at the end of the `<body>` to ensure the HTML content loads before the JavaScript runs.

### Basic Steps to Link a JavaScript File:

1. **Create the JavaScript File:**
   - Write your JavaScript code in a file with a `.js` extension (e.g., `script.js`). Put the following code in your js file. This is only for practice, we will get in details soon.

```
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script> 

```

2. **Link the JavaScript File in HTML:**
   - Use the `<script>` tag with the `src` attribute to link the external JavaScript file to your HTML document.

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>

    <!-- Link the JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
```

### Explanation:

- The `src` attribute in the `<script>` tag specifies the path to the external JavaScript file (`script.js` in this case).
- If the JavaScript file is in the same directory as the HTML file, you just need to provide the file name. Otherwise, include the relative or absolute path to the file.
- By placing the `<script>` tag before the closing `</body>` tag, the script runs after the HTML content is fully loaded, preventing issues with accessing HTML elements that haven’t been rendered yet.

This setup will execute the JavaScript code in `script.js` when the HTML document is loaded in a web browser.


### Values and variables in js

In JavaScript, **values** are the fundamental data that the language can work with, and **variables** are containers used to store these values for later use. Understanding how to declare, assign, and manipulate values using variables is key to working effectively with JavaScript.

### Values

Values in JavaScript can be of different types, including:

1. **Number:** Represents numeric values, both integers and floating-point numbers.
   - Example: `42`, `3.14`

2. **String:** Represents a sequence of characters, enclosed in single or double quotes.
   - Example: `'Hello, World!'`, `"JavaScript"`

3. **Boolean:** Represents a logical value, either `true` or `false`.
   - Example: `true`, `false`

4. **Null:** Represents the intentional absence of any object value.
   - Example: `null`

5. **Undefined:** Represents a variable that has been declared but not assigned a value.
   - Example: `undefined`

6. **Object:** Represents collections of key-value pairs or more complex data structures, including arrays, functions, and more.
   - Example: `{ name: 'Alice', age: 25 }`

7. **Symbol:** Represents a unique identifier, often used in more advanced programming.
   - Example: `Symbol('unique')`

### Variables

Variables in JavaScript are used to store values, which can then be referenced and manipulated throughout the code. Variables can be declared using the `var`, `let`, or `const` keywords.

#### 1. Declaring Variables:

- **`var`:** Declares a variable with function scope or globally if outside a function. It can be redeclared and reassigned.
  ```javascript
  var x = 10;
  ```

- **`let`:** Declares a block-scoped variable, meaning it is only accessible within the block it was declared in. It can be reassigned but not redeclared within the same scope.
  ```javascript
  let y = 20;
  ```

- **`const`:** Declares a block-scoped variable that cannot be reassigned. The value is constant and cannot change through reassignment. However, if the value is an object, the properties of the object can still be modified.
  ```javascript
  const z = 30;
  ```

#### 2. Assigning Values to Variables:

You can assign a value to a variable when you declare it, or you can declare the variable first and assign the value later.

```javascript
let greeting;     // Declaration
greeting = "Hello";  // Assignment
```

Or, you can do both at the same time:

```javascript
let greeting = "Hello";
```

#### 3. Variable Naming Rules:

- Variable names must start with a letter, underscore (`_`), or dollar sign (`$`).
- Subsequent characters can also include digits (0-9).
- Variable names are case-sensitive (`myVariable` and `myvariable` are different).
- Reserved words (like `let`, `class`, `return`, etc.) cannot be used as variable names.

### Example:

```javascript
let age = 25;           // Declaring and assigning a number value
const name = "Alice";   // Declaring and assigning a string value
var isStudent = true;   // Declaring and assigning a boolean value

age = 26;  // Reassigning the variable `age` with a new value
```

In this example:
- `age` is a variable that holds a number.
- `name` is a constant that holds a string.
- `isStudent` is a variable that holds a boolean value.


### Data types in js
JavaScript has several data types that are used to represent and work with different kinds of data. These data types are divided into two main categories: **primitive data types** and **non-primitive data types**.

### Primitive Data Types

Primitive data types are the most basic data types in JavaScript. They include:

1. **Number**:
   - Represents both integer and floating-point numbers.
   - Example: `42`, `3.14`
   - Special values: `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).

   ```javascript
   let age = 30;
   let pi = 3.14;
   ```

2. **String**:
   - Represents sequences of characters, used to store text.
   - Can be enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.
   - Example: `'Hello'`, `"World"`, `` `Hello, ${name}!` ``

   ```javascript
   let greeting = "Hello, World!";
   ```

3. **Boolean**:
   - Represents a logical entity and can have only two values: `true` or `false`.
   - Example: `true`, `false`

   ```javascript
   let isStudent = true;
   ```

4. **Null**:
   - Represents the intentional absence of any object value.
   - It's often used to indicate that a variable should have no value.
   - Example: `null`

   ```javascript
   let result = null;
   ```

5. **Undefined**:
   - Represents a variable that has been declared but not yet assigned a value.
   - Example: `undefined`

   ```javascript
   let x;
   console.log(x); // Outputs: undefined
   ```

6. **Symbol**:
   - Represents a unique and immutable value, often used as object property keys.
   - Introduced in ECMAScript 6 (ES6).
   - Example: `Symbol('description')`

   ```javascript
   let sym = Symbol('unique');
   ```

7. **BigInt**:
   - Represents whole numbers larger than the maximum limit for a `Number` type.
   - Can be created by appending `n` to the end of an integer or using the `BigInt()` function.
   - Example: `1234567890123456789012345678901234567890n`

   ```javascript
   let bigNumber = 1234567890123456789012345678901234567890n;
   ```

### Non-Primitive Data Types (Objects)

Non-primitive data types in JavaScript are objects, which include more complex data structures:

1. **Object**:
   - A collection of key-value pairs where the keys are strings (or Symbols) and the values can be any data type.
   - Objects can represent real-world entities like users, products, etc.

   ```javascript
   let person = {
       name: "Alice",
       age: 25,
       isStudent: true
   };
   ```

2. **Array**:
   - A special type of object that represents a list-like structure.
   - Arrays are ordered collections of values and are zero-indexed.

   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   ```

3. **Function**:
   - Functions are objects that can be called or invoked to perform a specific task.
   - Functions can be assigned to variables, passed as arguments to other functions, and returned from functions.

   ```javascript
   function greet(name) {
       return `Hello, ${name}!`;
   }
   ```

4. **Date**:
   - Represents date and time. Created using the `Date` constructor.

   ```javascript
   let today = new Date();
   ```

5. **RegExp**:
   - Represents regular expressions, used for pattern matching within strings.

   ```javascript
   let pattern = /[a-zA-Z]+/;
   ```

### Type Checking

You can check the type of a variable using the `typeof` operator:

```javascript
console.log(typeof 42);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (this is a historical quirk in JavaScript)
console.log(typeof {name: "Alice"});  // "object"
console.log(typeof Symbol("id"));     // "symbol"
console.log(typeof function(){});     // "function"
console.log(typeof 123n);             // "bigint"
```

### let const and var -- needs and differences
In JavaScript, `let`, `const`, and `var` are used to declare variables, but they have different characteristics and best practices for when to use each. Understanding these differences is important for writing clear, bug-free code.

### `var`

#### Characteristics:
1. **Function Scope:** Variables declared with `var` are function-scoped, meaning they are accessible throughout the function in which they are declared. If declared outside any function, they become globally scoped.
2. **Hoisting:** Variables declared with `var` are hoisted to the top of their scope, but their initialization remains in place. This means the variable can be accessed before the declaration line, but it will be `undefined` until the line of initialization is reached.
3. **Re-declaration:** Variables declared with `var` can be re-declared within the same scope, which can lead to unintended consequences.

#### Example:
```javascript
function example() {
    console.log(x); // undefined (due to hoisting)
    var x = 10;
    console.log(x); // 10
    var x = 20;     // Re-declaration
    console.log(x); // 20
}

example();
```

### `let`

#### Characteristics:
1. **Block Scope:** Variables declared with `let` are block-scoped, meaning they are only accessible within the block `{}` in which they are declared (e.g., inside loops, if-statements, functions).
2. **Hoisting:** Like `var`, variables declared with `let` are hoisted, but they are not initialized. Accessing them before declaration results in a `ReferenceError`.
3. **No Re-declaration:** Variables declared with `let` cannot be re-declared within the same scope, which helps prevent bugs caused by accidental re-declaration.

#### Example:
```javascript
function example() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x); // 10
    // let x = 20;  // SyntaxError: Identifier 'x' has already been declared
}

example();
```

### `const`

#### Characteristics:
1. **Block Scope:** Similar to `let`, variables declared with `const` are block-scoped.
2. **Hoisting:** `const` variables are hoisted but are not initialized, leading to a `ReferenceError` if accessed before declaration.
3. **No Reassignment:** Variables declared with `const` cannot be reassigned after their initial assignment. However, if the `const` variable is an object or array, the contents of the object or array can be modified.
4. **No Re-declaration:** Variables declared with `const` cannot be re-declared within the same scope.

#### Example:
```javascript
const x = 10;
console.log(x); // 10
// x = 20;      // TypeError: Assignment to constant variable.

const person = {
    name: "Alice",
    age: 25
};

// Modifying properties of the object is allowed
person.age = 26;
console.log(person.age); // 26

// Re-assigning the object itself is not allowed
// person = {}; // TypeError: Assignment to constant variable.
```

### When to Use Which?

- **`var`:** It's generally recommended to avoid using `var` in modern JavaScript because its function-scoping and hoisting behavior can lead to bugs that are hard to track down. `let` and `const` provide more predictable scoping.

- **`let`:** Use `let` when you need a variable whose value will change (reassignment) and where block scoping is appropriate. It’s typically used for loop counters, temporary variables, or variables that will be updated.

- **`const`:** Use `const` by default whenever possible, as it indicates that the variable should not be reassigned. This makes the code more predictable and easier to understand. Use `const` for variables that should remain constant after initialization, like configuration settings, or references to objects that will not be reassigned.

### Summary of Differences:

| Feature               | `var`                        | `let`                         | `const`                        |
|-----------------------|------------------------------|-------------------------------|--------------------------------|
| Scope                 | Function-scoped              | Block-scoped                  | Block-scoped                   |
| Hoisting              | Yes (initialized to `undefined`) | Yes (no initialization)      | Yes (no initialization)        |
| Re-declaration        | Allowed                      | Not allowed                   | Not allowed                    |
| Reassignment          | Allowed                      | Allowed                       | Not allowed                    |
| Best Use              | Avoid in modern JS           | For variables that change     | For variables that don’t change |

By using `let` and `const` appropriately, you can write clearer, more maintainable JavaScript code.
### Basic operators

JavaScript provides a variety of operators that allow you to perform different operations on values and variables. These operators can be categorized into several types, including arithmetic, assignment, comparison, logical, and more. Here’s an overview of the basic operators in JavaScript:

### 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

- **Addition (`+`)**: Adds two numbers or concatenates two strings.
  ```javascript
  let sum = 5 + 3;      // 8
  let text = "Hello" + " " + "World"; // "Hello World"
  ```

- **Subtraction (`-`)**: Subtracts the right operand from the left operand.
  ```javascript
  let difference = 10 - 4; // 6
  ```

- **Multiplication (`*`)**: Multiplies two numbers.
  ```javascript
  let product = 6 * 7; // 42
  ```

- **Division (`/`)**: Divides the left operand by the right operand.
  ```javascript
  let quotient = 20 / 5; // 4
  ```

- **Modulus (`%`)**: Returns the remainder of the division of the left operand by the right operand.
  ```javascript
  let remainder = 10 % 3; // 1
  ```

- **Exponentiation (`**`)**: Raises the left operand to the power of the right operand.
  ```javascript
  let power = 2 ** 3; // 8
  ```

- **Increment (`++`)**: Increases the value of a variable by 1.
  ```javascript
  let x = 5;
  x++; // x is now 6
  ```

- **Decrement (`--`)**: Decreases the value of a variable by 1.
  ```javascript
  let y = 10;
  y--; // y is now 9
  ```

### 2. Assignment Operators

Assignment operators are used to assign values to variables.

- **Assignment (`=`)**: Assigns the right-hand value to the left-hand variable.
  ```javascript
  let x = 10; // x is 10
  ```

- **Addition assignment (`+=`)**: Adds the right-hand value to the left-hand variable and assigns the result.
  ```javascript
  x += 5; // x is now 15 (x = x + 5)
  ```

- **Subtraction assignment (`-=`)**: Subtracts the right-hand value from the left-hand variable and assigns the result.
  ```javascript
  x -= 3; // x is now 12 (x = x - 3)
  ```

- **Multiplication assignment (`*=`)**: Multiplies the left-hand variable by the right-hand value and assigns the result.
  ```javascript
  x *= 2; // x is now 24 (x = x * 2)
  ```

- **Division assignment (`/=`)**: Divides the left-hand variable by the right-hand value and assigns the result.
  ```javascript
  x /= 4; // x is now 6 (x = x / 4)
  ```

- **Modulus assignment (`%=`)**: Assigns the remainder of the division to the left-hand variable.
  ```javascript
  x %= 5; // x is now 1 (x = x % 5)
  ```

- **Exponentiation assignment (`**=`)**: Raises the left-hand variable to the power of the right-hand value and assigns the result.
  ```javascript
  x **= 2; // x is now 1 (x = x ** 2)
  ```

### 3. Comparison Operators

Comparison operators are used to compare two values and return a boolean result (`true` or `false`).

- **Equal (`==`)**: Compares two values for equality, after converting the operands to the same type.
  ```javascript
  5 == "5"; // true
  ```

- **Strict Equal (`===`)**: Compares two values for equality without type conversion (strict comparison).
  ```javascript
  5 === "5"; // false
  ```

- **Not Equal (`!=`)**: Compares two values for inequality, after converting the operands to the same type.
  ```javascript
  5 != "5"; // false
  ```

- **Strict Not Equal (`!==`)**: Compares two values for inequality without type conversion (strict comparison).
  ```javascript
  5 !== "5"; // true
  ```

- **Greater Than (`>`)**: Checks if the left operand is greater than the right operand.
  ```javascript
  10 > 5; // true
  ```

- **Greater Than or Equal (`>=`)**: Checks if the left operand is greater than or equal to the right operand.
  ```javascript
  10 >= 10; // true
  ```

- **Less Than (`<`)**: Checks if the left operand is less than the right operand.
  ```javascript
  5 < 10; // true
  ```

- **Less Than or Equal (`<=`)**: Checks if the left operand is less than or equal to the right operand.
  ```javascript
  5 <= 5; // true
  ```

### 4. Logical Operators

Logical operators are used to combine or invert boolean values.

- **Logical AND (`&&`)**: Returns `true` if both operands are true; otherwise, it returns `false`.
  ```javascript
  true && false; // false
  ```

- **Logical OR (`||`)**: Returns `true` if at least one operand is true; otherwise, it returns `false`.
  ```javascript
  true || false; // true
  ```

- **Logical NOT (`!`)**: Inverts the boolean value of the operand.
  ```javascript
  !true; // false
  ```

### 5. String Operators

JavaScript includes operators specifically for working with strings.

- **Concatenation (`+`)**: Combines two strings into one.
  ```javascript
  let greeting = "Hello" + " " + "World"; // "Hello World"
  ```

- **Concatenation Assignment (`+=`)**: Appends the right-hand string to the left-hand string.
  ```javascript
  let text = "Hello";
  text += " World"; // "Hello World"
  ```

### 6. Ternary (Conditional) Operator

The ternary operator is a shorthand for an `if-else` statement, which returns one of two values based on a condition.

- **Ternary (`? :`)**: The syntax is `condition ? value_if_true : value_if_false`.
  ```javascript
  let age = 18;
  let canVote = age >= 18 ? "Yes" : "No"; // "Yes"
  ```

### 7. Type Operators

Type operators are used to work with the type of a value.

- **`typeof`**: Returns the type of a variable or expression.
  ```javascript
  typeof 42; // "number"
  ```

- **`instanceof`**: Checks whether an object is an instance of a particular class or constructor.
  ```javascript
  let date = new Date();
  date instanceof Date; // true
  ```

### Operator precedence
Operator precedence in JavaScript determines the order in which operators are evaluated in an expression. When multiple operators are used in a single expression, the operator with higher precedence is evaluated first. If two operators have the same precedence, their associativity determines the order of evaluation.

### Operator Precedence Table

Here's a simplified table of JavaScript operators listed from highest to lowest precedence:

| Precedence | Operator Type           | Operators                                        | Associativity  |
|------------|-------------------------|--------------------------------------------------|----------------|
| 20         | Grouping                | `()`                                             | N/A            |
| 19         | Member Access           | `.`                                              | Left-to-right  |
| 19         | Computed Member Access  | `[]`                                             | Left-to-right  |
| 19         | Function Call           | `()`                                             | Left-to-right  |
| 19         | New (with arguments)    | `new`                                            | N/A            |
| 18         | New (without arguments) | `new`                                            | Right-to-left  |
| 17         | Postfix Increment       | `++`                                             | N/A            |
| 17         | Postfix Decrement       | `--`                                             | N/A            |
| 16         | Logical NOT             | `!`                                              | Right-to-left  |
| 16         | Bitwise NOT             | `~`                                              | Right-to-left  |
| 16         | Unary Plus              | `+` (as a unary operator)                        | Right-to-left  |
| 16         | Unary Negation          | `-` (as a unary operator)                        | Right-to-left  |
| 16         | Prefix Increment        | `++`                                             | Right-to-left  |
| 16         | Prefix Decrement        | `--`                                             | Right-to-left  |
| 16         | `typeof`                | `typeof`                                         | Right-to-left  |
| 16         | `void`                  | `void`                                           | Right-to-left  |
| 16         | `delete`                | `delete`                                         | Right-to-left  |
| 15         | Exponentiation          | `**`                                             | Right-to-left  |
| 14         | Multiplication          | `*`                                              | Left-to-right  |
| 14         | Division                | `/`                                              | Left-to-right  |
| 14         | Modulus                 | `%`                                              | Left-to-right  |
| 13         | Addition                | `+`                                              | Left-to-right  |
| 13         | Subtraction             | `-`                                              | Left-to-right  |
| 12         | Bitwise Left Shift      | `<<`                                             | Left-to-right  |
| 12         | Bitwise Right Shift     | `>>`                                             | Left-to-right  |
| 12         | Bitwise Unsigned Right Shift | `>>>`                                        | Left-to-right  |
| 11         | Less Than               | `<`, `<=`                                        | Left-to-right  |
| 11         | Greater Than            | `>`, `>=`                                        | Left-to-right  |
| 11         | `in`                    | `in`                                             | Left-to-right  |
| 11         | `instanceof`            | `instanceof`                                     | Left-to-right  |
| 10         | Equality                | `==`, `!=`, `===`, `!==`                         | Left-to-right  |
| 9          | Bitwise AND             | `&`                                              | Left-to-right  |
| 8          | Bitwise XOR             | `^`                                              | Left-to-right  |
| 7          | Bitwise OR              | `|`                                              | Left-to-right  |
| 6          | Logical AND             | `&&`                                             | Left-to-right  |
| 5          | Logical OR              | `||`                                             | Left-to-right  |
| 4          | Nullish Coalescing      | `??`                                             | Left-to-right  |
| 3          | Conditional (Ternary)   | `? :`                                            | Right-to-left  |
| 2          | Assignment              | `=`, `+=`, `-=`, `*=`, `/=`, `%=`                | Right-to-left  |
| 1          | Comma                   | `,`                                              | Left-to-right  |

### Key Points to Remember

1. **Grouping (`()`)** has the highest precedence, so expressions within parentheses are evaluated first.
   ```javascript
   let result = (3 + 2) * 4; // 20
   ```

2. **Exponentiation (`**`)** is right-associative, meaning `a ** b ** c` is evaluated as `a ** (b ** c)`.
   ```javascript
   let result = 2 ** 3 ** 2; // 512 (same as 2 ** (3 ** 2))
   ```

3. **Multiplication, Division, and Modulus (`*`, `/`, `%`)** have higher precedence than **Addition and Subtraction (`+`, `-`)**.
   ```javascript
   let result = 10 + 2 * 3; // 16 (not 36)
   ```

4. **Logical AND (`&&`)** has higher precedence than **Logical OR (`||`)**, so `a && b || c` is evaluated as `(a && b) || c`.
   ```javascript
   let result = true && false || true; // true
   ```

5. **Assignment operators (`=`, `+=`, `-=`, etc.)** are right-associative, meaning assignments are evaluated from right to left.
   ```javascript
   let x = y = 5; // y is 5, then x is 5
   ```

6. **Conditional (Ternary) Operator (`? :`)** has lower precedence than most other operators, so it's evaluated last in an expression unless grouped.
   ```javascript
   let result = 5 > 3 ? "Yes" : "No"; // "Yes"
   ```

7. **Comma Operator (`,`)** has the lowest precedence and evaluates each operand from left to right, returning the value of the last operand.
   ```javascript
   let result = (1 + 2, 3 + 4); // 7
   ```

### Practical Example

Consider this complex expression:

```javascript
let result = 10 + 2 * 5 ** 2 / 2 > 20 && true;
```

Breaking it down with operator precedence:

1. **Exponentiation (`**`)**: `5 ** 2` = `25`
2. **Multiplication (`*`)**: `2 * 25` = `50`
3. **Division (`/`)**: `50 / 2` = `25`
4. **Addition (`+`)**: `10 + 25` = `35`
5. **Comparison (`>`)**: `35 > 20` = `true`
6. **Logical AND (`&&`)**: `true && true` = `true`

So, the final value of `result` is `true`.


### String and template literals

In JavaScript, strings are sequences of characters used to represent text. They can be created using either single quotes (`'`), double quotes (`"`), or backticks (`` ` ``). The backtick notation, known as **template literals**, offers enhanced functionality compared to regular strings. Let's explore both strings and template literals.

### 1. Strings

#### Basic Usage
Strings in JavaScript can be created using single or double quotes.

```javascript
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
```

#### Escape Characters
You can use escape characters to include special characters within a string.

- **Newline (`\n`)**: Inserts a new line.
- **Tab (`\t`)**: Inserts a tab space.
- **Backslash (`\\`)**: Inserts a backslash.
- **Quotes (`\'`, `\"`)**: Inserts single or double quotes inside a string.

```javascript
let stringWithEscapes = "Hello,\nWorld!";  // Output:
                                           // Hello,
                                           // World!
```

#### String Concatenation
Strings can be concatenated using the `+` operator.

```javascript
let greeting = "Hello, " + "World!";  // "Hello, World!"
```

### 2. Template Literals

Template literals are string literals that provide additional features, such as:

- **Multiline Strings**
- **String Interpolation**
- **Tagged Templates**

#### 1. Multiline Strings
With template literals, you can create strings that span multiple lines without the need for escape characters.

```javascript
let multiLineString = `This is a
multiline string
using template literals.`;

console.log(multiLineString);
// Output:
// This is a
// multiline string
// using template literals.
```

#### 2. String Interpolation
Template literals allow you to embed expressions within strings using `${expression}` syntax.

```javascript
let name = "Alice";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);  // "Hello, my name is Alice and I am 25 years old."
```

#### 3. Tagged Templates
Tagged templates allow you to parse template literals with a function. The function receives the literal strings and the interpolated expressions separately, allowing you to manipulate or format them.

```javascript
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => `${acc}${str}<strong>${values[i] || ''}</strong>`, '');
}

let user = "Bob";
let activity = "coding";
let message = highlight`User ${user} is currently ${activity}.`;

console.log(message);  // "User <strong>Bob</strong> is currently <strong>coding</strong>."
```

### Differences Between Strings and Template Literals

| Feature                  | Regular Strings                     | Template Literals             |
|--------------------------|-------------------------------------|-------------------------------|
| **Syntax**               | `'text'` or `"text"`                | `` `text` ``                  |
| **Multiline Support**    | Requires `\n` for new lines         | Supports natural multiline    |
| **String Interpolation** | Not supported                       | Supported with `${expression}`|
| **Tagged Templates**     | Not supported                       | Supported                     |
| **Escaping Quotes**      | Requires `\'` or `\"`               | No need for escaping          |


- **Regular strings** are great for simple use cases where you need a single line of text or need to concatenate multiple strings.
- **Template literals** are more powerful and should be used when you need multiline strings, string interpolation, or if you want to create more complex templates.


### Type conversion and coersion

Type conversion and coercion in JavaScript are processes by which JavaScript automatically or explicitly converts values from one data type to another. Understanding these concepts is crucial for writing bug-free code, as JavaScript is a dynamically typed language where variables can hold values of any type, and those types can change.

### 1. Type Conversion (Explicit Conversion)
Type conversion, also known as explicit conversion, occurs when you manually convert a value from one type to another using built-in functions or methods.

#### **String Conversion**
You can convert any value to a string using the `String()` function or by concatenating it with an empty string `""`.

```javascript
let num = 42;
let str = String(num); // "42"
let str2 = num + "";   // "42"
```

#### **Number Conversion**
You can convert a value to a number using the `Number()` function, `parseInt()`, or `parseFloat()`.

```javascript
let str = "123";
let num = Number(str);      // 123
let num2 = parseInt(str);   // 123
let num3 = parseFloat("123.45"); // 123.45
```

- **`parseInt()`**: Converts a string to an integer, ignoring any decimal part.
- **`parseFloat()`**: Converts a string to a floating-point number.

#### **Boolean Conversion**
Values can be converted to booleans using the `Boolean()` function. The following values are **falsy** (convert to `false`):
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`
- `false`

All other values are **truthy** (convert to `true`).

```javascript
let str = "Hello";
let bool = Boolean(str); // true

let emptyStr = "";
let bool2 = Boolean(emptyStr); // false
```

### 2. Type Coercion (Implicit Conversion)
Type coercion, also known as implicit conversion, happens automatically when JavaScript converts one type to another based on the context in which a value is used. This can lead to unexpected results if not properly understood.

#### **String Coercion**
When a non-string value is used in a context where a string is expected, JavaScript automatically converts it to a string.

```javascript
let num = 42;
let str = "The answer is " + num; // "The answer is 42"
```

In this example, the number `42` is coerced into the string `"42"` and then concatenated with `"The answer is "`.

#### **Number Coercion**
When a string is used in a numeric context (e.g., arithmetic operations), JavaScript tries to convert the string to a number.

```javascript
let result = "5" * "2";  // 10
let result2 = "10" - 2;  // 8
let result3 = "5" + 1;   // "51" (string concatenation)
let result4 = "5" - 1;   // 4  (numeric subtraction)
```

Note that the `+` operator is used for both addition and string concatenation. When at least one operand is a string, JavaScript will concatenate them. In other arithmetic operations (`-`, `*`, `/`), JavaScript coerces the string to a number.

#### **Boolean Coercion**
In conditional statements, values are coerced to booleans.

```javascript
if ("") {
    console.log("This won't run");
}

if ("Hello") {
    console.log("This will run"); // "This will run"
}

if (0) {
    console.log("This won't run");
}

if (1) {
    console.log("This will run"); // "This will run"
}
```

### 3. Loose vs. Strict Equality
Understanding coercion is crucial when comparing values, especially with the `==` (loose equality) and `===` (strict equality) operators.

- **Loose Equality (`==`)**: Converts the operands to the same type before comparing them.
  ```javascript
  console.log(5 == "5");   // true (coerces "5" to 5)
  console.log(0 == false); // true (coerces false to 0)
  ```

- **Strict Equality (`===`)**: Compares values without type conversion.
  ```javascript
  console.log(5 === "5");   // false (no type conversion)
  console.log(0 === false); // false (different types)
  ```

### Common Pitfalls with Type Coercion

1. **Falsy Values:**
   ```javascript
   let value = "";
   if (value) {
       console.log("This won't run"); // value is falsy
   }
   ```

2. **String and Number Coercion:**
   ```javascript
   let x = "5";
   let y = 10;
   console.log(x + y); // "510" (string concatenation)
   console.log(x - y); // -5   (number coercion)
   ```

3. **Comparisons:**
   ```javascript
   console.log(null == undefined);  // true
   console.log(null === undefined); // false
   console.log([] == false);        // true (array coerced to empty string, then to 0)
   console.log([] === false);       // false (different types)
   ```

- **Type Conversion**: Explicitly converting values from one type to another using functions like `String()`, `Number()`, `Boolean()`, etc.
- **Type Coercion**: JavaScript automatically converts types during operations or comparisons, based on context.
- **Loose vs. Strict Equality**: `==` allows coercion, while `===` does not, leading to different results.


### truthy and falsy values

In JavaScript, every value can be evaluated in a Boolean context, meaning it can be considered either `true` or `false`. These values are often referred to as "truthy" or "falsy."

### Falsy Values

A falsy value is a value that, when evaluated in a Boolean context, converts to `false`. There are only a few falsy values in JavaScript:

1. **`false`**: The Boolean `false` itself.
   ```javascript
   Boolean(false); // false
   ```

2. **`0`**: The number zero.
   ```javascript
   Boolean(0); // false
   ```

3. **`-0`**: Negative zero (technically distinct from 0 in JavaScript, but behaves the same in Boolean context).
   ```javascript
   Boolean(-0); // false
   ```

4. **`0n`**: The BigInt zero.
   ```javascript
   Boolean(0n); // false
   ```

5. **`""` (empty string)**: An empty string.
   ```javascript
   Boolean(""); // false
   ```

6. **`null`**: Represents the absence of any value.
   ```javascript
   Boolean(null); // false
   ```

7. **`undefined`**: Represents an uninitialized variable or the absence of a value.
   ```javascript
   Boolean(undefined); // false
   ```

8. **`NaN`**: The special "Not-a-Number" value, which results from invalid arithmetic operations.
   ```javascript
   Boolean(NaN); // false
   ```

### Truthy Values

A truthy value is any value that is not falsy. In other words, all values in JavaScript are truthy unless they are one of the falsy values listed above. Here are some examples of truthy values:

1. **Non-zero numbers**: Any number that is not 0 or -0.
   ```javascript
   Boolean(42); // true
   Boolean(-42); // true
   ```

2. **Non-empty strings**: Any string with at least one character.
   ```javascript
   Boolean("Hello"); // true
   ```

3. **Objects**: Any object, including arrays, functions, and even empty objects.
   ```javascript
   Boolean({}); // true
   Boolean([]); // true
   ```

4. **Arrays**: Even empty arrays are truthy.
   ```javascript
   Boolean([]); // true
   ```

5. **Functions**: Any function, regardless of whether it's defined or not.
   ```javascript
   Boolean(function() {}); // true
   ```

6. **Symbols**: ES6 introduced symbols, which are also truthy.
   ```javascript
   let sym = Symbol("foo");
   Boolean(sym); // true
   ```

7. **BigInts (non-zero)**: Any non-zero BigInt.
   ```javascript
   Boolean(1n); // true
   ```

### Practical Use in Conditional Statements

These concepts are often used in conditional statements to determine whether a block of code should execute.

```javascript
let value = "Hello";

if (value) {
    console.log("This will run because 'value' is truthy");
}

value = 0;

if (value) {
    console.log("This will not run because 'value' is falsy");
} else {
    console.log("This will run because 'value' is falsy");
}
```

### Summary

- **Falsy values**: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
- **Truthy values**: Everything else, including non-zero numbers, non-empty strings, objects, arrays, functions, symbols, and non-zero BigInts.

Understanding truthy and falsy values helps in writing concise and effective conditional statements, making your code more predictable and easier to debug.
### Equality operators: == vs ===

In JavaScript, equality operators are used to compare values to determine if they are equivalent. The two primary equality operators are `==` (loose equality) and `===` (strict equality). Understanding the difference between these operators is crucial for accurate comparisons and avoiding unexpected behavior.

### 1. Loose Equality (`==`)

The loose equality operator `==` performs type coercion, meaning it converts the operands to the same type before making the comparison. This can lead to unexpected results if you're not aware of how type coercion works.

#### How It Works

- If the operands are of different types, JavaScript tries to convert them to a common type before making the comparison.
- For example, if one operand is a string and the other is a number, the string will be converted to a number for comparison.

#### Examples

```javascript
console.log(5 == '5');    // true (string '5' is coerced to number 5)
console.log(0 == false); // true (false is coerced to number 0)
console.log(null == undefined); // true (null and undefined are considered equal)
console.log('' == 0);    // true (empty string is coerced to number 0)
console.log([] == false); // true (array coerced to empty string, then to number 0)
```

### 2. Strict Equality (`===`)

The strict equality operator `===` does not perform type coercion. It compares both the value and the type of the operands. For the comparison to be true, both the value and the type must be the same.

#### How It Works

- If the operands are of different types, the comparison immediately returns `false` without any type conversion.

#### Examples

```javascript
console.log(5 === '5');    // false (different types: number vs string)
console.log(0 === false); // false (different types: number vs boolean)
console.log(null === undefined); // false (different types: null vs undefined)
console.log('' === 0);    // false (different types: string vs number)
console.log([] === false); // false (different types: array vs boolean)
```

### Key Differences

1. **Type Coercion:**
   - `==` performs type coercion and converts operands to the same type before comparison.
   - `===` does not perform type coercion and requires both value and type to be the same.

2. **Comparison Behavior:**
   - With `==`, two values can be considered equal even if they are of different types, due to type conversion.
   - With `===`, two values are only considered equal if they are of the same type and have the same value.

### Practical Recommendations

1. **Use `===` (Strict Equality) for Comparisons:**
   - It avoids unexpected results due to type coercion.
   - It is generally recommended to use strict equality to make your code more predictable and easier to understand.

2. **Use `==` (Loose Equality) Carefully:**
   - Be cautious with `==` and be aware of the type coercion rules.
   - It's sometimes used for specific cases where type coercion is intended, but this should be done with a clear understanding of how coercion works.
#### Basic Difference
- **Loose Equality (`==`)**: Performs type coercion; values are compared after converting them to the same type.
- **Strict Equality (`===`)**: Does not perform type coercion; values are compared with both type and value considered.


### Boolean logic
Boolean logic in JavaScript is a fundamental aspect of programming that involves the use of Boolean values (`true` and `false`) and logical operators to control the flow of your code. Boolean logic is essential for making decisions, controlling loops, and managing various conditional scenarios.

### 1. Boolean Values

JavaScript has two Boolean values:

- **`true`**: Represents a truthy condition.
- **`false`**: Represents a falsy condition.

### 2. Logical Operators

Logical operators are used to combine or invert Boolean values. The primary logical operators in JavaScript are:

#### **Logical AND (`&&`)**

The logical AND operator returns `true` if both operands are `true`. If either operand is `false`, it returns `false`.

- **Syntax**: `A && B`

- **Example**:
  ```javascript
  let a = true;
  let b = false;
  console.log(a && b); // false (because b is false)

  let c = true;
  let d = true;
  console.log(c && d); // true (because both c and d are true)
  ```

- **Short-Circuit Behavior**: If the first operand is `false`, the second operand is not evaluated because the result will be `false` regardless of the second operand.
  ```javascript
  let result = false && (someFunction()); // someFunction() is not called
  ```

#### **Logical OR (`||`)**

The logical OR operator returns `true` if at least one of the operands is `true`. If both operands are `false`, it returns `false`.

- **Syntax**: `A || B`

- **Example**:
  ```javascript
  let a = true;
  let b = false;
  console.log(a || b); // true (because a is true)

  let c = false;
  let d = false;
  console.log(c || d); // false (because both c and d are false)
  ```

- **Short-Circuit Behavior**: If the first operand is `true`, the second operand is not evaluated because the result will be `true` regardless of the second operand.
  ```javascript
  let result = true || (someFunction()); // someFunction() is not called
  ```

#### **Logical NOT (`!`)**

The logical NOT operator inverts the Boolean value. If the value is `true`, it becomes `false`, and vice versa.

- **Syntax**: `!A`

- **Example**:
  ```javascript
  let a = true;
  console.log(!a); // false

  let b = false;
  console.log(!b); // true
  ```

- **Double NOT (`!!`)**: Can be used to convert any value to its Boolean equivalent.
  ```javascript
  console.log(!!"non-empty string"); // true
  console.log(!!0); // false
  ```

#### **Logical XOR (Exclusive OR)**

JavaScript does not have a built-in XOR operator, but it can be simulated using logical operators. XOR returns `true` if only one of the operands is `true`.

- **Example**:
  ```javascript
  function xor(a, b) {
      return (a || b) && !(a && b);
  }

  console.log(xor(true, false)); // true
  console.log(xor(true, true));  // false
  console.log(xor(false, false)); // false
  ```

### 3. Boolean Context

JavaScript values can be evaluated in a Boolean context, such as in conditionals (`if`, `while`, `for`, etc.). Values that are not `true` or `false` are converted to Boolean using type coercion.

- **Truthy Values**: Any value that is not falsy.
  ```javascript
  if ("Hello") {
      console.log("This will run"); // because non-empty string is truthy
  }
  ```

- **Falsy Values**: Values that convert to `false`.
  ```javascript
  if (0) {
      console.log("This will not run"); // because 0 is falsy
  }
  ```

### 4. Common Use Cases

- **Conditional Statements**: Control the flow of code based on conditions.
  ```javascript
  let age = 18;
  if (age >= 18) {
      console.log("Adult");
  } else {
      console.log("Minor");
  }
  ```

- **Loops**: Continue executing a block of code while a condition is `true`.
  ```javascript
  let count = 0;
  while (count < 5) {
      console.log(count);
      count++;
  }
  ```

- **Logical Expressions**: Combine conditions.
  ```javascript
  let hasPermission = true;
  let isLoggedIn = false;
  if (hasPermission && isLoggedIn) {
      console.log("Access granted");
  } else {
      console.log("Access denied");
  }
  ```


- **Logical AND (`&&`)**: Returns `true` if both operands are `true`.
- **Logical OR (`||`)**: Returns `true` if at least one operand is `true`.
- **Logical NOT (`!`)**: Inverts the Boolean value.
- **Logical XOR**: Simulated using a combination of `&&` and `||`.


### Switch statement

The `switch` statement in JavaScript provides a way to execute different code blocks based on the value of an expression. It is often used as an alternative to multiple `if...else` statements when you need to compare a single value against multiple possible values.

### Syntax

The basic syntax of a `switch` statement is as follows:

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    // More cases...
    default:
        // Code to execute if no cases match
}
```

### How It Works

1. **Evaluate Expression**: The `switch` statement evaluates the expression inside the parentheses.
2. **Match Case**: It compares the result of the expression with the values in each `case` statement, using strict equality (`===`).
3. **Execute Code Block**: When a match is found, the corresponding code block executes.
4. **Break**: The `break` statement exits the `switch` block. If omitted, execution will continue into the next case (fall-through).
5. **Default Case**: If no `case` matches, the `default` case executes, if it is provided. It is optional.

### Example

Here’s a simple example of using a `switch` statement to handle different days of the week:

```javascript
let day = new Date().getDay(); // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Unknown day");
}
```

### Fall-Through

If you want to execute the same code for multiple cases, you can omit the `break` statement. This is known as fall-through.

```javascript
let fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
    case "cherry":
        console.log("This is a fruit.");
        break;
    default:
        console.log("Not a fruit.");
}
```

In this example, if `fruit` is `"apple"`, `"banana"`, or `"cherry"`, the message `"This is a fruit."` will be logged.

### Multiple Statements

You can have multiple statements in each `case` block. Make sure to use a `break` statement to avoid falling through to the next case.

```javascript
let number = 2;

switch (number) {
    case 1:
        console.log("One");
        // Fall through
    case 2:
        console.log("Two");
        // Fall through
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Number not in range");
}
```

In this example, if `number` is `2`, it will log `"Two"` and `"Three"` because of fall-through.

### Using Expressions in Cases

You can use expressions in `case` statements, but the result will be compared using strict equality.

```javascript
let age = 25;

switch (true) {
    case age < 13:
        console.log("Child");
        break;
    case age < 20:
        console.log("Teenager");
        break;
    case age < 60:
        console.log("Adult");
        break;
    default:
        console.log("Senior");
}
```

### Summary

- **`switch` Statement**: Evaluates an expression and matches it against `case` values.
- **`break`**: Exits the `switch` block; prevents fall-through.
- **`default`**: Optional; executes if no `case` matches.
- **`Fall-Through`**: Allows multiple cases to share the same code block.

The `switch` statement is useful for handling multiple conditions based on a single expression, making your code cleaner and easier to maintain compared to multiple `if...else` statements.


### Statement and expressions

In JavaScript, statements and expressions are fundamental concepts that define how the code is executed. Understanding the difference between them helps in writing clear and effective code.

### Statements

A statement is a complete unit of execution that performs an action. It is the smallest standalone unit of code that can be executed. Statements generally do not return values.

#### Examples of Statements

1. **Variable Declaration**
   ```javascript
   let x = 10;  // Variable declaration statement
   ```

2. **Assignment Statement**
   ```javascript
   x = 20;  // Assignment statement
   ```

3. **Control Flow Statements**
   - **If Statement**
     ```javascript
     if (x > 10) {
         console.log("x is greater than 10");
     }
     ```

   - **Switch Statement**
     ```javascript
     switch (x) {
         case 10:
             console.log("x is 10");
             break;
         default:
             console.log("x is not 10");
     }
     ```

   - **Loop Statements**
     - **For Loop**
       ```javascript
       for (let i = 0; i < 5; i++) {
           console.log(i);
       }
       ```

     - **While Loop**
       ```javascript
       let i = 0;
       while (i < 5) {
           console.log(i);
           i++;
       }
       ```

4. **Return Statement**
   ```javascript
   function add(a, b) {
       return a + b;  // Return statement
   }
   ```

### Expressions

An expression is a piece of code that evaluates to a value. Expressions can be part of a statement or can stand alone. They can include values, variables, operators, and functions that return values.

#### Examples of Expressions

1. **Literal Expressions**
   ```javascript
   10              // Number literal expression
   "Hello, World!" // String literal expression
   ```

2. **Arithmetic Expressions**
   ```javascript
   5 + 3           // 8 (expression that evaluates to 8)
   10 * 2          // 20 (expression that evaluates to 20)
   ```

3. **String Expressions**
   ```javascript
   "Hello" + " World" // "Hello World" (expression that concatenates two strings)
   ```

4. **Boolean Expressions**
   ```javascript
   x > 10           // true or false (depends on the value of x)
   ```

5. **Function Expressions**
   ```javascript
   let sum = function(a, b) {
       return a + b;
   }; // Function expression that evaluates to a function
   ```

6. **Object Expressions**
   ```javascript
   let person = { name: "Alice", age: 25 }; // Object expression
   ```

7. **Array Expressions**
   ```javascript
   let numbers = [1, 2, 3, 4, 5]; // Array expression
   ```

### Combining Statements and Expressions

Statements often include expressions as part of their operation:

1. **Assignment with Expressions**
   ```javascript
   let x = 5 + 3; // The expression 5 + 3 is evaluated to 8, then assigned to x
   ```

2. **Function Call**
   ```javascript
   console.log("Hello, World!"); // Function call statement with an expression as an argument
   ```

3. **If Statement with Expressions**
   ```javascript
   if (x > 10) { // The expression x > 10 is evaluated, and the statement executes if true
       console.log("x is greater than 10");
   }
   ```


- **Statements**: Perform actions and typically do not return values. Examples include variable declarations, control flow constructs, and return statements.
- **Expressions**: Evaluate to a value and can be part of statements. Examples include arithmetic calculations, string concatenations, and function calls.


### conditional (ternary) operators

The conditional (ternary) operator in JavaScript is a concise way to perform conditional operations. It is a shorthand for the `if...else` statement and is often used for simple conditional assignments or expressions.

### Syntax

The syntax of the ternary operator is:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

- **`condition`**: An expression that evaluates to `true` or `false`.
- **`expressionIfTrue`**: The expression that is evaluated and returned if the condition is `true`.
- **`expressionIfFalse`**: The expression that is evaluated and returned if the condition is `false`.

### Examples

#### Basic Example

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

In this example, `age >= 18` is the condition. If it is `true`, `"Adult"` is returned; otherwise, `"Minor"` is returned.

#### Nested Ternary Operators

You can nest ternary operators to handle multiple conditions:

```javascript
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade); // "B"
```

In this example, the ternary operator is used to assign a grade based on the score, with multiple conditions checked in a nested manner.

#### Using Ternary Operator in JSX (React)

In React (JSX), the ternary operator is often used to conditionally render elements:

```javascript
function Greeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign up.</p>}
        </div>
    );
}
```

In this React component, the ternary operator conditionally renders a welcome message or a sign-up prompt based on the `isLoggedIn` prop.

### Key Points

1. **Conciseness**: The ternary operator provides a more concise syntax compared to `if...else` statements for simple conditional logic.

2. **Readability**: While the ternary operator is compact, excessive nesting can reduce readability. For more complex conditions or multiple actions, `if...else` statements might be clearer.

3. **Assignment**: It is commonly used for assigning values based on conditions.

   ```javascript
   let age = 25;
   let category = age < 13 ? "Child" : age < 18 ? "Teenager" : "Adult";
   ```

4. **Condition Evaluation**: The ternary operator is evaluated from left to right. If the condition evaluates to `true`, the first expression is executed; otherwise, the second expression is executed.


- **Syntax**: `condition ? expressionIfTrue : expressionIfFalse`
- **Usage**: Ideal for simple conditional assignments or expressions.
- **Nesting**: Can be nested, but excessive nesting can impact readability.


### Javascript releases
JavaScript, as a language, has evolved significantly over the years through various updates and releases. The evolution of JavaScript is largely governed by ECMAScript (ES) standards, which are developed by the TC39 committee (Technical Committee 39) and published by ECMA International.

### Key ECMAScript Releases

1. **ECMAScript 1 (ES1) - 1997**
   - **Introduction**: The first standardized version of JavaScript, which defined the core language features and syntax.
   - **Key Features**: Basic syntax, control structures, and standard library functions.

2. **ECMAScript 2 (ES2) - 1998**
   - **Minor Update**: Mostly bug fixes and editorial changes.

3. **ECMAScript 3 (ES3) - 1999**
   - **Significant Update**: Introduced many features that are still in use today.
   - **Key Features**: Regular expressions, try/catch, new control statements, improved string handling, and better error handling.

4. **ECMAScript 4 (ES4) - Unreleased**
   - **Planned Features**: ES4 was an ambitious proposal with features like classes, modules, and static typing. However, due to controversy and disagreements, it was never officially released.

5. **ECMAScript 5 (ES5) - 2009**
   - **Important Update**: Marked a significant update with many new features.
   - **Key Features**: Strict mode, JSON support, Array methods (`forEach`, `map`, `filter`, `reduce`), and enhanced object handling (`Object.create`, `Object.defineProperty`).

6. **ECMAScript 6 (ES6) / ECMAScript 2015 - 2015**
   - **Major Update**: ES6 introduced a range of new features that modernized JavaScript.
   - **Key Features**: Arrow functions, classes, template literals, destructuring, default parameters, `let` and `const` declarations, promises, modules, and enhanced object literals.

7. **ECMAScript 7 (ES7) / ECMAScript 2016 - 2016**
   - **Minor Update**: Introduced a few new features.
   - **Key Features**: Array `includes` method, exponentiation operator (`**`).

8. **ECMAScript 8 (ES8) / ECMAScript 2017 - 2017**
   - **Incremental Update**: Added new functionalities and improvements.
   - **Key Features**: Async/await, Object.entries, Object.values, String padding (`padStart`, `padEnd`), and shared memory.

9. **ECMAScript 9 (ES9) / ECMAScript 2018 - 2018**
   - **Incremental Update**: Introduced features that improved the language.
   - **Key Features**: Rest/Spread properties, asynchronous iteration (`for-await-of`), and regular expression enhancements.

10. **ECMAScript 10 (ES10) / ECMAScript 2019 - 2019**
    - **Incremental Update**: Added several enhancements and new features.
    - **Key Features**: Array `flat` and `flatMap` methods, `Object.fromEntries`, optional catch binding, and `String.prototype.trimStart`/`String.prototype.trimEnd`.

11. **ECMAScript 11 (ES11) / ECMAScript 2020 - 2020**
    - **Incremental Update**: Continued the trend of incremental improvements.
    - **Key Features**: Nullish coalescing operator (`??`), optional chaining (`?.`), `BigInt`, `Promise.allSettled`, and `globalThis`.

12. **ECMAScript 12 (ES12) / ECMAScript 2021 - 2021**
    - **Incremental Update**: Added features and improvements.
    - **Key Features**: Logical assignment operators (`&&=`, `||=`, `??=`), numeric separators (`1_000_000`), `String.prototype.replaceAll`, and weak references.

13. **ECMAScript 13 (ES13) / ECMAScript 2022 - 2022**
    - **Incremental Update**: Introduced new features and improvements.
    - **Key Features**: Class fields and private methods, top-level `await`, `Error.cause`, and `WeakRef`.

14. **ECMAScript 14 (ES14) / ECMAScript 2023 - 2023**
    - **Incremental Update**: Latest updates as of 2023.
    - **Key Features**: `Array.prototype.findLast` and `Array.prototype.findLastIndex`, `Array.prototype.groupBy`, `Symbol.hasInstance` changes, and more.



- **Early Versions**: Introduced the basic syntax and fundamental features of JavaScript.
- **ES5 (2009)**: Major updates with strict mode and better object handling.
- **ES6 (2015)**: A major overhaul with features like classes, arrow functions, and modules.
- **Subsequent Releases**: Focused on incremental improvements and new features to modernize the language.



## Part 2

### Strict mode and how to activate it
### Functions in js
### Function declarations vs expressions
### Arrow functions
### Function calling other functions
### Intro to arrays
### Basic array operations(methods)
### Intro to objects
### dot vs bracket notaion
### Object methods
### for loops for objects and arrays
### Looping arrays, break and continue
### Looping backwards
### Loops in loops
### while loop
