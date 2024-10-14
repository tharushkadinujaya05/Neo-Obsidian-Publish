---
Creation Date : 2024:08:22 11:26
Tags : Java,Programming,UniversityNotes
---
```java
import java.io.*;

class Writer1 {
public static void main(String[]args) {
	try { 
			boolean newFile = false;
			File file = new File("filewrite1.txt"); // it's only an object
			System.out.println(file.exists()); 
			newFile = file.createNewFile(); // maybe create a file!
			System.out.println(newFile); // already there?
			System.out.println(file.exists()); // look again
		}
	} catch(IOException e) { }
}
}
```
This Java code is all about creating a text file called "filewrite1.txt". Let's break it down:

**1. Import Statement:**

* `import java.io.*;`  This line brings in the necessary tools for working with files, like `File` and `IOException`.

**2. The `Writer1` Class:**

* `class Writer1 { ... }`  This defines a class called `Writer1`, where our code will live.

**3. The `main` Method:**

* `public static void main(String[] args) { ... }` This is the starting point of the program. It's where the code execution begins.

**4. Handling File Operations:**

* `try { ... } catch(IOException e) { }` : This is a safety net to handle any problems that might happen when working with files. 
* `boolean newFile = false;` : Creates a variable to track if we've created a new file.
* `File file = new File("filewrite1.txt");`  : This creates an object representing a file named "filewrite1.txt". It doesn't actually create the file yet, just a way to refer to it.
* `System.out.println(file.exists());`  Checks if the file already exists. It will print "true" if it does, and "false" if it doesn't.
* `newFile = file.createNewFile();`  This is where the file creation happens.  It returns `true` if a new file is created, and `false` if it already existed.
* `System.out.println(newFile);`  Prints whether a new file was created.
* `System.out.println(file.exists());`  Checks again to see if the file exists (it should now).

**In Summary:**

This code tries to create a file called "filewrite1.txt".  It checks if the file already exists before attempting to create it. If the file is successfully created, it will print "true" for both `newFile` and `file.exists()`.  If the file already existed, it will print "false" for `newFile` and "true" for `file.exists()`. 

--- 
### Paper Structure

- 40 MCQs
- Structured : giving incomplete questions to fill the rest (just to fill the blanks)
- Java DataBase Connectivity (JDBC) not included in final exam