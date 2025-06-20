import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
    <div className={styles.layoutBackground}>
        <div className={styles.layoutContainer}>
            <div className={styles.layoutPageHeader}>
                <h1 className={styles.layoutPageTitle}>Companies by Industry</h1>
                <p className={styles.layoutPageSubtitle}>Explore companies across different industries</p>
            </div>
            {children}
        </div>
    </div>
);

export default Layout;
