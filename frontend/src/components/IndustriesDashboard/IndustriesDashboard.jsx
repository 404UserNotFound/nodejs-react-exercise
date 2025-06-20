import React from 'react';
import IndustryCard from "../IndustryCard/IndustryCard.jsx";
import styles from './CompanyCardList.module.css';

const CompanyCardList = ({ industriesData }) => {
    const totalCompanies = industriesData.reduce((sum, industry) => sum + industry.companies.length, 0);
    const totalJobs = industriesData.reduce((sum, industry) =>
        sum + industry.companies.reduce((jobSum, company) => jobSum + company.total_jobs_available, 0), 0
    );
    // todo: rename this file
    return (
        <div className={styles.contentSize}>
            <div className={styles.summaryCard}>
                <div className={styles.summaryGrid}>
                    <div>
                        <div className={styles.summaryNumberBlack}>{industriesData.length}</div>
                        <div className={styles.summaryLabel}>Industries</div>
                    </div>
                    <div>
                        <div className={styles.summaryNumberBlack}>{totalCompanies}</div>
                        <div className={styles.summaryLabel}>Companies</div>
                    </div>
                    <div>
                        <div className={styles.summaryNumberBlue}>{totalJobs}</div>
                        <div className={styles.summaryLabel}>Total Jobs</div>
                    </div>
                </div>
            </div>

            <div className={styles.industriesGrid}>
                {industriesData.map((industry) => (
                    <IndustryCard key={industry.id} industry={industry} />
                ))}
            </div>
        </div>
    );
};

export default CompanyCardList;
