### Destructuring Arrays

Destructuring in JavaScript provides a convenient way to extract values from arrays or objects and assign them to variables. This feature can make your code cleaner and more readable, especially when dealing with complex data structures.

### Array Destructuring

Array destructuring allows you to unpack values from an array into distinct variables.

**Syntax**:
```javascript
let [variable1, variable2, ...rest] = array;
```

**Examples**:

1. **Basic Array Destructuring**

   ```javascript
   let numbers = [1, 2, 3];

   let [a, b, c] = numbers;

   console.log(a); // 1
   console.log(b); // 2
   console.log(c); // 3
   ```

   Here, `a` is assigned the first element of the array, `b` the second, and `c` the third.

2. **Skipping Elements**

   ```javascript
   let numbers = [1, 2, 3, 4];

   let [first, , third] = numbers;

   console.log(first); // 1
   console.log(third); // 3
   ```

   In this example, the second element is skipped by leaving an empty slot between commas.

3. **Rest Element**

   You can use the rest syntax (`...`) to collect the remaining elements into a new array.

   ```javascript
   let numbers = [1, 2, 3, 4, 5];

   let [first, second, ...rest] = numbers;

   console.log(first); // 1
   console.log(second); // 2
   console.log(rest);  // [3, 4, 5]
   ```

   The `rest` variable contains all the remaining elements of the array.

4. **Default Values**

   You can assign default values to variables in case the array doesn’t have enough elements.

   ```javascript
   let numbers = [1];

   let [first, second = 2] = numbers;

   console.log(first);  // 1
   console.log(second); // 2
   ```

   Here, `second` gets a default value of `2` because it is not present in the array.

5. **Swapping Variables**

   Array destructuring makes it easy to swap values between variables without a temporary variable.

   ```javascript
   let a = 1;
   let b = 2;

   [a, b] = [b, a];

   console.log(a); // 2
   console.log(b); // 1
   ```

### Nested Array Destructuring

You can destructure nested arrays by using nested destructuring syntax.

**Example**:

```javascript
let nestedArray = [1, [2, 3], 4];

let [first, [second, third], fourth] = nestedArray;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
console.log(fourth); // 4
```

### Practical Use Cases

1. **Function Returns**: Destructuring is often used with functions that return arrays.

   ```javascript
   function getCoordinates() {
       return [40.7128, 74.0060];
   }

   let [latitude, longitude] = getCoordinates();

   console.log(latitude);  // 40.7128
   console.log(longitude); // 74.0060
   ```

2. **Swapping Values**: As shown earlier, it simplifies swapping variable values.

3. **Extracting Data**: Easily extract data from complex arrays.

   ```javascript
   let user = ["John", "Doe", ["john.doe@example.com", "johndoe@example.com"]];

   let [firstName, lastName, [primaryEmail, secondaryEmail]] = user;

   console.log(firstName); // John
   console.log(lastName);  // Doe
   console.log(primaryEmail); // john.doe@example.com
   console.log(secondaryEmail); // johndoe@example.com
   ```


- **Array Destructuring** allows for concise and readable extraction of elements from arrays.
- You can skip elements, use default values, and collect remaining elements using rest syntax.
- **Nested Destructuring** can handle arrays within arrays.
- **Destructuring** is useful in various scenarios such as function returns and managing multiple variables.


### Destructuring Objects

Destructuring objects in JavaScript allows you to unpack properties from objects into individual variables, providing a concise and readable way to access and assign values.

### Object Destructuring

**Syntax**:
```javascript
let { property1, property2, ...rest } = object;
```

### Examples

1. **Basic Object Destructuring**

   ```javascript
   let person = {
       name: "Alice",
       age: 30,
       city: "New York"
   };

   let { name, age, city } = person;

   console.log(name); // Alice
   console.log(age);  // 30
   console.log(city); // New York
   ```

   Here, `name`, `age`, and `city` are extracted from the `person` object and assigned to variables with the same names.

2. **Renaming Variables**

   You can rename the variables you extract from the object by using a different variable name.

   ```javascript
   let person = {
       name: "Bob",
       age: 25,
       city: "Los Angeles"
   };

   let { name: fullName, age: years, city: location } = person;

   console.log(fullName); // Bob
   console.log(years);    // 25
   console.log(location); // Los Angeles
   ```

   In this example, `name` is renamed to `fullName`, `age` to `years`, and `city` to `location`.

