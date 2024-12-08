const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

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
    const { name, agency } = req.query;
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
    
    res.json(filteredPermits);
});