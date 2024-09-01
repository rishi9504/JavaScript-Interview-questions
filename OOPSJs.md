### What is Oops

**Object-Oriented Programming (OOP)** is a programming paradigm that uses "objects" to design and develop applications. These objects represent real-world entities and are used to model data and behavior. OOP helps to structure programs in a way that makes them easier to manage, scale, and maintain.

### Key Concepts of OOP

1. **Objects**
   - An object is a self-contained entity that contains both data (attributes or properties) and methods (functions or behaviors). Objects are instances of classes.
   - Example: A car object might have properties like `color`, `make`, and `model`, and methods like `start()` and `stop()`.

2. **Classes**
   - A class is a blueprint or template for creating objects. It defines a set of properties and methods that the created objects will have.
   - Example: A `Car` class defines the properties `color`, `make`, `model`, and methods `start()` and `stop()`. An object created from this class might represent a specific car.

3. **Encapsulation**
   - Encapsulation is the bundling of data (properties) and methods (functions) that operate on the data into a single unit, or class. It also involves restricting access to certain components (using access modifiers like `private`, `protected`, and `public`), which helps to protect the object's integrity.
   - Example: A `BankAccount` class might have private properties like `balance` and methods like `deposit()` and `withdraw()`. The balance can only be accessed or modified through these methods, ensuring controlled access.

4. **Abstraction**
   - Abstraction involves hiding the complex implementation details of an object and exposing only the essential features to the user. This simplifies interaction with objects.
   - Example: When you drive a car, you don't need to understand the complex mechanics of the engine; you just need to know how to use the steering wheel, pedals, and other controls.

5. **Inheritance**
   - Inheritance is a mechanism by which one class (called a child or subclass) can inherit properties and methods from another class (called a parent or superclass). This promotes code reuse and hierarchical relationships between classes.
   - Example: A `Vehicle` class might define common properties and methods for all vehicles. A `Car` class can inherit from `Vehicle` and add specific properties like `numberOfDoors`.

6. **Polymorphism**
   - Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying data types or methods.
   - Example: A method `drive()` might behave differently when called on a `Car` object than when called on a `Bicycle` object, even though both are types of `Vehicle`.

### Benefits of OOP

1. **Modularity**: The source code for an object can be written and maintained independently of the source code for other objects. This makes code easier to understand, debug, and maintain.

2. **Reusability**: Objects and classes can be reused across programs. Inheritance allows you to create new classes from existing ones.

3. **Scalability**: OOP allows you to build programs that can be expanded and scaled up over time, as you can add new objects, classes, and methods without disrupting existing code.

4. **Maintainability**: OOP makes it easier to maintain and modify existing code as objects can be independently updated and extended.

5. **Abstraction**: OOP hides the complex implementation details, allowing developers to work at a higher level of abstraction and focus on designing the application rather than worrying about low-level details.

### Example in JavaScript

Here's a basic example of OOP in JavaScript using the concept of classes and objects:

```javascript
// Define a class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} is stopping.`);
    }
}

// Create an object (instance of the class)
const myCar = new Car('Toyota', 'Corolla', 2021);

// Use the object's methods
myCar.start(); // Outputs: Toyota Corolla is starting.
myCar.stop();  // Outputs: Toyota Corolla is stopping.
```


Object-Oriented Programming (OOP) is a powerful paradigm that models software around objects, making it easier to manage complexity through encapsulation, inheritance, and polymorphism. By understanding and applying OOP principles, developers can create scalable, maintainable, and reusable code.


### Constructor functions and the new operator
In JavaScript, constructor functions and the `new` operator are used together to create objects that share a common prototype and structure. This approach is a key part of object-oriented programming in JavaScript.

### Constructor Functions

A constructor function is a regular function that is intended to be used with the `new` operator to create objects. By convention, constructor functions are named with an uppercase first letter to distinguish them from regular functions.

#### Example of a Constructor Function

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
```

#### Explanation:
- **`Person` function**: This is a constructor function. It uses the `this` keyword to assign properties and methods to the objects it creates.
- **`name` and `age`**: These are properties of the object being created.
- **`greet`**: This is a method that will be available on any object created using this constructor function.

### The `new` Operator

The `new` operator is used to create an instance of an object from a constructor function. When `new` is used, the following steps occur:

1. **A new empty object is created.**
2. **The `this` keyword in the constructor function is set to reference this new object.**
3. **The object inherits properties and methods from the constructor's prototype.**
4. **The constructor function is executed, assigning properties and methods to the new object.**
5. **The newly created object is returned from the constructor function (unless the constructor explicitly returns an object).**

#### Creating an Object with `new`

```javascript
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Outputs: Hello, my name is Bob and I am 25 years old.
```

#### Explanation:
- **`person1` and `person2`** are objects created by calling the `Person` constructor function with `new`.
- Each object has its own `name` and `age` properties and shares the `greet` method, but these are individual to each instance.

### Using Prototypes with Constructor Functions

In JavaScript, each function has a `prototype` property that can be used to add properties and methods that should be shared among all instances of objects created by that function.

#### Example: Using Prototypes

```javascript
function Animal(type) {
    this.type = type;
}

// Adding a method to the prototype
Animal.prototype.makeSound = function() {
    console.log(`${this.type} makes a sound.`);
};

const dog = new Animal('Dog');
const cat = new Animal('Cat');

dog.makeSound(); // Outputs: Dog makes a sound.
cat.makeSound(); // Outputs: Cat makes a sound.
```

#### Explanation:
- **Prototype**: The `makeSound` method is added to the `Animal` prototype, meaning it is shared by all instances created by the `Animal` constructor.
- **Efficiency**: This approach is more efficient than defining the method directly inside the constructor function because it ensures that all instances share the same method, reducing memory usage.

### Constructor Functions vs. ES6 Classes

ES6 introduced `class` syntax as a more readable and modern way to create constructor functions and work with prototypes. The behavior is essentially the same, but the syntax is more intuitive.

#### ES6 Class Equivalent

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.
```

- **Class Syntax**: The `class` syntax is syntactic sugar over JavaScript's existing prototype-based inheritance.
- **Methods**: Methods defined inside a `class` are automatically added to the prototype, unlike in traditional constructor functions where you'd need to explicitly add them to the prototype.


- **Constructor functions** are used to create objects in JavaScript. They are regular functions but are intended to be used with the `new` operator.
- The **`new` operator** creates an instance of an object, binding `this` to the new object and returning it.
- Methods and properties can be added to the **prototype** of a constructor function, allowing all instances to share those methods and properties.
- **ES6 classes** provide a more modern and readable way to create constructor functions and work with prototypes, although the underlying mechanism remains the same.
### Prototypes

Prototypes are a fundamental concept in JavaScript's object-oriented programming model. They provide a way to share properties and methods across objects, enabling inheritance and allowing objects to be linked to one another.

### What is a Prototype?

In JavaScript, every object has an internal link to another object called its prototype. This prototype object can itself have a prototype, and so on, forming a chain known as the prototype chain. When you try to access a property or method on an object, JavaScript will first look for it on the object itself. If it doesn't find it there, it will look up the prototype chain until it either finds the property/method or reaches the end of the chain (`null`).

### Example: Basic Prototype Usage

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person('Alice', 30);
const bob = new Person('Bob', 25);

alice.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.
bob.greet();   // Outputs: Hello, my name is Bob and I am 25 years old.
```

#### Explanation:
- **`Person.prototype.greet`**: This defines a method `greet` on the prototype of the `Person` constructor function. All instances of `Person` share this method.
- **Prototype chain**: When you call `alice.greet()`, JavaScript looks for the `greet` method on the `alice` object. It doesn't find it directly on `alice`, so it looks up the prototype chain and finds `greet` on `Person.prototype`.

### Prototype Chain

The prototype chain is a series of linked prototypes. When a property or method is accessed, JavaScript will search up this chain.

#### Example: Prototype Chain