3. **Default Values**

   You can provide default values for properties in case they are not present in the object.

   ```javascript
   let person = {
       name: "Charlie"
   };

   let { name, age = 30, city = "Unknown" } = person;

   console.log(name); // Charlie
   console.log(age);  // 30
   console.log(city); // Unknown
   ```

   Here, `age` and `city` have default values because they are not present in the `person` object.

4. **Nested Object Destructuring**

   You can destructure nested objects by applying destructuring syntax multiple levels deep.

   ```javascript
   let user = {
       name: "Dana",
       address: {
           street: "123 Elm St",
           city: "Springfield"
       }
   };

   let { name, address: { street, city } } = user;

   console.log(name);  // Dana
   console.log(street); // 123 Elm St
   console.log(city);  // Springfield
   ```

   Here, `street` and `city` are destructured from the nested `address` object.

5. **Rest Properties**

   You can use rest properties to collect the remaining properties into a new object.

   ```javascript
   let person = {
       name: "Eve",
       age: 28,
       city: "Seattle",
       country: "USA"
   };

   let { name, ...rest } = person;

   console.log(name); // Eve
   console.log(rest); // { age: 28, city: 'Seattle', country: 'USA' }
   ```

   In this example, `rest` contains the properties of `person` that were not destructured individually.

6. **Destructuring in Function Parameters**

   Destructuring can also be used directly in function parameters to unpack object properties.

   ```javascript
   function greet({ name, age }) {
       console.log(`Hello, my name is ${name} and I am ${age} years old.`);
   }

   let person = {
       name: "Frank",
       age: 40
   };

   greet(person); // Hello, my name is Frank and I am 40 years old.
   ```

   Here, the `greet` function extracts `name` and `age` directly from the `person` object passed as an argument.

### Summary

- **Basic Destructuring** extracts properties into variables with the same name.
- **Renaming Variables** allows you to assign extracted properties to different variable names.
- **Default Values** ensure variables have a fallback value if the property is missing.
- **Nested Destructuring** handles objects within objects.
- **Rest Properties** gather remaining properties into a new object.
- **Function Parameters** can use destructuring to directly access properties of objects passed as arguments.

Destructuring simplifies code by reducing the amount of repetitive code needed to access object properties and can make your code more readable and maintainable.


### The spread operators (...)

The spread operator (`...`) in JavaScript is a powerful feature introduced in ECMAScript 6 (ES6) that allows for the expansion of an iterable (like an array, string, or object) into individual elements or properties. It is versatile and can be used in various contexts to make code more concise and readable.

### Uses of the Spread Operator

#### 1. **Expanding Arrays**

The spread operator can be used to expand elements of an array into a list of elements.

##### Example: Combining Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

In this example, `...arr1` and `...arr2` expand their respective elements into the new array `combined`.

##### Example: Copying Arrays

```javascript
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]
```

Here, the spread operator creates a shallow copy of the `original` array.

#### 2. **Function Arguments**

The spread operator allows you to pass elements of an array as individual arguments to a function.

##### Example: Using Spread in Function Calls

```javascript
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6
```

In this case, `...numbers` spreads the array elements and passes them as individual arguments to the `sum` function.

#### 3. **Expanding Objects**

The spread operator can also be used to expand the properties of objects into another object.

##### Example: Combining Objects

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

Here, `...obj1` and `...obj2` spread the properties into a new object `combinedObj`.

##### Example: Shallow Copying Objects

```javascript
const originalObj = { a: 1, b: 2 };
const copyObj = { ...originalObj };
console.log(copyObj); // Output: { a: 1, b: 2 }
```

This creates a shallow copy of `originalObj`.

#### 4. **Merging Objects with Overrides**

When spreading objects, if there are overlapping keys, the spread operator will override properties from left to right.

##### Example: Overriding Properties

```javascript
const defaultSettings = { theme: "light", showNotifications: true };
const userSettings = { theme: "dark" };
const settings = { ...defaultSettings, ...userSettings };
console.log(settings); // Output: { theme: "dark", showNotifications: true }
```

