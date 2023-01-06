import React from 'react';
import { SuperButton } from './SuperButton';
import styles from './styles.module.css';
import { BlockType } from '../Types/BlockType';

type CounterBlockType = {
  counter: string | number;
};

export const CounterBlock: React.FC<BlockType & CounterBlockType> = ({
  counter,
  maxValue,
  startValue,
  setCounter,
  typeCounter,
  open,
  setOpen,
}) => {
  const onClickIncrementHandler = () => {
    setCounter(+counter + 1);
  };

  const onClickResetHandler = () => {
    setCounter(startValue);
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
