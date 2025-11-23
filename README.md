# To-Do List App with React

## Overview

This is a simple To-Do app built with React, covering basic fundamental concepts.

### Features

* Add tasks
* Mark tasks as done
* Delete tasks

### Topics Covered

* React components
* `useState` hook
* Event handling
* Rendering lists with `map()`

---

# Part 1: Scaffold React App

1. Open your terminal (system terminal or VS Code terminal).
2. Navigate to the folder where you want the project.
3. Run:

```
npx create-react-app todo-app
cd todo-app
npm start
```

4. Your browser should automatically open at:

```
http://localhost:3000
```

---

# Part 2: Clean Up Default Code

1. Open `src/App.js`.
2. Remove 

```
import logo from './logo.svg';
```

3. Remove everything **inside**:

```
<div className="App">
```

4. Replace it with:

```
<h1>To Do List in React</h1>
```

---

# Part 3: Create State for Tasks

1. At the top of the file, import `useState`:

```
import { useState } from "react";
```

2. Inside `App()`, **before** the `return`, add:

```
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");
```

---

# Part 4: Create `addTask` Function

Inside `App()`, before the `return`, add:

```
const addTask = () => {
  if (input.trim() !== "") {
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  }
};
```

---

# Part 5: Add Input and Button

Below the `<h1>`, add:

```
<input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Enter a task"
/>
<button onClick={addTask}>Add task</button>
```

---


# Part 6: Add `toggleTask` and `deleteTask`

Before the `return`, add:

```
const toggleTask = (index) => {
  const newTasks = [...tasks];
  newTasks[index].completed = !newTasks[index].completed;
  setTasks(newTasks);
};

const deleteTask = (index) => {
  const newTasks = tasks.filter((_, i) => i !== index);
  setTasks(newTasks);
};
```

---

# Part 7: Display the Tasks

Below the button, add:

```
<ul>
  {tasks.map((task, index) => (
    <li key={index}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => toggleTask(index)}>Done</button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  ))}
</ul>
```

---

