---
Creation Date: 2024:09:08 01:11
tags:
  - CYBVU
  - SE101.3-23.2-GB-Y1S2
  - Y1S2
---
### Introduction to CSS

- What is CSS?
    - A style sheet language that controls the look and feel of web pages.
    - It's used to format, style, and layout web pages.
- What are the benefits of using CSS?
    - **Separation of Concerns:** Keeps HTML focused on structure, CSS on presentation, and JavaScript on behavior.
    - **Reusability:** Apply styles to multiple elements.
    - **Maintainability:** Easier to change design without modifying HTML.
    - **Accessibility:** Allows users to customize their browsing experience.

---

### CSS Syntax

- Selectors: Identify which HTML elements to apply styles to.
    - **Type Selector:** Targets all elements of a specific type (`p {color:red; }`).
    - **Class Selector:** Targets elements with a specific class attribute (`.intro {color : blue;}`).
    - **ID Selector:** Targets a single element with a unique ID (`#myHeading{padding-top : 10px;}`).
    - **Universal Selector:** Targets all elements on the page (`* {color:green};`).
    - **Grouping Selector:** Applies styles to multiple selectors (e.g., h1, h2, p).
- Properties: Specify what aspects of the element to change.
    - **Color:** color: red;
    - **Font Size:** font-size: 16px;
    - **Background Color:** background-color: lightblue;
- Values: Define the specific values for properties.

---

### Adding CSS to Your Web Pages

- **Inline Styles:** Apply styles directly to individual elements using the style attribute.
    
    - **Example:** `<h1 style="color: blue;">My Heading</h1>`
        
    - **Internal Styles:** Embeds CSS code directly within the `<head>` section of your HTML document using the `<style>` tag.
    - **External Styles:** Links a separate CSS file to your HTML document using the `<link> `tag. ex: `<link rel="stylesheet" href="style.css">`
    

---

### CSS Properties

- **Font Styling**
    - **font-family:** Specifies the font to use.
    - **font-size:** Sets the text size.
    - **font-weight:** Sets the font thickness (e.g., bold, normal).
    - **text-align:** Aligns text within an element (left, center, right).
    - **text-decoration:** Adds underlines, overlines, or strikethroughs (underline, overline, line-through).
- **Color**
    - **color:** Sets the text color.
    - **background-color:** Sets the background color.
- **Spacing**
    - **margin:** Adds space around an element (outside the element's border).
    - **padding:** Adds space inside an element (between the element's border and its content).
- **Borders**
    - **border-style:** Sets the border style (e.g., solid, dashed, dotted).
    - **border-width:** Sets the border width.
    - **border-color:** Sets the border color.
- **Box Model**
    - Understands how the size of an element is calculated, taking into account content, padding, borders, and margins.

---

### Bootstrap

- What is Bootstrap?
    - A popular front-end framework for creating responsive and mobile-first web designs.
    - It provides pre-built components like buttons, navigation, grids, and more.
- Why use Bootstrap?
    - **Rapid Development:** Saves time by using ready-made components.
    - **Responsive Design:** Automatically adjusts to different screen sizes.
    - **Consistent Styling:** Ensures a consistent look across your website.