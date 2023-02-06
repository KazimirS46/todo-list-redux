import React from 'react';
import { ListItem } from './ListItem';
import list from '../resources/list.json';

export const List = () => {
  return (
    <ul className='todo-list'>
      {list.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