```javascript
const obj = {
    a: 1
};

const anotherObj = Object.create(obj);
anotherObj.b = 2;

console.log(anotherObj.a); // Outputs: 1
console.log(anotherObj.b); // Outputs: 2
```

#### Explanation:
- **`anotherObj`**: This object is created with `obj` as its prototype using `Object.create(obj)`.
- **Property lookup**: When you try to access `anotherObj.a`, JavaScript doesn't find `a` on `anotherObj`, so it looks up the prototype chain and finds `a` on `obj`.

### `Object.prototype`

At the top of the prototype chain is `Object.prototype`. This is the prototype of almost all objects in JavaScript. It provides some commonly used methods such as `toString()`, `hasOwnProperty()`, and `valueOf()`.

```javascript
console.log(Object.prototype); // Outputs the prototype object
```

### Inheritance with Prototypes

Prototypes allow for inheritance in JavaScript. You can create a new object that inherits properties and methods from an existing object.

#### Example: Inheritance

```javascript
function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function() {
    console.log(`${this.type} makes a sound.`);
};

function Dog(name) {
    Animal.call(this, 'Dog'); // Call the parent constructor
    this.name = name;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
};

const myDog = new Dog('Rex');

myDog.speak(); // Outputs: Dog makes a sound.
myDog.bark();  // Outputs: Rex barks!
```

#### Explanation:
- **`Animal` constructor**: Defines a base class for animals.
- **`Dog` constructor**: Inherits from `Animal` by calling `Animal.call(this, 'Dog')` to set up inheritance.
- **`Dog.prototype = Object.create(Animal.prototype)`**: This sets up the prototype chain so that `Dog` inherits from `Animal`.
- **`Dog.prototype.constructor = Dog`**: Resets the constructor property to `Dog` because it was overwritten by `Object.create`.

### Prototype Methods

Some useful methods related to prototypes include:

- **`Object.create(proto)`**: Creates a new object with the specified prototype.
- **`Object.getPrototypeOf(obj)`**: Returns the prototype of the specified object.
- **`Object.setPrototypeOf(obj, proto)`**: Sets the prototype of the specified object.

### Example: `Object.create()`

```javascript
const parentObj = {
    greet: function() {
        console.log("Hello from parent!");
    }
};

const childObj = Object.create(parentObj);
childObj.greet(); // Outputs: Hello from parent!
```

### Example: `Object.getPrototypeOf()` and `Object.setPrototypeOf()`

```javascript
const obj = { a: 1 };
const proto = { b: 2 };

Object.setPrototypeOf(obj, proto);

console.log(Object.getPrototypeOf(obj)); // Outputs: { b: 2 }
console.log(obj.b); // Outputs: 2
```


- **Prototypes** are objects from which other objects inherit properties and methods. They enable inheritance in JavaScript and are a key part of the language's object model.
- **Prototype chain** is the mechanism by which JavaScript objects inherit features from one another. If a property or method is not found on an object, JavaScript looks up the prototype chain until it finds it or reaches `null`.
- **Inheritance** can be implemented using prototypes, allowing objects to inherit properties and methods from other objects.
- **`Object.create()`**, **`Object.getPrototypeOf()`**, and **`Object.setPrototypeOf()`** are methods that help work with prototypes in JavaScript.

Understanding prototypes is essential for mastering JavaScript, as they form the basis of the language's inheritance model and play a crucial role in how objects interact with one another.

### Prototypal inheritence and the prototype chain

**Prototypal inheritance** and the **prototype chain** are core concepts in JavaScript's object-oriented programming model. These concepts allow objects to inherit properties and methods from other objects, enabling code reuse and a more flexible structure.

### Prototypal Inheritance

In JavaScript, prototypal inheritance is a feature that allows an object to inherit properties and methods from another object. Instead of using classes (as in classical inheritance found in languages like Java or C++), JavaScript uses prototypes to achieve inheritance.

#### How It Works

- **Objects inherit from other objects**: In JavaScript, every object can have a prototype, which is another object from which it inherits properties and methods.
- **Prototype property**: When you create a function (which can serve as a constructor), JavaScript automatically adds a `prototype` property to it. This property is an object that contains a `constructor` property (pointing back to the function) and can have additional properties or methods that should be shared among instances created by that constructor.

### Example of Prototypal Inheritance

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
};

const myDog = new Dog('Rex', 'Labrador');
myDog.speak(); // Outputs: Rex makes a noise.
myDog.bark();  // Outputs: Rex barks!
```

#### Explanation:
- **`Animal` constructor**: Defines a base class for animals with a `name` property and a `speak` method on its prototype.
- **`Dog` constructor**: Inherits from `Animal` by calling `Animal.call(this, name)`. It also has its own `bark` method.
- **`Dog.prototype = Object.create(Animal.prototype)`**: This sets up prototypal inheritance, so `Dog` instances can use methods defined on `Animal.prototype`.
- **`Dog.prototype.constructor = Dog`**: Resets the constructor property on `Dog.prototype` since it was overwritten by `Object.create`.

### The Prototype Chain

The prototype chain is a series of links between objects that allow JavaScript to look up properties and methods that aren't found directly on an object. When you try to access a property or method on an object, JavaScript first looks on that object itself. If it doesn't find it there, it looks up the prototype chain until it either finds it or reaches the end of the chain (where the prototype is `null`).

#### Example of the Prototype Chain

```javascript
const obj = {
    a: 1
};

const proto = {
    b: 2
};

Object.setPrototypeOf(obj, proto);

console.log(obj.a); // Outputs: 1
console.log(obj.b); // Outputs: 2
```

#### Explanation:
- **`obj`**: This object has its own property `a`.
- **`proto`**: This object has a property `b`.
- **`Object.setPrototypeOf(obj, proto)`**: Sets `proto` as the prototype of `obj`.
- **Property lookup**: When `obj.b` is accessed, JavaScript doesn't find `b` on `obj`, so it looks up the prototype chain and finds `b` on `proto`.

### Prototype Chain Visualization

Here’s a simple visualization of how the prototype chain works:

1. **Instance Object**: When you create an object (e.g., `myDog`), it has its own properties (e.g., `name`, `breed`) and a hidden `[[Prototype]]` property (which is typically accessed via `__proto__`).
2. **Prototype Object**: The `[[Prototype]]` property points to the prototype object (e.g., `Dog.prototype`). This object may contain shared methods (e.g., `bark`).
3. **Parent Prototype**: If the prototype object itself has a `[[Prototype]]` property, this points to another object (e.g., `Animal.prototype`), which might contain additional methods (e.g., `speak`).
4. **Object.prototype**: The chain eventually ends at `Object.prototype`, which is the root of almost all objects in JavaScript. It provides methods like `toString()` and `hasOwnProperty()`.
5. **End of Chain**: The end of the chain is `null`, which means no further lookup occurs.

```plaintext
myDog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null
```

### Inheritance Hierarchy

This inheritance hierarchy means that `myDog` has access to methods defined on `Dog.prototype`, `Animal.prototype`, and `Object.prototype`. If a method isn’t found on `myDog`, JavaScript will look for it in the following order:

1. `myDog` itself.
2. `Dog.prototype`.
3. `Animal.prototype`.
4. `Object.prototype`.
5. If it’s not found, JavaScript will return `undefined`.

### Advantages of Prototypal Inheritance

- **Efficiency**: Shared methods are stored in one place (the prototype) rather than being duplicated across instances, which saves memory.
- **Dynamic inheritance**: Prototypes can be modified at runtime, allowing for dynamic changes to inheritance and behavior.
- **Flexible inheritance**: JavaScript's prototypal inheritance is more flexible than classical inheritance, allowing for more dynamic and less rigid inheritance patterns.

### Example: Checking the Prototype Chain

You can use `Object.getPrototypeOf()` to inspect the prototype of an object:

```javascript
console.log(Object.getPrototypeOf(myDog)); // Outputs: Dog.prototype
console.log(Object.getPrototypeOf(Dog.prototype)); // Outputs: Animal.prototype
console.log(Object.getPrototypeOf(Animal.prototype)); // Outputs: Object.prototype
```


- **Prototypal inheritance** allows objects to inherit properties and methods from other objects, enabling a flexible and efficient inheritance mechanism in JavaScript.
- The **prototype chain** is a series of linked objects that JavaScript uses to look up properties and methods not found directly on an object.
- **Prototypes** are the foundation of inheritance in JavaScript, allowing objects to share behavior while minimizing memory usage and maximizing flexibility.

Understanding prototypal inheritance and the prototype chain is essential for mastering how objects interact and share behavior in JavaScript.
### Prototypal inheritance and built in objects

Prototypal inheritance in JavaScript not only applies to user-defined objects but also to built-in objects. Every object in JavaScript inherits from a prototype, and this includes built-in objects such as `Array`, `String`, `Number`, `Function`, and others. Understanding how prototypal inheritance works with these built-in objects is key to leveraging JavaScript's full capabilities.

### Built-in Objects and Their Prototypes

JavaScript provides several built-in objects that have their own prototypes. These prototypes contain methods and properties that are available to instances of these objects.

#### Common Built-in Objects

- **`Object`**
- **`Array`**
- **`String`**
- **`Number`**
- **`Function`**
- **`Boolean`**
- **`Date`**
- **`RegExp`**

Each of these built-in objects has a prototype that contains methods and properties specific to that type of object.

### Example: Array Prototype

```javascript
const myArray = [1, 2, 3];

