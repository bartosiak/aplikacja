import styles from "./PlayerCreator.module.css";

export function PlayerCreator({
    selectedPlayer,
    inputValues,
    handleInputChange,
    handlePopupSubmit,
    handleClosePopup
}) {
    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popup}>
                <h3>Create Player</h3>
                <input
                    className={styles.inputPopup}
                    type="text"
                    value={inputValues[selectedPlayer].firstName}
                    placeholder="First name"
                    onChange={(e) =>
                        handleInputChange(
                            selectedPlayer,
                            "firstName",
                            e.target.value
                        )
                    }
                />

                <input
                    className={styles.inputPopup}
                    type="text"
                    value={inputValues[selectedPlayer].lastName}
                    placeholder="Last name"
                    onChange={(e) =>
                        handleInputChange(
                            selectedPlayer,
                            "lastName",
                            e.target.value
                        )
                    }
                />
                <div className={styles.center}>
                    <button className={styles.btn} onClick={handlePopupSubmit}>
                        Add Player
                    </button>
                </div>
                <button
                        className={`${styles.btn} ${styles.close}`}
                        onClick={handleClosePopup}
                    >
                        X
                    </button>
            </div>
        </div>
    );
}
