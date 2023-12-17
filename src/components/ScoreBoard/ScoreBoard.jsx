import styles from "./ScoreBoard.module.css";

export function ScoreBoard({ player1Points, player2Points, matchData }) {
    return (
        <>
            <div className={styles.scoreBoard}>
                <div className={styles.item}>Player 1</div>
                {matchData.player1.scoreSets.map((set, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            {set.games}
                        </div>
                    );
                })}
                <div className={styles.item}>Player 2</div>
                {matchData.player2.scoreSets.map((set, index) => {
                    return (
                        <div key={index} className={styles.item}>
                            {set.games}
                        </div>
                    );
                })}
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
