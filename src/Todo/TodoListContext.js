import React, { useState } from 'react';

import { fetchTodoList } from './TodoApi';

const TodoListContext = React.createContext([{}, () => {}]);

const TodoListProvider = props => {
  const [state, setState] = useState({ todos: [] });

  return (
    <TodoListContext.Provider value={[state, setState]}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoListProvider, fetchTodoList };
