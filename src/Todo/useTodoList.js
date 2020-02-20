import { useContext, useEffect, useCallback } from 'react';
import {
  TodoListContext,
  createTodo,
  deleteTodo,
  fetchTodos,
  updateTodo
} from './TodoListContext';

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
    const newTodo = { text, isCompleted: false };

    createTodo(newTodo)
      .then(todo => {
        const newTodos = [...todos, todo];
        updateTodos(newTodos);
      })
      .catch(console.error);
  };

  const toggleTodo = id => {
    const index = todos.map(todo => todo.id).indexOf(id);
    const newTodo = todos[index];
    newTodo.isCompleted = !newTodo.isCompleted;

    updateTodo(newTodo)
      .then(todo => {
        const newTodos = [...todos];
        newTodos[index] = todo;
        updateTodos(newTodos);
      })
      .catch(console.error);
  };

  const removeTodo = id => {
    deleteTodo(id)
      .then(() => {
        const newTodos = [...todos];
        const index = newTodos.map(todo => todo.id).indexOf(id);
        newTodos.splice(index, 1);
        updateTodos(newTodos);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (todos.length === 0) {
      fetchTodos()
        .then(updateTodos)
        .catch(console.error);
    }
  }, [todos, updateTodos]);

  return {
    addTodo,
    removeTodo,
    todoList: todos,
    toggleTodo
  };
};

export default useTodoList;
