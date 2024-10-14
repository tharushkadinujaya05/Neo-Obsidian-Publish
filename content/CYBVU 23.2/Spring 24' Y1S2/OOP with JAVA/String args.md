---
Creation Date : 2024:08:29 22:56
Tags : Java,Programming
---
### Understanding String[] args

- **String[] args** is an array of String objects that stores command-line arguments passed to the program when it is executed.

- When you run a Java program from the command line, you can provide additional information (arguments) right after the program name. These arguments are passed to the main method as the args array.

---

### Example of using String[] args

```java
public class UserInput {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("Hello " + args[0]);
        } else {
            System.out.println("No command-line arguments provided.");
        }
    }
}
```

- In this example, if you run the program with a command-line argument like java UserInput Alice, args[0] will contain the value "Alice", and the output will be Hello Alice.

- If you don’t provide any command-line arguments, the program will output No command-line arguments provided.

### Breaking it Down

1. String[] args
	- String[] args is an array of strings that stores the command-line arguments provided when the program is run.
	- If you don’t pass any arguments, this array will be empty (args.length will be 0).

2. args[0]
	- args[0] accesses the first element in the args array.
	- Arrays in Java are *zero-indexed*, meaning the first element is at index 0, the second at index 1, and so on.

Let’s say you have a Java program named UserInput.java, and it includes the above code. and then run the program with a command-line argument like this : `java UserInput Alice`

##### Here’s what happens:
- **args array**:  The args array is populated with the command-line arguments. In this case, args will contain one element: "Alice".

- **args[0]**: The value of args[0] is "Alice". So, `System.out.println("Hello " + args[0]);` will output: `Hello Alice`

---

### Why String[] args is Necessary

- **Standard Signature:** The Java runtime looks for a method with the signature public static void main(String[] args) to start the program. If this method is not present, the program will not run and will throw an error.
- **Command-Line Arguments:** The args array allows the program to receive command-line arguments if provided. Even if your program doesn’t need command-line arguments, the signature must remain unchanged.