console.log(myArray.push(4));  // Outputs: 4 (the new length of the array)
console.log(myArray.join(', ')); // Outputs: "1, 2, 3, 4"
```

#### Explanation:
- **`myArray`** is an instance of `Array`.
- `Array` instances inherit from `Array.prototype`, which includes methods like `push()`, `join()`, `map()`, `filter()`, and others.
- When you call `myArray.push(4)`, JavaScript looks up the prototype chain to find the `push` method on `Array.prototype`.

### Prototype Chain of Built-in Objects

Every built-in object in JavaScript is part of a prototype chain, which usually ends with `Object.prototype`. Here's an overview of the prototype chain for some common objects:

1. **Array Prototype Chain**

   ```plaintext
   myArray -> Array.prototype -> Object.prototype -> null
   ```

   - `myArray` inherits methods from `Array.prototype`.
   - `Array.prototype` inherits from `Object.prototype`.

2. **String Prototype Chain**

   ```plaintext
   myString -> String.prototype -> Object.prototype -> null
   ```

   - `myString` inherits methods from `String.prototype`, like `charAt`, `slice`, `toUpperCase`, etc.
   - `String.prototype` inherits from `Object.prototype`.

3. **Function Prototype Chain**

   ```plaintext
   myFunction -> Function.prototype -> Object.prototype -> null
   ```

   - `myFunction` inherits methods from `Function.prototype`, like `call`, `apply`, `bind`, etc.
   - `Function.prototype` inherits from `Object.prototype`.

### Example: Custom Inheritance from Built-in Objects

You can create your own objects that inherit from built-in prototypes using `Object.create()` or by setting the prototype explicitly.

#### Inheriting from an Array

```javascript
function MyArray() {
    Array.call(this); // Call Array constructor
}

MyArray.prototype = Object.create(Array.prototype);
MyArray.prototype.constructor = MyArray;

MyArray.prototype.customMethod = function() {
    console.log("This is a custom method.");
};

const arr = new MyArray();
arr.push(1, 2, 3);
arr.customMethod(); // Outputs: This is a custom method.
console.log(arr.length); // Outputs: 3
```

#### Explanation:
- **`MyArray`** is a constructor function that inherits from `Array`.
- **`MyArray.prototype = Object.create(Array.prototype)`**: Sets up the prototype chain so that `MyArray` instances inherit from `Array.prototype`.
- **`arr`**: An instance of `MyArray` can use both the `Array` methods and the custom method defined on `MyArray.prototype`.

### Example: Extending Built-in Prototypes

Although not recommended in most cases (due to potential conflicts and future compatibility issues), you can extend built-in prototypes with your own methods.

#### Extending the String Prototype

```javascript
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

const str = "hello";
console.log(str.reverse()); // Outputs: "olleh"
```

#### Explanation:
- **`String.prototype.reverse`**: Adds a new method `reverse` to the `String.prototype`, which is now available to all string instances.
- **`str.reverse()`**: This works because JavaScript finds the `reverse` method on `String.prototype` through the prototype chain.

### The Role of `Object.prototype`

`Object.prototype` is at the top of the prototype chain for all objects (except objects created with `Object.create(null)`), and it provides methods like:

- **`toString()`**: Converts the object to a string.
- **`hasOwnProperty()`**: Checks if a property is a direct property of the object (not inherited).
- **`isPrototypeOf()`**: Checks if an object exists in another object's prototype chain.

#### Example

```javascript
const obj = { a: 1 };

console.log(obj.hasOwnProperty('a')); // Outputs: true
console.log(obj.toString()); // Outputs: "[object Object]"
```


- **Prototypal inheritance** allows custom objects to inherit properties and methods from built-in objects like `Array`, `String`, `Function`, etc.
- **Built-in prototypes** (`Array.prototype`, `String.prototype`, etc.) contain methods that are available to all instances of those types.
- **Prototype chain** for built-in objects typically ends at `Object.prototype`, which provides fundamental methods available to all objects.
- **Custom objects** can be created to inherit from built-in objects, allowing for the extension and customization of existing behavior.
- **Caution**: Extending built-in prototypes should be done sparingly and with care to avoid conflicts and future compatibility issues.

Understanding how built-in objects work with prototypal inheritance and the prototype chain provides a strong foundation for working with JavaScript’s object model effectively.
### ES6 classes
ES6 classes are a syntactical sugar in JavaScript that provide a more straightforward and structured way to work with objects and inheritance. While they simplify the syntax, ES6 classes still use the underlying prototypal inheritance model. Classes in ES6 allow developers to define object blueprints, including properties and methods, in a more familiar format for those coming from class-based languages like Java or C#.

### Basic Syntax of ES6 Classes

#### Defining a Class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person('John', 30);
john.greet(); // Outputs: Hello, my name is John and I am 30 years old.
```

#### Explanation:
- **`class` keyword**: Used to define a class.
- **`constructor` method**: A special method for initializing new objects. It's called automatically when a new instance of the class is created using `new`.
- **`this` keyword**: Refers to the instance of the object being created.
- **Instance method**: Methods defined within the class body are automatically added to the prototype of the created object (`Person.prototype` in this case).

### Class Inheritance

Classes in ES6 support inheritance, allowing one class to inherit properties and methods from another.

#### Example: Inheritance

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Rex', 'Labrador');
myDog.speak(); // Outputs: Rex makes a noise.
myDog.bark();  // Outputs: Rex barks.
```

#### Explanation:
- **`extends` keyword**: Used to create a subclass that inherits from a parent class.
- **`super()`**: Calls the constructor of the parent class. It must be called before accessing `this` in the subclass constructor.
- **Inheritance**: The `Dog` class inherits the `speak` method from `Animal`, and it also defines its own method `bark`.

### Static Methods

Static methods are methods that belong to the class itself rather than to instances of the class.

#### Example: Static Methods

```javascript
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // Outputs: 8
```

#### Explanation:
- **`static` keyword**: Defines a static method that can be called on the class itself, not on instances of the class.

### Getters and Setters

Getters and setters allow you to define methods that behave like properties. They provide a way to control access to an object’s properties.

#### Example: Getters and Setters

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Outputs: 50

rect.dimensions = { width: 20, height: 10 };
console.log(rect.area); // Outputs: 200
```

#### Explanation:
- **`get` keyword**: Defines a getter method that acts like a property, allowing you to access a computed value (`rect.area` in this case).
- **`set` keyword**: Defines a setter method that acts like a property, allowing you to set values with custom logic (`rect.dimensions = ...` in this case).

### Private Fields and Methods (ES2022+)

As of ES2022, JavaScript supports truly private fields and methods within classes, using the `#` prefix.

