// Function name: runReplDemo
function runReplDemo() {
    // 1. Function definition
    const calculateSquare = (n) => n * n;

    // 2. Array methods
    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = numbers.map(calculateSquare);

    // 3. Routing/Logic operation
    const performOperation = (op) => {
        switch(op) {
            case 'list': return numbers;
            case 'squared': return squaredNumbers;
            default: return "Invalid operation";
        }
    };

    console.log("Original:", performOperation('list'));
    console.log("Processed:", performOperation('squared'));
}

runReplDemo();
