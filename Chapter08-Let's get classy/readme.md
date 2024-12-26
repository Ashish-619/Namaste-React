## **Q1. How do you create Nested Routes in React Router DOM?**

### **What are Nested Routes?**
Nested routes allow components to render subcomponents based on child routes. They help in creating layouts where different sections of the page (e.g., sidebar, header, and content) dynamically change based on the route.

### **Explanation**
- The `Outlet` component is used to render child routes inside a parent route.
- Define the parent route with its layout and specify children routes within its configuration.

### **Example**
```javascript
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <Outlet /> {/* Renders child routes here */}
  </>
);

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const ErrorPage = () => <h2>404 - Page Not Found</h2>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

const Root = () => <RouterProvider router={router} />;
export default Root;
```

**How It Works:**
- When visiting `/about`, the `About` component is rendered inside the `Outlet` component in `App`.
- When visiting `/contact`, the `Contact` component is rendered.

---

## **Q2. `createHashRouter` and `createMemoryRouter`**

Refer to the provided explanation for details on these routers. The key points:
- **`createHashRouter`**: Uses `#` in the URL for client-side routing, e.g., `example.com/#/about`. No server configuration is needed.
- **`createMemoryRouter`**: Keeps routing state in memory, suitable for testing or server-side rendering (SSR).

---

## **Q3. Lifecycle Method Order in Class Components**

### **Order of Calls**
1. **`constructor()`**: Initializes state and props.
2. **`render()`**: Renders JSX to the DOM.
3. **`componentDidMount()`**: Runs after the component is mounted.
4. **`componentDidUpdate()`**: Runs after props or state updates.
5. **`componentWillUnmount()`**: Cleans up resources before the component is removed.

---

### **Example:**
```javascript
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Updated');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    console.log('Render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

### **Lifecycle Logs**
- On initial render: `Constructor` → `Render` → `Component Mounted`.
- On state change: `Render` → `Component Updated`.
- On unmount: `Component Will Unmount`.

---

## **Q4. Why Use `componentDidMount`?**

### **Purpose**
`componentDidMount` is ideal for:
- Fetching data from APIs.
- Setting up subscriptions or timers.

### **Example**
```javascript
componentDidMount() {
  this.timerId = setInterval(() => {
    console.log('Timer running');
  }, 1000);
}
```

---

## **Q5. Why Use `componentWillUnmount`?**

### **Purpose**
- Clean up resources (e.g., timers, subscriptions) to prevent memory leaks.

### **Example**
```javascript
componentWillUnmount() {
  clearInterval(this.timerId);
  console.log('Timer stopped');
}
```

---

## **Q6. Why Do We Use `super(props)` in the Constructor?**

### **Purpose**
- Calls the parent class constructor.
- Allows access to `this.props` in the child constructor.

### **Example**
```javascript
constructor(props) {
  super(props);
  console.log(this.props); // Accessible after super(props)
}
```

---

## **Q7. Why Can’t the Callback of `useEffect` Be `async`?**

### **Reason**
React expects the `useEffect` callback to either:
- Return `undefined` or a cleanup function.
- An `async` function always returns a Promise, which is incompatible.

### **Correct Way**
Encapsulate async code in an inner function.

```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);
``` 

This approach keeps `useEffect` synchronous and fulfills React's requirements.
