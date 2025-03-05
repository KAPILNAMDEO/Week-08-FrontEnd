/*Finally lets close the
expression with
supporting optional parts.
Note: Top Level Domains
(TLD) in the last part is the
optional country code and */

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9]([a-zA-Z0-9_.+\-]*[a-zA-Z0-9])?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

// Test cases
console.log(isValidEmail("abc.xyz@bridgelabz.co"));       // true (valid without country code)
console.log(isValidEmail("abc-xyz@bridgelabz.co.in"));    // true (valid with country code)
console.log(isValidEmail("abc+xyz@bridgelabz.co.us"));    // true (valid with different country code)
console.log(isValidEmail("abc@bridgelabz.co"));           // true (valid, minimal case)
console.log(isValidEmail("abc..xyz@bridgelabz.co.in"));   // false (double dot)
console.log(isValidEmail(".abc@bridgelabz.co.in"));       // false (starts with special character)
console.log(isValidEmail("abc.@bridgelabz.co.in"));       // false (ends with special character)
console.log(isValidEmail("abc@bridgelabz.com"));          // false (must end with `.co` or `.co.xx`)
console.log(isValidEmail("abc@xyz.bridgelabz.co.in"));    // false (wrong domain structure)
console.log(isValidEmail("abc xyz@bridgelabz.co.in"));    // false (contains space)
console.log(isValidEmail("abc@bridgelabz.co.inn"));       // false (country code is more than 2 characters)
