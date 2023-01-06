import React, { CSSProperties } from 'react';
import styles from './styles.module.css';

type PropsType = {
    handler: () => void
    children: React.ReactNode
    disabled?: boolean
    style?: CSSProperties | undefined;
}
  
export const SuperButton: React.FC<PropsType> = ({handler, disabled , children, style}) => {

    const onClickHandler = () => {
        handler()
    }

  return (
    <button style={style} className={styles.button} disabled={disabled} onClick={onClickHandler}>{children}</button>
  )
}
