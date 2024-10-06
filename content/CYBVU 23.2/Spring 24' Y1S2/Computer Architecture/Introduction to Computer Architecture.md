---
Creation Date : 2024:09:21 22:08
Tags : CYBVU,
---
### TABLE OF CONTENTS
- [[#What is an Architecture|What is an Architecture]]
- [[#Computer Architecture?|Computer Architecture?]]
- [[#Introduction to the Computer|Introduction to the Computer]]
- [[#Data?|Data?]]
	- [[#Data?#What’s the point of all this data?|What’s the point of all this data?]]
- [[#Data Lake?|Data Lake?]]
- [[#What is data to the computer?|What is data to the computer?]]
- [[#Images|Images]]
- [[#Quick Questions|Quick Questions]]
- [[#Audio|Audio]]
- [[#Composition of Computer System|Composition of Computer System]]

### What is an Architecture
**Architecture** refers to the set of rules and methods that describe the structure, functionality, and organization of computer systems, including how they are designed, how components interact, and how they are utilized to perform tasks efficiently.

---
### Computer Architecture?
![[Introduction to Computer Architecture 2024-09-23 14.08.37.excalidraw|2000]]
- **Computer Organization:** This is the how of the computer. It describes the physical components, their interconnection, and how they work together to execute instructions. Think of it like the blueprints for a house – they detail how the plumbing, electricity, and walls are structured.
    
    - **HOW the ISA is implemented (physical view)**: This refers to the actual hardware design and how it executes the instructions defined in the ISA.
        
- **Instruction Set Architecture (ISA):** This is the what of the computer. It defines the set of instructions that a processor understands and can execute. Think of it as the set of rules that the processor follows, like a language that the computer speaks.
    
    - **WHAT the computer does (logical view)**: This focuses on the instructions themselves and what they mean to the user or programmer.

> [!NOTE] Summary 
> Imagine a car.
>- **Computer Organization:** This is like the car's engine, transmission, wheels, and how they are all put together.
>- **Instruction Set Architecture:** This is like the car's steering wheel, gas pedal, and brake pedal. These are the basic instructions the driver uses to control the car.  
>**Key Takeaway:** Computer architecture is all about understanding how the physical design of a computer (computer organization) works together with the instructions it can execute (ISA).

---
### Introduction to the Computer
- Computer is an electronical machine that designed to process, store, move and retrieve data.

### Data?
- Raw information (alphabets, numbers, symbols) representing facts, ideas, or objects – essentially, the "stuff" computers work with.

---

#### What’s the point of all this data?
- **Data Explosion:** This slide highlights the massive and rapidly increasing volume of data being generated.
- **Data Growth Trend:** Emphasizes that the amount of data created annually is growing exponentially.

---

### Data Lake?
**Imagine a Real Lake**
- Think of a real lake. It can hold vast amounts of water (data) from various sources—rivers, streams, rainfall. The water can be clear or murky, calm or turbulent, representing different types and qualities of data.

**What is a Data Lake?**
A data lake in computer science is similar. It's a vast storage repository that can hold massive amounts of raw data in its native format.

- **Raw Data:** The data isn't processed or organized when it's first stored. It's like having all the water from different sources flowing into the lake without filtering or treating it first.
- **Diverse Data:** It can store structured data (like tables from databases), semi-structured data (like JSON or XML files), and unstructured data (like images, videos, and social media posts).

---
### What is data to the computer?
- **Data Representation:** Computers store and process all types of data, but they do so by representing everything as numbers. This includes:
    - **Numbers:** Stored directly as numerical values.
    - **Text:** Represented using numerical codes for each character (like ASCII or Unicode).
    - **Images:** Broken down into grids of pixels, with each pixel's color represented as a number.
    - **Sound:** Stored as a sequence of numbers representing the sound wave's amplitude over time.
    - **System States:** Conditions like the temperature of an air conditioner or the track position on a CD player are also represented as numbers.

---
### Images
    
- **Pixels:** Images are broken down into tiny squares called pixels(**Pic**ture **El**ements). Each pixel represents a single color. Think of it like a mosaic, where each tiny tile is a pixel.
- **Resolution:** The number of pixels in an image determines its resolution (e.g., 1020 x 800 pixels). More pixels generally mean a sharper, more detailed image.
- **Example:** If an image has a resolution of 1020 pixels wide and 800 pixels high (1020 x 800), it has a total of 816,000 pixels.
![[Pasted image 20240923151205.png]]

---
### Quick Questions
1. The total number of pixels in the original image.
    - **Total Pixels:** This is straightforward multiplication: width (3072 pixels) * height (2304 pixels) = total pixels.
    
2. Number of bytes occupied by this file.
    - **Bytes Occupied (Uncompressed):** To figure this out, you'd need to know how many bytes are used to represent the color of each pixel (this is called "bits per pixel" or "color depth"). A common value is 24 bits per pixel (which equals 3 bytes per pixel). Multiply the total pixels from part (a) by the bytes per pixel to get the total bytes.
    
 3. The file size of the JPEG image (in MB) if the original image was reduced by a factor of 5.
    - **JPEG Size (Compressed):** JPEG is a lossy compression format, meaning it reduces file size by discarding some image data. The actual compression ratio varies. For this problem, you're told the image is reduced "by a factor of 5," meaning the compressed size is 1/5th of the original. Divide the uncompressed size (from part b) by 5.
    
 4. How many uncompressed files of the size calculated in part b could be stored on a 4 GB memory card.
    -  **Uncompressed Files on 4GB Card:** First, convert the memory card size to bytes (4 GB = 4 * 1024 * 1024 * 1024 bytes). Then, divide the memory card size in bytes by the uncompressed file size (from part b) to find out how many files can fit.
    
5. How many compressed files of the size calculated in part c could be stored on a 4 GB memory card.
	- **Compressed Files on 4GB Card:** Same as (d), but use the compressed file size (from part c).

---
### Audio
- To play an MP3 audio file, the computer reads an array of numbers from disk and into memory, manipulates those numbers to convert the compressed audio data into raw audio data, and then outputs the new set of numbers (the raw audio data) to the audio chip
- The computer manipulates the data by performing operations on the numbers.

**Example: MP3 Playback**

1. The computer reads compressed MP3 data from storage.
2. It uses algorithms to decompress the data into raw audio data, which is still a sequence of numbers.
3. These numbers are sent to the audio chip, which converts them into electrical signals.
4. These signals are amplified and sent to speakers, vibrating the air to create sound waves we hear.

---
### Composition of Computer System
- **Key Components:**
    
    - **Processor (CPU):** The "brain" of the computer that executes instructions.
    - **Memory:** Stores data and instructions that the processor is actively using. Often multiple types, including:
        - **RAM:** Fast, temporary storage for running programs and data.
        - **Cache:** Even faster memory that holds frequently accessed data to speed up processing. 
    - **Storage Devices:** Provide long-term storage for programs and data. Examples
        - **Hard Disk Drives (HDDs)**    
        - **Solid-State Drives (SSDs)**  
    - **Input/Output (I/O) Devices:** Allow the computer to interact with the outside world. Examples. 
        - **Keyboard and Mouse (Input)**    
        - **Monitor and Printer (Output)**