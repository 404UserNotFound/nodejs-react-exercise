export const processIndustries = (companiesData) => {
    if (!companiesData) return [];

    const industryMap = new Map();

    companiesData.forEach(company => {
        if (!Array.isArray(company.industries)) return;
        company.industries.forEach(industry => {
            if (!industryMap.has(industry.id)) {
                industryMap.set(industry.id, { ...industry, companies: [] });
            }
            industryMap.get(industry.id).companies.push(company);
        });
    });

    return Array.from(industryMap.values())
        .map(industry => ({
            ...industry,
            companies: industry.companies.sort((a, b) => a.name.localeCompare(b.name)),
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
};

