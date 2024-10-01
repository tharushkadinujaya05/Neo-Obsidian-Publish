---
Creation Date: 2024:09:29 16:11
tags:
  - CYBVU
  - Y1S2
---
### Process Concept
An operating system manages and executes programs, each running as a separate process. Early systems only allowed one program to run at a time, while modern systems support concurrent execution of multiple programs in memory

> [!NOTE] What is a Process?
> **Process:** A program in execution, managed by the OS; process execution **must** progress in sequential fashion. NO parallel execution of instructions of a single process

Each process consists of multiple parts:
- **Program code** (text section)
- **Current activity** (program counter, processor registers)
- **Stack** (temporary data like function parameters, return addresses, and local variables)
- **Data section** (global variables)
- **Heap** (memory allocated dynamically during runtime).

- Program is **passive** entity stored on a disk (executable file)
- Process is **active** (Program becomes process when an executable file is loaded into memory)
- One programme can be several processes (consider multiple users executing the same program)
---
#### Process in Memory
![[Assets/Pasted image 20240930234618.png]]
- Stack : Local variables and function parameters are stored in stack
- Heap : The **Dynamic Memory Area**, where memory is allocated on runtime
- Data : Static and global variables
- Text : The Executable Code of the program

#### Memory Layout of a C Porgram 
![[Assets/Pasted image 20240930234915.png]]

---
### Process VS Program

|Program     |   Process  |
| --- | --- |
|  A program is a **set of instructions**   |  A Process is a **Program in Execution**   |
| A program is passive/static entity | Process is Active/dynamic Entity |
| Longer life span, stored in disk forever | Process has a limited life span. It is created when execution starts and terminated when execution finished |
| Require space on disk to store all instructions | A process contains various resources like : memory address ,disk ,printer as per requirement | 

### Process State
1. **New:** The process is being created.
2. **Ready:** The process is ready and waiting to be assigned to the CPU.
3. **Running:** Instructions are being executed.
4. **Waiting (Blocked):** Process is waiting for some event to occur (e.g., I/O completion).
5. **Terminated:** The process has completed execution.
---
### Process Control Block (PCB) / Task Control Block
- Each process in an operating system is represented by a PCB
- The PCB is a data structure that stores all necessary information about a process. It includes:
	- **Process Identifier** : (PID)
	- **Process State**: Current status of the process.
	- **Program Counter**: Next instruction address.
	- **CPU Registers**: CPU-specific information.
	- **Memory Limits**: Memory allocated to the process.
	- **Accounting Information**: CPU usage, time elapsed, etc.
	- **I/O Status**: Resources like files, I/O devices.

![](https://www.youtube.com/watch?v=vLwMl9qK4T8&ab_channel=VisualComputerScience)

### Process Scheduling
The OS uses a **scheduler** to determine which process to run next based on scheduling policies (e.g., First-Come-First-Served, Round Robin).

---
#### Scheduler Functions

1. **Context Switching**: Saves the current process state and restores the next process’s state.
2. **Process Selection**: Chooses the next process based on a scheduling policy.
3. **Execution Continuation**: Resumes the selected process’s execution.
---
### Types of Processes 
Processes can be categorized as either **independent** or **cooperating**:

- **Independent processes** do not interact with other processes.
- **Cooperating processes** can work together, affecting or being affected by other processes.

The operating system allows cooperating processes to:
- Enable **information sharing**
- Allow **access to resources**
- **Increase computation speed**

---
### What are threads
- **Threads** are smaller units of a process that can run independently.
- Think of process as a big task, and a thread is smaller tasks within that big task

#### Why use Threads?

1. **Efficient Resource Sharing**: Threads within the same process share memory and resources.
2. **Parallel Execution**: Threads can run on different CPU cores.
3. **Responsive Programs**: If one thread is blocked, others can still execute.

**Example:**
In a word processor:

- **Thread 1** handles user input.
- **Thread 2** checks spelling.
- **Thread 3** saves work periodically.

#### Why not Multiple Processes?
- **Memory Consumption**
	- Running multiple processes (copying of the same program) uses a lot of memory because each process has its own memory space.
- **Swapping overhead**
	- Process often swap between main memory and secondary storage, which can slow down the execution
	- the swapping is called "overhead" and its inefficient for heavy processes.

#### Threads vs processes?
| **Aspect**            | **Threads**                                   | **Processes**                                 |
|-----------------------|-----------------------------------------------|-----------------------------------------------|
| **Weight**            | Lightweight                                   | Heavyweight                                   |
| **Memory Usage**      | Share the same memory space of a process       | Have separate memory space                    |
| **Context Switching** | More efficient and faster context switching / Avoid Overhead   |  Swapping makes a process slow and inefficient |

#### Summary about Threading
1. Threads are like smaller tasks within a big task (process).
2. They help make programs more efficient and responsive.
3. Threads use less memory and are faster than running multiple processes.
4. Swapping threads is quicker than swapping processes.
5. Multithreading allows multiple threads to share resources and run in parallel.

### *Next [[Lec 3 Process Control Management]] >>>*