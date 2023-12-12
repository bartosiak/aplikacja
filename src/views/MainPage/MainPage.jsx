import { Link, useLocation } from "react-router-dom";
import styles from "./MainPage.module.css";

export function MainPage() {
    // const mockHistory = {
    //     id: 1,
    //     name: Adrian,
    //     against: oponent

    // }
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <div className={styles.center}>
            {isHomePage && (
                <Link to={"/information/players"}>
                    <button className={styles.btn}>Track match</button>
                </Link>
            )}
            {/* <Link className={styles.btn} to="/informations/players">Track match</Link> */}
        </div>
    );
}
