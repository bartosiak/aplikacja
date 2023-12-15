import styles from "./ScoreBoard.module.css";

export function ScoreBoard({ player1Points, player2Points, scoreGems }) {

    return (
        <>
            <div className={styles.scoreBoard}>
                <div className={styles.item}>Player 1</div>
                <div className={styles.item}>{scoreGems[0]["player1"]}</div>
                <div className={styles.item}>{scoreGems[1]["player1"]}</div>
                <div className={styles.item}>{scoreGems[2]["player1"]}</div>
                <div className={styles.item}>Player 2</div>
                <div className={styles.item}>{scoreGems[0]["player2"]}</div>
                <div className={styles.item}>{scoreGems[1]["player2"]}</div>
                <div className={styles.item}>{scoreGems[2]["player2"]}</div>
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
