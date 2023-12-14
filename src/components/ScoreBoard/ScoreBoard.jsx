import styles from "./ScoreBoard.module.css";

export function ScoreBoard({
    player1Points,
    player2Points,
    player1Gems,
    player2Gems,
}) {
    console.log("Player 1 Gems: ", typeof player1Gems);
    console.log("Player 2 Gems: ", typeof player2Gems);
    return (
        <>
            <div className={styles.scoreBoard}>
                <div className={styles.item}>Player 1</div>
                <div className={styles.item}>{player1Gems}</div>
                <div className={styles.item}>0</div>
                <div className={styles.item}>0</div>
                <div className={styles.item}>Player 2</div>
                <div className={styles.item}>{player2Gems}</div>
                <div className={styles.item}>0</div>
                <div className={styles.item}>0</div>
            </div>
            <div className={styles.players}>
                <h3 className={styles.player}>Player 1</h3>
                <p className={styles.points}>
                    {player1Points} : {player2Points}
                </p>
                <h3 className={styles.player}>Player 2</h3>
            </div>
        </>
    );
}
