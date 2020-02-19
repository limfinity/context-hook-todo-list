import { useContext, useEffect, useCallback } from 'react';
import { TodoListContext, fetchTodoList } from './TodoListContext';

const useTodoList = () => {
  const [contextState, setContextState] = useContext(TodoListContext);
  const todos = contextState.todos;

  const updateTodos = useCallback(
    newTodos => {
      setContextState(state => ({ ...state, todos: newTodos }));
    },
    [setContextState]
  );

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    updateTodos(newTodos);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    updateTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodos(newTodos);
  };

  useEffect(() => {
    if (todos.length === 0) {
      fetchTodoList().then(updateTodos);
    }
  }, [todos, updateTodos]);

  return {
    addTodo,
    removeTodo,
    todoList: contextState.todos,
    toggleTodo
  };
};

export default useTodoList;
