import React from 'react';
import { SuperButton } from './SuperButton';
import styles from './styles.module.css';
import { BlockType } from '../Types/BlockType';
import { incrementCounter, setCounter } from '../store/reducers/counterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

type CounterBlockType = {
  counter: string | number;
};

export const CounterBlock: React.FC<BlockType & CounterBlockType> = ({
  counter,
  typeCounter,
  open,
  setOpen,
}) => {
  const { startValue, maxValue } = useAppSelector((state) => state.counterReducer);
  const dispatch = useAppDispatch();

  const onClickIncrementHandler = () => {
    dispatch(incrementCounter());
  };

  const onClickResetHandler = () => {
    dispatch(setCounter(startValue));
  };

  const onClickSettingsHandler = () => {
    setOpen(!open);
  };
  const isDisabled = startValue < 0 || startValue === maxValue || maxValue < startValue;
  const counterClass =
    styles.counter +
    (counter === maxValue ? ' ' + styles.counterHigh : '') +
    (isDisabled || typeCounter ? ' ' + styles.counterDisabled : '');

  const counterView = isDisabled ? <span>incorect number</span> : <span>{counter}</span>;

  return (
    <div className={styles.Block}>
      <div className={counterClass}>{counterView}</div>
      <div className={styles.buttonBlock}>
        <SuperButton
          disabled={counter === maxValue || typeCounter}
          handler={onClickIncrementHandler}>
          Increment
        </SuperButton>
        <SuperButton disabled={counter === startValue || typeCounter} handler={onClickResetHandler}>
          Reset
        </SuperButton>
        <SuperButton disabled={typeCounter} handler={onClickSettingsHandler}>
          Settings
        </SuperButton>
      </div>
    </div>
  );
};
