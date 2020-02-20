import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</span>

      <div className="buttons">
        <button className="button is-rounded is-small is-primary is-outlined" onClick={onToggle}>
          {todo.isCompleted ? 'Open' : 'Complete'}
        </button>
        <button className="button is-rounded is-small is-danger is-outlined" onClick={onRemove}>
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
