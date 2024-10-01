---
Creation Date: 2024:09:01 02:15
tags:
  - CYBVU
  - SE101.3-23.2-GB-Y1S2
  - Y1S2
---
## Client-Server Model
![[Assets/client.png]]
• **Client**: In this context, the web browser acts as the client. It initiates requests to access resources or services (like web pages) by typing a URL into the address bar.

• **Server**: The server is a remote computer or system that hosts the website or web application. It receives the request from the client, processes it (fetching the appropriate files or data), and sends the response back to the client.


##### Steps in the Client-Server Model:

1. **Client Request**: When you type a URL into your browser, it sends an HTTP or HTTPS request to the server where the website is hosted.

2. **Server Response**: The server processes this request and responds with the appropriate data—typically HTML, CSS, JavaScript, images, and other resources needed to display the web page.

3. **Rendering**: The browser (client) takes the response and renders it into a visually accessible format, displaying the web page to the user.

4. **Interaction**: The client continues to interact with the server, sending further requests (e.g., clicking a link or submitting a form) and receiving additional responses, enabling dynamic web experiences.

##### Advantages and Disadvantages of Client-Server Architecture

| **Advantages**                               | **Disadvantages**                          |
|----------------------------------------------|--------------------------------------------|
| **Centralized Control**: Easy to manage resources, data, and security from a central location. | **Single Point of Failure**: If the server fails, clients cannot access resources. |
| **Scalability**: Can be scaled up or out to handle more clients. | **Server Overload**: Too many clients can overwhelm the server, leading to slow performance or downtime. |
| **Efficient Resource Use**: Centralized resources reduce redundancy and ensure efficient use. | **Complexity**: Setting up and maintaining servers can be complex and require specialized knowledge. |
| **Easier Maintenance and Updates**: Updates made on the server apply to all clients. | **Network Dependency**: Clients rely on network connectivity to access the server. Poor connectivity can degrade performance. |
| **Security**: Centralized security controls help protect data and ensure authorized access. | **Cost**: High-quality servers and infrastructure can be expensive to implement and maintain. |
| **Reliability**: Can be designed with redundancy and failover systems to ensure availability. | **Limited Client Autonomy**: Clients depend heavily on the server, limiting their ability to function independently. |