#### Example: Private Fields and Methods

```javascript
class Counter {
    #count = 0; // Private field

    #increment() { // Private method
        this.#count++;
    }

    get value() {
        return this.#count;
    }

    increase() {
        this.#increment();
    }
}

const counter = new Counter();
counter.increase();
console.log(counter.value); // Outputs: 1
```

#### Explanation:
- **`#` prefix**: Marks a field or method as private, meaning it cannot be accessed outside of the class.
- **Encapsulation**: This feature allows for true encapsulation, where internal implementation details are hidden from outside code.

### Class Expressions

Classes in JavaScript can also be defined using expressions, allowing for more dynamic and flexible class definitions.

#### Example: Class Expressions

```javascript
const MyClass = class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
};

const obj = new MyClass('Anonymous');
obj.sayName(); // Outputs: Anonymous
```

#### Explanation:
- **Class expression**: Similar to function expressions, you can assign a class to a variable.
- **Anonymous class**: Classes can be anonymous or named within expressions.

### Subclassing Built-in Objects

ES6 classes allow for subclassing of built-in objects like `Array`, `Error`, and others.

#### Example: Subclassing Array

```javascript
class MyArray extends Array {
    last() {
        return this[this.length - 1];
    }
}

const arr = new MyArray(1, 2, 3);
console.log(arr.last()); // Outputs: 3
```

#### Explanation:
- **`MyArray`**: A custom array class that extends the built-in `Array` class.
- **`last()` method**: Adds a new method to get the last element of the array.


- **ES6 classes** provide a more familiar, class-based syntax for working with objects in JavaScript, while still using the prototypal inheritance model under the hood.
- **Classes** include features like constructors, instance methods, inheritance (`extends`), static methods, getters/setters, and private fields/methods.
- **Inheritance** is supported, allowing for more structured and hierarchical code.
- **Static methods** can be used for utility functions that don’t need access to instance-specific data.
- **Getters and setters** provide a controlled way of accessing and modifying object properties.
- **Private fields and methods** enable true encapsulation of internal state.
- **Class expressions** and subclassing of built-in objects offer flexibility and power.

ES6 classes bring structure and clarity to object-oriented programming in JavaScript, making it easier to define and manage complex data models and behaviors.
### setters and getters
Setters and getters in JavaScript provide a way to define methods that behave like properties. They allow you to control how properties on an object are accessed and modified. This can be useful for encapsulation, validation, or custom behavior when setting or getting a property value.

### Getters

A getter is a method that gets the value of a property. It allows you to define a method that is accessed like a property, without needing to call it explicitly.

#### Syntax

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // Outputs: "John Doe"
```

#### Explanation:
- **`get` keyword**: Used to define a getter method.
- **`fullName` method**: Although `fullName` is defined as a method, it is accessed like a property (`person.fullName`), without using parentheses.
- **Dynamic property**: The value of `fullName` is computed dynamically based on `firstName` and `lastName`.

### Setters

A setter is a method that sets the value of a property. It allows you to define custom behavior when assigning a value to a property, such as validation or triggering other changes.

#### Syntax

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // Outputs: "John Doe"

person.fullName = 'Jane Smith';
console.log(person.firstName); // Outputs: "Jane"
console.log(person.lastName);  // Outputs: "Smith"
```

#### Explanation:
- **`set` keyword**: Used to define a setter method.
- **`fullName` setter**: This method takes a single argument (`name`), splits it into `firstName` and `lastName`, and updates the corresponding properties.
- **Assignment**: When you assign a value to `fullName` (`person.fullName = 'Jane Smith'`), the setter is invoked, and the properties are updated accordingly.

### Combining Getters and Setters

You can define both a getter and a setter for the same property. This allows you to control both how the property is read and how it is set.

#### Example

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}

const rect = new Rectangle(4, 9);
console.log(rect.area); // Outputs: 36

rect.area = 64;
console.log(rect.width);  // Outputs: 8
console.log(rect.height); // Outputs: 8
```

#### Explanation:
- **`get area`**: Returns the computed area of the rectangle.
- **`set area`**: Allows setting the area, which updates the `width` and `height` properties based on the square root of the new area value.

### Encapsulation and Validation

Getters and setters are often used to enforce encapsulation and validation, ensuring that the internal state of an object is accessed and modified in a controlled way.

#### Example: Validation with Setters

```javascript
class User {
    constructor(username, age) {
        this.username = username;
        this._age = age; // Private-like property convention
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.error('Age cannot be negative.');
        } else {
            this._age = value;
        }
    }
}

const user = new User('Alice', 25);
console.log(user.age); // Outputs: 25

user.age = -5; // Outputs: Age cannot be negative.
console.log(user.age); // Outputs: 25
```

#### Explanation:
- **Private-like property**: By convention, the underscore `_` prefix is often used to indicate that a property is intended to be private.
- **Validation**: The setter for `age` checks if the new value is negative. If it is, it rejects the update, protecting the integrity of the object’s state.

### Getters and Setters with Object Literals

You can also define getters and setters within object literals using a similar syntax.

#### Example

```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

console.log(person.fullName); // Outputs: "John Doe"

person.fullName = 'Jane Smith';
console.log(person.firstName); // Outputs: "Jane"
console.log(person.lastName);  // Outputs: "Smith"
```


- **Getters** are methods that provide controlled access to a property, often used for computed properties or to encapsulate internal state.
- **Setters** are methods that control how a property’s value is set, useful for validation or side effects.
- Getters and setters can be used together to manage how properties are read and written, providing a powerful tool for encapsulation.
- **Encapsulation** is enhanced using getters and setters by controlling how internal properties are accessed and modified.
- **Validation** and custom logic can be implemented in setters to enforce rules and maintain object integrity. 

Using getters and setters helps create more robust and maintainable code, especially when dealing with complex objects and data management.
### static methods
Static methods in JavaScript are methods that belong to the class itself rather than to instances of the class. This means that you can call a static method directly on the class without needing to create an instance of the class. Static methods are often used for utility functions or methods that do not rely on the instance's data.

### Defining Static Methods

Static methods are defined using the `static` keyword in a class. These methods cannot access instance-specific data (`this` referring to the instance) because they belong to the class itself, not to any particular object instance.

#### Example: Basic Static Method

```javascript
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // Outputs: 8
```

#### Explanation:
- **`static` keyword**: Used to define a static method. 
- **`MathUtil.add()`**: The `add` method is called directly on the `MathUtil` class, not on an instance of `MathUtil`.

### Static Methods vs. Instance Methods

- **Instance Methods**: Belong to an instance of a class and can access the instance's properties and other instance methods using `this`.
- **Static Methods**: Belong to the class itself and do not have access to instance properties or methods. They are typically used for functions that are related to the class but don’t require data from an instance.

#### Example: Static vs. Instance Method

```javascript
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `${this.model} (${this.year})`;
    }

    static compare(car1, car2) {
        return car1.year - car2.year;
    }
}

const car1 = new Car('Toyota', 2010);
const car2 = new Car('Honda', 2015);

