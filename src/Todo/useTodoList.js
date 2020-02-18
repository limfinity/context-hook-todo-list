import { useContext } from 'react';
import { TodoListContext } from './TodoListContext';

const useTodoList = () => {
  const [contextState, setContextState] = useContext(TodoListContext);

  const addTodo = text => {
    const newTodos = [...contextState.todos, { text }];
    setContextState(state => ({ ...state, todos: newTodos }));
  };

  const toggleTodo = index => {
    const newTodos = [...contextState.todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setContextState(state => ({ ...state, todos: newTodos }));
  };

  const removeTodo = index => {
    const newTodos = [...contextState.todos];
    newTodos.splice(index, 1);
    setContextState(state => ({ ...state, todos: newTodos }));
  };

  return {
    addTodo,
    removeTodo,
    todoList: contextState.todos,
    toggleTodo
  };
};

export default useTodoList;
