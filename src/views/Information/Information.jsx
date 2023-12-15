import {
    Link,
    NavLink,
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";
import styles from "./Information.module.css";
import { useEffect } from "react";
import { Button } from "../../components/Button/Button";

export function Information() {
    const location = useLocation();

    const information = ["players", "rules", "surface"];
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/informations/") {
            navigate("/informations/players");
        }
    }, [location.pathname, navigate]);

    return (
        <div>
            <ul className={styles.bar}>
                {information.map((info) => (
                    <NavLink key={info} to={`/information/${info}`}>
                        {({ isActive }) => (
                            <li className={isActive ? styles.active : ""}>
                                {info}
                            </li>
                        )}
                    </NavLink>
                ))}
            </ul>
            <Outlet />
            <Link to="/track-match">
                <Button>Track match</Button>
            </Link>
        </div>
    );
}
