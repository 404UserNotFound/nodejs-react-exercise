import React, {useState} from 'react';
import CompanyListItem from "../CompanyListItem/CompanyListItem.jsx";
import IndustryCardCarousel from "../IndustryCardCarousel/IndustryCardCarousel.jsx";
import styles from './IndustryCard.module.css';
import {COMPANIES_PER_PAGE} from "../../constants.js";

const IndustryCard = ({industry}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(industry.companies.length / COMPANIES_PER_PAGE);
    const startIndex = currentPage * COMPANIES_PER_PAGE;
    const displayedCompanies = industry.companies.slice(startIndex, startIndex + COMPANIES_PER_PAGE);
    const canGoBack = currentPage > 0;
    const canGoForward = currentPage < totalPages - 1;

    const handlePrevious = () => {
        if (canGoBack) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (canGoForward) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className={styles.industryCardBase}>
            <div className={styles.industryCardHeader}>
                <div className={styles.industryCardTitle}>
                    <h2 className={styles.industryCardTitleText}>{industry.name}</h2>
                    <div className={styles.industryCardTitleJobCount}>
                        <span className={styles.industryCardTitleJobFont}>
                            {industry.companies.length}
                        </span>
                    </div>
                </div>
                <div className={styles.industryCardLabels}>
                    <span className={styles.industryCardLabelFont}>Name</span>
                    <span className={styles.industryCardLabelFont}>Total jobs available</span>
                </div>
            </div>

            <div className={styles.companyListContainer}>

                {displayedCompanies.map((company, index) => (
                    <CompanyListItem key={`${company.uuid}-${index}`} company={company}/>
                ))}
            </div>
            <div className={styles.industryCardCarousel}>
                <IndustryCardCarousel
                    canGoBack={canGoBack}
                    canGoForward={canGoForward}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                />
            </div>
        </div>
    );
};

export default IndustryCard;
