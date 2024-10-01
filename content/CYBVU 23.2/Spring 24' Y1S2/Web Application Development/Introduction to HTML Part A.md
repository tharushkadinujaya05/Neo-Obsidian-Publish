---
Creation Date: 2024:09:02 14:38
tags:
  - CYBVU
  - SE101.3-23.2-GB-Y1S2
  - Y1S2
---

#### 1. HTML Headings
- H1 to H6
- H1 is the biggest 
---
#### 2. `<p>` tag
- paragraph tag
- adding spaces and newlines in `<p>` tag wont add spaces or newline in webpage, u need to use `<br>` tag for that
---
#### 3. break tag
- break tag
- break line into newline 
---
#### 4. Pre formatted text tag `<pre>`
- in `<p>` tag spaces are removed automatically, but in `pre` tag spaces and new lines are on webpage as same as we type
---
#### 5. Horizontal rule tag `<hr>`
- adding horizontal line as separator in webpage
---
#### 6. tag attributes
 character formatting tags (bold, italic, underline, small, sub, sup, big)
	- `<b>` element to **bold** text
	- `<i>` element to *italicize* text
	- `<u>` element to <u>underline</u> text
	- `<s>` element to <s>strikethrough</s> text
	- `<small>` element to <small> small text</small>
	- `<big>` element to <big> larget text </big>
	- `<sup>` element to <sup>Super</sup>Script
	- `<sub` element to <sub>Sub</sub>Script
	
---
#### 7. `<font>` tag (Deprecated)
Example :
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Tag Example</title>
</head>
<body>
    <!-- Setting the color of the text -->
    <font color="red">This is red text.</font><br>

    <!-- Setting the size of the text -->
    <font size="5">This is large text.</font><br>

    <!-- Setting the font face of the text -->
    <font face="Arial">This text is in Arial font.</font><br>

    <!-- Combining color, size, and face -->
    <font color="blue" size="4" face="Verdana">
        This is blue text, size 4, in Verdana font.
    </font>
</body>
</html>
```

---
#### 8. Comments
Single line comment :  `<!--- this is a comment -->`
Multi line comment : 
```html
<!--- Multi 
		line
		Comment
--->
```
---
#### 9. HTML Lists (ordered, unordered, defintion, )
**Ordered Lists**
-  *ordered lists*, also known as numbered lists, we use the `<ol>` element:
- Example :
- 
```html
<ol>
  <li>🧺 Go to laundromat.</li>
  <li>🖥 Code for 45 min.</li>
  <li>💅 Take a bubble bath.</li>
</ol>
```
- btw we can change the order list `type` ,as an example we can change order list from 1,2,3 to A,B,C. to that u need to add attribute named `type` top opening `<ol>` tag as below :
```html
<ol type="a">
  <li>🧺 Go to laundromat.</li>
  <li>🖥 Code for 45 min.</li>
  <li>💅 Take a bubble bath.</li>
</ol>
```

OUTPUT : 
![[Pasted image 20240902123132.png|300]]

More options : 
	-` type = "i"` : to get lower case roman numbers (i , ii , iii)
	- `type = "I"` : to get upper case roman numbers (I, II, III)
	- `type = "A"`: to get upper case letters (A, B , C)
	-  `type = "1"` is Default

---
#### 10. HTML Links + target attribute
**Links** are integral to the idea of the internet. They are the primary way users connect to other sites and navigate the web.

How do we add links ?
```html
<a href="https://archive.org/web">Internet Archive</a>
```
Preview : <a href="https://archive.org/web">Internet Archive</a>

---
#### 11. HTML images (height, width attribute)
```html
<img src="images/dinosaur.jpg" alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth" width="400" height="341" />
```

`src` = image source (image path)
`alt` = alternative tag (in case if image cudnt load, this text fill show up instead of the image as a message for user)

 - Use image as link
```html
<a href="googl.com"><img src="images/google.jpg" alt="google"></a>
```


