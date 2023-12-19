import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <table className="todo-list">
      <thead>
        <tr className="todo-header">
          <th>No</th>
          <th>Task</th>
          <th className="header-title">Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          
          <TodoItem
            key={task.id}
            index={index + 1}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
          
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
