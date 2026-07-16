// Function name: importAndUseModule
const math = require('./MathModule.js');

function importAndUseModule() {
    console.log("--- Local Module Demo ---");
    console.log("Addition (5 + 3):", math.add(5, 3));
    console.log("Multiplication (5 * 3):", math.multiply(5, 3));
}

importAndUseModule();
