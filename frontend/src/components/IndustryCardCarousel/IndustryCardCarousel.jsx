import React from 'react';
import styles from './IndustryCardCarousel.module.css';

const IndustryCardCarousel = ({
                                  canGoBack,
                                  canGoForward,
                                  currentPage,
                                  totalPages,
                                  handlePrevious,
                                  handleNext,
                              }) => {
    return (
        <>
            {totalPages > 1 ? (<>
                <button
                    onClick={handlePrevious}
                    disabled={!canGoBack}
                    className={
                        `${styles.carouselChevron} ` +
                        (canGoBack ? styles.carouselChevronActive : styles.carouselChevronDisabled)
                    }>
                    <span style={{fontSize: 14}}>&#x2039;</span>
                </button>

                <span className={styles.carouselPageCount}>
          {currentPage + 1} of {totalPages}
        </span>

                <button
                    onClick={handleNext}
                    disabled={!canGoForward}
                    className={
                        `${styles.carouselChevron} ` +
                        (canGoForward ? styles.carouselChevronActive : styles.carouselChevronDisabled)
                    }>
                    <span style={{fontSize: 14}}>&#x203A;</span>
                </button>
            </>) : (<>
                <div className={styles.carouselSpacing}></div>
                <div className={styles.carouselSpacing}></div>
            </>)}
        </>
    )
};

export default IndustryCardCarousel;