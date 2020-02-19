import ky from 'ky';

const isProd = process.env.NODE_ENV === 'production';

const prefixUrl = isProd ? '' : 'http://localhost:3001';

const api = ky.create({ prefixUrl });

export const createTodoAPI = async todo =>
  await api.post('todos', { json: todo }).json();

export const deleteTodoAPI = async id => await api.delete(`todos/${id}`);

export const fetchTodosAPI = async () => await api.get('todos').json();

export const updateTodoAPI = async todo =>
  await api.put(`todos/${todo.id}`, { json: todo }).json();
