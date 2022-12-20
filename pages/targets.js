import React, { useState } from 'react';
import styles from '../styles/Target.module.scss';
import TargetTable from '../components/Target/TargetTable';
import Popup from '../components/Target/Popup';

const targets = () => {
  // const [test, setTest] = useState(false);
  return (
    <main className={styles.targetContainer}>
      <Popup styles={styles} />
      <TargetTable />
    </main>
  )
}

export default targets;