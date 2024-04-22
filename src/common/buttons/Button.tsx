import { FC } from "react";
import styles from "./Button.module.css"

type Props = {
  text: string;
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const Button: FC<Props> = ({ text, onClick, disabled }) => {
  
  return(
    <>
      <button 
          className={`${styles.button} ${disabled ? styles.disabled : ''}`}
          disabled={disabled}
          onClick={onClick}
      >
          {text}
      </button>
    </>
  )
}
