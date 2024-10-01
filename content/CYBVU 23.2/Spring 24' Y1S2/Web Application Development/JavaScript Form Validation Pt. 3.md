---
Creation Date: 2024:09:14 00:22
tags:
  - CYBVU
  - SE101.3-23.2-GB-Y1S2
  - Y1S2
---
[Click here to get the Lecture Slides](https://nsbm365-my.sharepoint.com/:b:/g/personal/dtdkumara_students_nsbm_ac_lk/ET8YP8ZhEgRAjwM2-7u8hjwBALjm1PPJwS-V4xPD-8fSXQ?e=3DP0fp)
### What is JavaScript Validation?
JavaScript validation is a way to check whether the data a user enters in a web form is correct before it’s submitted to a server. This helps improve user experience and reduces server load by preventing invalid data from being sent.

JavaScript validation checks form inputs, like ensuring:

• Required fields aren’t left empty.
• Email addresses have the correct format (like “example@domain.com”).
• Passwords meet security rules (e.g., minimum length).
• Numbers fall within a specific range.
• Specific patterns are followed (e.g., phone numbers).

##### Why is it important ?
• **Prevents Errors:** By catching mistakes like missing information or invalid formats, JavaScript can stop the form from submitting until the user fixes the errors.
• **Improves User Experience:** Immediate feedback on what needs fixing helps users understand and correct issues faster.
• **Reduces Server Load:** If forms are validated on the client side, fewer invalid submissions reach the server, saving resources.

##### How does it work? 
we use event `listners` to validate the form when a user tries to submit it. Here's basic example.
```html
<form id="myForm">
  <label for="email">Email:</label>
  <input type="text" id="email">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    
    // Simple email format validation
    if (!email.includes('@')) {
      alert("Please enter a valid email.");
      event.preventDefault(); // Prevents form from submitting
    }
  });
</script>
```

---
### Activity 01
Write a JavaScript to include the following validations for the data input through the form given below:

- The ‘User Name’ field should not be empty.
- The ‘password’ should be more than 6 characters
Display suitable messages to the user based on the result of each validation.

```html
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function validateForm() {
            // Check if the username field is empty
            if (document.form.username.value.length == 0) {
                alert("Username is empty");
            } 
            // Check if the password is less than 6 characters
            else if (document.form.password.value.length < 6) {
                alert("Password should be more than 6 characters");
            } 
            else {
                alert("Form is valid");
            }
        }
    </script>
</head>
<body>
    <form name="form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>

        <input type="button" value="Validate" onclick="validateForm()">
    </form>
</body>
</html>
```

##### Using getElementByID
```html
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function validateForm(){
            // Use getElementById to access input fields by their IDs
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            
            if (username.length == 0) {
                alert("Username is empty");
            } else if (password.length < 6) {
                alert("Password should be more than 6 characters");
            } else {
                alert("Form is valid");
            }
        }
    </script>
</head>
<body>
    <form id="form">
        <label>UserName</label>
        <input type="text" id="username"> <br><br>
        <label>Password</label>
        <input type="password" id="password"> <br><br> 
        <input type="button" value="Validate" onclick="validateForm()">
    </form>
</body>
</html>
```