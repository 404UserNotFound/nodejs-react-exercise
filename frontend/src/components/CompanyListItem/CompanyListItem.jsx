import React from 'react';
import fallbackLogo from '../../assets/MissingLogoPlaceholder.png';
import styles from './CompanyListItem.module.css';

const CompanyListItem = ({ company }) => {
    return (
        <div className={`${styles.companyListItem} group`}>
            <div className={styles.companyLabel}>
                <div className={styles.companyLogo}>
                    <img
                        src={String(company.images?.['32x32'] || fallbackLogo)}
                        alt={`${company.name} logo`}
                        className={styles.logoSizing}
                        onError={(e) => {
                            e.target.src = fallbackLogo;
                        }}
                    />
                </div>
                <span className={styles.companyFont}>
                    {company.name}
                </span>
            </div>
            <span className={styles.availableJobsFont}>
                {company.total_jobs_available}
            </span>
        </div>
    );
};

export default CompanyListItem;