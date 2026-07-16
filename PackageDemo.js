// Function name: demonstrateExternalPackage
const colors = require('colors');

function demonstrateExternalPackage() {
    console.log("--- External Module Demo ---");
    console.log("This text is green!".green);
    console.log("This text is red!".red);
    console.log("This text is bold and blue!".blue.bold);
}

demonstrateExternalPackage();
