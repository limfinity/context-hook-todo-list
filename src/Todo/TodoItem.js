import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}
      </span>

      <div class="buttons">
        <button
          class="button is-rounded is-small is-primary is-outlined"
          onClick={() => toggleTodo(index)}
        >
          {todo.isCompleted ? 'Open' : 'Complete'}
        </button>
        <button
          class="button is-rounded is-small is-danger is-outlined"
          onClick={() => removeTodo(index)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
