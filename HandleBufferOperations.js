// Function name: demonstrateBuffer
function demonstrateBuffer() {
    // 1. Creating buffers
    const bufFrom = Buffer.from('Hello Buffer');
    const bufAlloc = Buffer.alloc(10); // Allocates a zero-filled buffer of size 10

    console.log("--- Buffer Creation ---");
    console.log("Buffer from string:", bufFrom);
    console.log("Allocated buffer:", bufAlloc);

    // 2. Writing data
    bufAlloc.write('Node.js');
    console.log("\n--- Writing Data ---");
    console.log("Updated buffer:", bufAlloc.toString());

    // 3. Slicing buffers
    const slicedBuf = bufFrom.slice(0, 5);
    console.log("\n--- Slicing Buffers ---");
    console.log("Sliced buffer (0-5):", slicedBuf.toString());
}

demonstrateBuffer();
