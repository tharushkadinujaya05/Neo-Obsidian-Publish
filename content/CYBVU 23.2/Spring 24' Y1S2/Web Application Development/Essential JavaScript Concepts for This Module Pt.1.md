---
Creation Date: 2024:09:08 03:46
tags:
  - CYBVU
  - SE101.3-23.2-GB-Y1S2
  - Y1S2
---
[Click Here to get the Lecture Slides](https://nsbm365-my.sharepoint.com/:b:/g/personal/dtdkumara_students_nsbm_ac_lk/EUgOraOL6gxBrrQ3hESzg_kBJ9rjXKNucoMH2U9SxL8mcw?e=qenJt3)
### What is JavaScript?
- JavaScript is a interpreted language
- commonly used to create dynamic and interactive web pages
- cross-platform
- pre installed in browsers (core of the language)
- JavaScript cant run outside the browser, cuz its a CLIENT SIDE SCRIPT LANGUAGE 
- and it's CASE SENSITIVE

---

> [!NOTE] JavaScript Frameworks and Libraries 
> Frameworks : { `Express, NextJS, React, Angular, Vue.js , Ember.js , Node.js` }
> Libraries : {`jQuery, Axios, Chart.js, D3.js , Socket.io , Underscore.js , Lodash, Three.js`}

---

### How to add JavaScript to a WebPage?
1. Inline JavaScript 
You can directly add JavaScript inside an HTML element’s attribute, such as onclick.
Example :
`<button onclick="alert('Hello!')">Click Me</button`


2. Internal Js
Place JavaScript within a` <script>` tag in the `<head> or <body>` section of your HTML document.

```js
<html>
<head>
  <script>
    function greet() {
      alert('Hello!');
    }
  </script>
</head>
<body>
  <button onclick="greet()">Click Me</button>
</body>
</html>
```

3. External JavaScript
Link to an external JavaScript file using the `<script>` tag and the src attribute. This keeps the HTML and JavaScript separate.
```javascript
<html>
<head>
  <script src="script.js"></script>
</head>
<body>
  <button onclick="greet()">Click Me</button>
</body>
</html>
```

script.js :
```js
function greet() {
  alert('Hello!');
}
```

---

### JavaScript Display Possibilities
JavaScript can "display" data in different ways:

◦ Writing into an HTML element, using innerHTML.
◦ Writing into the HTML output using document.write().
◦ Writing into an alert box, using window.alert().
◦ Writing into the browser console, using console.log().

--- 
### JavaScript Comments
```js
// This is a Single line JavaScript Comment
/* This
	is
	multi line
	Comment */
```

---
### JavaScript Variables
Rules for Variables : 
- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and _
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.

#### Declaring Variable
in JavaScript, you can declare variables using three words,
- var
- let
- const

#### var, let and const
- var: The old way of declaring variables (before ES6). It has function scope and can be re-declared and updated.
- let: A newer way (introduced in ES6) to declare variables with block scope. It can be updated but not re-declared in the same scope.
- const: Also introduced in ES6, used to declare constants. The value assigned to a const variable cannot be changed (it’s immutable), and it has block scope.


> [!NOTE] What is ES6 (not in our module)
> **ES6** (also known as **ECMAScript 2015**) is a major update to JavaScript that introduced new features like `let`, `const`, arrow functions, classes, modules, and promises, making the language more powerful and easier to work with.

#### Declaration of var, const and let
```js
var name = "Alice";  // using var
let age = 25;        // using let
const pi = 3.14159;  // using const (constant value)
```

#### Types of Variables
1. Numbers 
```js
let number = 42;
let price = 19.99;
```
2. Strings
```js
let name = "Neo";
```
3. Boolean 
```js
let isStudent = true;
```
4. Arrays
```js
let fruits = ["apple", "banana", "cherry"];
```
5. Objects
```js
let person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 25
};
```
6. Undefined :  A variable that has been declared but not assigned a value yet.
```js
let x;
console.log(x); // undefined
```

#### var vs let?
1.⁠ ⁠Scope:
   - var is function-scoped. This means that a variable declared with var is available throughout the entire function in which it is declared.
   - let is block-scoped. This means that a variable declared with let is only available within the block (e.g., within curly braces {}) in which it is declared¹².

2.⁠ ⁠Hoisting:
   - Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means you can use the variable before its declaration, but it will be undefined until the declaration is encountered.
   - Variables declared with let are also hoisted, but they are not initialized. Accessing them before their declaration results in a ⁠ ReferenceError ⁠¹².

3.⁠ ⁠Redeclaration:
   - ⁠ var ⁠ allows for redeclaration of the same variable within the same scope without any issues.
   - let does not allow redeclaration within the same scope. Attempting to redeclare a variable with let in the same scope will result in a ⁠ SyntaxError ⁠²³.

4.⁠ ⁠Global Object Property:
   - When ⁠ var ⁠ is used to declare a global variable, it becomes a property of the global object (e.g., window in browsers).
   - When let is used to declare a global variable, it does not become a property of the global object².

Here's a quick example to illustrate some of these differences:

```js
// Example with var
console.log(x); // undefined (due to hoisting)
var x = 5;
console.log(x); // 5
```

```js
// Example with let
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10
```
![[Pasted image 20240908131527.png|800]]

---
### JavaScript Arithmetic Operations
| Operator | Name          | Description                                     |
|----------|---------------|-------------------------------------------------|
| +        | Addition       | Adds two operands                               |
| -        | Subtraction    | Subtracts the second operand from the first      |
| *        | Multiplication | Multiply both operands                          |
| /        | Division       | Divide the numerator by the denominator         |
| %        | Modulus        | Outputs the remainder of an integer division    |
| ++       | Increment      | Increases an integer value by one               |
| --       | Decrement      | Decreases an integer value by one               |


> [!NOTE] Activities
> - Activity 06, 07, 08 About arithmetic operations (page 28-32) in javascript01.pdf, u can try them ur self 
> - Answers : [click here](https://github.com/tharushkadinujaya05/CodeBook/tree/main/CYBVU%2023.2/Spring%2024'%20Y1S2/Web%20Application%20Development/JavaScript)

---

### JavaScript Data Types

##### Primitive Data Types
When we say **primitive data types** (like number, string, boolean, etc.) are **immutable**, it refers to the **value itself** being immutable, not the variable holding the value. You can change the value stored in a variable, but you **cannot modify the primitive value directly**

1. String - *used to represent text*
2. Number - *represents both integer and floating*
3. BigInt - *Used for very large numbers beyond the Number limit.*
4. Boolean - *represents `true` or `false`*
5. undefined - *Represents a variable that has been declared but not assigned a value.*
6. null - *Represents the intentional absence of any value.*
7. symbol - *Used to create unique identifiers.*
```js
// Primitive Data Types

// String
let name = "Neo";

// Number
let age = 25;

// BigInt
let largeNumber = 123456789012345678901234567890n;

// Boolean
let isStudent = true;

// Undefined
let futureGoal;  // No value assigned, so it's undefined

// Null
let noValue = null;

// Symbol
let uniqueId = Symbol("id");

// Output to console
console.log(name);         // Neo
console.log(age);          // 25
console.log(largeNumber);  // 123456789012345678901234567890n
console.log(isStudent);    // true
console.log(futureGoal);   // undefined
console.log(noValue);      // null
console.log(uniqueId);     // Symbol(id)
```
##### non-primitive Data Types
Non-primitive data types in JavaScript refer to **objects**, which include things like arrays, functions, and plain objects. Unlike primitive types, **non-primitives are mutable**, meaning their values can be modified after they are created.

1. Object - *A collection of key-value pairs, used to store complex data.*
2. Array - *A type of object used to store ordered collections of values.*
3. Date - *Represents dates and times.*
```js
// Non-Primitive Data Types

// Object
let person = {
  name: "Neo",
  age: 19,
  isStudent: true
};

// Array
let fruits = ["apple", "banana", "cherry"];

// Date
let currentDate = new Date();

// Output to console
console.log(person);       // { name: 'Neo', age: 19, isStudent: true }
console.log(fruits);       // ['apple', 'banana', 'cherry']
console.log(currentDate);  // Displays current date and time
```

---

### Logical Operators
Logical operators in Java are used to perform **logical operations** on boolean expressions. These operators help in making decisions in your code based on conditions. (AND , OR, NOT)

1. AND (&&)
- Check if both conditions are true
```js
int age = 20;
boolean hasID = true;

if (age >= 18 && hasID) {
    console.log("You can enter.");
} else {
    console.log("Access denied.");
}
// Output: You can enter.
```

2. OR ( || )
- Check if at least one condition is true
```js
int age = 16;
boolean hasPermission = true;

if (age >= 18 || hasPermission) {
    console.log("You can enter.");
} else {
    console.log("Access denied.");
}
// Output: You can enter.
```

3. NOT (!)
- **Negates (reverses) the value** of a boolean expression.
```js
boolean isLoggedIn = false;

if (!isLoggedIn) { // This checks if isLoggedIn is false
    console.log("You need to log in.");
} else {
    console.log("Welcome back!");
}
```
In the code example, when we use !isLoggedIn, we are checking if the user **is NOT logged in**. If the user is not logged in (meaning isLoggedIn is false), !isLoggedIn will be true, and the first message will print.

If the user is logged in (isLoggedIn is true), then !isLoggedIn will be false, and the second message will print.

---

### Comparison Operators
Comparison operators are used to compare two values, and they return a **boolean** (true or false) depending on the result of the comparison.

| Operator  | Description                            | Example               | Result         |
|-----------|----------------------------------------|-----------------------|----------------|
| `==`      | Equal to (with type coercion)          | `5 == '5'`            | `true`         |
| `===`     | Strict equal to (no type coercion)     | `5 === '5'`           | `false`        |
| `!=`      | Not equal to (with type coercion)      | `5 != '5'`            | `false`        |
| `!==`     | Strict not equal to (no type coercion) | `5 !== '5'`           | `true`         |
| `>`       | Greater than                          | `10 > 5`              | `true`         |
| `>=`      | Greater than or equal to              | `10 >= 10`            | `true`         |
| `<`       | Less than                             | `5 < 10`              | `true`         |
| `<=`      | Less than or equal to                 | `10 <= 10`            | `true`         |

---

### Assignment Operators
Assignment operators are used to assign values to variables. They can also combine assignment with various operations.

| Operator | Description                             | Example               | Result |
|----------|-----------------------------------------|-----------------------|--------|
| `=`      | Simple assignment                       | `let x = 10;`         | `x` is 10 |
| `+=`     | Addition assignment                     | `x += 5;`            | `x` becomes 15 |
| `-=`     | Subtraction assignment                  | `x -= 3;`            | `x` becomes 7  |
| `*=`     | Multiplication assignment               | `x *= 2;`            | `x` becomes 20 |
| `/=`     | Division assignment                     | `x /= 2;`            | `x` becomes 5  |
| `%=`     | Remainder assignment                    | `x %= 3;`            | `x` becomes 1  |
| `**=`    | Exponentiation assignment               | `x **= 3;`           | `x` becomes 1000|

--- 

### Window Objects in JavaScript
1. Alert Box : Displays a simple alert message with an OK button. It’s useful for notifying users or debugging.
2. Confirm Box : Displays a message with OK and Cancel buttons. It’s used to confirm an action. Returns true if OK is clicked, false if Cancel is clicked.
```js
let isConfirmed = window.confirm("Are you sure you want to delete this item?");
if (isConfirmed) {
    console.log("Item deleted");
} else {
    console.log("Action canceled");
}
```
3. Prompt Box : Displays a dialog with a message and an input field. It’s used to get input from the user. Returns the input value or null if Cancel is clicked.
```js
let userName = window.prompt("What is your name?");
console.log("Hello, " + userName);
```
4. Open Window :  Opens a new browser window or tab. You can specify the URL to open, the name of the new window, and various features like size and position.
```js
let newWindow = window.open("https://www.example.com", "exampleWindow", "width=800,height=600");
```

• "URL": The URL of the page to open.
• "windowName": The name of the new window. If a window with this name already exists, it will be reused.
• "features": A comma-separated list of window features (e.g., width, height, scrollbars, etc.).

#### *Next [[JavaScript Pt. 2]]*
all the answers from this Pt.1 section are up on GitHub. Here’s the link: . [Check it out!](https://github.com/tharushkadinujaya05/CodeBook/tree/main/CYBVU%2023.2/Spring%2024'%20Y1S2/Web%20Application%20Development/JavaScript%20Pt.%201)