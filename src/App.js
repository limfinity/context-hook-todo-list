import React from 'react';
import './App.css';

import TodoList from './Todo/TodoList';
import { TodoListProvider } from './Todo/TodoListContext';

const App = () => {
  return (
    <TodoListProvider>
      <TodoList />
    </TodoListProvider>
  );
};

export default App;
