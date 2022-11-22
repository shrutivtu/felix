import React, { useState } from "react";
import styles from "../../styles/Sidebar.module.scss";
import { primaryOptions } from "../../constants/Constants";
import Link from "next/link";

const Sidebar = () => {
  const [primaryOptionsState, setPrimaryOptions] = useState(primaryOptions);
  const [selectid, setSelectid] = useState('');

  const handleOption = (id) => {
    setSelectid(id);
  }

  return (
    <nav className={styles.sidebarContainer}>
      <div className={styles.primarySection}>
        <ul>
          {primaryOptionsState.map((option, index) => {
            return option.id !== selectid ? <li 
            key={option.id} 
            onClick={() => handleOption(option.id)} 
            ><Link href={`/${option.link}`}>
                <b></b>
                <b></b>
                <span style={{ color: '#fff' }}>
                    {option.name}
                </span></Link>
            </li> : <li key={option.id} style={{backgroundColor: '#fff', color: 'black'}}>
                <Link href={`/${option.link}`}><b></b><b></b><span style={{ color: 'black' }}>{option.name}</span></Link>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;