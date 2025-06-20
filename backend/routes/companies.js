const express = require('express');
const { getAllCompanies } = require('../controllers/companiesController');

const router = express.Router();

router.get('/', getAllCompanies);

module.exports = router;
