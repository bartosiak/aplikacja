import styles from "./TrackMatch.module.css";
import { ScoreBoard } from "../../components/ScoreBoard/ScoreBoard";
import { useState } from "react";

export function TrackMatch() {
    const [score, setScore] = useState({ player1: 0, player2: 0 });
    const [scoreGems, setScoreGems] = useState({ player1: 0, player2: 0 });
    const [server, setServer] = useState("player1");
    const [advantage, setAdvantage] = useState(null);

    const scoreLabels = ["0", "15", "30", "40", "Ad", "gem"];

    // const dataToSave = { key: "value" };
    // localStorage.setItem("myData", JSON.stringify(dataToSave));

    const handleScore = (player) => {
        const newScore = { ...score, [player]: score[player] + 1 };
        const opositPlayer = player === "player1" ? "player2" : "player1";
        const checkServer = server === "player1" ? "player2" : "player1";
        if (
            // Check if Player won the game
            newScore[player] > 3 &&
            newScore[opositPlayer] < 3
        ) {
            // Player won the game
            newScore["player1"] = 0;
            newScore["player2"] = 0;
            handleScoreGems(player);
            setServer(checkServer);
        } else if (newScore[player] === 4 && newScore[opositPlayer] === 3) {
            // Advantage
            setAdvantage(player);
        } else if (newScore[player] === 4 && newScore[opositPlayer] === 4) {
            // Check another way of assigning points
            newScore["player1"] = 3;
            newScore["player2"] = 3;
            setAdvantage(null);
            console.log("advantage");
        } else if (advantage !== null && advantage === player) {
            // Player won a game at a later time implementation of adding games
            newScore[player] = 0;
            newScore[opositPlayer] = 0;
            setServer(checkServer);
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

    const handleScoreGems = (player) => {
        const newScoreGems = {
            ...scoreGems,
            [player]: scoreGems[player] + 1,
        };

        if (newScoreGems[player] < 7) {
            setScoreGems(newScoreGems);
        }
    };
    console.log("Player 1 Gems: ", scoreGems.player1);
    console.log("Player 2 Gems: ", scoreGems.player2);
    return (
        <>
            <ScoreBoard
                player1Points={scoreLabels[score.player1]}
                player2Points={scoreLabels[score.player2]}
                player1Gems={scoreGems.player1}
                player2Gems={scoreGems.player2}
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
