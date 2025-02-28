function getRandomThreeDigit() {
     // Generates a number between 100 and 999
    return Math.floor(Math.random() * 900) + 100;
}

let numbers = Array.from({ length: 5 }, getRandomThreeDigit);

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Generated numbers:", numbers);
console.log("Minimum value:", min);
console.log("Maximum value:", max);
