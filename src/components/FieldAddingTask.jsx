import React from 'react';

const FIELDTEXT = {
  holder: 'Добавь задачу здесь',
  addButton: 'Добавить',
};

export const FieldAddingTask = ({ add }) => {
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInput = (evt) => {
    setInputValue(evt.target.value);
  };

  const clickAddButton = () => {
    add(inputValue);
    setInputValue('');
  };

  return (
    <div className='container'>
      <div className='content'>
        <input type='text' className='addTodosInput' placeholder={FIELDTEXT.holder} value={inputValue} onChange={onChangeInput}></input>
        <button onClick={clickAddButton}>{FIELDTEXT.addButton}</button>
      </div>
    </div>
  );
};
