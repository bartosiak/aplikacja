import arrowLeft from "../../assets/arrowLeft3.png"
import styles from "./TopBar.module.css"

export function TopBar(){
    return (<div className={styles.mainNav}>
        <h1>Tennis Match Statistics</h1>
        <img className={styles.goBack} src={arrowLeft} alt="" />
    </div>)
}