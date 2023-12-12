import { useState } from "react";
import styles from "./PlayerList.module.css";

export function PlayerList({
  savedPlayers,
  onSubmit,
  onAddNew,
  handleClosePopup,
}) {
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);
  // W komponencie ListPopup
  const handleSelect = (playerData) => {
    setSelectedPlayerData(playerData); // tutaj aktualizuję stan selectedPlayerData
  };
  // W komponencie ListPopup
  const handleConfirm = () => {
    onSubmit(selectedPlayerData);
    handleClosePopup(); // tutaj wywołuję props onSubmit z argumentem selectedPlayerData
  };
  // W komponencie ListPopup
  const handleAddNew = () => {
    onAddNew(); // tutaj wywołuję props onAddNew bez argumentów
  };

  // W komponencie ListPopup
  // W renderowaniu popupa z listą
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h3>Select a player</h3>
        <ul className={styles.list}>
          {savedPlayers.map((playerData) => (
            <li
              key={playerData.firstName + playerData.lastName}
              className={
                selectedPlayerData === playerData
                  ? styles.selected
                  : styles.unselected
              }
              onClick={() => handleSelect(playerData)}
            >
              {playerData.firstName} {playerData.lastName}
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={handleConfirm}
            disabled={!selectedPlayerData}
          >
            Confirm
          </button>
          <button className={styles.btn} onClick={handleAddNew}>
            Add player
          </button>
          <button
            className={`${styles.btn} ${styles.close}`}
            onClick={handleClosePopup}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
