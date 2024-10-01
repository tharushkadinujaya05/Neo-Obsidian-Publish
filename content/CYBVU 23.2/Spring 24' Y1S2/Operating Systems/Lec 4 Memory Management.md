---
Creation Date: 2024:10:01 21:08
tags: CYBVU, Y1S2
---
### The basics

#### Address Space
![[Assets/Pasted image 20241001213425.png]]
**Definitions**
- **Address Space:** All memory locations that a program can refer to.
- **Virtual Address:** Addresses in process’ address space
- **Physical Address:** The actual address in real memory (RAM) where data is stored.
- **Translation:** The process of converting virtual addresses to physical addresses.

---
### Memory Management Concepts
- **Main Point:** Memory management is crucial for sharing memory between multiple programs (processes) that are running on the computer.
- Make it easy for programs to find memory space.
- Reduce wasted memory space (maximizing utilization).

#### Memory Management Responsibilities
- **Memory Tracking:** Keep track of memory usage
- **Allocation and Deallocation:** Allocate memory space to programs when they need it and reclaim it when they are finished.
- **Sharing:** Ensure that memory is shared efficiently among multiple processes.

#### Memory Management 
- The **memory manager** is responsible for managing memory usage, allocation, and deallocation.

---
### Physical and Logical Memory
- **Physical Address:** The address seen by the memory unit.
- **Logical Address:** The address used/generate by the CPU.
- **Memory Management Unit (MMU):** A hardware component that translates between logical and physical addresses.

---
### Base and Limit Registers 
- **Purpose:** To protect memory , **Define the logical address space**
- **How They Work:** A pair of base and limit registers define the allowed memory range for a program.
- **Hardware Protection:** The CPU checks every memory access by a program to ensure it's within the defined limits, preventing programs from accidentally accessing memory belonging to other programs.
---
### Address Binding
- **Main Point:** The process of connecting virtual addresses (used by a program) to physical addresses (in real memory).
    
- **Binding Stages:**
    - **Compilation Time:** Addresses are symbolic (e.g., variable names) during compilation  
    - **Load Time:** When a program is loaded into memory, addresses are assigned.    
    - **Execution Time:** The CPU uses physical addresses to access data during execution.
    
#### Address Binding Example
- Programs reside on disk as executable files.
- Upon execution, they are loaded into memory.
- Initial physical address of the first process: 0x0000.

![[Assets/Pasted image 20241002010511.png]]

---
### Swapping
- **Main Point:** A technique to move processes between main memory (RAM) and secondary storage (e.g., hard drive).
    
- **Purpose:**
    - To free up memory for other processes.
    - To allow for more processes to be run than fit in memory at once.

*~schematic view of swapping*
![[Assets/Pasted image 20241002010720.png|400]]

---
### Memory Management Techniques
- **Overlays:** A method for managing programs larger than available memory.
- **Memory Partitioning:** Dividing memory into sections to allocate space for processes.

#### Overlays
- **Main Point:** A way to manage large programs that are too big to fit in physical memory at once.
- **How It Works:**  Only the needed data is loaded, and as the program progresses, data is swapped in and out based on its needs.
- **User Management:** Overlays are typically managed by the user program, not the operating system.

- **Challenges:**
    - If the entire program and its data need to be in memory for execution, overlays limit program size.
    - The programmer needs to design the overlay structure, which can be complex.

![[Assets/Pasted image 20241002011232.png|500]]

#### Single tasking with Overlay
- **Main Point:** Uses overlays in a single-tasking environment (only one program runs at a time).
    
- **How it Works:**
    - A single program is loaded into memory in parts (overlays). 
    - This enables the execution of larger programs in limited memory.

- **Disadvantage:** A process cannot take advantage of more available memory if it's already running in overlays because the overlay structure is defined for a specific amount of memory.

---
### Memory Partitioning 
- **Main Point:** Dividing memory into sections to allocate space to processes. This is a common technique for managing multiple processes.
    
- **Types:**
    
    - **Fixed Partitioning:** Memory is divided into fixed-sized partitions.
    - **Variable Partitioning:** Memory is divided based on the requirements of each process.

#### Memory Partitioning - Fixed
- Each partition may contain exactly one process
- The degree of multiprogramming is bound by the number of partitions
- When a partition is free, a process is selected from the input queue and is loaded into the free partition
- when a process terminates, the partition becomes  available for another process

#### Memory Partitioning - Variable
- **Description:** The memory is divided into sections based on the size of each process. This allows for more flexible memory allocation.
- **How it Works:** When a process arrives, the OS searches for a large enough space in memory.
- loads the process wherever the memory space is available using first fit, best fit or worst fit algorithms

- **Memory Allocation:** Common algorithms for variable partitioning:
    
    - **First Fit:** Allocates the first free space that is big enough.
    - **Best Fit:** Allocates the smallest free space that can accommodate the process.
    - **Worst Fit:** Allocates the largest free space.

---
### Fragmentation
- **Main Point:** Memory partitioning can lead to fragmentation, which is wasted memory space.
    
- **Types:**
    - **Internal Fragmentation:(in FIXED Partitioning)** Wasted space within an allocated partition.    
    ![[Assets/Pasted image 20241002034902.png|500]]
    - **External Fragmentation: (in VARIABLE Partitioning)** Wasted space that is too small to allocate to new processes.
	    
> [!NOTE] Solution for External Fragmentation
> **Compaction**, A technique used to resolve external fragmentation by compacting (moving) free space together into larger block.

![[Assets/Pasted image 20241002035155.png|500]]

### Next[[ Lec 5 Virtual Memory Management]] >>>