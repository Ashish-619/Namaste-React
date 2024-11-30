### **What is a Microservice?**
Microservices is an architectural style where an application is structured as a collection of small, independent, and loosely coupled services. Each service performs a single business function and communicates with other services using lightweight protocols like HTTP/REST.

- **Characteristics**:
  - Small and focused on specific functionality.
  - Independently deployable and scalable.
  - Uses APIs for communication.
  - Technology agnostic (each service can be developed using different programming languages or tools).

---

### **What is Monolith Architecture?**
Monolith architecture refers to a software design where all components of an application are tightly coupled into a single codebase. The user interface, business logic, and database layers are all part of one large application.

- **Characteristics**:
  - Single deployable unit.
  - All components share the same memory space.
  - Easier to develop and test initially.
  - Scaling is done by replicating the entire application.

---

### **Difference Between Monolith and Microservices**
| **Aspect**            | **Monolith**                                 | **Microservices**                            |
|------------------------|----------------------------------------------|----------------------------------------------|
| **Architecture**       | Single deployable unit                      | Collection of loosely coupled services       |
| **Scaling**            | Vertical scaling (scale the whole app)      | Horizontal scaling (scale specific services) |
| **Deployment**         | One deployment for the entire app           | Independent deployment of each service       |
| **Flexibility**        | Technology stack is uniform                 | Different services can use different tech    |
| **Resilience**         | A failure in one module can affect the app  | Failures in one service don’t affect others  |

---

### **Why Do We Need a `useEffect` Hook?**
The `useEffect` hook is used to handle **side effects** in functional React components. Side effects include things like:
- Fetching data from an API.
- Subscribing to a WebSocket or DOM events.
- Updating the document title.

It ensures the effect runs **after the component renders** and can be cleaned up to avoid memory leaks.

Example:
```jsx
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <h1>Time: {time}</h1>;
};
```

---

### **What is Optional Chaining?**
Optional chaining (`?.`) is a feature that allows you to safely access deeply nested properties in an object without worrying about errors if any property is `undefined` or `null`.

Example:
```javascript
const user = { profile: { name: "John" } };
console.log(user.profile?.name); // John
console.log(user.profile?.age);  // undefined
```

---

### **What is Shimmer UI?**
Shimmer UI is a skeleton screen or placeholder UI that is displayed while the actual data is being fetched. It gives users a sense that content is loading, improving the perceived performance of an application.

Example in React:
```jsx
const Shimmer = () => {
  return <div className="shimmer">Loading...</div>;
};
```

---

### **Difference Between JS Expression and JS Statement**
| **Aspect**     | **JS Expression**                         | **JS Statement**                        |
|-----------------|------------------------------------------|-----------------------------------------|
| **Definition**  | Produces a value.                        | Performs an action or controls flow.    |
| **Examples**    | `5 + 10`, `"Hello"`, `a * b`             | `if`, `for`, `while`, `return`, etc.    |
| **Usage**       | Can be used in variable assignments, JSX | Cannot be directly used in JSX          |

Example:
```javascript
const x = 5 + 10; // Expression
if (x > 10) {      // Statement
  console.log("Greater than 10");
}
```

---

### **What is Conditional Rendering?**
Conditional rendering in React allows components to render dynamically based on certain conditions.

Example:
```jsx
const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>;
};
```

---

### **What is CORS?**
CORS (Cross-Origin Resource Sharing) is a security feature that allows servers to specify which domains can access their resources. It prevents unauthorized requests from different origins.

- A CORS error occurs when a browser blocks a request due to policy restrictions.

---

### **What is `async` and `await`?**
`async` and `await` are used in JavaScript for handling asynchronous code in a more readable way compared to `.then()` and `.catch()`.

- **`async`**: Marks a function as asynchronous and ensures it returns a promise.
- **`await`**: Pauses the execution until the promise resolves.

Example:
```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}
```

---

### **What is the use of `const json = await data.json();` in `getRestaurants()`?**
This line converts the **raw response stream** from an API (in the form of a `Response` object) into a **JSON object** that can be easily used in JavaScript.

- **`data.json()`**: A method that parses the response body as JSON.
- **`await`**: Ensures the JSON parsing completes before proceeding to the next line.

Without this, you would work with the raw response, which isn't practical for most cases.