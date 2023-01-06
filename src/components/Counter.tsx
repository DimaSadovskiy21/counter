import { useEffect, useState } from 'react';
import SettingsBlock from './SettingsBlock';
import { CounterBlock } from './CounterBlock';
import styles from './styles.module.css';

const Counter = () => {
  const [counter, setCounter] = useState<number | string>(0);
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setStartValue] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let counterValue = localStorage.getItem('counter');
    counterValue && setCounter(JSON.parse(counterValue));
    let maxValue = localStorage.getItem('maxValue');
    maxValue && setMaxValue(+maxValue);
    let startValue = localStorage.getItem('startValue');
    startValue && setStartValue(+startValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  const typeCounter = typeof counter === 'string';

  return (
    <div className={styles.wrapper}>
      <CounterBlock
        counter={counter}
        maxValue={maxValue}
        startValue={startValue}
        setCounter={setCounter}
        typeCounter={typeCounter}
        open={open}
        setOpen={setOpen}
      />
      {open && <SettingsBlock
        maxValue={maxValue}
        startValue={startValue}
        setCounter={setCounter}
        typeCounter={typeCounter}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
        open={open}
        setOpen={setOpen}
      />}
    </div>
  );
};

export default Counter;
