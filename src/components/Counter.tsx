import { useEffect, useState } from 'react';
import SettingsBlock from './SettingsBlock';
import { CounterBlock } from './CounterBlock';
import styles from './styles.module.css';
import { useAppSelector } from '../hooks/redux';

const Counter = () => {
 
  const [open, setOpen] = useState(false);

  const {counter} = useAppSelector((state) => state.counterReducer);
 
  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  const typeCounter = typeof counter === 'string';

  return (
    <div className={styles.wrapper}>
      <CounterBlock
        counter={counter}
        typeCounter={typeCounter}
        open={open}
        setOpen={setOpen}
      />
      {open && (
        <SettingsBlock
          typeCounter={typeCounter}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Counter;
