---
Creation Date : 2024:08:30 13:32
Tags : CYBVU,Assignment
---
### Object Oriented Programming in Java – Fundamentals of Java (OOP)

#### Question 1 - Basic Output 
```java
public class DisplayName {
    private String name;
    public DisplayName(String name) {
        this.name = name;
    }
    
    public void display() {
        System.out.println("Your name is: " + name);
    }

    public static void main(String[] args) {
        DisplayName myName = new DisplayName("John Doe");
        myName.display();
    }
}
```
---
#### Question 2 - Input and Output I
```java
import java.util.Scanner;

public class ProductOfNumbers {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the second integer: ");
        int num2 = scanner.nextInt();

        System.out.print("Enter the third integer: ");
        int num3 = scanner.nextInt();

        int product = num1 * num2 * num3;

        System.out.println("The product of the three numbers is: " + product);

        scanner.close();
    }
}
```
---
#### Question 3 – Input & output II 
```java 
import java.util.Scanner;

public class FahrenheitConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Fahrenheit temperature: ");
        double fahrenheit = scanner.nextDouble();

        double celsius = (5.0 / 9.0) * (fahrenheit - 32);

        System.out.println("Celsius temperature: " + celsius);
    }
}
```
---
#### Question 4 – If condition
```java
import java.util.Scanner;

public class IfCondition {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first integer: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the second integer: ");
        int num2 = scanner.nextInt();

        System.out.print("Enter the third integer: ");
        int num3 = scanner.nextInt();

        int sum = num1 + num2 + num3;
        double average = sum / 3.0;
        int product = num1 * num2 * num3;

        int smallest = num1;
        if (num2 < smallest) {
            smallest = num2;
        }
        if (num3 < smallest) {
            smallest = num3;
        }

        int largest = num1;
        if (num2 > largest) {
            largest = num2;
        }
        if (num3 > largest) {
            largest = num3;
        }

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
        System.out.println("Product: " + product);
        System.out.println("Smallest: " + smallest);
        System.out.println("Largest: " + largest);

        scanner.close();
    }
}
```
---
#### Question 5 - Loops
```java
import java.text.DecimalFormat;
import java.util.Scanner;

public class GradeAverage {
    public static double calculateAverage(int[] grades) {
        int sum = 0;
        int count = 0;

        for (int grade : grades) {
            if (grade == -1) {
                break;
            }
            sum += grade;
            count++;
        }

        if (count == 0) {
            return 0; 
        }

        return (double) sum / count;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] grades = new int[20];
        int index = 0;

        while (index < grades.length) {
            System.out.print("Enter a grade or -1 to quit: ");
            int grade = scanner.nextInt();

            if (grade == -1) {
                break;
            }

            grades[index] = grade;
            index++;
        }

        double average = calculateAverage(grades);
        DecimalFormat df = new DecimalFormat("#.##");
        System.out.println("Average grade: " + df.format(average));
    }
}
```
---
#### Question 6 - OOP

##### Date class
```java
public class Date {
    private int month;
    private int day;
    private int year;

    public Date(int month, int day, int year) {
        this.month = month;
        this.day = day;
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void displayDate() {
        System.out.println(month + "/" + day + "/" + year);
    }
}
```

##### DateTest Application
```java
public class DateTest {
    public static void main(String[] args) {
        Date myDate = new Date(8, 30, 2024);

        System.out.println("Original Date:");
        myDate.displayDate();

        myDate.setMonth(12);
        myDate.setDay(25);
        myDate.setYear(2025);

        System.out.println("Modified Date:");
        myDate.displayDate();
    }
}
```

---
#### Question 7 - Inheritance 
##### Item class
```java
public class Item {
    protected int location;
    protected String description;

    public Item(int location, String description) {
        this.location = location;
        this.description = description;
    }

    public int getLocation() {
        return location;
    }

    public void setLocation(int location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
```

##### Monster class
```java
public class Monster extends Item {

    public Monster(int location, String description) {
        super(location, description);
    }
}
```

##### TestInheritance class
```java
public class TestInheritance {
    public static void main(String[] args) {
        Item myItem = new Item(5, "A mysterious object");
        System.out.println("Item Location: " + myItem.getLocation());
        System.out.println("Item Description: " + myItem.getDescription());
        myItem.setLocation(10);
        myItem.setDescription("An ancient relic");
        System.out.println("Modified Item Location: " + myItem.getLocation());
        System.out.println("Modified Item Description: " + myItem.getDescription());

        Monster myMonster = new Monster(7, "A fierce beast");
        System.out.println("Monster Location: " + myMonster.getLocation());
        System.out.println("Monster Description: " + myMonster.getDescription());
        myMonster.setLocation(15);
        myMonster.setDescription("A dragon");
        System.out.println("Modified Monster Location: " + myMonster.getLocation());
        System.out.println("Modified Monster Description: " + myMonster.getDescription());
    }
}
```

