// Function name: measureExecutionTime
function measureExecutionTime() {
    // Start timer for the first task
    console.time('LoopDuration');
    
    // Simulate a task (e.g., a loop)
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    
    // End timer for the first task
    console.timeEnd('LoopDuration');

    // Start timer for a second task
    console.time('ArrayDuration');
    
    // Simulate another task (e.g., array manipulation)
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    const filtered = arr.filter(num => num % 2 === 0);
    
    // End timer for the second task
    console.timeEnd('ArrayDuration');
}

measureExecutionTime();
