import React from 'react';

export const FieldAddingTask = ({ add }) => {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInput = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div className='container'>
      <div className='content'>
        <input type='text' className='addTodosInput' placeholder='Добавь задачу здесь' value={inputValue} onChange={onChangeInput}></input>
        <button onClick={() => add(inputValue)}>Добавить</button>
      </div>
    </div>
  );
};
