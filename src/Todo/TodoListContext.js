import React, { useState } from 'react';

import {
  createTodoAPI,
  deleteTodoAPI,
  fetchTodosAPI,
  updateTodoAPI
} from './TodoApi';

const TodoListContext = React.createContext([{}, () => {}]);

const TodoListProvider = props => {
  const [state, setState] = useState({ todos: [] });

  return (
    <TodoListContext.Provider value={[state, setState]}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export {
  TodoListContext,
  TodoListProvider,
  createTodoAPI as createTodo,
  deleteTodoAPI as deleteTodo,
  fetchTodosAPI as fetchTodos,
  updateTodoAPI as updateTodo
};