Here, the `theme` property in `userSettings` overrides the one in `defaultSettings`.

#### 5. **String Expansion**

The spread operator can also expand a string into individual characters.

##### Example: Expanding a String

```javascript
const str = "hello";
const chars = [...str];
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']
```

Each character in the string `str` is spread into individual elements in the array `chars`.

##### Usage of spread operator

- **Arrays**: Spread elements into new arrays, combine arrays, or pass elements as function arguments.
- **Objects**: Spread properties into new objects, merge objects, or create shallow copies.
- **Strings**: Spread characters into individual elements in an array.


### Rest pattern and parameters

The **rest pattern and parameters** in JavaScript are closely related to the spread operator (`...`) but serve a different purpose. While the spread operator is used to expand elements, the rest pattern is used to gather them into a single array or object. Rest parameters allow functions to accept an indefinite number of arguments as an array.

### Rest Parameters

Rest parameters allow you to represent an indefinite number of arguments as an array. This is particularly useful when you don't know how many arguments will be passed to a function.

#### Syntax

```javascript
function myFunction(...rest) {
    // rest is an array of all arguments passed to the function
}
```

#### Example: Basic Usage

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

In this example, `numbers` is an array that contains all the arguments passed to the `sum` function. The `reduce` method then sums all the numbers.

#### Example: Combining Fixed and Rest Parameters

```javascript
function greet(greeting, ...names) {
    return `${greeting} ${names.join(", ")}`;
}

console.log(greet("Hello", "Alice", "Bob", "Charlie")); // Output: "Hello Alice, Bob, Charlie"
```

Here, `greeting` is a fixed parameter, while `names` is a rest parameter that gathers all additional arguments into an array.

### Rest Pattern

The rest pattern is used in destructuring assignments to gather the remaining elements or properties into an array or object.

#### Example: Array Destructuring with Rest

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

In this example, `first` and `second` take the first two elements of the array, while `rest` gathers the remaining elements into a new array.

#### Example: Object Destructuring with Rest

```javascript
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: { c: 3, d: 4 }
```

In this case, `a` and `b` are assigned the values of properties `a` and `b`, while `rest` gathers the remaining properties into a new object.

### Differences Between Spread and Rest

- **Spread Operator (`...`)**: Expands elements of an array, object, or iterable into individual elements or properties.
  - Example: `console.log(...[1, 2, 3]);` expands to `console.log(1, 2, 3);`
- **Rest Parameters (`...`)**: Gathers an indefinite number of arguments or elements into a single array or object.
  - Example: `function sum(...numbers) {}` gathers all arguments into `numbers`.

### Key Points

- **Rest Parameters**:
  - Used in function definitions to accept multiple arguments as an array.
  - Must be the last parameter in a function definition.

- **Rest Pattern**:
  - Used in array or object destructuring to gather remaining elements or properties.
  - Can simplify the process of separating known values from the rest of the data.



### Usage

- **Rest Parameters**: Allow functions to accept an indefinite number of arguments as an array. They are useful for functions where the number of arguments is not known in advance.
- **Rest Pattern**: Used in destructuring to gather the remaining items or properties into an array or object. It provides flexibility when working with arrays and objects, making your code cleaner and easier to understand.
### Short Circuiting (&& and ||)
Short-circuiting in JavaScript refers to the behavior of logical operators `&&` (AND) and `||` (OR) where they stop evaluating expressions as soon as the result is determined.

### `||` (Logical OR) Operator

The `||` operator returns the first truthy value it encounters or the last value if none are truthy.

#### Example of Short-Circuiting with `||`

```javascript
let a = 0;
let b = "Hello";
let c = null;

let result = a || b || c;
console.log(result); // Output: "Hello"
```

**Explanation:**
- `a` is `0`, which is falsy, so `||` moves to `b`.
- `b` is `"Hello"`, which is truthy, so `result` is `"Hello"`.
- The evaluation stops at `b`, so `c` is never evaluated.

### `&&` (Logical AND) Operator

The `&&` operator returns the first falsy value it encounters or the last value if none are falsy.

#### Example of Short-Circuiting with `&&`

