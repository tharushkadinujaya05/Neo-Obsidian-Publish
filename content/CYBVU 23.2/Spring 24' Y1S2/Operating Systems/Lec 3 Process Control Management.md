---
Creation Date: 2024:10:01 09:23
tags: CYBVU, Y1S2
---
### Process Scheduling / CPU Scheduling
- Process scheduling is the OS mechanism that decides which processes run and in what order.

**Goal:** Ensure that the CPU is not idle and is always doing useful work.

#### Role of CPU Scheduler
- Selects the next process to execute from the **ready queue**.
- Uses a scheduling algorithm to choose the next process.

#### Aims of CPU Scheduling
1. **Ensure Fairness:** Allocate CPU time fairly among all processes.
2. **Maximize CPU Utilization:** Minimize idle time to keep CPU busy.
3. **Maximize Throughput:** Increase the number of completed processes in a given period.
4. **Minimize Waiting Time:** Reduce time processes spend in the ready queue.
5. **Minimize Response Time:** Shorten the time between process submission and response.
6. **Minimize Turnaround Time:** Decrease total time from process submission to completion.

#### Types of CPU Scheduling
1. **Preemptive Scheduling:**
- OS can interrupt and suspend a currently running process to start or resume another.

2. **Non-Preemptive Scheduling:**
- Once a process starts executing, it cannot be interrupted until it finishes or voluntarily yields the CPU.

| **Aspect**              | **Preemptive Scheduling**                           | **Non-Preemptive Scheduling**                      |
|-------------------------|----------------------------------------------------|--------------------------------------------------|
| **Interruption**        | Yes, processes can be interrupted                   | No, once a process starts, it runs to completion  |
| **Context Switching**   | Frequent, leading to overhead                       | Less frequent, resulting in lower overhead        |
| **Complexity**          | More complex to implement                           | Simpler to implement                              |
| **Responsiveness**      | High, suitable for real-time systems                | Lower, not suitable for real-time systems         |
| **Starvation Risk**     | Lower but possible with improper priority management | Higher, especially for low priority processes     |
| **Example Algorithms**  | Round Robin, Priority Scheduling (Preemptive)       | First-Come First-Served (FCFS), Priority Scheduling (Non-Preemptive) |


> [!NOTE] Important Keywords
> - • **Burst Time:** The amount of time a process requires the CPU between I/O waits.
> - **Throughput:** Number of processes completed per unit of time.
> - **Turnaround Time:** Total time from submission to completion of a process.
> - **Waiting Time:** Time a process spends waiting in the ready queue before it gets executed.
---
### Pre-emptive Scheduling (Algorithms)

#### Round Robin Scheduling (RR)
- The oldest, simplest, fairest and most widely used algorithm
- Designed for time-sharing systems
- A time quantum / time slice is defined for each process
- The ready queue is treated as a circular queue
- To implement round robin, the ready queue is kept as a first in first out queue
- It tries to be fair by equally distributing the processing time among all the processes
- When the process uses up the time slice allocated to itself, it is put on the end of the ready list

**Advantages:**
- Fair distribution of processing time.
- Good response time for interactive processes.

**Disadvantages:**
- If time slice is too short: Too many context switches → Lower CPU efficiency.
- If time slice is too long: Poor response time for short tasks.

### *Next [[ Lec 4 Memory Management ]]>>>*