import { useState } from "react";
import styles from "./Players.module.css";
import { PlayerInput } from "../../components/PlayerInput/PlayerInput";

export function Players() {
    const [isDoublesSelected, setDoublesSelected] = useState(false);
    const players = [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
        { id: 3, name: "Player 3" },
        { id: 4, name: "Player 4" },
    ];
    const handleCheckboxChange = () => {
        setDoublesSelected(!isDoublesSelected);
    };
    return (
        <div className={styles.container}>
            <div className={styles.inputPlayers}>
                <input
                    type="checkbox"
                    id="doubles"
                    checked={isDoublesSelected}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="doubles">Doubles</label>
                {players.slice(0, 2).map((player) => {
                    return <PlayerInput key={player.id} player={player} />;
                })}
                {isDoublesSelected && (
                    <>
                        <h3 className={styles.centerText}>VS</h3>
                        {players.slice(2, 4).map((player) => {
                            return (
                                <PlayerInput key={player.id} player={player} />
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
}
