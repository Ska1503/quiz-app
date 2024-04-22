import { notFound } from "../../utils/constans"
import { Typography } from "../typography/Typography"
import styles from "./NotFound.module.css"

export const NotFound = () => {
    
    return (
        <div className={styles.container}>
            <img src={notFound} alt='Not-found-img' />
            <Typography text='Oops, no movie found' />
        </div>
    )
}