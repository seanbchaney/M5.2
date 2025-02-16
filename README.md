# web-dev-starter

This is a starter project for web development with no frameworks and minimal
dependencies. It is intended to be a starting point for web development projects
that are written in plain HTML, CSS, and JavaScript.

## Getting Started

To get started, clone this repository and run the following commands:

```bash
npm install
```
This will install the necessary dependencies for the project.

## Development

It is recommended to use the VSCode Live Server extension to run the project
locally. This will allow you to see changes in real-time as you make them. There
is no need to run a build process or refresh the page manually. Additionally,
you do not need to setup a local server to run the project.

## Testing

To run the tests for the project, run the following command:

```bash
npm test
```

## Accessibility Lab Answers

### Color
- **Contrast Test Results:** The contrast between text and background was tested using the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).  
  - Some text did not meet **WCAG AA** guidelines for contrast.  
  - Example: **Black text (#2A2A2A) on Green (#008000)** has a contrast ratio of **3.17:1** (which fails for normal text).  
- **Fix:**  
  - Updated background colors to **#004400 (dark green)** for better readability.  
  - Changed text color to **#FFFFFF (white)** for higher contrast.  

### Semantic HTML
- **Keyboard Navigation Issues Observed:**  
  - The `<div class="nav">` element is not recognized as a navigation landmark.  
  - No `<h>` tags in the article, making it difficult for screen readers to identify sections.  
  - No proper focus styles for interactive elements.  

- **Fixes Made:**  
  - Replaced `<div class="nav">` with a `<nav>` element.  
  - Updated article headings using `<h1>`, `<h2>`, and `<h3>` instead of `<font size="x">`.  
  - Applied `tabindex="0"` to interactive elements that need keyboard focus.  

### The Images
- **Issue:** Images lacked **alt** attributes, making them unreadable by screen readers.  
- **Fix:**  
  - Added descriptive **alt** text to all images.  
  - Ensured decorative images use `alt=""` to be ignored by screen readers.  

### The Audio Player
- **Issue 1:** No captions or transcript for deaf users.  
  - **Fix:** Added a `<p>` element below the audio player containing a **text transcript** of the audio.  
- **Issue 2:** Older browsers may not support `<audio>`.  
  - **Fix:** Added a fallback `<a>` link allowing users to **download** the audio file.  

### The Forms
- **Search Input Issue:** Lacked a label, making it inaccessible to screen reader users.  
  - **Fix:** Added a **hidden label** using `<label class="visually-hidden">Search:</label>` and **associated it** with the input field.  
- **Comment Form Issue:** Labels were not explicitly connected to inputs.  
  - **Fix:** Used `<label for="name">Name:</label>` and `<label for="comment">Comment:</label>`.  

### The Show/Hide Comment Control
- **Issue:** Not accessible via keyboard.  
- **Fix:**  
  - Added `tabindex="0"` to the button.  
  - Used `keydown` event to allow **Enter key** to toggle comments.  

### The Table
- **Issues:**  
  - No `<caption>`, making it unclear what the table represents.  
  - No `<th scope="row">` for row headers.  
- **Fixes:**  
  - Added `<caption>` describing the table contents.  
  - Used `<th scope="row">` to label each row for better screen reader navigation.  

### Other Considerations
1. **Improve Focus Styles:** Ensure keyboard users can clearly see which element is focused.  
2. **ARIA Roles:** Add **ARIA landmarks** for better screen reader navigation (e.g., `role="navigation"` for `<nav>`).  
