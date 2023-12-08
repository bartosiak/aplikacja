import { useState } from "react";
import styles from "./Players.module.css";
import { PlayerInput } from "../../components/PlayerInput/PlayerInput";
import { PlayerList } from "../../components/PlayerList/PlayerList";
import { PlayerCreator } from "../../components/PlayerCreator/PlayerCreator";

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

    const handlePlayerClick = (playerId) => {
        setSelectedPlayer(playerId);
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
            [selectedPlayer]: {
                ...prevInputValues[selectedPlayer],
                ...selectedPlayerData,
                fullNameValue:
                    (selectedPlayerData?.firstName || "") +
                    " " +
                    (selectedPlayerData?.lastName || ""),
            },
        }));
    };

    const handleAddPlayer = () => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,

            [selectedPlayer]: {
                firstName: prevInputValues[selectedPlayer]?.firstName || "",
                lastName: prevInputValues[selectedPlayer]?.lastName || "",
                fullNameValue:
                    (prevInputValues[selectedPlayer]?.firstName || "") +
                    " " +
                    (prevInputValues[selectedPlayer]?.lastName || ""),
            },
        }));

        setIsPlayerCreatorVisible(false);
    };

    const handleInputChange = (playerId, field, value) => {
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

                <div onClick={() => handlePlayerClick(1)}>
                    <PlayerInput
                        playerId={1}
                        inputValues={inputValues}
                        onInputChange={handleInputChange}
                        fullNameValue={inputValues[1].fullNameValue}
                    />
                </div>

                <div onClick={() => handlePlayerClick(2)}>
                    <PlayerInput
                        playerId={2}
                        inputValues={inputValues}
                        onInputChange={handleInputChange}
                        fullNameValue={inputValues[2].fullNameValue}
                    />
                </div>

                {isDoublesSelected && (
                    <>
                        <h3 className={styles.centerText}>VS</h3>
                        <div onClick={() => handlePlayerClick(3)}>
                            <PlayerInput
                                playerId={3}
                                inputValues={inputValues}
                                onInputChange={handleInputChange}
                                fullNameValue={inputValues[3].fullNameValue}
                            />
                        </div>

                        <div onClick={() => handlePlayerClick(4)}>
                            <PlayerInput
                                playerId={4}
                                inputValues={inputValues}
                                onInputChange={handleInputChange}
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
                    handleInputChange={handleInputChange}
                    handlePopupSubmit={handleAddPlayer}
                    handleClosePopup={handleClosePopup}
                />
            )}
        </div>
    );
}
