import styles from "./TrackMatch.module.css";
import { ScoreBoard } from "../../components/ScoreBoard/ScoreBoard";
import { useState } from "react";
import Popup from "../../components/Popup/Popup";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export function TrackMatch() {
    const [scorePoints, setScorePoints] = useState({ player1: 0, player2: 0 });
    const [scoreGems, setScoreGems] = useState([
        { player1: 5, player2: 0 },
        { player1: 0, player2: 0 },
        { player1: 0, player2: 0 },
    ]);
    const [scoreSets, setScoreSets] = useState({ player1: 0, player2: 0 });
    const [setNumber, setSetNumber] = useState(0);
    const [server, setServer] = useState("player1");
    const [advantage, setAdvantage] = useState(null);
    const [isMatchOverPopup, setIsMatchOverPopup] = useState(false);
    const [winner, setWinner] = useState("");
    const scoreLabels = ["0", "15", "30", "40", "Ad", "gem"];

    // const dataToSave = { key: "value" };
    // localStorage.setItem("myData", JSON.stringify(dataToSave));

    const handleScorePoints = (player) => {
        const newScore = { ...scorePoints, [player]: scorePoints[player] + 1 };
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
        setScorePoints(newScore);
    };

    const handleUndoScore = (player) => {
        const newScore = { ...scorePoints };

        if (newScore[player] > 0) {
            newScore[player]--;

            if (advantage !== null) {
                setAdvantage(null);
            }
            setScorePoints(newScore);
        }
    };

    const handleScoreGems = (player) => {
        const opositPlayer = player === "player1" ? "player2" : "player1";

        const newScoreGems = [...scoreGems];
        newScoreGems[setNumber][player]++;

        const player1ScoreGems = newScoreGems[setNumber][player];
        const player2ScoreGems = newScoreGems[setNumber][opositPlayer];
        setScoreGems(newScoreGems);

        if (player1ScoreGems === 7) {
            console.log("set wygrany");
            setSetNumber(setNumber + 1);
            handleScoreSets(player);
        } else if (player1ScoreGems === 6 && player2ScoreGems < 4) {
            console.log("set wygrany");
            setSetNumber(setNumber + 1);
            handleScoreSets(player);
        } else console.log("gramy dalej");
    };

    const handleScoreSets = (player) => {
        const newScoreSets = { ...scoreSets, [player]: scoreSets[player] + 1 };

        setScoreSets(newScoreSets);
        if (newScoreSets[player] === 1) {
            setWinner(player);
            setIsMatchOverPopup(true);
        }
    };

    const closePopup = () => {
        setIsMatchOverPopup(!isMatchOverPopup);
    };

    return (
        <>
            <ScoreBoard
                player1Points={scoreLabels[scorePoints.player1]}
                player2Points={scoreLabels[scorePoints.player2]}
                scoreGems={scoreGems}
            />
            <div className={styles.container}>
                <div className={styles.center}>
                    <button
                        className={styles.btn}
                        onClick={() => handleScorePoints("player1")}
                    >
                        +
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => handleScorePoints("player2")}
                    >
                        +
                    </button>
                </div>
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
                <Popup isOpen={isMatchOverPopup} handleClose={closePopup}>
                    <h3 className={styles.textPopup}>The winner is {winner}</h3>

                    <Button onClick={closePopup}>View Statistic</Button>
                    <Link to={"/"}>
                        <Button onClick={closePopup}>Back to Home Page</Button>
                    </Link>
                </Popup>
            </div>
        </>
    );
}
