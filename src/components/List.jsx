import React from 'react';
import { ListItem } from './ListItem';
import list from '../resources/list.json';

export const List = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    setTodos(list);
  }, []);

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className='todo-list'>
      {todos.map((item) => (
        <ListItem key={item.id} id={item.id} title={item.title} delTodos={deleteTodos} />
      ))}
    </ul>
  );
};
