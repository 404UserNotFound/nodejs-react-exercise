function getUniqueCompanies(companies) {
    return companies.filter(
        (company, index, self) =>
            self.findIndex(c => c.uuid === company.uuid) === index
    );
}

module.exports = { getUniqueCompanies };
