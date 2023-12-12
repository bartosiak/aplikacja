import styles from "./Button.module.css";

export function Button() {
    return (
        <div className={styles.center}>
            <button className={styles.btn}>Track match</button>
        </div>
    );
}
