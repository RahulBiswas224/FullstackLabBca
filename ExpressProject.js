const express = require('express');
const app = express();

// Function name: setupRoutes
function setupRoutes() {
    // A route responding with HTML
    app.get('/', (req, res) => {
        res.send('<h1>Welcome to the Express App</h1><p>Visit /api for JSON data.</p>');
    });

    // A route responding with JSON
    app.get('/api', (req, res) => {
        res.json({ message: 'Success', status: 200, data: [1, 2, 3] });
    });
}

setupRoutes();

app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000/');
});
