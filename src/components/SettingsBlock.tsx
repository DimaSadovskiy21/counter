import React from 'react';
import { BlockType } from '../Types/BlockType';
import { SuperButton } from './SuperButton';
import { SuperInput } from './SuperInput';
import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSettings } from '../store/reducers/counterSlice';

export const SettingsBlock: React.FC<BlockType> = ({
  typeCounter,
  open,
  setOpen,
}) => {
  const {startValue, maxValue} = useAppSelector(state => state.counterReducer);
  const dispatch = useAppDispatch();
  const setToLocalStorageHandler = () => {
    dispatch(setSettings({startValue, maxValue}));
    setOpen(!open);
  };

  const isDisabled =
    !typeCounter || startValue === maxValue || maxValue < startValue || startValue < 0;

  return (
    <div className={styles.Block}>
      <SuperInput type="max" title="max value" />
      <SuperInput type="min" title="start value" />
      <SuperButton
        style={{ width: '300px' }}
        disabled={isDisabled}
        handler={setToLocalStorageHandler}>
        Set
      </SuperButton>
    </div>
  );
};

export default SettingsBlock;
