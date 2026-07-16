const express = require('express');
const path = require('path');
const app = express();

// 1. Application-level middleware for logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
});

// 2. Serve static HTML files from the 'public' directory
app.use(express.static('public'));

// 3. Dynamic route with URL parameter (e.g., /calculate/5/10)
app.get('/calculate/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const sum = a + b;
    res.json({ a, b, sum });
});

app.listen(3000, () => {
    console.log('Advanced server running at http://localhost:3000/');
});
