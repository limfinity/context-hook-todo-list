import React from 'react';

const TodoListContext = React.createContext([{}, () => {}]);

const TodoListProvider = props => {
  const list = {
    items: [
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
  };

  return (
    <TodoListContext.Provider value={list}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoListProvider };

// import React, { useState } from 'react';

// const TodoListContext = React.createContext([{}, () => {}]);

// const TodoListProvider = props => {
//   const [state, setState] = useState({
//     items: [
//       {
//         text: 'Learn about React',
//         isCompleted: false
//       },
//       {
//         text: 'Meet friend for lunch',
//         isCompleted: false
//       },
//       {
//         text: 'Build really cool todo app',
//         isCompleted: false
//       }
//     ]
//   });

//   return (
//     <TodoListContext.Provider value={[state, setState]}>
//       {props.children}
//     </TodoListContext.Provider>
//   );
// };

// export { TodoListContext, TodoListProvider };
