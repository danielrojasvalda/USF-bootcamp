import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
