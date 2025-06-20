const { getAllCompanies } = require('./companiesController');
const companies = require('../data/data.json');

describe('getAllCompanies (controller)', () => {
    it('should return unique companies by uuid', () => {
        const req = {};
        const res = { json: jest.fn() };

        getAllCompanies(req, res);

        const uniqueCompanies = companies.items.filter(
            (company, index, self) =>
                self.findIndex(c => c.uuid === company.uuid) === index
        );

        expect(res.json).toHaveBeenCalledWith(uniqueCompanies);
    });
});
