const http = require('http');
const url = require('url');

// Function name: performCalculation
function performCalculation(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);
    const op = query.op;
    let result = 0;

    if (isNaN(a) || isNaN(b)) {
        res.end('Please provide valid numbers as a and b');
        return;
    }

    switch(op) {
        case 'add': result = a + b; break;
        case 'sub': result = a - b; break;
        case 'mul': result = a * b; break;
        case 'div': result = b !== 0 ? a / b : 'Cannot divide by zero'; break;
        default: res.end('Invalid operation. Use: add, sub, mul, or div'); return;
    }

    res.end('Result: ' + result);
}

const server = http.createServer(performCalculation);

server.listen(3000, () => {
    console.log('Calculator server running at http://localhost:3000/');
});
