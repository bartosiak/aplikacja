import styles from "./ScoreBoard.module.css";

export function ScoreBoard() {
    return (
        <div className={styles.scoreBoard}>
            <div className={styles.item}>Player 1</div>
            <div className={styles.item}>0</div>
            <div className={styles.item}>0</div>
            <div className={styles.item}>0</div>
            <div className={styles.item}>Player 2</div>
            <div className={styles.item}>0</div>
            <div className={styles.item}>0</div>
            <div className={styles.item}>0</div>
        </div>
    );
}
