---
Creation Date: 2024:10:07 02:15
tags: CYBVU, Y1S2
Slides : https://nsbm365-my.sharepoint.com/:f:/g/personal/dtdkumara_students_nsbm_ac_lk/Er9yi9-1cKFHgOvXRE-_LNEBZ2fFuYIjx1q-dKHMX2Up2A?e=lOrEyy
---
### Other networking Applications
- **Key Types:**
    
    - **User Services:**
        - Messaging (e.g., WhatsApp)
        - Video Conferencing (e.g., Zoom, Teams)
        - Remote Login (e.g., SSH, AnyDesk, TeamViewer)
            
    - **Utility Services:**
		- **DNS (Domain Name System)**: Translates human-friendly domain names (e.g., google.com) into IP addresses that computers use to identify each other.
		
		- **NTP (Network Time Protocol)**: Synchronizes the time across computers and devices over a network to ensure accurate timestamps.
		
		- **PTP (Precision Time Protocol)**: Provides very precise time synchronization for networks, often used in environments where **microsecond-level accuracy is needed**, like industrial or telecom applications.

### Data Communication
Network applications transfer data from senders to receivers through a **medium**, following rules defined by communication protocols.
![[Assets/Pasted image 20241007022019.png]]

### Data Representation

- **Text:** Represented using character encoding schemes (e.g., ASCII, Unicode).
- **Numbers:** Stored as binary values.
- **Images:** Made up of pixels, each represented by a bit pattern.
- **Audio:** Converted from analog to digital using encoding techniques.
- **Video:** Also encoded into bit patterns for transmission.

#### Text and Numbers
- **Encoding:** Text and numbers are converted into binary values.
- **ASCII:** A common encoding scheme that uses 1 byte (8 bits) per character.
- **Unicode:** A more extensive encoding scheme that uses 4 bytes per character.

#### Images
- **Pixels:** Images are made up of small picture elements called pixels.
- Pixels are represented in form of **bits**
- **Resolution:** The number of pixels in an image (e.g., 1024x768) determines its resolution.
- **High Resolution:** More pixels, sharper and more detailed images.

| Factors           | Low Resolution                                    | High Resolution                           |
|-------------------|---------------------------------------------------|-------------------------------------------|
| **Image Quality**  | Poor, blurry, pixelated                           | Clear, sharp, high definition             |
| **File Size**      | Small                                             | Large                                     |
| **Color Accuracy** | Limited color range                               | Wide color range, accurate colors         |
| **Printing Quality**| Not suitable for printing                        | Suitable for large format printing        |
| **Detail**         | Low detail, visible pixels                        | High detail, smooth edges                 |
| **Video Quality**  | Grainy, low-quality                               | Crisp, high-quality                       |
| **Storage Capacity**| Can store more images                            | Can store fewer images                    |
| **Display Devices**| Suitable for smaller screens                      | Suitable for larger screens               |
| **Viewing Experience**| Unpleasant, hard to view                       | Pleasant, easy to view                    |
| **Cost**           | Inexpensive                                       | Expensive                                 |

#### Audio and Video
- **Audio:** Analog sound waves are converted into digital audio using encoding techniques like Advanced Audio Coding (AAC).
- **Video:** Similar to audio, video data is encoded for digital transmission.

### Data into Signals
- **Data Conversion:** Data is converted into binary values, then to voltages to be transmitted.
- **Voltage Levels:** A high voltage (e.g., 2.0 volts or above) represents a binary "1." A low voltage (e.g., 0.8 volts or less) represents a binary "0."

Data > Encoded Values > Binary Values > Voltages
![[Assets/Pasted image 20241007022844.png]]

### Transmission of Data
Computer networks are designed to transfer data from one point to another

- **Transmission Modes:**
    - **Wired Transmission:** Using physical cables.
    - **Wireless Transmission:** Using electromagnetic waves (without cables).
    - Mode is selected according to the several factors (Cost / Speed/ Accessibility/Feasibility)
- **Signal Type:** Wireless data transmission uses electromagnetic (EM) waves.

