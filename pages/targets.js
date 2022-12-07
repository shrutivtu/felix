import React from 'react';
import styles from '../styles/Target.module.scss';
import TargetTable from '../components/Target/TargetTable';

const targets = () => {
  return (
    <main className={styles.targetContainer}>
      <section className={styles.targetCreation}>
        <span>+ Create Target</span>
      </section>
      <TargetTable />
    </main>
  )
}

export default targets;