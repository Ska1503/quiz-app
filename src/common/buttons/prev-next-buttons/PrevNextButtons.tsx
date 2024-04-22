import { FC } from "react"
import { BackIcon } from "../../../assets/icons/BackIcon"
import { NextIcon } from "../../../assets/icons/NextIcon"
import styles from './PrevNextButtons.module.css'

type Props = {
    onClickBack: () => void,
    onClickNext: () => void,
    disabledBack: boolean,
    disabledNext: boolean,
}

export const PrevNextButtons: FC<Props> = ({ onClickBack, onClickNext, disabledBack, disabledNext }) => {

    return (
        <div className={styles.buttons}>
            <div className={disabledBack ? `${styles.back} ${styles.disabledBack}` : styles.back} onClick={onClickBack}><BackIcon /></div>
            <div className={disabledNext ? `${styles.next} ${styles.disabledNext}` : styles.next} onClick={onClickNext}><NextIcon /></div>
        </div>
    )
}