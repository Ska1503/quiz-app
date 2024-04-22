import { FC } from "react"
import styles from "./Typography.module.css"

type Props = {
    text: string,
}

export const Typography: FC<Props> = ({ text }) => {

    return (
        <h3 className={styles.text}>{text}</h3>
    )
}