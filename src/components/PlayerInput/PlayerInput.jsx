import styles from "./PlayerInput.module.css";

export function PlayerInput({ playerId, onInputChange, fullNameValue }) {
    const handleChange = (e, field) => {
        console.log("handleChange called");
        console.log(`Player ${playerId} input changed: ${e.target.value}`);
        onInputChange(playerId, field, e.target.value); // tutaj używam argumentu field, który może być różny w zależności od tego, co chcę wprowadzić
    };

    // Lepiej zrobić tak
    // const playerData = inputValues ?? {};
    // const playerValues = playerData[playerId] ?? {};
    // const firstNameValue = playerValues.firstName ?? "";

    return (
        <>
            <label className={styles.label} htmlFor={`Player ${playerId}`}>
                {`Player ${playerId}`}
            </label>
            <input
                className={styles.input}
                type="text"
                id={playerId}
                value={fullNameValue ?? ""}
                onChange={handleChange}
            />
        </>
    );
}
