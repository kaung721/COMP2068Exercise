To-Do List App with React
Overview
This is a very simple To-Do app made with React covering very basic concepts of React.
Features:
• Add tasks
• Mark tasks as done
• Delete tasks
Topics Covered:
• Components
• useState hook
• Event handling
• Rendering lists with map()
• Conditional rendering

Part 1: Scaffold React App

1. Open terminal (Either in your computer or in Visual Studio Code)
2. Navigate to the folder you want this project to be in
3. Run
   a. npx create-react-app todo-app
   b. cd todo-app
   c. npm start
4. It should open your browser and run on http://localhost:3000

Part 2: Clean up default code

1. Open src/App.js
2. Remove everything inside <div className="App"> and write <h1>To Do List in React</h1>

Part 3: Create State for tasks

1. Import useState at the top
   • import { useState } from "react";
2. Inside App() before the return() before the return() before the return(), add a state for tasks
   • const [tasks, setTasks] = useState([]);
   • const [input, setInput] = useState("");

Part 4: Add Input and Button

1. Below <h1>, add an input and button
   <input
   type="text"
   value={input}
   onChange={(e) => setInput(e.target.value)}
   placeholder="Enter a task"
   />
   <button onClick={addTask}>Add task</button>

Part 5: Create a function called addTask

1. Inside App() before the return() before the return(), add

   const addTask = () => {
   if (input.trim() !== ""){
   setTasks([...tasks, { text: input, completed: false }]);
   setInput("");
   }
   };

Part 6: Display the tasks

1. Below the button, add this to render the tasks as a list
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

Part 7: Add toggleTask and deleteTask

1. Inside App() before the return(), add

const toggleTask = (index) => {
const newTasks = [...tasks];
newTasks[index].completed = !newTasks[index].completed;
setTasks(newTasks);
};
const deleteTask = (index) => {
const newTasks = tasks.filter((_, i) => i !== index);
setTasks(newTasks);
};
