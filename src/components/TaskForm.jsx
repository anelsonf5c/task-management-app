import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
