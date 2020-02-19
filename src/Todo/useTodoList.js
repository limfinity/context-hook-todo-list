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
    const todo = { text, isCompleted: false };
    const newTodos = [...todos, todo];

    createTodo(todo)
      .then(() => {
        updateTodos(newTodos);
      })
      .catch(console.error);
  };

  const toggleTodo = id => {
    const newTodos = [...todos];
    const index = newTodos.map(todo => todo.id).indexOf(id);
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    const newTodo = newTodos[index];

    updateTodo(newTodo)
      .then(() => {
        updateTodos(newTodos);
      })
      .catch(console.error);
  };

  const removeTodo = id => {
    const newTodos = [...todos];
    const index = newTodos.map(todo => todo.id).indexOf(id);
    newTodos.splice(index, 1);

    deleteTodo(id)
      .then(() => {
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