console.log(car1.getDetails()); // Outputs: "Toyota (2010)"
console.log(Car.compare(car1, car2)); // Outputs: -5
```

#### Explanation:
- **`getDetails()`**: An instance method that can access the instance’s `model` and `year` properties.
- **`compare()`**: A static method that compares the `year` properties of two `Car` instances, without needing to create an instance of `Car` itself.

### Use Cases for Static Methods

Static methods are typically used in scenarios where:

1. **Utility Functions**: Functions that perform a task related to the class but do not require any instance data.
2. **Factory Methods**: Methods that create and return an instance of the class.
3. **Constants or Configurations**: Functions that return constant values or configuration settings related to the class.

#### Example: Utility Function as a Static Method

```javascript
class Validator {
    static isEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

console.log(Validator.isEmail('test@example.com')); // Outputs: true
console.log(Validator.isEmail('invalid-email'));    // Outputs: false
```

#### Example: Factory Method

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createAdult(name) {
        return new Person(name, 18); // Automatically sets age to 18
    }
}

const adult = Person.createAdult('Alice');
console.log(adult); // Outputs: Person { name: 'Alice', age: 18 }
```

### Inheritance and Static Methods

Static methods are inherited by subclasses, but like instance methods, they can be overridden.

#### Example: Inheriting Static Methods

```javascript
class Animal {
    static makeSound() {
        console.log('Some generic animal sound');
    }
}

class Dog extends Animal {
    static makeSound() {
        console.log('Bark');
    }
}

Animal.makeSound(); // Outputs: Some generic animal sound
Dog.makeSound();    // Outputs: Bark
```

#### Explanation:
- **Inheritance**: The `Dog` class inherits the `makeSound` method from `Animal`, but it overrides it with its own implementation.
- **Calling the Method**: You call `makeSound` on both the `Animal` class and the `Dog` subclass, and each returns a different result.

### Accessing Static Methods from Instances

While it's not typical, you can access static methods from an instance of the class using the class name, but you can't access instance-specific data within that method.

#### Example

```javascript
class MyClass {
    static myStaticMethod() {
        return 'Hello from static method';
    }
}

const myInstance = new MyClass();
console.log(myInstance.constructor.myStaticMethod()); // Outputs: "Hello from static method"
```


- **Static methods** belong to the class itself, not to instances of the class.
- **`static` keyword** is used to define these methods.
- **Use cases**: Utility functions, factory methods, and other tasks that do not require instance-specific data.
- **Inheritance**: Static methods are inherited by subclasses and can be overridden.
- **Access**: Static methods can be accessed directly from the class and, though uncommon, through the class name via an instance.

Static methods are powerful tools in JavaScript that help organize code and encapsulate class-related functionality that doesn’t depend on individual instances.

### Object.create

`Object.create` is a method in JavaScript that allows you to create a new object with a specified prototype object and properties. This method is useful for creating objects that inherit directly from other objects, without having to use classes or constructor functions.

### Basic Syntax

```javascript
const newObject = Object.create(proto, [propertiesObject]);
```

- **`proto`**: The prototype object that the newly created object should inherit from. If you pass `null`, the created object will not inherit from any object (i.e., it will have no prototype).
- **`propertiesObject`** (optional): An object whose properties are added to the newly created object. These properties are defined using descriptors, meaning you can specify whether they are writable, enumerable, or configurable.

### Example: Basic Usage

```javascript
const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

const person = Object.create(personPrototype);
person.name = 'Alice';
person.greet(); // Outputs: Hello, my name is Alice.
```

#### Explanation:
- **`personPrototype`**: An object that contains a method `greet`.
- **`person`**: A new object created using `Object.create` with `personPrototype` as its prototype.
- **Inheritance**: The `person` object inherits the `greet` method from `personPrototype`, even though `person` itself does not have the `greet` method directly on it.

### Example: Using `null` as Prototype

```javascript
const obj = Object.create(null);
console.log(obj); // Outputs: {}
console.log(obj.toString); // Outputs: undefined
```

#### Explanation:
- **`Object.create(null)`**: Creates an object with no prototype, meaning it does not inherit from `Object.prototype` and therefore has no inherited methods like `toString`.

### Example: Adding Properties with Descriptors

You can also add properties to the new object using property descriptors.

```javascript
const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

const person = Object.create(personPrototype, {
    name: {
        value: 'Bob',
        writable: true,
        enumerable: true,
        configurable: true
    }
});

console.log(person.name); // Outputs: Bob
person.greet();           // Outputs: Hello, my name is Bob.
```

#### Explanation:
- **`name` property descriptor**: Defines a `name` property on the `person` object with specific characteristics (`writable`, `enumerable`, `configurable`).
- **`greet` method**: Inherited from `personPrototype`.

### Prototypal Inheritance with `Object.create`

`Object.create` is commonly used to establish prototypal inheritance.

#### Example: Prototypal Inheritance

```javascript
const animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // Outputs: Rex makes a noise.
```

#### Explanation:
- **`animal` object**: Contains a `speak` method.
- **`dog` object**: Inherits from `animal`, gaining access to the `speak` method.
- **Inheritance**: `dog` does not have a `speak` method directly on it; instead, it looks up the prototype chain to `animal`.

### Example: Creating a Subclass

```javascript
const Animal = {
    init(name) {
        this.name = name;
    },
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const Dog = Object.create(Animal);
Dog.bark = function() {
    console.log(`${this.name} barks.`);
};

const myDog = Object.create(Dog);
myDog.init('Rex');
myDog.speak(); // Outputs: Rex makes a noise.
myDog.bark();  // Outputs: Rex barks.
```

#### Explanation:
- **`Animal` object**: Acts as a base class with `init` and `speak` methods.
- **`Dog` object**: A "subclass" of `Animal` with an additional `bark` method.
- **`myDog` object**: An instance that inherits from `Dog`, which in turn inherits from `Animal`.

### Use Cases for `Object.create`

1. **Prototypal Inheritance**: `Object.create` allows you to set up inheritance chains without needing to define classes or use constructor functions.
2. **Creating Objects with No Prototype**: Useful for creating objects that don’t inherit from `Object.prototype`, often used in scenarios like creating dictionaries with no default keys.
3. **Object Composition**: Instead of using classical inheritance, `Object.create` can be used to compose objects with shared behavior.


- **`Object.create(proto)`**: Creates a new object that inherits from the `proto` object.
- **Prototype Chain**: The newly created object’s prototype is set to the `proto` argument, enabling inheritance of properties and methods.
- **Property Descriptors**: You can add properties with specific attributes using property descriptors when creating the object.
- **Prototypal Inheritance**: `Object.create` is a powerful tool for setting up inheritance without the need for constructor functions or classes.
- **No Prototype**: You can create objects with no prototype by passing `null` as the first argument.

`Object.create` provides a flexible and powerful way to work with object-oriented patterns in JavaScript, especially when using prototypal inheritance.
### Inheritence between classes: constructor functions

Inheritance in JavaScript using constructor functions is a way to create a new class that inherits properties and methods from an existing class (also known as the "parent" or "superclass"). This was the primary way to implement inheritance in JavaScript before the introduction of ES6 classes.

### Steps to Achieve Inheritance with Constructor Functions

1. **Define the Parent Constructor Function**: This is the constructor function from which the child class will inherit.
2. **Define the Child Constructor Function**: This is the constructor function that will inherit from the parent.
3. **Set the Child's Prototype to an Instance of the Parent**: This establishes the prototype chain, allowing the child to inherit properties and methods from the parent.
4. **Reset the Child's Constructor Property**: After setting the prototype, the `constructor` property of the child needs to be corrected.
5. **Call the Parent Constructor in the Child Constructor**: This ensures that the parent class is properly initialized when creating an instance of the child class.

### Example: Basic Inheritance

Let's go through an example where a `Person` constructor function serves as the parent class, and an `Employee` constructor function serves as the child class.

#### Step 1: Define the Parent Constructor Function

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
```

#### Step 2: Define the Child Constructor Function

```javascript
function Employee(name, age, jobTitle) {
    // Call the parent constructor with the current context (this)
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}
```

- **`Person.call(this, name, age)`**: This line calls the `Person` constructor function in the context of the `Employee` function, effectively inheriting the `name` and `age` properties.

#### Step 3: Set the Child's Prototype to an Instance of the Parent

```javascript
Employee.prototype = Object.create(Person.prototype);
```

- **`Object.create(Person.prototype)`**: This sets up the prototype chain so that instances of `Employee` inherit from `Person.prototype`.

#### Step 4: Reset the Child's Constructor Property

```javascript
Employee.prototype.constructor = Employee;
```

- **`Employee.prototype.constructor`**: After setting the prototype, this step ensures that the `constructor` property correctly points back to `Employee`.

#### Step 5: Add Methods to the Child's Prototype

```javascript
Employee.prototype.describeJob = function() {
    console.log(`I am a ${this.jobTitle}.`);
};
```

- **`describeJob` method**: This method is specific to the `Employee` class and does not exist in the `Person` class.

### Creating Instances

Now, let's create instances of both `Person` and `Employee` and see how inheritance works.

```javascript
const person1 = new Person('Alice', 30);
person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.

const employee1 = new Employee('Bob', 25, 'Software Developer');
employee1.greet();      // Inherited from Person: Outputs: Hello, my name is Bob and I am 25 years old.
employee1.describeJob(); // Specific to Employee: Outputs: I am a Software Developer.
```

### Explanation:

- **`person1.greet()`**: The `greet` method is called on an instance of `Person`, demonstrating that it works as expected.
- **`employee1.greet()`**: The `Employee` class instance can use the `greet` method because it inherits from `Person`.
- **`employee1.describeJob()`**: This method is specific to the `Employee` class and is not available on instances of `Person`.

### Example: Overriding Methods

The child class can override methods inherited from the parent class by defining a method with the same name.

```javascript
Employee.prototype.greet = function() {
    console.log(`Hi, I am ${this.name}, and I work as a ${this.jobTitle}.`);
};

employee1.greet(); // Outputs: Hi, I am Bob, and I work as a Software Developer.
```

- **Overridden `greet` method**: The `Employee` class has a custom implementation of `greet`, which replaces the `greet` method inherited from `Person`.

### Inheritance and the Prototype Chain

- **Prototype Chain**: When you access a property or method on an object, JavaScript first looks at the object itself. If it doesn’t find the property or method there, it looks at the object’s prototype, and so on up the chain until it finds the property/method or reaches the end of the chain (`Object.prototype`).


- **Constructor Functions**: Before ES6 classes, constructor functions were the primary way to create objects and implement inheritance in JavaScript.
- **Inheritance Setup**: Inheritance is set up by using `Object.create` to link the child class's prototype to the parent's prototype.
- **Parent Constructor Call**: The parent constructor is called in the child constructor using `call` to ensure that the parent’s properties are initialized correctly.
- **Method Overriding**: Methods inherited from the parent can be overridden in the child class by redefining them.
- **Prototype Chain**: Inheritance in JavaScript is prototype-based, and understanding the prototype chain is crucial to understanding how inheritance works.

This approach is still relevant, especially when working with older JavaScript codebases, although ES6 classes provide a more intuitive and modern syntax for implementing inheritance.
### Inheritence between classes: es6 classes

Inheritance between classes using ES6 (ECMAScript 2015) syntax is a more modern and intuitive way to implement inheritance in JavaScript compared to the traditional constructor function approach. ES6 introduced the `class` syntax, which allows developers to define classes and extend them to create subclasses more clearly and concisely.

### ES6 Class Syntax

1. **`class` Keyword**: Used to define a class.
2. **`constructor` Method**: A special method used for initializing objects.
3. **`extends` Keyword**: Used to create a subclass that inherits from another class.
4. **`super` Keyword**: Used to call the constructor and methods of the parent class.

### Example: Basic Inheritance with ES6 Classes

Let’s define a `Person` class and an `Employee` class that inherits from `Person`.

#### Step 1: Define the Parent Class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
```

- **`Person` Class**: Contains a `constructor` that initializes the `name` and `age` properties and a `greet` method.

#### Step 2: Define the Child Class

```javascript
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Calls the parent class's constructor
        this.jobTitle = jobTitle;
    }

    describeJob() {
        console.log(`I am a ${this.jobTitle}.`);
    }
}
```

- **`Employee` Class**: Uses the `extends` keyword to inherit from `Person`.
- **`super(name, age)`**: Calls the parent class’s constructor, ensuring that `name` and `age` are initialized.
- **`describeJob` Method**: A method specific to the `Employee` class.

### Creating Instances

Now, let’s create instances of both `Person` and `Employee` to see how inheritance works.

```javascript
const person1 = new Person('Alice', 30);
person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.

const employee1 = new Employee('Bob', 25, 'Software Developer');
employee1.greet();      // Inherited from Person: Outputs: Hello, my name is Bob and I am 25 years old.
employee1.describeJob(); // Specific to Employee: Outputs: I am a Software Developer.
```

### Explanation:

- **`person1.greet()`**: The `greet` method is called on an instance of `Person`.
- **`employee1.greet()`**: The `Employee` class instance uses the `greet` method inherited from `Person`.
- **`employee1.describeJob()`**: This method is unique to the `Employee` class.

### Example: Method Overriding

A subclass can override methods from the parent class.

```javascript
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    greet() {
        console.log(`Hi, I am ${this.name}, and I work as a ${this.jobTitle}.`);
    }

    describeJob() {
        console.log(`I am a ${this.jobTitle}.`);
    }
}

const employee1 = new Employee('Bob', 25, 'Software Developer');
employee1.greet(); // Outputs: Hi, I am Bob, and I work as a Software Developer.
```

- **Overriding `greet` method**: The `Employee` class provides its own implementation of the `greet` method, which overrides the one in `Person`.

### Accessing Parent Methods Using `super`

If you override a method in a subclass but still want to call the parent class’s version of the method, you can use the `super` keyword.

```javascript
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    greet() {
        super.greet(); // Calls the greet method from the parent class
        console.log(`I work as a ${this.jobTitle}.`);
    }
}

const employee1 = new Employee('Bob', 25, 'Software Developer');
employee1.greet();
// Outputs: Hello, my name is Bob and I am 25 years old.
//          I work as a Software Developer.
```

- **`super.greet()`**: Calls the `greet` method from the parent `Person` class before adding additional functionality in the `Employee` class.

### Static Methods in Inheritance

Static methods can also be inherited in ES6 classes.

```javascript
class Person {
    static species() {
        return 'Homo sapiens';
    }
}

class Employee extends Person {}

console.log(Employee.species()); // Outputs: Homo sapiens
```

- **Static Inheritance**: The `Employee` class inherits the static method `species` from the `Person` class.


- **`class` Keyword**: Introduces a more intuitive way to define classes in JavaScript.
- **`extends` Keyword**: Used to create a subclass that inherits from a parent class.
- **`super` Keyword**: Allows calling the parent class’s constructor and methods.
- **Method Overriding**: Subclasses can override methods from the parent class.
- **Accessing Parent Methods**: The `super` keyword can be used to access and call methods from the parent class within overridden methods.
- **Static Methods**: Static methods are also inherited by subclasses.

ES6 classes and their inheritance model provide a clearer and more powerful way to work with object-oriented programming in JavaScript, making the code easier to read, maintain, and extend.
### Inheritence between classes:object.create

Inheritance using `Object.create` allows you to establish inheritance between objects directly, rather than between classes or constructor functions. This approach is based on JavaScript's prototypal inheritance model and is more flexible than traditional class-based inheritance.

### How Inheritance Works with `Object.create`

When you use `Object.create` to create a new object, you specify an existing object as the prototype of the new object. This sets up a prototype chain where the new object can inherit properties and methods from the prototype object.

### Basic Example

Let's start with a simple example where we create a `Person` object and then create an `Employee` object that inherits from `Person` using `Object.create`.

#### Step 1: Define the Base Object (Parent)

```javascript
const Person = {
    init(name, age) {
        this.name = name;
        this.age = age;
    },
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
```

- **`Person` Object**: This object serves as the prototype. It contains an `init` method to initialize properties and a `greet` method.

#### Step 2: Create a New Object (Child) Using `Object.create`

```javascript
const Employee = Object.create(Person);

Employee.initEmployee = function(name, age, jobTitle) {
    this.init(name, age); // Call the parent init method
    this.jobTitle = jobTitle;
};

Employee.describeJob = function() {
    console.log(`I am a ${this.jobTitle}.`);
};
```

- **`Employee` Object**: Created with `Object.create(Person)`, meaning it inherits from `Person`.
- **`initEmployee` Method**: A method specific to `Employee` that initializes the properties, including those inherited from `Person`.
- **`describeJob` Method**: A method unique to `Employee`.

#### Step 3: Create an Instance of `Employee`

```javascript
const employee1 = Object.create(Employee);
employee1.initEmployee('Bob', 25, 'Software Developer');

employee1.greet();      // Inherited from Person: Outputs: Hello, my name is Bob and I am 25 years old.
employee1.describeJob(); // Specific to Employee: Outputs: I am a Software Developer.
```

- **`employee1.greet()`**: Calls the inherited `greet` method from `Person`.
- **`employee1.describeJob()`**: Calls the method defined in `Employee`.

### Explanation:

- **Prototypal Inheritance**: `Employee` is created using `Object.create(Person)`, so `Employee`'s prototype is `Person`. This means `Employee` inherits all properties and methods from `Person`.
- **Prototype Chain**: When you access a property or method on `employee1`, JavaScript first looks on `employee1` itself, then on `Employee`, and finally on `Person` if needed.

### Example: Overriding Methods

Just like in class-based inheritance, you can override methods in the child object.

```javascript
Employee.greet = function() {
    console.log(`Hi, I am ${this.name}, and I work as a ${this.jobTitle}.`);
};

employee1.greet(); // Outputs: Hi, I am Bob, and I work as a Software Developer.
```

- **Overridden `greet` method**: `Employee` now has its own version of the `greet` method, which overrides the inherited method from `Person`.

### Example: Creating More Specific Subclasses

You can create even more specific objects by extending `Employee`.

```javascript
const Manager = Object.create(Employee);

Manager.initManager = function(name, age, jobTitle, department) {
    this.initEmployee(name, age, jobTitle); // Call Employee's initEmployee
    this.department = department;
};

Manager.describeDepartment = function() {
    console.log(`I manage the ${this.department} department.`);
};

const manager1 = Object.create(Manager);
manager1.initManager('Alice', 35, 'Manager', 'Engineering');

manager1.greet();             // Outputs: Hi, I am Alice, and I work as a Manager.
manager1.describeJob();       // Outputs: I am a Manager.
manager1.describeDepartment(); // Outputs: I manage the Engineering department.
```

- **`Manager` Object**: Inherits from `Employee`, so it gets all the methods from both `Person` and `Employee`.
- **`describeDepartment` Method**: Specific to `Manager`, providing additional functionality.

### Advantages of Using `Object.create`

1. **Flexibility**: Allows you to create objects with any prototype, not just those created by constructor functions or classes.
2. **Simpler Inheritance**: No need for complex class hierarchies or constructor functions.
3. **Direct Prototype Chain**: More explicit control over the prototype chain.

### Example: Prototypal Inheritance for Shared Methods

`Object.create` can be used to set up inheritance for shared methods while keeping the instances lightweight.

```javascript
const animalMethods = {
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
};

function createAnimal(name) {
    const animal = Object.create(animalMethods);
    animal.name = name;
    return animal;
}

const dog = createAnimal('Dog');
dog.speak(); // Outputs: Dog makes a sound.
```

- **`animalMethods` Object**: Contains shared methods that can be inherited by any animal.
- **`createAnimal` Function**: Creates an animal object with `animalMethods` as its prototype.


- **`Object.create(proto)`**: Creates a new object with `proto` as its prototype, allowing for direct prototypal inheritance.
- **Prototype Chain**: Objects created using `Object.create` have a direct prototype chain leading back to the object used as the prototype.
- **Method Overriding**: Methods in the prototype chain can be overridden by defining them directly on the inheriting object.
- **Creating Specific Subclasses**: Further inheritance can be set up by creating objects that inherit from other objects, allowing for more specific behavior.

`Object.create` provides a powerful and flexible way to implement inheritance in JavaScript, particularly in situations where the classical inheritance model doesn’t fit or when you want more control over the prototype chain.

### Encapsulation: Protected properties and methods

Encapsulation is one of the core principles of object-oriented programming (OOP) that involves bundling data (properties) and methods that operate on that data into a single unit or class. In JavaScript, encapsulation is often implemented to restrict direct access to certain properties or methods, ensuring they cannot be modified or accessed from outside the class in an uncontrolled way. 

### Protected Properties and Methods

In many object-oriented languages, properties and methods can be marked as `protected`, meaning they can only be accessed within the class itself and by subclasses. JavaScript doesn't have built-in support for `protected` properties and methods like some other languages, but you can simulate this behavior using a few different techniques.

### 1. **Convention-based Protected Members**

The simplest way to indicate that a property or method is intended to be protected is by using a naming convention, such as prefixing the name with an underscore (`_`). This is not enforced by the language, but it signals to developers that these members should not be accessed directly from outside the class or subclass.

```javascript
class Person {
    constructor(name, age) {
        this._name = name; // Protected by convention
        this._age = age;   // Protected by convention
    }

    _getDetails() { // Protected method by convention
        return `${this._name}, ${this._age} years old`;
    }

    greet() {
        console.log(`Hello, my name is ${this._name}.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this._jobTitle = jobTitle;
    }

    describeJob() {
        console.log(`I am a ${this._jobTitle} and ${this._getDetails()}.`);
    }
}

