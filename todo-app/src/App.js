import './App.css';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState(""); 
  const addTask = () => {
  if (input.trim() !== "") {
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
    }
  };
  const toggleTask = (index) => {
  const newTasks = [...tasks];
  newTasks[index].completed = !newTasks[index].completed;
  setTasks(newTasks);
};

const deleteTask = (index) => {
  const newTasks = tasks.filter((_, i) => i !== index);
  setTasks(newTasks);
};
  return (
    <div className="App">
      <h1>To Do List in React</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add task</button>
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
    </div>
  );
}

export default App;
