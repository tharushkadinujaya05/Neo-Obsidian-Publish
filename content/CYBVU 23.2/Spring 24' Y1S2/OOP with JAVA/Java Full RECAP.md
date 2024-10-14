---
Creation Date : 2024:10:10 01:00
Tags : Java,CYBVU
---
### 1. User Input

In Java, we use `Scanner` to take input from the user

```java 
import java.util.Scanner; Scanner sc = new Scanner(System.in); int num = sc.nextInt(); // for integer input String text = sc.nextLine(); // for string input 
```

### 2. Print

You use `System.out.println()` to print output:
```java
System.out.println("Hello, World!"); // prints with a new line System.out.print("Hello, "); // prints without a new line
```

### 3. Mathematical Operators

Common operators include `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus):

```java
int a = 10, b = 5; int sum = a + b; // 15 int remainder = a % b; // 0
```

### 4. Assignment and Logical Operators

- **Assignment**: `=`
- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT):
```java
boolean result = (a > b) && (a < 20); // true if both conditions are true
```

### 5. If-else

Conditional statements:
```java
if (a > b) {     System.out.println("a is greater"); } else {     System.out.println("b is greater"); }
```

### 6. Switch Case

Efficient alternative to multiple `if-else`:
```java
int day = 3; switch(day) {     
	case 1: System.out.println("Sunday"); 
	break;     
	case 2: System.out.println("Monday"); 
	break;     
	default: 
		System.out.println("Invalid day"); 
}
```

### 7. Loops

- **For loop**:
```java
for (int i = 0; i < 5; i++) {     System.out.println(i); }
```
    
- **While loop**:
```java
int i = 0; while (i < 5) {     System.out.println(i);     i++; }
```
    

### 8. Break and Continue

- **Break**: Exit loop.
- **Continue**: Skip the current iteration.
```java
for (int i = 0; i < 5; i++) {     if (i == 2) continue; // skips 2     if (i == 4) break; // exits loop at 4 }
```

### 9. Class

Blueprint for objects, containing attributes (fields) and methods.
```java
class Car {     String brand;     int year;     void drive() {         System.out.println("Driving...");     } }
```

### 10. Object

Instance of a class:
```java
Car myCar = new Car(); myCar.brand = "Toyota"; myCar.drive();
```

## OOP Concepts

### 11. Inheritance

Allows one class to inherit fields and methods from another.
```java
class Animal {     
	void eat() { 
		System.out.println("Eating..."); 
	} 
} 
class Dog extends Animal {     
	void bark() { 
		System.out.println("Barking..."); 
		} 
}
```

### 12. Encapsulation

Restricting access to class members using access modifiers (`private`, `public`, etc.), typically with getters/setters:
```java
class Person {     
	private String name;     
	public String getName() { 
	return name; 
}     

public void setName(String name) { this.name = name; } }
```

### 13. Abstraction

Hiding complex details and showing only essential features.

- **Abstract class**:
```java
abstract class Animal {     
	abstract void sound(); 
} 
class Dog extends Animal {     
	void sound() { 
	System.out.println("Bark!"); 
	} 
}
```
- **Interface**: All methods are abstract by default.
```java
interface Animal {     void sound(); }
```
    

### 14. Polymorphism

- **Method Overloading**: Same method name with different parameters.
```java
class Math {     
	int add(int a, int b) { return a + b; }     
	int add(int a, int b, int c) { return a + b + c; } 
}
```
    
- **Method Overriding**: Child class redefines a method from the parent class.
```java
class Animal {     void sound() { System.out.println("Sound!"); } } class Dog extends Animal {     void sound() { System.out.println("Bark!"); } }
```

### 15. Static Keyword

Static methods/variables belong to the class, not instances:
```java
class Math {     static int add(int a, int b) { return a + b; } } Math.add(5, 3); // call static method
```

### 16. Constructors

A special method used to initialize objects.
```java
class Car {     String model;     Car(String model) {         this.model = model;     } }
```

### 17. Constructor Overloading

Multiple constructors with different parameters:
```java
class Car {     Car() {}     Car(String model) { this.model = model; } }
```

### 18. Package

Groups related classes together:
```java
package myPackage; public class MyClass { }
```

### 19. Access Modifiers
- `public`: accessible everywhere.
- `private`: accessible only within the class.
- `protected`: accessible in the same package and subclasses.
- (default): accessible within the same package.

### 20. **This Keyword**

Refers to the current object instance:
```java
class Car {     String model;     Car(String model) { this.model = model; } }
```

### 21. **Final Keyword**

- **Final variable**: Can't be changed.
- **Final method**: Can't be overridden.
- **Final class**: Can't be extended.



