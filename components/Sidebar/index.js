import React, { useState } from "react";
import styles from "../../styles/Sidebar.module.scss";
import { primaryOptions } from "../../constants/Constants";

const Sidebar = () => {
  const [primaryOptionsState, setPrimaryOptions] = useState(primaryOptions);
  const [selectid, setSelectid] = useState('');

  const handleOption = (id) => {
    setSelectid(id);
  }

  return (
    <section className={styles.sidebarContainer}>
      <div className={styles.primarySection}>
        <ul>
          {primaryOptionsState.map((option, index) => {
            return option.id !== selectid ? <li 
            key={option.id} 
            onClick={() => handleOption(option.id)} 
            >
                <b></b>
                <b></b>
                <span style={{ color: '#fff' }}>
                    {option.name}
                </span>
            </li> : <li key={option.id} style={{backgroundColor: '#fff', color: 'black'}}>
                <b></b><b></b><span style={{ color: 'black' }}>{option.name}</span>
            </li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;