---
Creation Date : 2024:09:10 
tags : CYBVU,SE101.3-23.2-GB-Y1S2
---
[Click here to get the Lecture Slides](https://nsbm365-my.sharepoint.com/:b:/g/personal/dtdkumara_students_nsbm_ac_lk/EWSt30BpukRKmCK8l2bBjsoB-sT-b_ipHnClt9fd_0OVzA?e=86axHz)
### JavaScript Conditional Statements
JavaScript conditional statements allow you to perform different actions based on different conditions. Here are the most common types:

#### if statement
```js
if (condition) {
  // code to run if condition is true
}

let age = 18;
if (age >= 18) {
  console.log("You're an adult!");
}
```
#### else statement
```js
if (condition) {
  // code to run if condition is true
} else {
  // code to run if condition is false
}

let age = 16;
if (age >= 18) {
  console.log("You're an adult!");
} else {
  console.log("You're still a MINORRR.");
}
```
#### else if statement
```js
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else {
  // code to run if none of the conditions are true
}

let grade = 85;
if (grade >= 90) {
  console.log("A grade");
} else if (grade >= 80) {
  console.log("B grade");
} else {
  console.log("Try harder next time.");
}
```

---
## Activities 
#### Activity 01
Write a JavaScript code snippet to display a message based on the current students' marks,*If the marks is above 40, display “Pass the Exam!".Assume that the current student mark is 60.*
```js
let studentMark = 60;

if (studentMark>40){
	document.write("Pass the Exam!");
}
```

#### Activity 02
You're developing a weather application. Write a JavaScript code snippet to display a message based on the current temperature.
***If the temperature is above 20 degrees Celsius, display "It's a warm day!". Otherwise, display "It's a cool day!“.*** Take the current temperature from the user as an input.

The output should be as below.
![[Assets/Pasted image 20240910141300.png]]

```js
let temp = window.prompt("Enter the current temp in celcius : ")

if (temp>20){
	document.write("It's a worm day");
}else{
	document.write("Its a cool day");
}
```

#### Activity 03
Write a JavaScript code snippet to display a message based on the current students’ scores:

If the score is above or equals to 90, display “Excellent".Else If the score is above or equals to 80, display “Good". Else If the score is above or equals to 70, display "Average". Else If the score is above or equals to 60, display “Below Average". Otherwise print “Fail”.

Assume that the current score is 75.
```js
let score = 75;

if (score >= 90){
	document.write("Excellent");
}else if(score>=80){
	document.write("Good");
}else if (score >= 70){
	document.write("Average");
}else if (score >= 60){
	document.write("Below average")
}else{
	document.write("Fail")
}
```

#### Activity 04
You're designing a system to determine shipping costs for an eCommerce website.Write a JavaScript code snippet to user can enter the weight of the package in kilograms for
shipment. Display the shipping cost according to the weight entered by the user.

▪If the weight is less than or equal to 5 kg, the shipping cost is $10.
▪If the weight is between 5 kg (exclusive) and 10 kg (inclusive), the shipping cost is $15.
▪If the weight is greater than 10 kg, the shipping cost is $20.

```js
let packageWeight = window.prompt("Enter Package Weight");

if (packageWeight<= 5){
	document.write("Shipping Cost is $10");
}else if (packageWeight<10){
	document.write("Shipping cost is $15");
}else{
	document.write("Shipping cost is $20");
}
```

#### Activity 05
You're developing a real estate application for listing land properties.Write a JavaScript code snippet to prompt the user to enter the area of the land property (in square meters). After the user enters the area, calculate the price of the land property according to the area entered:

▪If the area is less than or equal to 100 square meters, display an alert box with the price of $10,000.
▪If the area is between 101 square meters (exclusive) and 200 square meters (inclusive),display an alert box with the price of $15,000.
▪If the area is greater than 200 square meters, display an alert box with the price of $20,000.

```js
let area = window.prompt("Enter the area of the land(in square meters) :");

if (area<=100){
	alert("The priice of the land property is $10,000");
}else if (area>101 && area <= 200){
	alert("The priice of the land property is $15,000")
}else{
	alert("The priice of the land property is $20,000")
}
```

---

### JavaScript Loops

1. For Loop : When you know in advance how many times you want to execute a block of code.
```js
/* SYNTAX

for (initialization; condition; increment) {
    Code to be executed
}
*/

for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0, 1, 2, 3, 4
}
```

2. While Loop : When you want to repeat code until a certain condition is no longer true, and you don’t necessarily know in advance how many iterations will be needed.
```js
/* SYNTAX
while (condition) {
    // Code to be executed
}
*/

let i = 0;
while (i < 5) {
    console.log(i); // Prints 0, 1, 2, 3, 4
    i++;
}
```

3. Do-While Loop
 Similar to the while loop, but it guarantees that the code block will run at least once, because the condition is checked after the loop executes.
```js
/* 
do {
    // Code to be executed
} while (condition);
*/

let i = 0;
do {
    console.log(i); // Prints 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```

---

### Arrays in JavaScript
 Arrays in JavaScript are a way to store multiple values in a single variable. They’re like lists where you can keep any type of data, from numbers and strings to objects and other arrays.

> [!NOTE] NOTE
> Arrays in JavaScript ain't much focused on our module as i know, Just gotta have an idea of what an `Array` is.

```js
let fruits = ["apple", "banana", "cherry"];
```

---
### JavaScript Functions
A function is a block of code designed to do a particular task. You can think of it as a reusable piece of code that you can call whenever you need to perform that task.

##### How to create a function?
```js
function functionName(parameters) {
    // Code to be executed
}

// Example
function greet(name) {
    console.log("Hello, " + name + "!");
}
```
• **functionName**: The name of the function (e.g., greet).
• **parameters**: Values you pass into the function (e.g., name).
• **code to be executed**: What the function does (e.g., console.log("Hello, " + name + "!")).

##### How to call a function that previously declared?
you can call it by using its name and providing the necessary arguments.
```js
greet("Alice"); // Prints "Hello, Alice!"
```

##### Advantages of functions?
- Code reusability: We can call a function several times, so it save coding.
- Less coding: It makes our program compact. We don’t need to write many lines of code each
- Readability
- Maintainability 
- Easier Debugging 

----

## Activities 
#### Activity 06
![[Assets/Pasted image 20240910183658.png]]
```js
<html>
	<head>
		<script>
			function totalValue(){
				let price = document.getElementById("price").value;
				let quantity = document.getElementById("quantity").value;

				let total = price * quantity;
				document.getElementById("total").innerHTML = total;
			}
		</script>
	</head>
	<body>
		<form>
			<h1>Food Price Calculator</h1>
			<label>Price of the food :</label>
			<input type="text" id="price" required>
			<br><br>
			<label>Quantity :<label>
			<input type="text" id="quantity" required>
			<br><br>
			<button type="button" onclick="totalValue()">Calculate Total </button>
			<h2>Total Value : $<span id="total">0.00</span></h2>
		</form>
	</body>
</html>
```

#### Activity 07
```js
<html>
	<head>
		<script>
		function calculatePrices(){
			let buns = 100;
			let price = 50;

			let bunsWantToBuy = document.getElementById("bunsWantToBuy").value;
			let bunsPrice = bunsWantToBuy * price;
			let remaining = (buns - bunsWantToBuy) * price
			document.getElementById("price").innerHTML = bunsPrice;
			document.getElementById("remaining").innerHTML = remaining;
			
		}
		</script>
	</head>
	<body>
		<h1>Cafe Bun Purchase</h1>
		<p>We have 100 buns for sale, each priced at 50 rupees.
		<label>Enter the number of buns you want to buy : </label>
		<input type="number" id="bunsWantToBuy" min="1"><br><br>
		<button onclick="calculatePrices()">Calculate Prices</button>
		<h3>Total Price for Buns Bought : <span id="price">0.00</span>rupees</h3>
		<h3>Price of Remaining Buns : <span id="remaining">0.00</span>rupees</h3>
	</body>
```