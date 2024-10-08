---
Creation Date: 2024:10:08 02:30
tags: CYBVU, Y1S2
Slides : https://nsbm365-my.sharepoint.com/:f:/g/personal/dtdkumara_students_nsbm_ac_lk/Er9yi9-1cKFHgOvXRE-_LNEBZ2fFuYIjx1q-dKHMX2Up2A?e=lOrEyy
---
### Analog vs Digital Signals
![[Assets/Pasted image 20241008023552.png]]
- **Analog Signals:** Continuously varying signals, like sound waves.
- **Digital Signals:** Signals that take on discrete values, typically 0 and 1.

#### Why we use Analog and Digital Signals?
- **Analog Signal Benefits:**
    - Natural and easier for humans to understand (e.g., our voices).
        
- **Digital Signal Benefits:**
    - Easy for computers to process.    
    - Less susceptible to noise and distortion.   
    - Can be transmitted over longer distances with better

#### Disadvantages
- **Analog Signal Disadvantages:**
    - Susceptible to noise and distortion during long-distance transmission.
    - Generally, have lower quality than digital signals over long distances.
        
- **Digital Signal Disadvantages:**
    - Require more bandwidth (a wider range of frequencies) than analog for the same information.
    - Require more complex hardware and software for processing.

#### Signal Conversion

##### Analog to Digital Conversion (ADC)
- **Pulse Code Modulation (PCM):** A common technique for converting analog signals to digital data.
    
    - **Steps:**
        - **Sampling:** Taking measurements of the analog signal at regular intervals.    
        - **Quantization:** Rounding the sampled values to the nearest digital level.    
        - **Encoding:** Representing the quantized values as a sequence of bits.

#### Digital to Analog Conversion (DAC)
- Converts digital data back into an analog signal (e.g., in a **modem** to send data over telephone lines).
- **Common Techniques:** Phase Shift Keying (PSK).
	 - **Examples:** Sound from a microphone or light captured by a digital camera needs to be converted into digital signals for processing.

![[Assets/Pasted image 20241008164349.png]]

### Signals in Data Transmissions
- Data transmission is the key function of a computer network. if data transmission fails, computer network will not exist
- **Examples:**
    - Communication within a Local Area Network (LAN).
    - Accessing the internet from a mobile phone.
    - Making phone calls.
    - Radio broadcasting.

### Transmission Medium
- Medium plays a major role in data communication.
- It defines
	- **Speed:** How fast data can be transmitted.
	- **Bandwidth:** The range of frequencies that can be transmitted.
	- **Quality:** The clarity and accuracy of the signal.
	- **Security:** Protecting data from unauthorized access.
	- **Cost:** The financial investment required.

- Different transmission medium is used as of the requirement.
- Two main categories in transmission medium are
	- Guided Medium ( Wired Connections)
	- Unguided Medium ( Wireless Connections)
- The main difference is the ‘Mobility’ of the connected devices

#### Guided Media
- Transmitted data travels through a physical cabling system that has fixed path. (RJ45 Cables, Fiber optics,Copper wires and etc)
- **Uses electric or light to transmit data** (light in fiber optic)
- Quality and the speed of the communication **will not be affected** with env factors
- **Advantages:**
    - **High Reliability:** Less prone to interference and signal loss.  
    - **High Security:** Easier to control access and prevent unauthorized interception.
    
- **Disadvantage:**
    - **High Initial Cost:** The physical infrastructure (cables) can be expensive to install.
    - **Limited Mobility:** Devices are physically connected to the network.

##### Guided Medium Types
- **Telephone Cables:** Early networks used telephone lines, but they were limited in bandwidth.
- **Coaxial Cables:** Offered higher bandwidth and were used for cable TV and early computer networks.
- **Copper UTP (Unshielded Twisted Pair) Cables:** Became the standard for Ethernet LANs.
- **Fiber Optic Cables:** Provide the highest speeds and bandwidth, making them ideal for high-speed internet, long-distance communication, and backbones of large networks.

##### Coaxial Cable
![[Assets/Pasted image 20241008165828.png]]
- **Structure:** Inner conductor, insulation, conductive shielding, outer jacket.
    
