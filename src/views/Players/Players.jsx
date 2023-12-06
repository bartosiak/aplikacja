import { useState } from "react";
import styles from "./Players.module.css"

export function Players() {
    const [isDoublesSelected, setDoublesSelected] = useState(false);

    const handleCheckboxChange = () => {
      setDoublesSelected(!isDoublesSelected);
    };
    return (
        <div className={styles.container}> 
            
            <div className={styles.inputPlayers}>
                <input type="checkbox" id="doubles"
                checked={isDoublesSelected}
                onChange={handleCheckboxChange}/>
                <label htmlFor="doubles">Doubles</label>
                <label className={styles.label} htmlFor="firstPlayer">Player 1</label>
                <input type="text" id="firstPlayer"/>
                <label className={styles.label} htmlFor="secondPlayer">Player 2</label>
                <input type="text" id="secondPlayer"/>
                {isDoublesSelected && <>
                    <h3 className={styles.centerText}>VS</h3>
                    <label className={styles.label} htmlFor="firstPlayer">Player 3</label>
                    <input type="text" id="firstPlayer"/>
                    <label className={styles.label} htmlFor="secondPlayer">Player 4</label>
                    <input type="text" id="secondPlayer"/></>}
            </div>
        </div>
    )
}