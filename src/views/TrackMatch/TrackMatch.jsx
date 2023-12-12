import styles from "./TrackMatch.module.css";
import { ScoreBoard } from "../../components/ScoreBoard/ScoreBoard";

export function TrackMatch() {
    return (
        <>
            <ScoreBoard />
            <div className={styles.container}>
                <div className={styles.players}>
                    <h3 className={styles.player}>Player 1</h3>
                    <p className={styles.points}>0:0</p>
                    <h3 className={styles.player}>Player 2</h3>
                </div>
                <div className={styles.center}>
                    <button className={styles.btn}>+</button>
                    <button className={styles.btn}>+</button>
                </div>
            </div>
        </>
    );
}