```javascript
let a = 1;
let b = 0;
let c = "World";

let result = a && b && c;
console.log(result); // Output: 0
```

**Explanation:**
- `a` is `1`, which is truthy, so `&&` moves to `b`.
- `b` is `0`, which is falsy, so `result` is `0`.
- The evaluation stops at `b`, so `c` is never evaluated.

### Practical Use Cases

#### 1. Setting Default Values with `||`

You can use the `||` operator to set default values:

```javascript
let userInput = "";
let defaultText = "Default Text";

let finalText = userInput || defaultText;
console.log(finalText); // Output: "Default Text"
```

**Explanation:**
- Since `userInput` is an empty string (falsy), `defaultText` is used as the final value.

#### 2. Guard Clauses with `&&`

You can use the `&&` operator to execute code only if a certain condition is truthy:

```javascript
let isLoggedIn = true;
let username = "JohnDoe";

isLoggedIn && console.log(`Welcome, ${username}!`); // Output: "Welcome, JohnDoe!"
```

**Explanation:**
- If `isLoggedIn` is truthy, the message is logged; otherwise, nothing happens.

### Summary

- **`||` (OR)**: Returns the first truthy value or the last value if none are truthy. Stops evaluating as soon as a truthy value is found.
- **`&&` (AND)**: Returns the first falsy value or the last value if none are falsy. Stops evaluating as soon as a falsy value is found.

Short-circuiting allows for more efficient code execution by preventing unnecessary evaluations and is often used in setting defaults or guarding conditions.
### The nullish coalescing operator (??)
The **nullish coalescing operator** (`??`) in JavaScript is a logical operator that returns the right-hand operand when the left-hand operand is `null` or `undefined`, and otherwise returns the left-hand operand. It’s useful for providing a default value when a variable is explicitly `null` or `undefined` without mistakenly treating other falsy values (like `0`, `""`, or `false`) as if they were nullish.

### Syntax

```javascript
let result = a ?? b;
```

- **`a`**: The value to check.
- **`b`**: The fallback value if `a` is `null` or `undefined`.

### Behavior of `??`

The `??` operator is different from the logical OR operator (`||`), which treats any falsy value (e.g., `0`, `NaN`, `""`, `false`, `null`, `undefined`) as equivalent to `false`. The `??` operator only considers `null` and `undefined` as nullish.

#### Example: Using `??` to Provide Default Values

```javascript
let user = null;
let defaultUser = "Guest";

let currentUser = user ?? defaultUser;
console.log(currentUser); // Output: "Guest"
```

**Explanation:**
- Since `user` is `null`, the `??` operator returns `defaultUser`, which is `"Guest"`.

#### Comparison with `||`

```javascript
let user = "";
let defaultUser = "Guest";

let currentUserWithOr = user || defaultUser;
let currentUserWithNullish = user ?? defaultUser;

console.log(currentUserWithOr);       // Output: "Guest"
console.log(currentUserWithNullish);  // Output: ""
```

**Explanation:**
- With the `||` operator, `user` is an empty string (`""`), which is falsy, so `defaultUser` is returned.
- With the `??` operator, `user` is not `null` or `undefined`, so the empty string (`""`) is returned as the valid value.

### Use Cases

1. **Default Values**:
   When you want to provide a default value for `null` or `undefined` variables but still want to allow other falsy values like `0`, `false`, or `""`.

   ```javascript
   let input = 0;
   let value = input ?? 42;
   console.log(value); // Output: 0
   ```

   Here, `input` is `0`, which is a valid number, so `??` returns `0` instead of the fallback `42`.

2. **Avoiding Misinterpretation of Falsy Values**:
   If you use `||`, you might mistakenly overwrite valid falsy values (e.g., `0`, `""`, `false`) with a default.

### Summary

- **`??` (Nullish Coalescing Operator)**: Returns the right-hand operand only if the left-hand operand is `null` or `undefined`.
- **Use Case**: Ideal for setting default values without treating other falsy values (like `0`, `false`, or `""`) as invalid.

The `??` operator is a more precise tool when dealing with potential `null` or `undefined` values in JavaScript.
### Logical assignment Operators