### Characteristics of Electromagnetic Waves
- EM waves **doesn't require any medium material medium to travel**
- **Medium:** Can travel through air, solids, and vacuum.
- **Speed:** Constant in a vacuum (3 x 10^8 m/s-1)300,000 kmps - Speed of light
- **Spectrum:** EM waves exist across a wide spectrum, used for different purposes. (light is also a EM wave)

### Signals
![[Assets/Pasted image 20241007023551.png]]
- **Analog Signals:** Have continuously varying values.has infinitely many levels of intensity over a period of time.
- **Digital Signals:** Have a limited number of discrete values (usually 0 and 1).
- **Periodic Signals:** Repeat themselves after a fixed time.
- **Non-Periodic Signals:** Do not repeat themselves regularly.


> [!NOTE] NOTE
> In data communication, we commonly use **periodic analog signals** and **non-periodic digital signals**

| **Difference Between Analog And Digital Signal** | **Analog Signals**                                                                 | **Digital Signals**                                                     |
|--------------------------------------------------|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Type**                                         | Continuous signals                                                                 | Discrete signals                                                        |
| **Representation**                               | Represented by sine waves                                                          | Represented by square waves                                             |
| **Examples**                                     | Human voice, natural sound, analog electronic devices are a few examples           | Computers, optical drives, and other electronic devices                 |
| **Value Range**                                  | Continuous range of values                                                         | Discontinuous values                                                    |
| **Recording**                                    | Records sound waves as they are                                                    | Converts into a binary waveform                                         |
| **Usage**                                        | Only used in analog devices                                                        | Suited for digital electronics like computers, mobiles and more.        |

###  Characteristics of a Wave
![[Assets/Pasted image 20241007024557.png]]
- **Amplitude:** The height of the wave.
- **Frequency:** The number of cycles per second (Hertz - Hz).
- **Wavelength:** The distance between two consecutive crests (or troughs) of a wave.
- **Period:** The time it takes for a wave to complete one cycle.
- **Speed:** The distance a wave travels in one second.

### Period and Frequency
![[Assets/Pasted image 20241007032522.png|500]]
- **Period:** How long one cycle takes.
- **Frequency:** How many cycles occur in one second.
- - **Period:** The time it takes for the wave to complete one cycle (from crest to crest or trough to trough). The period is marked as 1/12 seconds.
- **Frequency:** The number of cycles completed by the wave in one second. The diagram shows 12 cycles within 1 second, so the frequency is 12 Hz.


> [!NOTE] Relationship
> **Frequency and period are inversely proportional:**
> - **Frequency = 1 / Period**  
> - **Period = 1 / Frequency**

If a signal generator generates a signal which has 30000 cycles per minute.What is the frequency of this signal? What is the period of the signal?

Number of cycles per minute = 30000
Number of cycles per second = 30000/60 = 500
Frequency = number of cycles per second = 500 Hz
Period of the signal = 1/f = 1/500 s = 0.002 s = 2ms

###  Wavelength (λ)
![[Assets/Pasted image 20241007034115.png]]
- The distance between two consecutive crests or troughs of a wave.

### Wavelength (λ) and Speed
- **Relationship:** Speed (V), wavelength (λ), and frequency (f) are related by the formula:
	- `V = λ * f`.
- Wavelength = Velocity / Frequency
- Frequency = Velocity / Wavelength 

### Data Flow Models
- **Simplex Mode:** Unidirectional, only one device can transmit at a time.
    - Tv, Radio
- **Half Duplex Mode:** Both devices can transmit and receive but not at the same time. ONE AT A TIME
    - Walkie-talkie
- **Full Duplex Mode:** Both devices can transmit and receive simultaneously.
	- Any device used in computer networks

### Summary >>>
- Data is converted to binary and then to electrical signals for transmission.
- Signals are transmitted over networks using different media and modes.
- Signals have characteristics like frequency, wavelength, and velocity.
- Electromagnetic waves are used for wireless data transmission.

### *NEXT [[Lecture 4 - Communication Medium]] >>>*