---
#### Question 8 - Static

##### SavingAccount class
```java
public class SavingsAccount {
    private static double annualInterestRate = 0.0;
    private double savingsBalance;

    public SavingsAccount(double balance) {
        this.savingsBalance = balance;
    }

    public void calculateMonthlyInterest() {
        double monthlyInterest = (savingsBalance * annualInterestRate) / 12;
        savingsBalance += monthlyInterest;
    }

    public static void modifyInterestRate(double newRate) {
        annualInterestRate = newRate;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }
}
```

##### SavingsAccountTest Class
```java
public class SavingsAccountTest {
    public static void main(String[] args) {
        SavingsAccount saver1 = new SavingsAccount(2000.00);
        SavingsAccount saver2 = new SavingsAccount(3000.00);

        SavingsAccount.modifyInterestRate(0.04);

        saver1.calculateMonthlyInterest();
        saver2.calculateMonthlyInterest();
        System.out.printf("Saver 1 Balance after 4%% interest: $%.2f%n", saver1.getSavingsBalance());
        System.out.printf("Saver 2 Balance after 4%% interest: $%.2f%n", saver2.getSavingsBalance());

        SavingsAccount.modifyInterestRate(0.05);

        saver1.calculateMonthlyInterest();
        saver2.calculateMonthlyInterest();
        System.out.printf("Saver 1 Balance after 5%% interest: $%.2f%n", saver1.getSavingsBalance());
        System.out.printf("Saver 2 Balance after 5%% interest: $%.2f%n", saver2.getSavingsBalance());
    }
}
```
---
#### Question 8 - Inheritance 

##### Car class
```java
public class Car {
    protected int speed;
    protected double regularPrice;
    protected String color;

    public Car(int speed, double regularPrice, String color) {
        this.speed = speed;
        this.regularPrice = regularPrice;
        this.color = color;
    }

    public double getSalePrice() {
        return regularPrice;
    }
}
```

##### Truck class
```java
public class Truck extends Car {
    private int weight;

    public Truck(int speed, double regularPrice, String color, int weight) {
        super(speed, regularPrice, color);
        this.weight = weight;
    }

    @Override
    public double getSalePrice() {
        if (weight > 2000) {
            return regularPrice * 0.90; // 10% discount
        } else {
            return regularPrice * 0.80; // 20% discount
        }
    }
}
```

##### Ford class
```java
public class Ford extends Car {
    private int year;
    private int manufacturerDiscount;

    public Ford(int speed, double regularPrice, String color, int year, int manufacturerDiscount) {
        super(speed, regularPrice, color);
        this.year = year;
        this.manufacturerDiscount = manufacturerDiscount;
    }

    @Override
    public double getSalePrice() {
        return super.getSalePrice() - manufacturerDiscount;
    }
}
```

##### Sedan class
```java
public class Sedan extends Car {
    private int length;

    public Sedan(int speed, double regularPrice, String color, int length) {
        super(speed, regularPrice, color);
        this.length = length;
    }

    @Override
    public double getSalePrice() {
        if (length > 20) {
            return regularPrice * 0.95; // 5% discount
        } else {
            return regularPrice * 0.90; // 10% discount
        }
    }
}
```

##### MyOwnAutoShop class
```java
public class MyOwnAutoShop {
    public static void main(String[] args) {
        Sedan sedan = new Sedan(100, 20000, "Red", 22);
        Ford ford1 = new Ford(120, 25000, "Blue", 2022, 1500);
        Ford ford2 = new Ford(110, 27000, "Black", 2021, 2000);
        Car car = new Car(130, 30000, "White");

        System.out.printf("Sedan Sale Price: $%.2f%n", sedan.getSalePrice());
        System.out.printf("Ford 1 Sale Price: $%.2f%n", ford1.getSalePrice());
        System.out.printf("Ford 2 Sale Price: $%.2f%n", ford2.getSalePrice());
        System.out.printf("Car Sale Price: $%.2f%n", car.getSalePrice());
    }
}
```

---
#### Question 10 – abstract class and methods

