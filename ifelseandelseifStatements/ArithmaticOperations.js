const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);
const c = parseInt(process.argv[4], 10);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter three valid numbers.");
    process.exit(1); // Exit the program if input is invalid
}

// Perform arithmetic operations
const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

// Store results in an array
const results = [result1, result2, result3, result4];

// Find max and min
const maxResult = Math.max(...results);
const minResult = Math.min(...results);

// Output results
console.log(`Results:`);
console.log(`1. a + b * c  = ${result1}`);
console.log(`2. a % b + c  = ${result2}`);
console.log(`3. c + a / b  = ${result3}`);
console.log(`4. a * b + c  = ${result4}`);

console.log(`Maximum result: ${maxResult}`);
console.log(`Minimum result: ${minResult}`);
