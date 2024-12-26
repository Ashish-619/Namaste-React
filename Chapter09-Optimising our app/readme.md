In this we will optimize our app.
We will make components with single functionality.
For ex- We'll seperate data fetching(we'll use custom hook now) and data displaying, which was earlier done in same component.
That is we're performing abstraction, Separating the data fetching logic from the UI logic improves readability, maintainability, and testability of your React components.

---

## Q. Lazy Loading with React.lazy
React's React.lazy allows you to dynamically import components. Combine this with Suspense to show a fallback UI (like a spinner) while the component is being loaded.

```js
import React, { Suspense } from 'react';

// Dynamically import a component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```
---