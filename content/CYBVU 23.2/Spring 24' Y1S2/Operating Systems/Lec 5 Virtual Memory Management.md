---
Creation Date: 2024:10:02 04:07
tags: CYBVU, Y1S2
---
### The Evolution of virtual memory
- **Paged Memory Allocation:** Dividing a process into fixed-size "pages" and storing them in memory "frames" (of equal size).
- **Demand Paging:** Loading pages into memory only when they are needed, reducing the need to load entire programs.
- **Segmented Memory Allocation:** Dividing a process into variable-sized "segments," often based on logical program units (e.g., code, data, stack).
- **Segmented/Demand Paging:** A hybrid approach combining segmentation and demand paging.

---
### What is VIRTUAL MEMORY?
- **Main Point:** A memory management technique that makes the available memory appear larger than physical RAM.
- **How It Works:** The OS uses secondary storage (e.g., hard disk) to extend the available memory, swapping pages of data between RAM and secondary storage.
- **Advantage:** Allows programs to use more memory than is physically available.
- Programmers don't need to worry about writing overlay codes

---
### Paged Memory Allocation 
*~A fundamental technique for virtual memory implementation.*

#### Paging Overview
- Paging is a memory management technique used by operating systems.It allows data to be stored and retrieved between secondary storage and main memory.
- Creates the impression of more memory than is physically available.
- Data is managed in fixed-size blocks called **pages**.
- **Paging:** Divides logical address space (virtual) into equal-sized pages and physical memory into equal-sized frames.
- **Page Size:** Page sizes are typically equal to frame sizes.
- **MMU (Memory Management Unit):** Hardware component responsible for translating virtual addresses to physical addresses.
- **Non-Contiguous Allocation:** Pages can be stored in any available frame, preventing external fragmentation.

#### Paged Memory Allocation 1
-  Before a program is loaded, it is divided into **pages** that are loaded into **page frames** in memory.
- Paged memory allocation : concept of dividing incoming job into **pages of equal size**

#### Paged Memory Allocation 2
- **How it Works:** The Memory Manager:
    
    - Determines the number of pages in a program.
    - Finds enough free page frames in memory.
    - Loads the pages into those frames.

- **Non-Contiguous Loading:** Pages don't need to be loaded into adjacent frames.

> [!NOTE] NOTE
> This note ain’t done yet :( 
