import { FC } from "react"
import { Typography } from "../typography/Typography"
import { NOT_AVAILABLE_URL, noPoster } from "../../utils/constans"
import styles from './Card.module.css'

type Props = {
    url: string,
    title: string,
    year: string,
    active: boolean,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
}

export const Card: FC<Props> = ({ url, title, year, active, onClick }) => {

    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img className={active ? `${styles.checked}` : ''} src={url === NOT_AVAILABLE_URL ? noPoster : url} alt="poster" />
                </div>
                <Typography text={title} />
                <span className={styles.year}>{year}</span>
            </div>
        </div>
    )
}