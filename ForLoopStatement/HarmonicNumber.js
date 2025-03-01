const n = parseInt(process.argv[2], 10); // Read input from command line

if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    let harmonicNumber = 0;
    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }
    console.log(`H(${n}) = ${harmonicNumber.toFixed(6)}`);
}
