import styles from "./PlayerInput.module.css";

export function PlayerInput({
  playerId,
  fullNameValue,
  onInputFocus,
}) {
  // Lepiej zrobić tak
  // const playerData = inputValues ?? {};
  // const playerValues = playerData[playerId] ?? {};
  // const firstNameValue = playerValues.firstName ?? "";

  console.log(fullNameValue);

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
        onFocus={onInputFocus}
      />
    </>
  );
}
