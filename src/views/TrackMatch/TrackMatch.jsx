import styles from "./TrackMatch.module.css";
import { ScoreBoard } from "../../components/ScoreBoard/ScoreBoard";
import { useState } from "react";

export function TrackMatch() {
    const [score, setScore] = useState({ player1: 0, player2: 0 });
    const [server, setServer] = useState("player1");
    const [advantage, setAdvantage] = useState(null);

    const scoreLabels = ["0", "15", "30", "40", "Ad", "gem"];

    const handleScore = (player) => {
        const newScore = { ...score };
        newScore[player]++;

        if (
            // Check if Player won the game
            newScore[player] > 3 &&
            newScore[player === "player1" ? "player2" : "player1"] < 2
        ) {
            // Player won the game
            newScore[player] = 0;
            newScore[player === "player1" ? "player2" : "player1"] = 0;
            setServer(server === "player1" ? "player2" : "player1");
        } else if (
            newScore[player] === 4 &&
            newScore[player === "player1" ? "player2" : "player1"] === 3
        ) {
            // Advantage
            setAdvantage(player);
            console.log("advantage");
        } else if (
            newScore[player] === 4 &&
            newScore[player === "player1" ? "player2" : "player1"] === 4
        ) {
            // Check another way of assigning points
            newScore["player1"] = 3;
            newScore["player2"] = 3;
            setAdvantage(null);
            console.log("advantage");
        } else if (advantage !== null && advantage === player) {
            // Player won a game at a later time implementation of adding games
            newScore[player] = 0;
            newScore[player === "player1" ? "player2" : "player1"] = 0;
            setServer(server === "player1" ? "player2" : "player1");
            setAdvantage(null);
            console.log("gem");
        }
        setScore(newScore);
    };

    const handleUndoScore = (player) => {
        const newScore = { ...score };

        if (newScore[player] > 0) {
            newScore[player]--;

            if (advantage !== null) {
                setAdvantage(null);
            }
            setScore(newScore);
        }
    };
    const player1Points = `${scoreLabels[score.player1]}`;
    const player2Points = `${scoreLabels[score.player2]}`;
    return (
        <>
            <ScoreBoard
                player1Points={player1Points}
                player2Points={player2Points}
            />
            <div className={styles.container}>
                <div className={styles.center}>
                    <button
                        className={styles.btnUndo}
                        onClick={() => handleUndoScore("player1")}
                    >
                        Undo
                    </button>
                    <button
                        className={styles.btnUndo}
                        onClick={() => handleUndoScore("player2")}
                    >
                        Undo
                    </button>
                </div>
                <div className={styles.center}>
                    <button
                        className={styles.btn}
                        onClick={() => handleScore("player1")}
                    >
                        +
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => handleScore("player2")}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
}
