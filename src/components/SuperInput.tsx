import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setCounter, setMaxValue, setStartValue } from '../store/reducers/counterSlice';
import styles from './styles.module.css';

type SuperInputPropsType = {
  type: 'min' | 'max'
  title: string;
};

export const SuperInput: React.FC<SuperInputPropsType> = ({type ,title }) => {
  const {startValue, maxValue} = useAppSelector(state => state.counterReducer);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    type === 'max' && dispatch(setMaxValue(+e.currentTarget.value));
    type === 'min' && dispatch(setStartValue(+e.currentTarget.value))
    dispatch(setCounter("enter values and press 'set'"));
  };

  return (
    <div className={styles.inputBlock}>
      <span className={styles.title}>{title}: </span>
      <input className={styles.input} type={'number'} value={type === 'max' ? maxValue : startValue} onChange={onChangeHandler} />
    </div>
  );
};
