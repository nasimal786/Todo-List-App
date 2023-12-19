import React from "react";

const TodoItem = ({ index, task, onToggle, onDelete }) => {
  return (
    <tr className="todo-item">
      <td>{index}</td>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id, !task.completed)}
        />
      </td>
      <td>{task.title}</td>
      <td>
        <button className="todo-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
