import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.loaderBackground}>
        <div className={styles.loaderTextCenter}>
            <div className={styles.loaderSpinner}></div>
            <p className={styles.loaderTextFont}>Loading companies...</p>
        </div>
    </div>
);

export default Loader;
