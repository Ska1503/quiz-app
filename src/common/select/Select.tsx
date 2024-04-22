import { FC } from "react"
import styles from "./Select.module.css"

type Props = {
  text: string,
  icon: string,
  active: boolean,
  onClick: (e: React.MouseEvent<HTMLElement>) => void,
}

export const Select: FC<Props> = ({ text, icon, active, onClick }) => {

  return(
    <div className={active ? `${styles.container} ${styles.checked}` : styles.container} onClick={onClick}>
      <div className={styles.inner}>
          <div className={styles.content}>
            <img src={icon} alt="icon" />
            <span>{text}</span>
          </div>
          <span className={active ? `${styles.checkbox} ${styles.checkboxActive}` : styles.checkbox} />
      </div>
    </div>
  )
}
