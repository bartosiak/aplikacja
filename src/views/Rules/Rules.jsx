import { useState } from "react";
import styles from "./Rules.module.css";

export function Rules(){
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="matchType">Select scoring rule:</label>
      <select className={styles.matchType} id="matchType" value={selectedOption} onChange={handleSelectChange}>
        <option value="classic">Classic best of 3</option>
        <option value="superTB">Best of 3 with super-TB</option>
        <option value="debel">Debel</option>
      </select>
    </div>
  )
}
