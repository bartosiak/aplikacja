import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";


export function MainPage() {
    return (
    <div className={styles.center}>
        {/* <Link to="/informations"><button className={styles.btn}>Track match</button></Link> */}
        <Link className={styles.btn} to="/">Track match</Link>
    </div>
    )
    
    


}