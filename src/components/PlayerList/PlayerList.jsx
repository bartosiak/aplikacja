import { useState } from "react";
import styles from "./PlayerList.module.css";

export function PlayerList({
  savedPlayers,
  onSubmit,
  onAddNew,
  handleClosePopup,
}) {
  const [selectedPlayerData, setSelectedPlayerData] = useState(null);

  const handleSelect = (playerData) => {
    setSelectedPlayerData(playerData);
  };
  
  const handleConfirm = () => {
    onSubmit(selectedPlayerData);
    handleClosePopup();
  };
  
  const handleAddNew = () => {
    onAddNew(); 
  };

  
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
