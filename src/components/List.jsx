import { ListItem } from './ListItem';
import arr from '../resources/array.json';

export const List = () => {
  return (
    <ul className='todo-list'>
      {/* <ListItem /> */}
      {arr.map((item, idx) => (
        <ListItem key={idx} {...item} />
      ))}
    </ul>
  );
};
