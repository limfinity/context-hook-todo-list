import ky from 'ky';

const isProd = process.env.NODE_ENV === 'production';

const prefixUrl = isProd ? '' : 'http://localhost:3001';

const api = ky.create({ prefixUrl });

export const fetchTodoList = async () => await api.get('todos').json();
