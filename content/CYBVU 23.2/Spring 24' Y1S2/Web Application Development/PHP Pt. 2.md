### Built-In Superglobal Variables in PHP
Superglobal variables in PHP are built-in variables that are always accessible, regardless of the scope (inside or outside of functions). They are automatically populated and can be **used to collect data from forms, sessions, cookies, URLs, and the server itself**.

1. `$_GET[]`
- Collects data sent via the URL using a query string (e.g., after the “?” in a URL.
```php
// URL: example.com?name=John
$name = $_GET['name']; // "John"
```
- Use case: Sending data via URL for actions like search queries or passing parameters between pages.

2. `$_POST[]`
- Collects data sent via an HTML form using the POST method.
```php
// Assuming a form field with name="username"
$username = $_POST['username']; // "JohnDoe"
```
- Use case: Securely sending sensitive data like login credentials, as POST doesn’t append data to the URL.

3. `$_REQUEST[]`
- Can collect data from both GET and POST methods.
```php
$search = $_REQUEST['search']; // Works for both GET and POST
```
- Use case: Flexible data retrieval, allowing you to fetch data regardless of whether it was sent via GET or POST.

4. ` $_FILES[]`
- Handles file uploads in forms
```php
$file = $_FILES['fileToUpload']['name'];
```

---
### GET vs POST?
| Feature              | GET                                   | POST                                    |
|----------------------|---------------------------------------|-----------------------------------------|
| Data Visibility      | Appends data to the URL and is visible | Data is sent in the request body and is hidden |
| Data Length          | Limited by URL length (typically 2048 characters) | No restrictions on data length (large data can be sent) |
| Use Case             | Used for retrieving data (e.g., search queries) | Used for sending sensitive data (e.g., forms, file uploads) |
| Browser History      | Data is saved in browser history       | Data is not saved in browser history    |
| Bookmarkable         | Can be bookmarked                     | Cannot be bookmarked                    |
| Security             | Less secure (data visible in URL)      | More secure (data is not visible in the URL) |
| Data Resubmission    | Can be resubmitted (via refresh)       | Cannot be easily resubmitted without a warning |
| Caching              | Cached by browsers                    | Not cached by browsers                  |

---
### Handling Form Data Exercise 01
Create a HTML page with a hyperlink to send the following data to the server. Create a PHP page to access this data.
```html
<a href="./data.php?userid=4&username=neo&status=true">Send data to server</a>

<!-- index.html -->
```

```php
<?php
echo "User ID : ", $_GET['userid'],"<br>";
echo "Username : ", $_GET['username'],"<br>";
echo "Status : ", $_GET['status'],"<br>";
?>

// data.php
```