Logical assignment operators in JavaScript combine logical operations with assignment in a concise way. These operators are useful for conditionally assigning a value to a variable based on its current value. JavaScript introduced three logical assignment operators in ECMAScript 2021:

1. **Logical OR assignment (`||=`)**
2. **Logical AND assignment (`&&=`)**
3. **Nullish coalescing assignment (`??=`)**

### 1. Logical OR Assignment (`||=`)

The `||=` operator assigns the right-hand operand to the variable if the variable is falsy. This is similar to the behavior of the `||` operator in conditional expressions.

#### Syntax

```javascript
x ||= y;
```

**Equivalent to:**

```javascript
x = x || y;
```

#### Example

```javascript
let a = 0;
let b = false;
let c = null;
let d = "Hello";

a ||= 42;  // a is 0 (falsy), so it becomes 42
b ||= true; // b is false (falsy), so it becomes true
c ||= "Default"; // c is null (falsy), so it becomes "Default"
d ||= "World"; // d is "Hello" (truthy), so it remains "Hello"

console.log(a, b, c, d); // Output: 42, true, "Default", "Hello"
```

### 2. Logical AND Assignment (`&&=`)

The `&&=` operator assigns the right-hand operand to the variable only if the variable is truthy. This is similar to the behavior of the `&&` operator in conditional expressions.

#### Syntax

```javascript
x &&= y;
```

**Equivalent to:**

```javascript
x = x && y;
```

#### Example

```javascript
let a = 1;
let b = null;
let c = "Hi";
let d = "";

a &&= 42;  // a is 1 (truthy), so it becomes 42
b &&= true; // b is null (falsy), so it remains null
c &&= "World"; // c is "Hi" (truthy), so it becomes "World"
d &&= "Hello"; // d is an empty string (falsy), so it remains an empty string

console.log(a, b, c, d); // Output: 42, null, "World", ""
```

### 3. Nullish Coalescing Assignment (`??=`)

The `??=` operator assigns the right-hand operand to the variable only if the variable is `null` or `undefined`. This is useful when you want to assign a default value only if the variable is nullish.

#### Syntax

```javascript
x ??= y;
```

**Equivalent to:**

```javascript
x = x ?? y;
```

#### Example

```javascript
let a = undefined;
let b = null;
let c = "";
let d = 0;

a ??= 42;  // a is undefined, so it becomes 42
b ??= "Default"; // b is null, so it becomes "Default"
c ??= "World"; // c is an empty string (not nullish), so it remains ""
d ??= 100; // d is 0 (not nullish), so it remains 0

console.log(a, b, c, d); // Output: 42, "Default", "", 0
```

### Summary

- **`||=` (Logical OR Assignment)**: Assigns a value if the variable is falsy.
- **`&&=` (Logical AND Assignment)**: Assigns a value if the variable is truthy.
- **`??=` (Nullish Coalescing Assignment)**: Assigns a value if the variable is `null` or `undefined`.

These logical assignment operators are handy for writing more concise and readable code, especially when you want to conditionally update a variable based on its current value.
### Looping arrays: the for of loop

The `for...of` loop in JavaScript is a modern way to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It allows you to loop through the values of an iterable object in a straightforward manner.

### Syntax

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

- **`variable`**: A variable that represents each element in the iterable.
- **`iterable`**: An object that is iterable, such as an array or a string.

### Example: Iterating Over an Array

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```

**Explanation:**
- The `for...of` loop iterates over each element in the `numbers` array.
- On each iteration, the current element (`number`) is logged to the console.

**Output:**
```
1
2
3
4
5
```

### Example: Iterating Over a String

```javascript
const greeting = "Hello";

