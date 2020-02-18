import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}

      <div>
        <button onClick={() => toggleTodo(index)}>
          {todo.isCompleted ? 'Open' : 'Complete'}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default TodoItem;
