import React from 'react';
import styles from './page-wrapper.module.css';
import Header from '../header/header'
import Aside from '../aside/aside'
import Footer from '../footer/footer';

const PageWrapper = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                <div className={styles['inner-container']}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;