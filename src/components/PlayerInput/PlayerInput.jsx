import styles from "./PlayerInput.module.css";

export function PlayerInput({
  playerId,
  fullNameValue,
  onInputFocus,
}) {
  
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
