function TaskItem({ task, onToggle, onDelete }) {
    return (
      <li>
        <span
          onClick={() => onToggle(task.id)}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    );
  }
  
  export default TaskItem;
  