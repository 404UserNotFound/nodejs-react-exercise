import React from 'react';
import IndustriesDashboard from "../IndustriesDashboard/IndustriesDashboard.jsx";
import styles from './IndustrySection.module.css';

const IndustrySection = ({industriesData, companiesData}) => (
    <>
        <IndustriesDashboard industriesData={industriesData}/>
        {companiesData && industriesData.length === 0 && (
            <div className={styles.industryDataExceptionMessageTitle}>
                <p>No companies with valid industry data found.</p>
                <p className={styles.inusetryDataExceptionMessage}>Check the console for debugging information.</p>
            </div>
        )}
    </>
);

export default IndustrySection;
