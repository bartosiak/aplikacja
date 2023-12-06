import { NavLink, Outlet } from "react-router-dom";
import styles from "./Informations.module.css";

export function Informations() {
    const information = ["players", "rules", "surface"]
    return (
        <div >
                <ul className={styles.bar}>
                    {information.map((info) => (
                        <NavLink key={info} to={`/informations/${info}`}>
                            <li className={styles.capitalize}>{info}</li>
                        </NavLink>
                    ))}
                </ul>
                <Outlet />
        </div>
    )
}