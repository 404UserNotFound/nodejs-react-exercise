const { getUniqueCompanies } = require('./uniqueCompanies');

describe('getUniqueCompanies util', () => {
    it('should filter out duplicate companies by uuid', () => {
        const companies = [
            { uuid: '1', name: 'Company A' },
            { uuid: '2', name: 'Company B' },
            { uuid: '1', name: 'Company A Duplicate' },
            { uuid: '3', name: 'Company C' }
        ];

        const result = getUniqueCompanies(companies);

        expect(result).toEqual([
            { uuid: '1', name: 'Company A' },
            { uuid: '2', name: 'Company B' },
            { uuid: '3', name: 'Company C' }
        ]);
    });

    it('should return empty array when input is empty', () => {
        expect(getUniqueCompanies([])).toEqual([]);
    });

    it('should return the same array when no duplicates', () => {
        const companies = [
            { uuid: '1', name: 'Company A' },
            { uuid: '2', name: 'Company B' }
        ];
        expect(getUniqueCompanies(companies)).toEqual(companies);
    });
});
