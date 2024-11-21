# React Interview Questions

## Chapter 01 - Inception

1. **What is Emmet?**  
   Emmet is a toolkit that allows for faster HTML and CSS workflow through shorthand notations.  
   **Example**: Typing `!` and pressing enter generates the HTML boilerplate.

---

2. **Difference between a Library and Framework?**

   **Library**:
   - A collection of functions, objects, or routines that can be called upon to perform tasks.
   - The programmer controls the flow of the program, deciding when and where to call functions.
   - Provides specific functionality or reusable code.  
     **Examples**: React, Lodash, jQuery.

   **Framework**:
   - A structured environment that dictates the architecture of the application.
   - It controls the flow; your code is called within the framework.
   - Provides a skeleton for building applications.  
     **Examples**: Angular, Django, Ruby on Rails.

---

3. **What is CDN? Why do we use it?**  
   A **Content Delivery Network (CDN)** is a network of interconnected servers designed to speed up webpage loading for data-heavy applications. Instead of passing data from the main server, a CDN uses the server nearest to the client's location.

   **Advantages of CDN**:
   - Reduces page load times.
   - Decreases bandwidth costs.
   - Improves content availability.

---

4. **What is CORS?**  
   **Cross-Origin Resource Sharing (CORS)** is a security mechanism that enables web browsers to manage requests made from one domain to another.  

   **Example**:  
   A frontend app hosted on `example.com` needs data from an API on `api.com`. For the request to succeed, `api.com` must send CORS headers like `Access-Control-Allow-Origin`. Without these headers, the browser blocks the request.

---

5. **What is `crossorigin` in the `<script>` tag?**  
   The `crossorigin` attribute in the `<script>` tag controls how the browser handles cross-origin requests for scripts.  

   **Values**:
   - `anonymous`: Sends the request without credentials (like cookies or authentication).
   - `use-credentials`: Includes credentials with the request if the server allows it.
   - (Omitted): Default behavior, no special handling for cross-origin requests.

---

6. **What is the difference between React and ReactDOM?**

   - **React**:  
     The core library used for creating components, managing state, and building the user interface.
   - **ReactDOM**:  
     The library responsible for rendering React components into the DOM. It bridges the gap between the Virtual DOM and the actual DOM.

---

7. **What is the difference between `react.development.js` and `react.production.js` files via CDN?**

   - **react.development.js**:
     - Designed for development purposes.
     - Includes debugging tools, warnings, and error messages to assist during development.

   - **react.production.js**:
     - Optimized for production use.
     - Removes warnings and debug messages to improve performance and reduce file size.

---

8. **What are `async` and `defer` in the `<script>` tag?**

   - **`async`**:  
     Loads the script asynchronously while the HTML document continues parsing. The script is executed as soon as it is loaded, potentially disrupting the parsing process.

   - **`defer`**:  
     Loads the script in parallel with HTML parsing, but execution is deferred until the HTML document is fully parsed.

   - ![InShot_20241121_041543223](https://github.com/user-attachments/assets/57c6f30c-9c40-42f9-9e2f-6de3b49d7f90)


---
