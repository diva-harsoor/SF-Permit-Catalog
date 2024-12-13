const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('This is the server for the SF Permit Catalog!')
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});

// Load permits JSON into the backend
const permits = require('./starter-permits.json');

// Create an endpoint to serve the permits data
app.get('/permits', (req, res) => {
    const { name, agency, maxFees } = req.query;
    let filteredPermits = permits;

    if (name) {
        filteredPermits = filteredPermits.filter(permit =>
            permit.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (agency) {
        filteredPermits = filteredPermits.filter(permit => 
            permit.agency.toLowerCase().includes(agency.toLowerCase())
        );
    }

    if (maxFees) {
        filteredPermits = filteredPermints.filter(permit => 
            permit.fees <= maxFees
        );
    }
    
    res.json(filteredPermits);
});