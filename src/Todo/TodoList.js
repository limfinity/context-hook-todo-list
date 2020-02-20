import React from 'react';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import useTodoList from './useTodoList';

const TodoList = () => {
  const { addTodo, toggleTodo, removeTodo, todoList } = useTodoList();

  return (
    <div className="app">
      <div className="todo-list">
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onRemove={() => removeTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoList;