for (const char of greeting) {
    console.log(char);
}
```

**Explanation:**
- The `for...of` loop iterates over each character in the string `greeting`.
- On each iteration, the current character (`char`) is logged to the console.

**Output:**
```
H
e
l
l
o
```

### Key Points

1. **Works with Any Iterable**: The `for...of` loop can be used with any iterable object, such as arrays, strings, sets, maps, etc.
   
2. **Iterates Over Values**: The loop iterates directly over the values of the iterable, making it more concise and readable when you only need the values.

3. **Cannot Access Index**: Unlike the `for...in` loop or traditional `for` loop, the `for...of` loop does not give you access to the index of the current element. If you need the index, you can use the `entries()` method in conjunction with `for...of`.

   Example:

   ```javascript
   const numbers = [10, 20, 30];

   for (const [index, value] of numbers.entries()) {
       console.log(`Index: ${index}, Value: ${value}`);
   }
   ```

   **Output:**
   ```
   Index: 0, Value: 10
   Index: 1, Value: 20
   Index: 2, Value: 30
   ```

### Advantages of `for...of`

- **Readability**: The `for...of` loop is often more readable and less error-prone than traditional loops, especially when you only need to access the values.
- **Modern and Versatile**: It works with a wide range of iterable objects, not just arrays.

### Summary

The `for...of` loop is a simple and effective way to iterate over the values of an iterable object in JavaScript. It is particularly useful when you don’t need access to the index and are only interested in the values themselves.
### enhanced object literals

Enhanced object literals in JavaScript provide a more concise and expressive syntax for defining objects, introduced in ECMAScript 2015 (ES6). These enhancements make it easier to work with objects, especially when you need to define methods, use variables as keys, or integrate dynamic properties.

### Key Features of Enhanced Object Literals

1. **Shorthand Property Names**
2. **Shorthand Method Definitions**
3. **Computed Property Names**
4. **Object Property Assignment from Variables**

Let's go through each feature with examples:

### 1. Shorthand Property Names

When you have variables that should become properties of an object, you can omit the key-value pair if the key name matches the variable name.

#### Example:

```javascript
const name = "Alice";
const age = 25;

const person = {
  name,
  age,
};

console.log(person); // Output: { name: "Alice", age: 25 }
```

**Explanation:**
- The `person` object automatically takes `name` and `age` as its property names, with the corresponding values from the variables.

### 2. Shorthand Method Definitions

You can define methods in an object without using the `function` keyword.

#### Example:

```javascript
const person = {
  name: "Bob",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: "Hello, my name is Bob"
```

**Explanation:**
- The `greet` method is defined without the `function` keyword, making the syntax cleaner.

### 3. Computed Property Names

You can use expressions within square brackets `[]` to define dynamic property names in an object.

#### Example:

```javascript
const key = "favoriteColor";
const color = "blue";

const person = {
  name: "Charlie",
  [key]: color,
};

console.log(person); // Output: { name: "Charlie", favoriteColor: "blue" }
```

**Explanation:**
- The property name is computed dynamically using the value of the `key` variable, so `favoriteColor` becomes a property of the `person` object.

### 4. Object Property Assignment from Variables

You can use an object literal to dynamically merge properties from other objects or variables into a new object.

#### Example:

```javascript
const user = {
  id: 1,
  username: "johndoe"
};

const additionalInfo = {
  email: "johndoe@example.com",
  age: 30
};

const userProfile = {
  ...user,
  ...additionalInfo,
  status: "active"
};

console.log(userProfile);
// Output: { id: 1, username: "johndoe", email: "johndoe@example.com", age: 30, status: "active" }
```

**Explanation:**
- The `...` (spread operator) is used to combine properties from `user` and `additionalInfo` into `userProfile`, along with an additional `status` property.

### Summary

Enhanced object literals make it easier and more concise to define objects in JavaScript. The key enhancements include:

- **Shorthand Property Names**: Simplify property definitions when the key and variable name match.
- **Shorthand Method Definitions**: Provide a cleaner syntax for defining methods.
- **Computed Property Names**: Allow dynamic creation of property names using expressions.
- **Object Property Assignment**: Use the spread operator to combine properties from different objects.

These features are particularly useful for writing cleaner, more maintainable, and more expressive code when working with objects in JavaScript.
### optional chaining (?.)
### looping objects : Object keys,values and entries
### sets
### maps: fundamentals
### maps: iteration
### Strings in js
### string methods

### simple array methods
### the new at method
### lopping arrays : forEach
### forEach with maps and sets
### creating dom elements
### data transformation : map, reduce and filter
### map method in detail
### filter method in detail
### reduce method and detail
### chaining methods
### find method
### finIndex method
### flat and flatmap
### sorting arrays
### creating and filling arrays
### array methods



