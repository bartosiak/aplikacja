import styles from "./Button.module.css";

export function Button({ children }) {
    return (
        <div className={styles.center}>
            <button className={styles.btn}>{children}</button>
        </div>
    );
}
