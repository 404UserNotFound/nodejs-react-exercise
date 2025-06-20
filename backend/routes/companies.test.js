const request = require('supertest');
const express = require('express');
const router = require('./companies');
const companiesController = require('../controllers/companiesController');

jest.mock('../controllers/companiesController', () => ({
    getAllCompanies: jest.fn()
}));

describe('GET /api/companies', () => {
    it('should call getAllCompanies from the controller', async () => {
        const app = express();
        app.use('/api/companies', router);

        const mockData = [{ uuid: '1', name: 'Company A' }];
        companiesController.getAllCompanies.mockImplementation((req, res) => {
            res.json(mockData);
        });

        const res = await request(app).get('/api/companies');

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(mockData);
        expect(companiesController.getAllCompanies).toHaveBeenCalledTimes(1);
    });
});
