import React from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import Aside from './components/aside/aside';
import Origamis from './components/origamis/origamis';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamis />
      </div>
      <Footer />
    </div>
  );
}

export default App;
