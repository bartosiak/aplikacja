import { useLocation } from "react-router-dom";
import arrowLeft from "../../assets/arrowLeft3.png"
import styles from "./TopBar.module.css"

export function TopBar(){
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (<div className={styles.mainNav}>
        {!isHomePage && <h3 className={styles.center}>Player 1 vs Player 2</h3>}
        {isHomePage ? <h1 className={styles.center}>Tennis Match Statistics</h1> : <img className={styles.goBack} src={arrowLeft} alt="left arrow" />}
        
    </div>)
}