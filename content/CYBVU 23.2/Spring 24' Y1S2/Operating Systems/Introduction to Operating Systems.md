---
Creation Date : 2024:09:28 22:50
Tags : CYBVU
---
### What is an Operating System?
- A program which controls the execution of all other programs (applications).
- Act as intermediary between user and hardware (user --> os --> hardware)

---

### Operating System (System Software)
-  An Operating System (OS) is software that manages computer hardware and software resources and provides services for computer programs.
- An OS is a program that acts as an intermediary between the user and the computer hardware.
- OS simplifies and manages the complexity of running applications efficiently.

Examples : Mac OS, Windows, Linux, Android, IOS

---

### Operating System Services
- **Program Execution**: Load and execute programs.
-**I/O Operations**: Manage input/output operations.
- **File System Manipulation**: Create, delete, read, and write files.
- **Communication**: Facilitate communication between processes.
- **Error Detection**: Monitor system errors and handle them appropriately.
- **Resource Allocation**: Allocate resources like CPU, memory, and I/O devices.

---
### Objectives of an OS
- **Convenience :** An OS makes a computer more convenient to use.
	- OS as a user/computer interface
- **Efficiency :** As OS allows the computer to be used in an efficient manner:
	- OS as a resource manager

---
### OS as a Resource Manager
#### Top-Down View:
- Os provides an abstraction to application programs 
- Simplifying Interaction for applications

#### Bottom-Up View:
- OS provides Complex System Management therefore OS manages diverse components - processors, memories, I/O devices.
-  Objective: Orderly and controlled allocation among programs.

#### Manage All Resources 
when there are conflicting requests for resources, the operating system has to make decisions that are both efficient and fair, ensuring that everything runs smoothly for all users and programs.

---
### OS Kernel
- The kernel is the core part of an operating system that controls everything in the system. It always stays in memory, helps hardware and software communicate, and is one of the first programs to load when the system starts up (after the boot loader)
---
### Types of Operating Systems

#### Batch Operating Systems
- Jobs with similar needs are batched together and executed as a group to speed up processing. there is no direct interaction between user and the computer.
	
	##### Multi Programmed Batch System
	- **Definition**: Multiprogramming allows multiple programs to be executed simultaneously by a single processor.
		- **How It Works**: Multiple processes are kept in the main memory at the same time.
		- **Execution**: In multiprogramming, multiple processes are stored in the main memory simultaneously. This means that the operating system can keep several programs in memory, allowing it to switch between them quickly. This setup improves CPU utilization by minimizing idle time, as the CPU can start executing another process if one process is waiting for I/O operations to complete.
		
		This method increases CPU utilization by efficiently managing multiple processes.

| **Advantages**                                   | **Disadvantages**                               |
|--------------------------------------------------|-------------------------------------------------|
| Efficient memory utilization                   | User can no interact directly with the system                             |
| Throughput increases                     |                                    |
| CPU is never idle, so performance increases               |                          |
| Waiting time is limited in multiprogramming|            |                                                                    |

##### Time Sharing Systems
- **Definition**: Time-sharing systems allocate CPU time among multiple processes, allowing different users to interact with the system simultaneously.
- **User Interaction**: More than one user can interact with the system at the same time, creating a multi-user environment.
- **Job Execution**: Multiple jobs are executed by rapidly switching the CPU between them. The switches occur frequently enough that users can interact with their programs while they are running.
- **User Experience**: Users operate under the assumption that they are the only ones using the system, even though the CPU is shared among different users.


| **Advantages**                                                        | **Disadvantages**                                                          |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------|
| Users can interact with the job while it is executing (unlike batch systems). | The system becomes more complex due to multiple users interacting simultaneously. |
| Efficient CPU utilization.                                             | The system must implement memory management and protection since several jobs are kept in memory at the same time. |

##### Distributed Operating Systems
![[Assets/Pasted image 20240929144829.png]]
- **Definition**: Distributed Operating Systems manage a network of autonomous computers connected by a communication network, utilizing a **message-passing mechanism.**
- **Memory and Clock**: In a distributed system, processors do not share memory or a clock. Each processor operates with its own local memory.
- **Communication**: Processors communicate with each other through various communication lines, such as high-speed buses.
- **Resource Management**: A distributed OS is responsible for controlling and managing both the software and hardware resources within the distributed system, ensuring efficient operation and coordination among the processors.

This type of operating system allows for scalability, redundancy, and resource sharing across multiple computers.

##### Real Time Operating System (RTOS)
- **Definition**: Real-Time Operating Systems make sure that the system gives correct results not only based on what the result is but also when it happens.
- **Timeliness**: These systems need to handle events quickly and within specific time limits.
- **Applications**: RTOS are used in areas where timing is very important, including:
	- **Rocket Launching**: Controls the timing of rocket launches.
	- **Flight Control**: Keeps planes safe by managing their systems.
	- **Robotics**: Guides robots to perform tasks accurately and on time.
	- **Telephone Switching**: Makes sure calls are connected without delay.
	- **Fire and Smoke Sensors**: Quickly alerts people to fire or smoke.

### *Next [[Lec 2 Process Management]] >>>*