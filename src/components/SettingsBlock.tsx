import React from 'react';
import { BlockType } from '../Types/BlockType';
import { SuperButton } from './SuperButton';
import { SuperInput } from './SuperInput';
import styles from './styles.module.css';

type SettingsBlockType = {
  setMaxValue: (maxValue: number) => void;
  setStartValue: (startValue: number) => void;
};

export const SettingsBlock: React.FC<BlockType & SettingsBlockType> = ({
  maxValue,
  startValue,
  setCounter,
  typeCounter,
  setMaxValue,
  setStartValue,
  open,
  setOpen,
}) => {
  const setToLocalStorageHandler = () => {
    setCounter(startValue);
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(startValue));
    setOpen(!open);
  };

  const isDisabled =
    !typeCounter || startValue === maxValue || maxValue < startValue || startValue < 0;

  return (
    <div className={styles.Block}>
      <SuperInput
        title="max value"
        value={maxValue}
        setValue={setMaxValue}
        setCounter={setCounter}
      />
      <SuperInput
        title="start value"
        value={startValue}
        setValue={setStartValue}
        setCounter={setCounter}
      />
      <SuperButton style={{width: '300px'}} disabled={isDisabled} handler={setToLocalStorageHandler}>
        Set
      </SuperButton>
    </div>
  );
};

export default SettingsBlock;
