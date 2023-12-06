import styles from "./PlayerInput.module.css";

export function PlayerInput( {player} ){
    return (
        <>
            <label className={styles.label} htmlFor={player.name}>{player.name}</label>
            <input className={styles.input} type="text" id={player.name} placeholder="Name"/>
        </>
    )
}