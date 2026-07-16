// Function name: parseArguments
function parseArguments() {
    const args = process.argv.slice(2); // Get arguments after the script path

    if (args.length === 0) {
        console.log("No arguments provided. Usage: node CommandLineDemo.js <arg1> <arg2>");
        return;
    }

    console.log("Arguments received:");
    args.forEach((val, index) => {
        console.log(`Argument ${index + 1}: ${val}`);
    });
}

parseArguments();