const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  const response = await fetch(API_URL);
  const todos = await response.json();
  return todos;
};

export const addTodo = async (newTask) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  const todo = await response.json();
  return todo;
};

export const updateTodo = async (taskId, updatedTask) => {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  const todo = await response.json();
  return todo;
};

export const deleteTodo = async (taskId) => {
  await fetch(`${API_URL}/${taskId}`, {
    method: "DELETE",
  });
};