- **Advantages:**
    - **Reliable and accurate transmission.**
    - **Less susceptible to interference.**
        
- **Applications:**
    - Cable TV distribution. 
    - Long-distance telephone transmission. 
    - Short-distance computer network links.

- **Transmission Characteristics:**
    - Can transmit both analog and digital signals.
    - Can handle higher frequencies than twisted pair cables.
        
- **Signal Enhancement:**
    - **Amplifiers:** Used to boost analog signals over long distances.
    - **Repeaters:** Used to regenerate digital signals over long distances.

> [!NOTE] NOTE
> **Analog Signals:** Coaxial cables can transmit analog signals for about 400 MHz over distances of 1 km or less. For higher frequencies, the distance will be shorter. Amplifiers are often needed to boost the signal.
> **Digital Signals:** For digital signals, coaxial cables can typically transmit over distances of 1 km or less. Repeaters are needed to regenerate the signal every kilometer or less, especially for higher data rates.

##### Twisted Pair Cables
![[Assets/Pasted image 20241008173217.png]]
- **Structure:** Pairs of copper wires twisted together to reduce interference (crosstalk).
    
- **Types:**
    - **UTP (Unshielded Twisted Pair):** Most common for home and office networks (Ethernet).
    - **STP (Shielded Twisted Pair):** Offers better protection from interference, used for longer distances or in environments with more electrical noise.


> [!NOTE] Extra 💡
> Electromagnetic Interference (EMI): Electrical wires act like miniature antennas, both receiving and emitting electromagnetic waves. These waves, often created by other electronic devices, can interfere with the signals traveling on the wire. This interference is known as “crosstalk”.
> **Twisted Pair :** By twisting two copper wires together, you create a balanced configuration.  This means the magnetic fields generated by each wire cancel each other out.

###### UTP
- **Applications:** Common in buildings for Ethernet, telephone connections, and other data transmission.
- Common in building for digital signaling used at speed of 10’s Mb/s (CAT3) and 100Mb/s (CAT5) over 100s meters.
- **Advantages:** Relatively inexpensive.
- **Disadvantages:** Limited in distance, bandwidth, and data rate.

###### Categories of Twisted Pair Cabling
- **CAT 3:** For voice and data, used in older 10BASE-T Ethernet networks.
- **CAT 5:** For 100 Mbps Ethernet and other applications (up to 100 MHz).
- **CAT 5e and CAT 6:** For Gigabit Ethernet (1000 Mbps), commonly used in homes and offices (up to 1000 MHz).
- **CAT 6a and CAT 7:** For 10 Gigabit Ethernet and high-speed applications, often used in data centers and network backbones (up to 10 Gbps).

###### Connectivity
![[Assets/Pasted image 20241008173549.png]]

###### Optical Fibers
![[Assets/Pasted image 20241008173618.png]]

- **Structure:**
    - **Core:** Very thin glass or plastic fibers that transmit light signals.    
    - **Cladding:** A layer surrounding the core that reflects light back into the core.    
    - **Jacket:** A protective outer layer.

- **Advantages:**
    
    - **High Bandwidth:** Can carry vast amounts of data at very high speeds.  
    - **Low Attenuation:** Light signals travel with very little loss of signal strength over long distances.    
    - **Electromagnetic Isolation:** Immune to electromagnetic interference.
    - **Security:** Difficult to tap into, making them more secure.

- **Applications:**
    
    - Long-distance telecommunications.
    - High-speed internet backbones.
    - Cable TV.
    - Data centers.

- **Types:**
![[Assets/Pasted image 20241008173915.png]]
    - **Multimode Fiber:** Multiple light paths (modes) travel through the fiber, but this can cause signal distortion over long distances.
    - **Single-Mode Fiber:** Only one mode of light travels through the fiber, making it ideal for long distances and very high bandwidth

### Summary 
- Signals are converted to different forms based on transmission needs.
- Both analog and digital signals have pros and cons.
- Data transmission relies on different media:
    - Guided media (wired) offers different types of cables (coaxial, twisted pair, fiber optic).
    - Unguided media (wireless) uses electromagnetic waves.


### *Next [[Lecture 5 - Wireless Medium]] >>>*