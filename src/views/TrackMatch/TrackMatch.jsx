import styles from "./TrackMatch.module.css";
import { ScoreBoard } from "../../components/ScoreBoard/ScoreBoard";
import { useEffect, useState } from "react";
import Popup from "../../components/Popup/Popup";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { createInitScore } from "../../helpers/trackingMatchHelpers";

export function TrackMatch() {
    const [setNumber, setSetNumber] = useState(0);
    const [setsCount] = useState(3);
    const [server, setServer] = useState("player1");
    const [advantage, setAdvantage] = useState(null);
    const [isMatchOverPopup, setIsMatchOverPopup] = useState(false);
    const [isMatchHistoryOpen, setIsMatchHistoryOpen] = useState(false);

    const [matchData, setMatchData] = useState({
        player1: {
            points: 0,
            scoreSets: createInitScore(setsCount),
            setsWon: 0,
            pass: {
                servicePoints: 0,
                receivingPoints: 0,
                breakPoints: 0,
                breakPointsOportunity: 0,
            },
        },
        player2: {
            points: 0,
            scoreSets: createInitScore(setsCount),
            setsWon: 0,
            pass: {
                servicePoints: 0,
                receivingPoints: 0,
                breakPoints: 0,
                breakPointsOportunity: 0,
            },
        },
    });

    const scoreLabels = ["0", "15", "30", "40", "Ad", "gem"];

    const checkSetWinConditions = (player, playerGames, opositPlayerGames) => {
        if (playerGames >= 6 && playerGames - opositPlayerGames >= 2) {
            setMatchData((prevMatchData) => {
                const newMatchData = { ...prevMatchData };
                newMatchData[player].setsWon += 1;

                setSetNumber(setNumber + 1);

                if (newMatchData[player].setsWon === 2) {
                    setIsMatchOverPopup(true);
                }

                return newMatchData;
            });
        }
    };

    const handleScorePoints = (player) => {
        const opositPlayer = player === "player1" ? "player2" : "player1";
        const checkServer = server === "player1" ? "player2" : "player1";

        setMatchData((prevMatchData) => {
            let playerPoints = prevMatchData[player].points + 1;
            let opositPlayerPoints = prevMatchData[opositPlayer].points;
            let playerGames = prevMatchData[player].scoreSets[setNumber].games;
            let opositPlayerGames =
                prevMatchData[opositPlayer].scoreSets[setNumber].games;

            if (playerPoints > 3 && opositPlayerPoints < 3) {
                playerPoints = 0;
                opositPlayerPoints = 0;
                playerGames += 1;

                setServer(checkServer);
                checkSetWinConditions(player, playerGames, opositPlayerGames);
            } else if (playerPoints === 4 && opositPlayerPoints === 3) {
                setAdvantage(player);
            } else if (playerPoints === 4 && opositPlayerPoints === 4) {
                playerPoints = 3;
                opositPlayerPoints = 3;

                setAdvantage(null);
            } else if (advantage !== null && advantage === player) {
                playerPoints = 0;
                opositPlayerPoints = 0;
                playerGames += 1;

                setServer(checkServer);
                checkSetWinConditions(player, playerGames, opositPlayerGames);
            }

            const newMatchData = {
                ...prevMatchData,
                [player]: {
                    ...prevMatchData[player],
                    points: playerPoints,
                    scoreSets: prevMatchData[player].scoreSets.map(
                        (set, index) => {
                            if (index === setNumber) {
                                return {
                                    ...set,
                                    games: playerGames,
                                };
                            } else {
                                return set;
                            }
                        }
                    ),
                },
                [opositPlayer]: {
                    ...prevMatchData[opositPlayer],
                    points: opositPlayerPoints,
                },
            };

            localStorage.setItem("matchData", JSON.stringify(newMatchData));

            return newMatchData;
        });
    };

    const handleUndoScore = (player) => {
        setMatchData((prevMatchData) => {
            const newScore = { ...prevMatchData };

            if (newScore[player].points > 0) {
                newScore[player] = {
                    ...newScore[player],
                    points: newScore[player].points - 1,
                };
                if (advantage !== null) {
                    setAdvantage(null);
                }
            }

            return newScore;
        });
    };

    const closePopup = () => {
        setIsMatchOverPopup(!isMatchOverPopup);
    };

    useEffect(() => {
        if (isMatchHistoryOpen) {
            const storedScore = localStorage.getItem("matchData");
            if (storedScore) {
                setMatchData(JSON.parse(storedScore));
            }
        }
    }, [isMatchHistoryOpen]);

    return (
        <>
            <button
                className={styles.btnMatchHistory}
                onClick={() => setIsMatchHistoryOpen(true)}
            >
                Match history
            </button>
            <ScoreBoard
                player1Points={scoreLabels[matchData.player1.points]}
                player2Points={scoreLabels[matchData.player2.points]}
                matchData={matchData}
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
                        className={styles.btnUndo}
                        onClick={() => handleUndoScore("player1")}
                    >
                        Undo
                    </button>
                </div>
                <div className={styles.center}>
                    <button
                        className={styles.btn}
                        onClick={() => handleScorePoints("player2")}
                    >
                        +
                    </button>
                    <button
                        className={styles.btnUndo}
                        onClick={() => handleUndoScore("player2")}
                    >
                        Undo
                    </button>
                </div>
                <Popup isOpen={isMatchOverPopup} handleClose={closePopup}>
                    <h3 className={styles.textPopup}>Game, Set, Match</h3>

                    <Button onClick={closePopup}>View Statistic</Button>
                    <Link to={"/"}>
                        <Button onClick={closePopup}>Back to Home Page</Button>
                    </Link>
                </Popup>
            </div>
        </>
    );
}