const employee = new Employee('Alice', 30, 'Software Developer');
employee.greet(); // Outputs: Hello, my name is Alice.
employee.describeJob(); // Outputs: I am a Software Developer and Alice, 30 years old.
```

- **Convention**: `_name`, `_age`, and `_getDetails` are marked as protected by convention, and developers are expected to respect that they should not be accessed directly from outside.

### 2. **Using Closures to Simulate Protected Members**

JavaScript closures can be used to create protected properties and methods by defining them within the constructor function or class method and keeping them out of the public interface.

```javascript
class Person {
    constructor(name, age) {
        let _name = name; // Protected property via closure
        let _age = age;   // Protected property via closure

        this.getName = function() {
            return _name;
        };

        this.greet = function() {
            console.log(`Hello, my name is ${_name}.`);
        };

        this.getDetails = function() { // Protected method via closure
            return `${_name}, ${_age} years old`;
        };
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        let _jobTitle = jobTitle; // Protected property via closure

        this.describeJob = function() {
            console.log(`I am a ${_jobTitle} and ${this.getDetails()}.`);
        };
    }
}

const employee = new Employee('Bob', 28, 'Designer');
employee.greet(); // Outputs: Hello, my name is Bob.
employee.describeJob(); // Outputs: I am a Designer and Bob, 28 years old.
```

- **Closure-based Encapsulation**: Here, `_name`, `_age`, and `_jobTitle` are protected because they are not accessible outside the constructor function. Only the methods exposed by `this` have access to them.

### 3. **Using ES6 WeakMap for True Privacy**

WeakMaps can be used to store private data for an instance, providing true encapsulation. This technique allows you to keep private properties out of the instance itself.

```javascript
const _data = new WeakMap();

