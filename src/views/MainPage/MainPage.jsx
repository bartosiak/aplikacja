import { Link, useLocation } from "react-router-dom";
import styles from "./MainPage.module.css";
import { Button } from "../../components/Button/Button";

export function MainPage() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <div className={styles.center}>
            {isHomePage && (
                <Link to={"/information/players"}>
                    <Button>Track match</Button>
                </Link>
            )}
        </div>
    );
}
