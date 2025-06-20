const express = require('express');
const cors = require('cors');
const companiesRoutes = require('./routes/companies');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/companies', companiesRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
