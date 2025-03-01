const number = parseInt(process.argv[2], 10); // Read input from command line

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

if (number >= 0 && number <= 9) {
    console.log(numberWords[number]);
} else {
    console.log("Please enter a single-digit number (0-9)");
}
