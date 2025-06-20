const { getUniqueCompanies } = require('../util/uniqueCompanies');
const companies = require('../data/data.json');

function getAllCompanies(req, res) {
    const uniqueCompanies = getUniqueCompanies(companies.items);
    res.json(uniqueCompanies);
}

module.exports = { getAllCompanies };
