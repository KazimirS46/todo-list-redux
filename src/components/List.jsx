import { ListItem } from './ListItem';

export const List = () => {
  return (
    <ul className='todo-list'>
      {/* <ListItem /> */}
      {[...Array(10)].map((item, idx) => (
        <ListItem key={idx} index={idx} />
      ))}
    </ul>
  );
};
