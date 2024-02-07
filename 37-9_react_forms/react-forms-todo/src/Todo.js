import React from 'react';

function Todo({ todo, index, removeTodo }) {
  return (
    <div>
      <span>{todo.task}</span>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
}

export default Todo;