// 1. Variables
let userName = "Student";
const birthYear = 2005;
var isLearningNode = true;

console.log("--- Variables ---");
console.log(`User: ${userName}, Born: ${birthYear}, Learning Node: ${isLearningNode}`);

// 2. Functions
function greet(name) {
    return `Hello, ${name}! Welcome to Node.js.`;
}

console.log("\n--- Functions ---");
console.log(greet(userName));

// 3. Conditionals
console.log("\n--- Conditionals ---");
if (isLearningNode) {
    console.log("Keep up the great work!");
} else {
    console.log("Time to start coding.");
}

// 4. Loops
console.log("\n--- Loops ---");
for (let i = 1; i <= 3; i++) {
    console.log(`Iteration number: ${i}`);
}

// 5. Arrays
let technologies = ["Node.js", "Express", "MongoDB"];
technologies.push("React");

console.log("\n--- Arrays ---");
console.log("Tech Stack:", technologies.join(", "));
console.log("First item:", technologies[0]);

// 6. Asynchronous Code (using setTimeout to simulate a task)
console.log("\n--- Asynchronous Code ---");
console.log("Starting async task...");
setTimeout(() => {
    console.log("Async task complete after 2 seconds.");
}, 2000);
console.log("This line prints immediately (proving non-blocking behavior).");