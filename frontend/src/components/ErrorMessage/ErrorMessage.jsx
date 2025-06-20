import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
    <div className={styles.errorBackground}>
        <div className={styles.errorMessageCenter}>
            <div className={styles.errorMessageTitle}>Error loading companies</div>
            <p className={styles.errorMessageException}>{message}</p>
            <p className={styles.errorMessage}>
                Make sure your Express server is running on http://localhost:3001
            </p>
        </div>
    </div>
);

export default ErrorMessage;
