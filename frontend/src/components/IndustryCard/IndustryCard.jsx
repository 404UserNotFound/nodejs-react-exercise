import React, { useState } from 'react';
import CompanyCard from "./CompanyCard.jsx";

const IndustryCard = ({ industry }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalJobs = industry.companies.reduce((sum, company) => sum + company.total_jobs_available, 0);

    const COMPANIES_PER_PAGE = 6;
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
        // <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        // <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            {/* Header */}
            {/*<div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">*/}
            <div className="px-6 py-4 border-b border-gray-100 bg-white flex-shrink-0">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 capitalize">{industry.name}</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-400 text-sm font-semibold">
                            {industry.companies.length} {industry.companies.length === 1 ? 'company' : 'companies'}
                        </span>
                        {/*<span className="text-blue-600 text-sm font-medium">*/}
                        {/*    {totalJobs} {totalJobs === 1 ? 'job' : 'jobs'}*/}
                        {/*</span>*/}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">Name</span>
                    <span className="text-gray-500 text-xs">Total jobs available</span>
                </div>
            </div>

            {/* Company Cards */}
            {/*<div className="divide-y divide-gray-50">*/}
            {/*    <div className="h-[300px] divide-y divide-gray-50 overflow-y-auto"> /!*todo: variable height *!/*/}
            <div className="flex-1 divide-y divide-gray-50 overflow-y-auto">

            {displayedCompanies.map((company, index) => (
                    <CompanyCard key={`${company.uuid}-${index}`} company={company} />
                ))}
            </div>

            {/* Navigation Controls - Always rendered for consistent positioning */}
            {/*<div className="px-6 py-2 bg-gray-50/30 border-t border-gray-100 flex items-center justify-between">*/}
            <div className="px-6 py-2 bg-gray-50/30 border-t border-gray-100 flex items-center justify-between flex-shrink-0">

            {totalPages > 1 ? (
                    <>
                        <button
                            onClick={handlePrevious}
                            disabled={!canGoBack}
                            className={`w-6 h-6 rounded-full border bg-white shadow-sm flex items-center justify-center transition-all duration-200 ${
                                canGoBack
                                    ? 'text-gray-600 hover:text-gray-800 hover:shadow-md cursor-pointer'
                                    : 'text-gray-300 cursor-not-allowed'
                            }`}
                        >
                            <span style={{fontSize: 14}}>&#x2039;</span> {/* ‹ (left chevron) */}

                            {/*<ChevronLeft size={14} />*/}
                        </button>

                        <span className="text-xs text-gray-500">
                            {currentPage + 1} of {totalPages}
                        </span>

                        <button
                            onClick={handleNext}
                            disabled={!canGoForward}
                            className={`w-6 h-6 rounded-full border bg-white shadow-sm flex items-center justify-center transition-all duration-200 ${
                                canGoForward
                                    ? 'text-gray-600 hover:text-gray-800 hover:shadow-md cursor-pointer'
                                    : 'text-gray-300 cursor-not-allowed'
                            }`}
                        >
                            <span style={{fontSize: 14}}>&#x203A;</span> {/* › (right chevron) */}
                            {/*<ChevronRight size={14} />*/}
                        </button>
                    </>
                ) : (
                    <>
                        {/* Empty space to maintain layout */}
                        <div className="w-6 h-6"></div>
                        <div></div>
                        <div className="w-6 h-6"></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default IndustryCard;
