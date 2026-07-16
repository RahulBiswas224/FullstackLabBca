const http = require('http');

// Function name: handleRequests
function handleRequests(req, res) {
    const method = req.method;

    if (method === 'GET') {
        res.end('GET request received: Fetching data...');
    } else if (method === 'POST') {
        res.end('POST request received: Creating data...');
    } else if (method === 'PUT') {
        res.end('PUT request received: Updating data...');
    } else if (method === 'DELETE') {
        res.end('DELETE request received: Deleting data...');
    } else {
        res.end('Method not supported.');
    }
}

const server = http.createServer(handleRequests);

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
