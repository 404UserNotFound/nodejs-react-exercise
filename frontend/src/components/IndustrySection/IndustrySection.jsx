import React from 'react';
import CompanyCardList from "./CompanyCardList.jsx";

const IndustrySection = ({ industriesData, companiesData }) => (
  <>
    <CompanyCardList industriesData={industriesData} />
    {companiesData && industriesData.length === 0 && (
      <div className="text-center text-gray-600 mt-6">
        <p>No companies with valid industry data found.</p>
        <p className="text-sm mt-2">Check the console for debugging information.</p>
      </div>
    )}
  </>
);

export default IndustrySection;
