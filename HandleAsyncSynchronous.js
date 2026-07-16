const fs = require('fs');

// Function name: demonstrateSyncAsync
function demonstrateSyncAsync() {
    console.log("--- Starting Synchronous Operation ---");
    // Synchronous read (blocks the thread)
    const syncData = fs.readFileSync('HandleAsyncSynchronous.js', 'utf8');
    console.log("Synchronous read finished.");

    console.log("\n--- Starting Asynchronous Operation ---");
    // Asynchronous read (non-blocking)
    fs.readFile('HandleAsyncSynchronous.js', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("Asynchronous read finished.");
    });

    console.log("This message appears before the async read finishes!");
}

demonstrateSyncAsync();
