---
Creation Date : 2024:08:28 07:26
Tags : Java,Programming
---

### String Input

```java
import java.util.Scanner; // import java scanner class
public class UserInput {
	public static void main (String[] args){
		Scanner scanner = new Scanner(System.in); // creating scanner object
		System.out.print("What is Your Name : ");
		String name = scanner.nextLine(); // reading string

		System.out.print("Hello " + name);

	}

}
```

- `import java.util.Scanner;` : The Scanner class is a part of Java’s standard library and is used for reading input from various sources, such as the keyboard (standard input).

- `public class UserInput {` : Define the UserInput class. In Java, all codes must be a contained within a class, and the class name must be match the filename (UserInput.java)

- `public static void main (String[] args) {` : main method, The main method is the entry point for any Java application.

- `Scanner scanner = new Scanner(System.in);` : The Scanner is set to read input from System.in, which represents standard input (typically the keyboard).

- `String name = scanner.nextLine();` : The nextLine() method of the Scanner object reads the entire line of input that the user enters, This input is stored in the String variable `name`,The nextLine() method reads everything the user types until they press the Enter key, making it ideal for capturing full lines of text.
---

### Int Input

```java
import java.util.Scanner;
public class UserInput {

public static void main (String[] args){
	Scanner scanner = new Scanner(System.in); // creating scanner object
	System.out.print("What is Your Name : ");
	
	String name = scanner.nextLine(); // reading string
	System.out.println("How old are you : ");

	int age = scanner.nextInt(); // reading integer
	System.out.print("Hello " + name);

	System.out.println(" you are " + age + " years old");

	}

}
```

What if we input string to `age` variable? that leads to `Exception Error` saying `Exception in thread "main" java.util.InputMismatchException`. We will cover [[Exception Handling]] later

---

#### Common issue happens after we use nextInt() after nextLine()
```java
import java.util.Scanner;
public class UserInput {
	public static void main (String[] args){
		Scanner scanner = new Scanner(System.in); // creating scanner object
		System.out.print("What is Your Name : ");
		String name = scanner.nextLine(); // reading string

		System.out.println("How old are you : ");
		int age = scanner.nextInt(); // reading integer

		System.out.println("What is your favorite food : ");
		String food = scanner.nextLine(); // reading string
		
		System.out.print("Hello " + name);
		System.out.println(" you are " + age + " years old");
		System.out.println("Your favorite food is " + food);

	}

}
```

What happens here is after we enter our age. input for favourite is going to skip by java. like this :
![[Pasted image 20240830003813.png]]

What happens here is : 

What happens when u use `nextLine()` : 
![[User input (Scanner) 2024-08-30 00.39.07.excalidraw|550]]

But what happens when u use `nextInt()`:
![[User input (Scanner) 2024-08-30 00.46.44.excalidraw|700]]


> [!NOTE] FIX 💡
> To get rid of this we can place empty `scanner.nextLine()` method after `nextInt()` to clear out the scanner 

```java
import java.util.Scanner;
public class UserInput {

	public static void main (String[] args){
		Scanner scanner = new Scanner(System.in); // creating scanner object
		System.out.print("What is Your Name : ");
		String name = scanner.nextLine(); // reading string
		
		System.out.println("How old are you : ");
		int age = scanner.nextInt(); // reading integer
		
		scanner.nextLine(); // to consume the newline character
		
		System.out.println("What is your favorite food : ");
		String food = scanner.nextLine(); // reading string 
		
		System.out.print("Hello " + name);
		System.out.println(" you are " + age + " years old");
		System.out.println("Your favorite food is " + food);
	}

}
```