##### Polymorphism with Shape, Circle, Triangle, and Square
```java
abstract class Shape {
    abstract void draw();
    abstract void erase();
}

// Subclass Circle
class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Circle");
    }

    @Override
    void erase() {
        System.out.println("Erasing a Circle");
    }
}

// Subclass Triangle
class Triangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Triangle");
    }

    @Override
    void erase() {
        System.out.println("Erasing a Triangle");
    }
}

// Subclass Square
class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Square");
    }

    @Override
    void erase() {
        System.out.println("Erasing a Square");
    }
}

// Main class to test polymorphism
public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(), new Triangle(), new Square() };

        for (Shape shape : shapes) {
            shape.draw();
            shape.erase();
        }
    }
}
```

##### Abstract Class
```java
abstract class Animal {
    abstract void makeSound();

    void sleep() {
        System.out.println("This animal is sleeping.");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound();
        myDog.sleep();
    }
}
```

##### Base class
```java

abstract class Base {
    abstract void commonMethod();

    void debug() {
        System.out.println("Debugging: " + this.getClass().getSimpleName());
    }
}

class Derived1 extends Base {
    @Override
    void commonMethod() {
        System.out.println("Derived1 common method");
    }
}

class Derived2 extends Base {
    @Override
    void commonMethod() {
        System.out.println("Derived2 common method");
    }
}

public class Main {
    public static void main(String[] args) {
        Base[] objects = { new Derived1(), new Derived2() };

        for (Base obj : objects) {
            obj.commonMethod();
            obj.debug();
        }
    }
}
```
---
#### Question 11 - interface
###### Interface with Methods meth1 and meth2
```java
interface A {
    void meth1();
    void meth2();
}

class MyClass implements A {
    @Override
    public void meth1() {
        System.out.println("Method meth1 from interface A");
    }

    @Override
    public void meth2() {
        System.out.println("Method meth2 from interface A");
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass myClass = new MyClass();
        myClass.meth1();
        myClass.meth2();
    }
}
```

##### Multiple Inheritance in Java
```java
interface A {
    void methA();
}

interface B {
    void methB();
}

class C implements A, B {
    @Override
    public void methA() {
        System.out.println("Method methA from interface A");
    }

    @Override
    public void methB() {
        System.out.println("Method methB from interface B");
    }
}

public class Main {
    public static void main(String[] args) {
        C c = new C();
        c.methA();
        c.methB();
    }
}
```

##### Interface Test and Implementation in Arithmetic Class
```java
interface Test {
    int square(int x);
}

class Arithmetic implements Test {
    @Override
    public int square(int x) {
        return x * x;
    }
}

public class ToTestInt {
    public static void main(String[] args) {
        Arithmetic arithmetic = new Arithmetic();
        int number = 5;
        int result = arithmetic.square(number);
        System.out.println("The square of " + number + " is " + result);
    }
}
```

---
#### Question 12 – Exception Handling
##### Example of try and catch Block
```java
public class ArraySizeCheck {
    public static void main(String[] args) {
        int size = -5; // Example of negative size

        try {
            if (size < 0) {
                throw new IllegalArgumentException("Array size cannot be negative");
            }
            int[] array = new int[size];
        } catch (IllegalArgumentException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
```

##### Example of Multiple catch Statements
```java
public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            int[] array = new int[5];
            array[10] = 1; // ArrayIndexOutOfBoundsException
            int result = 10 / 0; // ArithmeticException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
```

##### Subclass Exception Precedence Over Base Class
```java 
class BaseException extends Exception {
    public BaseException(String message) {
        super(message);
    }
}

class SubException extends BaseException {
    public SubException(String message) {
        super(message);
    }
}

public class ExceptionPrecedence {
    public static void main(String[] args) {
        try {
            throw new SubException("This is a subclass exception");
        } catch (BaseException e) {
            System.out.println("Caught BaseException: " + e.getMessage());
        } catch (SubException e) {
            System.out.println("Caught SubException: " + e.getMessage());
        }
    }
}
```

####  Usage of try/catch with finally Clause
```java
public class TryCatchFinally {
    public static void main(String[] args) {
        try {
            System.out.println("In try block");
            int result = 10 / 0; // This will cause ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block");
        }
    }
}
```

#### Usage of throws Clause
```java
class MyClass {
    void method() throws IOException {
        throw new IOException("IOException occurred");
    }
}

public class ThrowsExample {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        try {
            obj.method();
        } catch (IOException e) {
            System.out.println("Caught IOException: " + e.getMessage());
        }
    }
}
```

