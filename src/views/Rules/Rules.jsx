import { useState } from "react";
import styles from "./Rules.module.css";

export function Rules() {
    const [selectedOption, setSelectedOption] = useState("classic");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const ruleDescriptions = {
        classic: [
            "Best of 3 sets",
            "First to 6 games",
            "Regular deuce",
            "TB to 7 at 6:6",
            "Same rules in final set",
        ],
        superTB: [
            "Best of 3 sets",
            "First to 6 games",
            "Regular deuce",
            "TB to 7 at 6:6",
            "Super-TB in the last set",
        ],
        debel: [
            "Best of 3 sets",
            "First to 6 games",
            "No-ad deuce",
            "TB to 7 at 6:6",
            "Same rules in final set",
        ],
    };

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor="matchType">
                Select scoring rule:
            </label>
            <select
                className={styles.matchType}
                id="matchType"
                value={selectedOption}
                onChange={handleSelectChange}
            >
                <option value="classic" default>
                    Classic best of 3
                </option>
                <option value="superTB">Best of 3 with super-TB</option>
                <option value="debel">Debel</option>
            </select>
            <ul className={styles.gap}>
                {ruleDescriptions[selectedOption]?.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                ))}
            </ul>
        </div>
    );
}
