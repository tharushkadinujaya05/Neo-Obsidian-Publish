---
Creation Date : 2024:09:08 03:46
tags : CYBVU,SE101.3-23.2-GB-Y1S2
---
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