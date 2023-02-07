import React from 'react';

import styles from './field.module.css';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/slices/listSlice';

const FIELDTEXT = {
  holder: 'Добавь задачу здесь',
  addButton: 'Добавить',
};

export const FieldAddingTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');

  const onChangeInput = (evt) => {
    setInputValue(evt.target.value);
  };

  const clickAddButton = () => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  const clickKey = (event) => {
    event.key === 'Enter' && clickAddButton();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input className={styles.field} type='text' placeholder={FIELDTEXT.holder} value={inputValue} onChange={onChangeInput} onKeyDown={clickKey}></input>
        {/* <button onClick={clickAddButton}>{FIELDTEXT.addButton}</button> */}
        <button className={styles.glowingBtn} onClick={clickAddButton}>
          <span className={styles.glowingTxt}>
            Д<span className={styles.faultyLetter}>о</span>бавить
          </span>
        </button>
      </div>
    </div>
  );
};
