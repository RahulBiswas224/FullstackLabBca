const path = require('path');
const fs = require('fs');

// Function name: explorePathAndFs
function explorePathAndFs() {
    // 1. Path module demonstration
    const filePath = '/home/user/project/data.txt';
    console.log("--- Path Module ---");
    console.log("Basename:", path.basename(filePath));
    console.log("Directory:", path.dirname(filePath));
    console.log("Extension:", path.extname(filePath));

    // 2. FS module demonstration (joining path and reading)
    console.log("\n--- FS Module ---");
    const absolutePath = path.join(__dirname, 'DescribePathAndFs.js');
    console.log("Reading file at:", absolutePath);
    
    fs.readFile(absolutePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("Successfully read first 50 characters of this file:");
        console.log(data.substring(0, 50));
    });
}

explorePathAndFs();