class Person {
    constructor(name, age) {
        _data.set(this, { name, age });
    }

    greet() {
        const { name } = _data.get(this);
        console.log(`Hello, my name is ${name}.`);
    }

    getDetails() {
        const { name, age } = _data.get(this);
        return `${name}, ${age} years old`;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        _data.set(this, { ..._data.get(this), jobTitle });
    }

    describeJob() {
        const { jobTitle } = _data.get(this);
        console.log(`I am a ${jobTitle} and ${this.getDetails()}.`);
    }
}

const employee = new Employee('Charlie', 32, 'Product Manager');
employee.greet(); // Outputs: Hello, my name is Charlie.
employee.describeJob(); // Outputs: I am a Product Manager and Charlie, 32 years old.
```

- **WeakMap-based Privacy**: The `_data` WeakMap is used to store private properties. Since the WeakMap keys are the instances (`this`), the data is truly private and cannot be accessed outside the class.


- **Convention-based Protected Members**: Use an underscore (`_`) prefix to indicate that properties and methods are intended to be protected.
- **Closure-based Encapsulation**: Use closures inside the constructor or methods to keep properties and methods out of the public interface, effectively making them protected.
- **WeakMap for True Privacy**: Store private data in a WeakMap, providing a robust method to achieve encapsulation with true private properties.

These techniques allow you to simulate protected properties and methods in JavaScript, providing different levels of encapsulation depending on your requirements.


### Encapsulation: private class fields and methods
In modern JavaScript (ES2022 and later), **private class fields and methods** provide a more straightforward and language-supported way to achieve encapsulation. These are denoted by a `#` prefix and are truly private, meaning they cannot be accessed or modified from outside the class, even by subclasses.

