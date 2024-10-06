---
Creation Date : 2024:09:23 15:37
Tags : CYBVU, CA-CS102.3
---
### TABLE OF CONTENTS
- [[#Computer Systems Organization|Computer Systems Organization]]
- [[#CPU|CPU]]
	- [[#CPU#Inside the CPU|Inside the CPU]]
- [[#Memory|Memory]]
	- [[#Memory#Main Memory (RAM)|Main Memory (RAM)]]
	- [[#Memory#Auxiliary Storage|Auxiliary Storage]]
- [[#I/O Devices|I/O Devices]]
- [[#CPU Organization|CPU Organization]]
	- [[#CPU Organization#Registers inside CPU|Registers inside CPU]]
	- [[#CPU Organization#ALU|ALU]]
	- [[#CPU Organization#Control Unit (CU)|Control Unit (CU)]]
	- [[#CPU Organization#Registers|Registers]]
- [[#Bus Organization|Bus Organization]]
	- [[#Bus Organization#Data Bus|Data Bus]]
- [[#Memory Addresses|Memory Addresses]]
	- [[#Memory Addresses#Memory Cell Access|Memory Cell Access]]
	- [[#Memory Addresses#Address Bus Size and Addressable Memory|Address Bus Size and Addressable Memory]]
- [[#Executing Instructions|Executing Instructions]]

### Computer Systems Organization
- **Key Components:**
    
    - **Central Processing Unit (CPU):** The "brain" of the computer, responsible for executing instructions. 
    - **Main Memory:** Temporarily stores data and instructions that the CPU is actively using (like RAM).    
    - **Auxiliary Storage:** Provides long-term storage for programs and data (like hard drives).
    - **I/O Devices:** Allow the computer to interact with the outside world (like keyboards, monitors, printers).

---
### CPU
- CPU stands for Central Processing Unit

- **Main Function:** The CPU's main role is to execute instructions stored in the main memory by fetching the instructions, examining them executing one by one.
- **Fetch-Decode-Execute Cycle:** The CPU works in a cycle:
    
    1. **Fetch:** Retrieves the next instruction from memory.
    2. **Decode:** Interprets the instruction, figuring out what needs to be done.
    3. **Execute:** Carries out the instruction (e.g., performing an arithmetic operation).
        
- **Control Flow:** The CPU also **directs the flow of data** within the computer and controls the overall operation of other components.

#### Inside the CPU
Inside CPU we can stores ones and zeros using **Transistors**.
    
- **Binary Representation:** Transistors represent information (zeros and ones) by controlling the flow of electricity:
    - **1:** Current flows through the transistor (switch is ON). 
    - **0:** Current is blocked (switch is OFF).
- **Silicon Chips:** Thousands or millions of transistors are burn onto thin slices of silicon called chips.
- **CPU as a Collection of Chips:** A CPU comprises multiple chips containing millions or even billions of transistors.
- More transistors = more calculations

---
### Memory 
There are two types of computer memory :
	- Main Memory RAM (Random Access Memory)
	- Auxiliary Storage

#### Main Memory (RAM)
-  Fast, temporary storage for data and instructions currently being used by the CPU.
- **Volatile:** Its contents are lost when the computer is powered off.

#### Auxiliary Storage
-  Long-term, non-volatile storage for programs and data that are not actively being used.
 - **Non-Volatile:** Contents are retained even when the computer is off.
- **Slower Access:** Data must be transferred to main memory before the CPU can use it.
- **Examples:** Hard disk drives (HDDs), solid-state drives (SSDs), USB flash drives.

---
### I/O Devices
 I/O devices enable communication between the computer and the outside world, allowing us to interact with it.
- **Types:** I/O devices are categorized as either input or output:
    - **Input Devices:** Used to enter data and instructions into the computer (e.g., keyboard, mouse, microphone).
    - **Output Devices:** Used to display or present processed information (e.g., monitor, printer, speakers).

![[Pasted image 20240923163417.png]]
***~This image visually represents the interconnection between the CPU, memory, and I/O devices within a computer system.***

---
### CPU Organization
![[Pasted image 20240923164628.png]]

#### Registers inside CPU
- **Fast Access:** Registers are the fastest memory locations within the CPU.
    
- **Temporary Storage:** They hold data and instructions that are actively being used during processing.
- **Specific Purposes:** Different types of registers have specialized roles:
    - **Program Counter (PC) or Instruction Pointer (IP):** Stores the memory address of the next instruction to be executed.
    - **Instruction Register (IR):** Holds the current instruction being decoded and executed.
    - **Memory Address Register (MAR):** Stores the memory address that is being accessed for reading data from or writing data to. 
    - **Memory Data Register (MDR):** Temporarily holds the data being transferred between the CPU and memory.   
    - **General Purpose Registers:** Used for a variety of arithmetic and logical operations. The Accumulator is a common general-purpose register.

---
#### ALU 
- **Arithmetic Logic Unit (ALU):** Performs arithmetic (addition, subtraction, multiplication and division) and logical (comparisons, AND/OR/NOT) operations. Think of it as the CPU's "calculator."
![[Pasted image 20240923170406.png]]

1. **Top Section (Operands & Result):**
    
    - **Integer Operand (A and B):** These are the inputs to the ALU, representing the two numbers on which the operation will be performed (like the 5 and 10).
    - **Y:** This likely represents the internal processing unit within the ALU where the operation is executed.
    - **Integer Result:** The output of the ALU, representing the result of the calculation (e.g., 50 after multiplication).
    - **Status:** These lines likely carry status flags (bits that indicate certain conditions after the operation, such as overflow, zero result, etc.).
    - **Opcode:** This input to the top section would specify which operation (add, subtract, multiply, etc.) the ALU should perform.
        
2. **Bottom Section (Operation Decoder & Control):**
    
    - **Operation Decoder:** This block takes the Opcode as input and, based on the code, activates the corresponding control line to execute the desired operation.
    - **Control Lines (C0-C7):** Each line corresponds to a specific operation (ADD, SUB, MULT, DIV, OR, AND, NOT, EX-OR). Only one of these lines is active at a time, determined by the Opcode.
    - **C:** This output from the Operation Decoder represents the activated control line, which directs the ALU to perform the selected operation on the input operands.


> [!NOTE] 
>  **Top Section:** Shows the primary data flow through the ALU – operands in, result out.
> **Bottom Section:** Shows how the ALU is controlled – how it knows which operation to perform.

---
#### Control Unit (CU)
Directs and coordinates the activities of the CPU, memory, and I/O devices by sending control signals. It's like the CPU's "manager."

---

#### Registers 
 Small, very fast storage locations within the CPU that hold data and instructions temporarily during processing. Think of them as the CPU's "scratchpad."

1. **Purpose:**
    - **Temporary Storage:** Registers hold data and instructions that are actively being used by the CPU during processing.
    - **Speed:** They are the fastest memory locations accessible to the CPU, significantly speeding up program execution.
        
2. **Types of Registers:** (May reiterate some from earlier slides)
    
    - **Program Counter (PC):** Keeps track of the memory address of the next instruction to be fetched and executed.
    - **Instruction Register (IR):** Holds the current instruction being decoded and executed by the CPU.
    - **Memory Address Register (MAR):** Stores the memory address that the CPU needs to access for reading data from or writing data to.
    - **Memory Data Register (MDR):** Temporarily stores data that is being transferred between the CPU and main memory.
    - **General-Purpose Registers:** Used for various arithmetic and logical operations, as well as temporary data storage during calculations.
        
3. **Word Size:**
    
    - The number of bits a register can hold is often referred to as the "word size" of the CPU (e.g., 32-bit or 64-bit).
    - Larger word size generally allows the CPU to process more data in a single cycle, potentially increasing performance.

> [!NOTE] 
> The number of bits that can store inside a typical register is usually referred to as the **word size** of that computer

---
### Bus Organization
The main components of Computer system (CPU,Main Memory,I/O Devices) are connected electronically using a set of wires which facilitate the communication between these units. These wires are knows as **BUS**  

- Simply : A set of wires that facilitate communication between computer components.
- A bus may be Unidirectional (capable of sending data in one direction) or it may be bidirectional (sending data on both directions).
- Types of Busses
	- Data Bus :  Carries the actual data being transferred between components.
	- Address Bus :  Carries information about the memory location where data should be read from or written to.
	- Control Bus : Transmits Commands (Control signals) from cpu and receives status signals from devices 

![[Pasted image 20240923225644.png]]

**Simplified Analogy:** Imagine a city with a network of roads:

- **Buses:** The roads that connect different parts of the city (CPU, memory, I/O devices).
- **Unidirectional:** A one-way street where traffic only flows in one direction.
- **Bidirectional:** A two-way street where cars can travel in both directions.
- **Data Bus:** Cars carrying goods (data) between locations.
- **Address Bus:** Signs and navigation systems guiding the cars to the correct destinations (memory addresses).
- **Control Bus:** Traffic lights and signals that control the flow of traffic and provide communication between drivers (CPU) and road infrastructure (devices).
---
#### Data Bus
- The **data bus** transfers data where the **address bus** transfers information about where the data should go.

- **Key Concepts:**
    
    - **Data Transfer:** The data bus is responsible for carrying the actual data that is being moved between the CPU, memory, and I/O devices.
    - **Bus Width:** The size (width) of the data bus (number of wires) determines how many bits of data can be transmitted simultaneously. A wider bus allows for faster data transfer.
    - **Examples:** A 16-bit bus can transfer 16 bits of data at once, while a 64-bit bus can transfer 64 bits simultaneously. 
    - **Performance Impact:** Wider data buses can significantly increase the speed at which data can be moved around the computer system.


|Processor     |   Data bus width  |
| --- | --- |
|  8088   |  8   |
|  80286   |  16   |
|  80386   |  32   |
|  Pentium IV   |  64   |

---
### Memory Addresses
**Key Concepts:**

- **Memory Organization:** Computer memory is organized like a long sequence of storage cells (or locations).
- **Unique Addresses:** Each memory cell has a unique address, similar to how houses on a street have unique addresses. The CPU uses these addresses to pinpoint specific data.
- **Consecutive Addresses:** Memory addresses are usually assigned consecutively. If one cell's address is 0x1000, the next cell is 0x1001, and so on.
- **Data Storage:** Each memory cell can hold a certain number of bits (commonly 8 bits, which is 1 byte).
- **Large Values:** The diagram indicates that large values might be stored across multiple consecutive memory locations. For instance, a large integer might occupy several cells (9201, 9202, 9203, etc.).
![[Pasted image 20240923232314.png]]

**Simplified Analogy:** Imagine a long row of mailboxes:

- Each mailbox is a **memory cell**.
- Each mailbox has a unique number (**address**) on it. **(memory address)**
- You (the CPU) can put letters (data) in specific mailboxes by their address.

**Example:**

If the CPU needs to read the data at memory location 0x2000, it would:

1. Place the address 0x2000 on the address bus.
2. The memory controller would locate the cell at address 0x2000.
3. The data from that cell would be transferred to the CPU via the data bus.

---
#### Memory Cell Access
![[Pasted image 20240923232448.png]]
- **Memory Cell:** Represented by a simple box, symbolizing a single location in memory.
- **Address Lines:** These lines carry the address of the specific memory cell that the CPU wants to access. It's like the postal address.
- **Data Lines:** These lines are used to transfer data to or from the memory cell. Think of them as the mail truck's cargo.
- **Read/Write Control Lines:** These lines signal the memory cell whether the CPU wants to read data from the cell or write data to the cell. Think of them as the "open" and "closed" signals of a mailbox.

---
#### Address Bus Size and Addressable Memory
- **Address Bus Width:** The number of lines (wires) in the address bus determines how many unique memory locations the CPU can address.
- **Binary Representation:** Each line on the address bus can represent a 0 or a 1, which together form a binary code representing the address.
- **Addressing Capacity:** The number of unique addresses that a bus can represent is 2 raised to the power of the number of lines.

**Example:**
- A 16-bit address bus (16 lines) can represent 2^16 = 65,536 unique memory locations. This means the highest addressable location would be 65,535 (2^16 - 1)

**Simplified Analogy:**

Imagine you have a set of mailboxes:
- **Address Bus:** The number of digits you can use to label the mailboxes.
- **Memory Locations:** The individual mailboxes.
- **16-bit Address:** You can label mailboxes from 0000000000000000 (0 in binary) to 1111111111111111 (65,535 in binary).

|Processor     |   Address bus width  |
| --- | --- |
|  8088   |  20   |
|  80286   |  24   |
|  80386   |  32   |
|  Pentium IV   |  32   |

- The **address bus width** determines the maximum amount of memory that a processor can directly address.
- As you can see, the **address bus width increased over time**. This allowed later processors to access more memory, leading to increased capabilities and storage capacity in computers.
- 20-bit, 24-bit, 32-bit address buses are directly related to the number of memory locations that can be addressed by each processor, which are 2^20, 2^24, and 2^32, respectively.

---
### Executing Instructions
The CPU executes each instructions in a series of small steps. This sequence of steps is referred to as the **fetch-decode-execute** cycle or **machine cycle**

- **Key Concepts (Probably Covered):**
    
    - **Fetch-Decode-Execute Cycle:** The CPU follows a cyclical process to execute each instruction in a program:
        1. **Fetch:** Retrieves the next instruction from memory.
        2. **Decode:** Decodes the instructions stored in IR.*(Interprets the instruction, figuring out what operation to perform)*
        3. **Execute:** Carries out the operation specified by the instruction.   
        4. **Store:** write the result of the instructions into main memory.
    - **Machine Cycle :** Another term for the fetch-decode-execute cycle.

Imagine a pizza delivery person:

1. **Fetch:** Takes the next pizza order from the restaurant.
2. **Decode:** Reads the order to see what toppings and size to deliver.
3. **Execute:** Delivers the pizza to the correct address.