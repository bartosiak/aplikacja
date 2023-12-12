import { useState } from "react";
import styles from "./Players.module.css";
import { PlayerInput } from "../../../components/PlayerInput/PlayerInput";
import { PlayerList } from "../../../components/PlayerList/PlayerList";
import { PlayerCreator } from "../../../components/PlayerCreator/PlayerCreator";

export function Players() {
    const [isDoublesSelected, setDoublesSelected] = useState(false);
    const [isPlayerListVisible, setIsPlayerListVisible] = useState(false);
    const [isPlayerCreatorVisible, setIsPlayerCreatorVisible] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const [inputValues, setInputValues] = useState({
        1: { firstName: "", lastName: "" },
        2: { firstName: "", lastName: "" },
        3: { firstName: "", lastName: "" },
        4: { firstName: "", lastName: "" },
    });
    const [savedPlayers] = useState([
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Anna", lastName: "Nowak" },
        { firstName: "Piotr", lastName: "Zieliński" },
    ]);

    const handleCheckboxChange = () => {
        setDoublesSelected(!isDoublesSelected);
    };

    const handleSelectPlayerFieldFocus = (fieldId) => {
        setSelectedPlayer(fieldId);
        setIsPlayerListVisible(true);
    };

    const handleListPopupAddNew = () => {
        setIsPlayerListVisible(false);
        setIsPlayerCreatorVisible(true);
    };

    const handleClosePopup = () => {
        setIsPlayerListVisible(false);
        setIsPlayerCreatorVisible(false);
    };

    const handleListPopupSubmit = (selectedPlayerData) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [selectedPlayer]: selectedPlayerData,
        }));
    };

    const handleCreatePlayerHide = () => {
        setIsPlayerCreatorVisible(false);
    };

    const handleAddPlayerInputChange = (playerId, field, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [playerId]: {
                ...prevInputValues[playerId],
                [field]: value,
            },
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputPlayers}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="doubles"
                    checked={isDoublesSelected}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="doubles">Doubles</label>

                <PlayerInput
                    playerId={1}
                    onInputFocus={() => handleSelectPlayerFieldFocus(1)}
                    fullNameValue={`${inputValues[1].firstName} ${inputValues[1].lastName}`}
                />

                <PlayerInput
                    playerId={2}
                    onInputFocus={() => handleSelectPlayerFieldFocus(2)}
                    fullNameValue={`${inputValues[2].firstName} ${inputValues[2].lastName}`}
                />

                {isDoublesSelected && (
                    <>
                        <h3 className={styles.centerText}>VS</h3>
                        <div onClick={() => handleSelectPlayerFieldFocus(3)}>
                            <PlayerInput
                                playerId={3}
                                inputValues={inputValues}
                                fullNameValue={inputValues[3].fullNameValue}
                            />
                        </div>

                        <div onClick={() => handleSelectPlayerFieldFocus(4)}>
                            <PlayerInput
                                playerId={4}
                                inputValues={inputValues}
                                fullNameValue={inputValues[4].fullNameValue}
                            />
                        </div>
                    </>
                )}
            </div>
            {isPlayerListVisible && (
                <PlayerList
                    savedPlayers={savedPlayers}
                    onSubmit={handleListPopupSubmit}
                    onAddNew={handleListPopupAddNew}
                    handleClosePopup={handleClosePopup}
                />
            )}
            {isPlayerCreatorVisible && (
                <PlayerCreator
                    selectedPlayer={selectedPlayer}
                    inputValues={inputValues}
                    handleInputChange={handleAddPlayerInputChange}
                    handlePopupSubmit={handleCreatePlayerHide}
                    handleClosePopup={handleClosePopup}
                />
            )}
        </div>
    );
}
