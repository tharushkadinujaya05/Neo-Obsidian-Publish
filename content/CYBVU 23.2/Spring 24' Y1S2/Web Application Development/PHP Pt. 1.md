---
Creation Date : 2024:09:14 17:32
Tags : CYBVU,SE101.3-23.2-GB-Y1S2
---
[PHP Pt. 1. Slides](https://nsbm365-my.sharepoint.com/:b:/g/personal/dtdkumara_students_nsbm_ac_lk/ETE_aH78_49BkyQWhjvJQoEBVHnWN7obRcxFQfxKJXRhNA?e=JE6y2c)

PHP (Hypertext Preprocessor) is a popular server-side scripting language designed for web development. It’s used to create dynamic and interactive websites and can be embedded into HTML. PHP scripts are executed on the server, generating HTML which is then sent to the client’s browser.

• **Server-Side Scripting**: PHP code runs on the server and generates HTML, which is then sent to the client’s browser.
• **Database Interaction**: PHP can interact with databases like MySQL, PostgreSQL, and SQLite, making it a great choice for developing data-driven applications.
• **Cross-Platform**: PHP works on various operating systems, including Windows, macOS, and Linux.
• **Open Source**: PHP is free to use, and its source code is available for anyone to modify and distribute.
• **Flexible and Extensible**: It can be integrated with various web servers and supports a wide range of extensions and libraries.

---

#### How PHP Works?
![[Assets/Pasted image 20240914223132.png]]
When a web browser requests a PHP page from the server, the server calls up the PHP parser. The parser executes all the PHP script instructions on the page and returns the file to the browser as plain HTML.During this process the PHP parser may also retrieve information from a database.

---

#### How to DEVELOP and run PHP web pages.

three main components are needed:
- **Web Server** : PHP will work with many of the Web Servers such as IIS. But is most often used with the freely available Apache server.
- **DataBase** : PHP supports many databases such as MYSQL, Oracle, Informix, Sybase etc.
- **PHP Parser** : In order to process PHP script instructions to generate HTML a parser is required.

---

#### PHP Syntax Example
```php
<?php
	echo "My first PHP script!";
?>
```

---
#### PHP Comments 
As same as every language have comments, PHP have comments too but in a different way. 
- **Single line comments** (`//` or `#`)
- **Multi line comments** (`/* comment goes here */`)

---
#### Variables in PHP
- **Declaration**: Variables in PHP start with a dollar sign ($) followed by the variable name, such as $variableName.
- **Assignment**: You assign a value to a variable using the equals sign (=), for example, $age = 25;.
- **Data Types**: PHP variables can hold different types of data, including integers, floats, strings, arrays, and objects. PHP is loosely typed, so the type is **determined at runtime**
- A variable can have a short name (like` $x and $y`) or a more descriptive name (`$age`, `$carname`,`$total_volume`).
- A variable name **must** start with a **letter or the underscore character**
- A variable name **cannot start with a number**
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variable names are case-sensitive ($age and $AGE are two different variables)

---
#### Variable Types
• **String**: A sequence of characters, e.g., "Hello, World!".
• **Integer**: Whole numbers, e.g., 42.
• **Float**: Floating-point numbers (decimal values), e.g., 3.14.
• **Boolean**: Represents true or false values, e.g., true or false.
• **Array**: A collection of values stored in a single variable, e.g., array(1, 2, 3) or `['apple', 'banana', 'cherry']`
• **Object**: An instance of a class, used to encapsulate data and functions, e.g.,` $object = new MyClass();`
• **NULL**: Represents a variable with no value, e.g., null.
• **Resource**: A special variable holding a reference to an external resource, such as a file or database connection

##### Examples 
```php
<?php
// String
$greeting = "Hello, World!";

// Integer
$age = 25;

// Float
$price = 19.99;

// Boolean
$isAvailable = true;

// Array
$fruits = array("apple", "banana", "cherry");

// Object
class Car {
    public $make;
    public $model;
    
    function __construct($make, $model) {
        $this->make = $make;
        $this->model = $model;
    }
}

$myCar = new Car("Toyota", "Corolla");

// NULL
$emptyValue = null;

// Resource (for demonstration, using a file resource)
$file = fopen("example.txt", "w");

// Display values
echo "String: $greeting<br>";
echo "Integer: $age<br>";
echo "Float: $price<br>";
echo "Boolean: " . ($isAvailable ? 'true' : 'false') . "<br>";
echo "Array: " . implode(", ", $fruits) . "<br>";
echo "Object: Car make is {$myCar->make}, model is {$myCar->model}<br>";
echo "NULL: " . var_export($emptyValue, true) . "<br>";

// Close file resource
fclose($file);
?>
```

---
#### Activity using Variables
Write down a sentence to display your name, university and age. Declare three variables.

Output : My name is `Janish De Silva`. I'm an undergraduate of `NSBM Green University`.I'm `16` years old.

```php
<?php
	$name = "neo";
	$age = 19;
	$university = "NSBM";

	echo "My name is ".$name.". I am an undergraduate of ".$university." I'm ".$age."years old";
	?>
```
![[Pasted image 20240914233200.png]]

---
#### PHP arithmetic operators
literally same as other languages, nothing special :D

| Operator | Description                        | Example            | Result |
|----------|------------------------------------|--------------------|--------|
| `+`      | Addition                            | `$sum = 10 + 5;`   | `15`   |
| `-`      | Subtraction                         | `$difference = 10 - 5;` | `5`    |
| `*`      | Multiplication                      | `$product = 10 * 5;` | `50`   |
| `/`      | Division                            | `$quotient = 10 / 5;` | `2`    |
| `%`      | Modulus (remainder)                 | `$remainder = 10 % 3;` | `1`    |
| `**`     | Exponentiation (power)              | `$power = 2 ** 3;` | `8`    |

---
#### PHP conditional statements 
- **if statement** - executes some code if one condition is true
```php
<?php
$number = 10;

if ($number > 5) {
    echo "The number is greater than 5.";
}
?>
```
- **if...else statement** - executes some code if a condition is true and another code if that condition is false.
```php
<?php
$number = 4;

if ($number > 5) {
    echo "The number is greater than 5.";
} else {
    echo "The number is 5 or less.";
}
?>
```
- **if...elseif...else statement** - executes different codes for more than two conditions
```php
<?php
$number = 7;

if ($number > 10) {
    echo "The number is greater than 10.";
} elseif ($number > 5) {
    echo "The number is greater than 5 but less than or equal to 10.";
} else {
    echo "The number is 5 or less.";
}
?>
```
- **switch statement** - Imagine you're creating a PHP script for a quiz application where users select their preferred programming language. Write a PHP switch statement that outputs a message based on the user's choice of programming language ($language). Handle at least three programming languages in your cases (e.g., PHP, Python, JavaScript), with a default case for unrecognised choices.
```php
<?php
// Sample user input
$language = "Python"; // This can be any value like "PHP", "Python", "JavaScript", or something else

switch ($language) {
    case "PHP":
        echo "You chose PHP! It's a popular server-side scripting language.";
        break;
    case "Python":
        echo "You chose Python! It's known for its readability and versatility.";
        break;
    case "JavaScript":
        echo "You chose JavaScript! It's essential for web development and client-side scripting.";
        break;
    default:
        echo "Unrecognized language choice. Please choose PHP, Python, or JavaScript.";
}
?>
```

---
#### PHP Arrays
Arrays in PHP are used to store multiple values in a single variable. They can be indexed (numeric) or associative, depending on how you want to access the values.
```php
<?php
// Creating an indexed array
$fruits = array("Apple", "Banana", "Cherry");

// Accessing values
echo $fruits[0]; // Outputs: Apple
echo $fruits[1]; // Outputs: Banana
echo $fruits[2]; // Outputs: Cherry
?>
```

---
#### PHP Loops
- **while loops** : through a block of code as long as the specified condition is true
-  **do...while** : loops through a block of code once, and then repeats the loop as long as the specified condition is true
-  **for...loops** : through a block of code a specified number of times
- **foreach** : oops through a block of code for each element in an array.

---
#### Functions in PHP
In PHP, a **function** is a block of code that performs a specific task. Functions help to organize code, reuse it, and make the program more modular.

> [!NOTE]
>  Functions are only execute when they are called

```php
// Defining a function
function functionName() {
    // Code to be executed
}

functionName(); // Calling a function

<?php
// Defining a function
function greet() {
    echo "Hello, World!";
}

// Calling the function
greet(); // Outputs: Hello, World!
?>
```

##### Function Arguments
In PHP, **function arguments** (also called parameters) are values passed to a function when it is called. These values allow the function to operate on specific data.

###### How Function Arguments Work

• **Parameters** are specified within the parentheses when defining a function.
• **Arguments** are the actual values you pass to the function when calling it.

###### Example with one argument
```php
<?php
// Defining a function with one parameter
function greet($name) {
    echo "Hello, $name!";
}

// Calling the function and passing an argument
greet("Alice"); // Outputs: Hello, Alice!
?>
```

###### Functions with Return Values
```php
<?php
// Defining a function with two parameters
function addNumbers($a, $b) {
    return $a + $b;
}

// Calling the function with two arguments
$result = addNumbers(5, 7);
echo $result; // Outputs: 12
?>
```

###### Functions with Default argument value
```php
<?php
function setweight($minweight = 50)
{
    echo "The weight is : $minweight \n";
}

setweight(350);
setweight();
?>
```
• **Function Definition**: A function setweight is defined, which accepts one argument, $minweight. This argument has a default value of 50.
• **Default Value**: If the function is called without passing an argument, the default value of 50 is used.
• **Function Call** : 
	- `setweight(350);`: The function is called with an argument of 350, so it outputs: The weight is : 350.
	- `setweight();`: The function is called without any argument, so the default value of 50 is used, and it outputs: The weight is : 50

---
#### Activity about PHP Functions
1. In a shop, there are 5 apples. The price of an apple is 100 rupees.Write a PHP script using functions to calculate and display the total value of the apples in the shop.

```php
<?php
	$numberOfApples = 5;
	$applePrice = 100;

	$total = $numberOfApples * $applePrice;
	echo "Total value of apples in the shop is : $total";
?>
```

2. In a shop, there are 8 mangoes. The price of a mango is 75 rupees.Write a PHP script using functions to calculate and display the difference in value compared to another shop where there are 5 mangoes priced at 60 rupees each.
```php
<?php
// Function to calculate total value of mangoes in a shop
function calculateTotalValue($number_of_mangoes, $price_per_mango) {
    return $number_of_mangoes * $price_per_mango;
}

// Values for Shop 1 (8 mangoes at 75 rupees each)
$mangoes_shop1 = 8;
$price_per_mango_shop1 = 75;
$total_value_shop1 = calculateTotalValue($mangoes_shop1, $price_per_mango_shop1);

// Values for Shop 2 (5 mangoes at 60 rupees each)
$mangoes_shop2 = 5;
$price_per_mango_shop2 = 60;
$total_value_shop2 = calculateTotalValue($mangoes_shop2, $price_per_mango_shop2);

// Calculate the difference in value
$difference_in_value = $total_value_shop1 - $total_value_shop2;

// Display the total values and the difference
echo "Total value in Shop 1: " . $total_value_shop1 . " rupees.<br>";
echo "Total value in Shop 2: " . $total_value_shop2 . " rupees.<br>";
echo "Difference in value: " . $difference_in_value . " rupees.";
?>
```

##### Nextt [[PHP Pt. 2]] >>>