import React from 'react';
import { useSelector } from 'react-redux';

import styles from './list.module.css';

import { ListItem } from './ListItem';
import { EmptyList } from '../EmptyList';
import { FieldAddingTask } from './FieldAddingTask';

export const List = () => {
  const todos = useSelector((state) => state.todosHandler.todos);

  return (
    <>
      <FieldAddingTask />
      {todos.length ? (
        <ul className={styles.todoList}>
          {todos.map((item) => (
            <ListItem key={item.id} id={item.id} title={item.title} />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </>
  );
};