##### Creation of User-Defined Exception
```java
class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

public class UserDefinedExceptionExample {
    public static void main(String[] args) {
        try {
            throw new MyException("This is a user-defined exception");
        } catch (MyException e) {
            System.out.println("Caught MyException: " + e.getMessage());
        }
    }
}
```

---

#### Question 14 - GUI I
```java
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class TemperatureConverter extends Applet implements ActionListener {
    private JTextField fahrenheitField;
    private JRadioButton toCelsiusButton, toKelvinButton;
    private JButton showResultButton;
    private JLabel resultLabel;

    public void init() {
        setLayout(new FlowLayout());

        fahrenheitField = new JTextField(10);
        add(new JLabel("Enter Fahrenheit: "));
        add(fahrenheitField);

        toCelsiusButton = new JRadioButton("to Celsius");
        toKelvinButton = new JRadioButton("to Kelvin");
        ButtonGroup buttonGroup = new ButtonGroup();
        buttonGroup.add(toCelsiusButton);
        buttonGroup.add(toKelvinButton);
        add(toCelsiusButton);
        add(toKelvinButton);

        showResultButton = new JButton("Show Result");
        showResultButton.addActionListener(this);
        add(showResultButton);

        resultLabel = new JLabel();
        add(resultLabel);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == showResultButton) {
            try {
                double fahrenheit = Double.parseDouble(fahrenheitField.getText());
                double result;

                if (toCelsiusButton.isSelected()) {
                    result = (fahrenheit - 32) * 5 / 9;
                    resultLabel.setText("Celsius: " + result);
                } else if (toKelvinButton.isSelected()) {
                    result = (fahrenheit - 32) * 5 / 9 + 273.15;
                    resultLabel.setText("Kelvin: " + result);
                } else {
                    resultLabel.setText("Please select a conversion option.");
                }
            } catch (NumberFormatException ex) {
                resultLabel.setText("Invalid Fahrenheit input.");
            }
        }
    }
}
```

---
#### Question 15 - GUI II
```java
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Calculator extends JFrame implements ActionListener {
    private JTextField displayField;
    private JButton[] numberButtons;
    private JButton[] operatorButtons;
    private JButton clearButton;
    private JButton equalsButton;

    private double num1, num2;
    private String operator;

    public Calculator() {
        setTitle("Simple Calc");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Create display field
        displayField = new JTextField(20);
        displayField.setEditable(false);
        add(displayField, BorderLayout.NORTH);

        // Create number buttons
        numberButtons = new JButton[10];
        JPanel numberPanel = new JPanel(new GridLayout(4, 3));
        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            numberButtons[i].addActionListener(this);
            numberPanel.add(numberButtons[i]);
        }
        add(numberPanel, BorderLayout.CENTER);

        // Create operator buttons
        operatorButtons = new JButton[4];
        JPanel operatorPanel = new JPanel(new GridLayout(4, 1));
        operatorButtons[0] = new JButton("+");
        operatorButtons[1] = new JButton("-");
        operatorButtons[2] = new JButton("*");
        operatorButtons[3] = new JButton("/");
        for (JButton button : operatorButtons) {
            button.addActionListener(this);
            operatorPanel.add(button);
        }
        add(operatorPanel, BorderLayout.EAST);

        // Create clear and equals buttons
        clearButton = new JButton("Clear");
        clearButton.addActionListener(this);
        equalsButton = new JButton("=");
        equalsButton.addActionListener(this);
        JPanel bottomPanel = new JPanel();
        bottomPanel.add(clearButton);
        bottomPanel.add(equalsButton);
        add(bottomPanel, BorderLayout.SOUTH);

        pack();
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        JButton source = (JButton) e.getSource();

        if (source.getText().matches("\\d")) {
            displayField.setText(displayField.getText() + source.getText());
        } else if (source.getText().matches("[+\\-*/]")) {
            num1 = Double.parseDouble(displayField.getText());
            operator = source.getText();
            displayField.setText("");
        } else if (source.getText().equals("=")) {
            num2 = Double.parseDouble(displayField.getText());
            double result = calculate(num1, num2, operator);
            displayField.setText(String.valueOf(result));
        } else if (source.getText().equals("Clear")) {
            displayField.setText("");
            num1 = 0;
            num2 = 0;
            operator = null;
        }
    }

    private double calculate(double num1, double num2, String operator) {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 == 0) {
                    throw new ArithmeticException("Division by zero");
                }
                return num1 / num2;
            default:
                throw new IllegalArgumentException("Invalid operator");
        }
    }

    public static void main(String[] args) {
        new Calculator();
    }
}
```

