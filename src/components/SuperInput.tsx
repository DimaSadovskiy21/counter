import React, { ChangeEvent } from 'react';
import styles from './styles.module.css';

type SuperInputPropsType = {
    title: string;
    value: number;
    setValue: (value:number) => void;
    setCounter: (counter: string) => void;
}



export const SuperInput:React.FC<SuperInputPropsType> = ({title ,value, setValue, setCounter}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        setCounter("enter values and press 'set'")
    }
  return (
    <div className={styles.inputBlock}>
        <span className={styles.title}>{title}: </span>
        <input className={styles.input} type={'number'} value={value} onChange={onChangeHandler} />
    </div>
    
  )
}

