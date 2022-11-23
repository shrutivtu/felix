import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from '../../styles/Home.module.css';

const Layout = ({children}) => {
  return (
    <main style={{ width: '100vw' }}>
      <Head>
        <title>Felix</title>
        <meta name="description" content="help in meeting your goals" />
      </Head>
      <Header />
      <section className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.children}>{children}</div>
      </section>
    </main>
  )
}

export default Layout;