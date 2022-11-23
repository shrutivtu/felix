import React from 'react';
import Head from 'next/head';
import styles from '../styles/Myday.module.scss';
import MyDayLeft from '../components/MyDay/MyDayLeft';
import MyDayRight from '../components/MyDay/MyDayRight';

const myday = () => {
    console.log('called');
  return (
    <main>
      <Head>
        <title>myday</title>
      </Head>
      <section className={styles.myDayContainer}>
        <section className={styles.myDayLeft}><MyDayLeft styles={styles} /></section>
        <section className={styles.myDayRight}><MyDayRight styles={styles} /></section>
      </section>
    </main>
  )
}

export default myday;