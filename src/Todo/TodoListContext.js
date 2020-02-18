import React, { useState } from 'react';

const TodoListContext = React.createContext([{}, () => {}]);

const TodoListProvider = props => {
  const [state, setState] = useState({
    todos: [
      {
        text: 'Learn about React',
        isCompleted: false
      },
      {
        text: 'Meet friend for lunch',
        isCompleted: false
      },
      {
        text: 'Build really cool todo app',
        isCompleted: false
      }
    ]
  });

  return (
    <TodoListContext.Provider value={[state, setState]}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoListProvider };
