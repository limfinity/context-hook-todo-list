import React from 'react';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import useTodoList from './useTodoList';

function TodoList() {
  const { addTodo, toggleTodo, removeTodo, todoList } = useTodoList();

  return (
    <div className="app">
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default TodoList;
