//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.in javascript

// Simulate a coin flip
function flipCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(result);
}

// Call the function
flipCoin();
