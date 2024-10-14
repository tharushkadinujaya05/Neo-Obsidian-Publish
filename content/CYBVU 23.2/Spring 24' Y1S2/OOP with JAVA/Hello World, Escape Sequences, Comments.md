---
Creation Date : 2024:08:22 00:35
Tags : Java,Programming
---
### Hello World!

![[Pasted image 20241014172020.png]]

- static : This allows the method to be called without needing to create an instance (object) of the class.
- void :  This means the method **does not return any value**
- String[] args :  This is an array of strings that can hold command-line arguments passed to the program. In this case, it’s not being used.

	**Understanding String[] args**
	- String[] args is an array of String objects that stores command-line arguments passed to the program when it is executed.

	- When you run a Java program from the command line, you can provide additional information (arguments) right after the program name. These arguments are passed to the main method as the args array.
- System.out.println("Hello, World!") : This line prints the text "Hello, World!" to the console.
- System.out: Refers to the standard output stream (usually the console).
 - println: A method that prints the given text followed by a new line.

---

### Escape Sequence
`\n`  - New line
`\t` - Tab Space
`("\"I love pizza\"")` - Quotes inside string output

---
 
### Comments
Comments are used to add notes inside codes, these line of codes are ignored by compiler. there are two types of comments : 

`// single line comment`
```java
/* 
	Multi Line 
	comment
*/
```
