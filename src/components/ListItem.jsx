import { useState } from 'react';

export const ListItem = ({ id, title }) => {
  const [stateCheckbox, setStateCheckbox] = useState(false);

  const checkboxSwitch = () => {
    setStateCheckbox((prev) => !prev);
  };
  return (
    <>
      <li className='todo-item'>
        <label htmlFor={`i${id}`}>
          <input className='todo-checkbox' type='checkbox' value='x' id={`i${id}`} onChange={checkboxSwitch} />
        </label>
        <span className={stateCheckbox ? 'label-marked' : 'label-notMarked'}>{title}</span>
      </li>
    </>
  );
};
