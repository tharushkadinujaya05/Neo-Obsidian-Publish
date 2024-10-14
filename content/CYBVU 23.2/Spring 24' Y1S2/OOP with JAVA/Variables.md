---
Creation Date : 2024:08:28 03:24
Tags : Java,Programming
---
Variable is a placeholder for a value that behaves as the value it contains.

`x = 123`
`y = "Hello"`
`z = true`

this is how variable looks like. but in java we need to specify the data type when we declare a variable. So for that we need [[Data Types]]

---

### How to Declare a Variable?

![[Variables 2024-08-28 03.47.43.excalidraw|300]]

---

### Print Variable

```java
public class App {

	public static void main (String[] args){
		int x = 26987 //initialization 
		System.out.println(x); //printing variable 
		System.out.println("My student id is : "+x); //printing variable with string  

	}

}
```

---

### Swap variables in Java
```java
public class VariableSwap {
	public static void main (String[] args){
		int a = 10;
		int b = 20;
		int temp;
		System.out.println("Before swapping a = " + a + " b = " + b);
		temp = a;
		a = b;
		b = temp;
		System.out.println("After swapping a = " + a + " b = " + b);
	}

}
```