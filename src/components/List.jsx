import React from 'react';

import { ListItem } from './ListItem';
import { EmptyList } from './EmptyList';
import { FieldAddingTask } from './FieldAddingTask';

export const List = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    setTodos([]);
  }, []);

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  console.log(todos);

  const addTodo = (todo) => {
    setTodos([...todos, { title: String(todo), id: todos.length }]);
  };

  console.log(todos);

  return (
    <>
      <FieldAddingTask add={addTodo} />
      {todos.length ? (
        <ul className='todo-list'>
          {todos.map((item) => (
            <ListItem key={item.id} id={item.id} title={item.title} delTodos={deleteTodos} />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </>
  );
};
