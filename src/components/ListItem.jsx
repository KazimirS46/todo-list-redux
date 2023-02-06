import { useState } from 'react';

export const ListItem = (index) => {
  const [stateCheckbox, setStateCheckbox] = useState(false);

  const checkboxSwitch = () => {
    setStateCheckbox((prev) => !prev);
  };
  return (
    <>
      <li className='todo-item'>
        <label htmlFor={`i${index}`}>
          <input className='todo-checkbox' type='checkbox' value='x' id={`i${index}`} onChange={checkboxSwitch} />
        </label>
        <span className={stateCheckbox ? 'label-marked' : 'label-notMarked'}>дело</span>
      </li>
    </>
  );
};
