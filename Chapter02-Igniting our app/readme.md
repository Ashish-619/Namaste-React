
### **1. What is `NPM`?**  
**NPM (Node Package Manager)** is a package manager for JavaScript.  
- Used to install, manage, and share JavaScript packages or libraries.  
- It comes bundled with Node.js.  
- Common commands:  
  - `npm install <package>` – Install a package.  
  - `npm start` – Start a project.  

---

### **2. What is `Parcel/Webpack`? Why do we need it?**  
- **Parcel** and **Webpack** are module bundlers for JavaScript applications.  
- They compile and optimize multiple files into a single file (or smaller bundles) for better performance.  

#### Why Do We Need Them?  
- Minify and optimize code.  
- Support for modern JavaScript features like ES6+ using transpilers.  
- Handle non-JavaScript assets like CSS, images, and more.  

---

### **3. What is `.parcel-cache`?**  
- A directory where **Parcel** stores cache files to speed up the build process.  
- It prevents re-compiling unchanged code, improving build performance.  

---

### **4. What is `npx`?**  
- A command that comes with `npm` to run packages without globally installing them.  
- Example:  
  - `npx create-react-app my-app` – Run a one-time execution of `create-react-app`.  

---

### **5. What is the difference between `dependencies` vs `devDependencies`?**  
- **Dependencies**: Required for the application to run (e.g., `react`, `axios`).  
- **DevDependencies**: Required only during development (e.g., `eslint`, `webpack`).  

---

### **6. What is Tree Shaking?**  
Tree shaking is the process of removing unused code from the final bundle.  
- Requires ES6 modules.  
- Helps reduce bundle size and improve performance.  

---

### **7. What is Hot Module Replacement?**  
Hot Module Replacement (HMR) allows live updates of modules in a running application without a full page reload.  
- Speeds up development.  
- Retains application state during updates.  

---

### **8. 5 Superpowers of Parcel**  
1. **Zero Configuration**: No setup required to get started.  
2. **Blazing Fast Build**: Utilizes multi-core processing and caching.  
3. **Built-in HMR**: Provides seamless hot module replacement.  
4. **Code Splitting**: Automatically splits code for optimized performance.  
5. **Support for Multiple File Types**: Handles JavaScript, CSS, HTML, images, and more out of the box.  

---

### **9. What is `.gitignore`? What should we add and not add into it?**  
A `.gitignore` file specifies files and directories Git should ignore.  

#### What to Add:  
- `node_modules/`  
- `.env` (environment files)  
- `.parcel-cache/`  

#### What Not to Add:  
- Source code files or configuration files needed for others to run the project.  

---

### **10. What is the difference between `package.json` and `package-lock.json`?**  
- **`package.json`**: Describes project dependencies and metadata.  
- **`package-lock.json`**: Locks the exact versions of dependencies to ensure consistency.  

---

### **11. Why should I not modify `package-lock.json`?**  
- It is auto-generated by `npm` to maintain dependency integrity.  
- Manual changes can lead to unexpected errors.  

---

### **12. What is `node_modules`? Is it a good idea to push that on Git?**  
- A directory where installed dependencies are stored.  
- **Not a good idea** to push it to Git since it can be recreated with `npm install`.  

---

### **13. What is the `dist` folder?**  
The `dist` (distribution) folder contains the production-ready code after a build process.  

---

### **14. What is `browserslist`?**  
A configuration file used to specify target browsers for your application.  
- Helps tools like Babel and PostCSS apply transformations for compatibility.  

---

### **15. ^ (Caret) vs ~ (Tilde)**  
| Symbol | Allows Updates         | Example Updates      | Restricts Updates  |  
|--------|-------------------------|----------------------|--------------------|  
| `^`    | Minor + Patch Versions | `^1.2.3` → `1.3.0`   | Blocks `2.0.0`     |  
| `~`    | Patch Versions Only    | `~1.2.3` → `1.2.4`   | Blocks `1.3.0`     |  

--- 