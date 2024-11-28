### 1. **Difference Between Named Export, Default Export, and `* as` Export**

#### Named Export:
- **Allows exporting multiple variables or functions by their names.**
- Syntax for exporting:
  ```javascript
  export const name = "John";
  export const age = 25;
  ```
- Syntax for importing:
  ```javascript
  import { name, age } from './file';
  ```
- **Use Case:** When you want to export multiple independent items from a module.

---

#### Default Export:
- **Exports a single default value from a module.**
- Syntax for exporting:
  ```javascript
  const greet = () => "Hello!";
  export default greet;
  ```
- Syntax for importing:
  ```javascript
  import greet from './file';
  ```
- **Use Case:** When a module has a primary purpose, e.g., exporting a single function, class, or object.

---

#### `* as` Export:
- **Imports all exported items from a module as a single namespace.**
- Syntax for exporting:
  ```javascript
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;
  ```
- Syntax for importing:
  ```javascript
  import * as mathOperations from './file';
  console.log(mathOperations.add(2, 3)); // 5
  ```
- **Use Case:** When you want to access all exports as properties of a single object.

---

### 2. **Importance of `config.js` File**
The `config.js` file is typically used to centralize configuration details for an application. It allows for easier maintenance and a clean separation of concerns.

#### Key Uses:
- **Environment Variables:** Store API keys, URLs, and environment-specific settings.
- **Constants:** Define application-wide constants (e.g., page limits, error messages).
- **Modularity:** Avoid hardcoding values across multiple files.

#### Example:
```javascript
const config = {
  API_BASE_URL: "https://api.example.com",
  TIMEOUT: 5000,
};

export default config;
```

---

### 3. **What are React Hooks?**
React Hooks are functions that allow developers to use React state and lifecycle features in functional components.

#### Common Hooks:
- **`useState`**: Manages state in a functional component.
- **`useEffect`**: Handles side effects (e.g., fetching data, subscribing to events).
- **`useContext`**: Accesses context values without the need for higher-order components.
- **`useReducer`**: Manages complex state logic (similar to Redux reducers).
- **`useRef`**: Creates a reference to a DOM element or stores mutable values.

#### Benefits:
- Simplifies code by avoiding class components.
- Encourages functional programming practices.
- Improves readability and reusability.

---

### 4. **Why Do We Need the `useState` Hook?**

#### Purpose of `useState`:
The `useState` hook is used to manage local state within a functional component. It allows a component to "remember" values between renders.

#### Syntax:
```javascript
const [state, setState] = useState(initialState);
```

#### Example:
```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

#### Why We Need It:
1. **Stateful Functional Components:** Enables functional components to handle state, which was previously limited to class components.
2. **Re-renders:** Automatically triggers a re-render when state updates, reflecting the new state in the UI.
3. **Simplicity:** Simplifies the code compared to managing state in class components.