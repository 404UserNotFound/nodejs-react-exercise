import React, { useState, useEffect, useMemo } from 'react';
import Layout from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import IndustrySection from './components/IndustrySection/IndustrySection.jsx';
import {processIndustries} from "./utils/FetchUtil.js";


const API_URL = 'http://localhost:3001/api/companies';

const App = () => {
    const [companiesData, setCompaniesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setCompaniesData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCompanies().then(r => console.log('Companies fetched successfully'));
    }, []);

    const industriesData = useMemo(() => processIndustries(companiesData), [companiesData]);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <Layout>
            <IndustrySection industriesData={industriesData} companiesData={companiesData} />
        </Layout>
    );
};

export default App;