### Private Class Fields

Private class fields are variables that are only accessible within the class in which they are defined. You define them by prefixing the field name with a `#`.

#### Example: Private Fields

```javascript
class Person {
    #name;  // Private field
    #age;   // Private field

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Outputs: Hello, my name is Alice and I am 30 years old.

console.log(person1.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
```

- **Private Fields**: `#name` and `#age` are private fields and cannot be accessed outside the `Person` class. Attempting to do so results in a `SyntaxError`.

### Private Class Methods

Private methods are methods that can only be called within the class they are defined in. Like private fields, they are defined using a `#` prefix.

#### Example: Private Methods

```javascript
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    #getDetails() { // Private method
        return `${this.#name}, ${this.#age} years old`;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}.`);
    }

    describe() {
        console.log(`Details: ${this.#getDetails()}`);
    }
}

const person1 = new Person('Bob', 28);
person1.greet(); // Outputs: Hello, my name is Bob.
person1.describe(); // Outputs: Details: Bob, 28 years old

person1.#getDetails(); // SyntaxError: Private field '#getDetails' must be declared in an enclosing class
```

- **Private Method**: `#getDetails` is a private method and cannot be accessed outside the `Person` class. The method can only be called within the class, like within the `describe` method.

### Benefits of Private Class Fields and Methods

1. **True Privacy**: Unlike previous approaches (using closures or WeakMaps), private fields and methods are natively supported by the language and guarantee privacy. They cannot be accessed or manipulated from outside the class.
  
2. **Encapsulation**: Private fields and methods enhance encapsulation by keeping internal details hidden and protected from external access, thus safeguarding the internal state and behavior of objects.

3. **Code Clarity**: Using `#` clearly indicates which fields and methods are intended to be private, improving code readability and maintainability.

### Limitations

1. **Inaccessibility**: Private fields and methods cannot be accessed, even by subclasses, which might be a limitation if you need inheritance where child classes should access or override certain behaviors.
  
2. **Syntax Support**: Since private fields and methods are a more recent addition to JavaScript, some older environments might not support them. However, modern browsers and JavaScript environments generally support this feature.

### Example: Complete Class with Private Fields and Methods

Here's a more complex example combining both private fields and methods:

```javascript
class BankAccount {
    #accountNumber;  // Private field
    #balance;        // Private field

    constructor(accountNumber, balance) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    #calculateInterest() {  // Private method
        return this.#balance * 0.05;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
        }
    }

    addInterest() {
        const interest = this.#calculateInterest();
        this.#balance += interest;
        console.log(`Interest added: $${interest}. New balance: $${this.#balance}.`);
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount('123456789', 1000);
myAccount.deposit(500); // Outputs: Deposited: $500. New balance: $1500.
myAccount.withdraw(200); // Outputs: Withdrew: $200. New balance: $1300.
myAccount.addInterest(); // Outputs: Interest added: $65. New balance: $1365.

console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

- **BankAccount Class**: The `#accountNumber` and `#balance` fields are private, as is the `#calculateInterest` method. The public methods (`deposit`, `withdraw`, `addInterest`, and `getBalance`) interact with these private members.

This approach to encapsulation using private fields and methods in JavaScript is a powerful way to ensure that the internal state and implementation details of a class are kept safe from outside interference, aligning with best practices in object-oriented programming.

### Localstorage

`localStorage` is a web storage API provided by modern web browsers that allows you to store key-value pairs in a web browser on a user's device. The data stored in `localStorage` is persistent, meaning it is retained even after the browser is closed and reopened. This makes it useful for storing data that you want to persist across sessions, such as user preferences, settings, or simple application state data.

### Key Features of `localStorage`

1. **Persistent Storage**: Data stored in `localStorage` does not expire. It remains until it is explicitly deleted by the user or by your code.

2. **String-based Storage**: `localStorage` stores all data as strings. If you need to store objects or arrays, you must convert them to strings using `JSON.stringify()` and then parse them back with `JSON.parse()` when retrieving the data.

3. **Synchronous API**: Operations with `localStorage` are synchronous, meaning they block the main thread until the operation completes. This is generally not an issue for small amounts of data.

4. **Domain-specific Storage**: Data stored in `localStorage` is specific to the domain from which it is accessed. Other domains cannot access your domain's `localStorage`.

5. **Capacity**: Most browsers allow you to store up to 5-10 MB of data in `localStorage`, but this limit can vary.

### Basic Operations

#### 1. **Setting Data**

To store data in `localStorage`, you use the `setItem` method, which takes two arguments: the key and the value.

```javascript
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');
```

- **Key**: `'username'` and `'theme'`.
- **Value**: `'Alice'` and `'dark'`.

#### 2. **Getting Data**

To retrieve data from `localStorage`, use the `getItem` method, passing in the key of the data you want to retrieve.

```javascript
const username = localStorage.getItem('username');
console.log(username); // Outputs: Alice

const theme = localStorage.getItem('theme');
console.log(theme); // Outputs: dark
```

#### 3. **Removing Data**

To remove a specific item from `localStorage`, use the `removeItem` method.

```javascript
localStorage.removeItem('username');
```

- This will delete the `'username'` key and its associated value from `localStorage`.

#### 4. **Clearing All Data**

To clear all data stored in `localStorage`, use the `clear` method.

```javascript
localStorage.clear();
```

- This will remove all key-value pairs from `localStorage`.

#### 5. **Checking for Data**

You can check if a specific key exists in `localStorage` by using the `getItem` method and checking if it returns `null`.

```javascript
if (localStorage.getItem('username') !== null) {
    console.log('Username is set');
} else {
    console.log('Username is not set');
}
```

### Working with Objects and Arrays

Since `localStorage` only stores strings, you must serialize objects and arrays using `JSON.stringify()` before storing them and parse them back with `JSON.parse()` when retrieving them.

#### Example: Storing and Retrieving an Object

```javascript
const user = {
    name: 'Alice',
    age: 30,
    preferences: {
        theme: 'dark',
        language: 'en'
    }
};

// Store the object as a string
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse the object back to its original form
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // Outputs: Alice
console.log(storedUser.preferences.theme); // Outputs: dark
```

### Use Cases for `localStorage`

- **User Preferences**: Storing theme settings, language preferences, and other user-specific settings.
- **Session Persistence**: Keeping user data across sessions without requiring a server-side database.
- **Simple Application State**: Storing the state of a small application, such as a to-do list.
- **Cart Data**: For e-commerce sites, storing shopping cart items.

### Considerations and Best Practices

1. **Storage Limitations**: Keep in mind the storage size limit (usually 5-10 MB). Don’t use `localStorage` for large amounts of data.
  
2. **Security Concerns**: Data stored in `localStorage` is accessible via JavaScript on the client side, making it vulnerable to XSS attacks. Avoid storing sensitive information (e.g., passwords, tokens) in `localStorage`.

3. **Synchronization**: Since `localStorage` is synchronous, avoid storing or retrieving large amounts of data at once, as it can block the UI thread.

4. **Cross-Browser Compatibility**: While most modern browsers support `localStorage`, you should still check for its existence in older browsers:
   ```javascript
   if (typeof(Storage) !== "undefined") {
       // Code to use localStorage
   } else {
       // Fallback code
   }
   ```

5. **Data Expiry**: Unlike `sessionStorage` (which clears data when the page session ends), `localStorage` does not automatically expire data. If you need data to expire, you must implement that logic yourself.


`localStorage` is a powerful and easy-to-use API for persisting data on the client side across sessions. It’s well-suited for storing non-sensitive data like user preferences, app settings, or lightweight application state data, provided you are mindful of its limitations and security implications.
