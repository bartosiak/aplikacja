import styles from "./Surface.module.css";

export function Surface(){
    return (
        <div className={styles.container}>
      <label className="label" htmlFor="surfaceType">Court surface:</label>
      <select className={styles.surfaceType} id="surfaceType">
        <option value="Clay">Clay</option>
        <option value="Hard">Hard</option>
        <option value="Grass">Grass</option>
      </select>
    </div>
    )
}