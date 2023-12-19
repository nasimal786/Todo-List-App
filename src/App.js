import "./App.css";
import React, { useEffect, useState } from "react";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./services/todoService";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const todos = await getTodos();
        setTasks(Array.isArray(todos) ? todos : []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (newTaskTitle.trim() !== "") {
      try {
        const newTask = {
          title: newTaskTitle,
          completed: false,
        };
        const addedTask = await addTodo(newTask);
        setTasks((prevTasks) => [...prevTasks, addedTask]);
        setNewTaskTitle("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const toggleTask = async (taskId, newCompleted) => {
    try {
      const updatedTaskList = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: newCompleted } : task
      );
      setTasks(updatedTaskList);
      await updateTodo(taskId, { completed: newCompleted });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteTodo(taskId);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container">
      <h1>ToDo List App</h1>
      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button className="todo-button" onClick={addTask}>
          Add
        </button>
      </div>
      <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
