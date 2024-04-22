import { FC } from "react";
import { BackIcon } from "../../assets/icons/BackIcon"
import { BurgerMenuIcon } from "../../assets/icons/BurgerMenuIcon";
import styles from "./Header.module.css"

type Props = {
    currentStep: number,
    onClick: () => void,
    disabled?: boolean,
}


export const Header: FC<Props> = ({ onClick, disabled, currentStep }) => {

    const progress = `${currentStep * 25}%`

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={disabled ? `${styles.iconBack} ${styles.iconBackDisabled}`: styles.iconBack} onClick={onClick}>
                        <BackIcon />
                    </div>
                    <div className={styles.menuIcon}>
                        <span>{progress}</span>
                        <BurgerMenuIcon />
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.progress} style={{ width: progress }} />
                </div>
            </div>
        </header>
    )
}