import { useContext } from 'react';
import { TodoListContext } from './TodoListContext';

const useTodoList = () => {
  const list = useContext(TodoListContext);

  return {
    list
  };
};

export default useTodoList;
