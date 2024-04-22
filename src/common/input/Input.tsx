import { FC, ChangeEvent } from "react";
import styles from "./Input.module.css"

type Props = {
    value: string,
    error?: boolean,
    placeholder?: string,
    errorText?: string,
    onChange: (value: string) => void,
}

export const Input: FC<Props> = ({ value, placeholder, error, errorText, onChange }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    return (
        <>
            <input 
                className={error ? `${styles.input} ${styles.error}` : styles.input}  
                value={value} 
                type="text" 
                placeholder={placeholder} 
                onChange={handleChange}
            />
            {error && <span className={styles.errorMessage}>{errorText}</span>}
        </>
        
    ) 
}