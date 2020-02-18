import React from 'react';
import './App.css';

import TodoList from './Todo/TodoList';
import { TodoListProvider } from './Todo/TodoListContext';

function App() {
  return (
    <TodoListProvider>
      <TodoList />;
    </TodoListProvider>
  );
}

export default App;
