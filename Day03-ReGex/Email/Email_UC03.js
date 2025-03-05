/*Ensure “.” after bridgelabz
and validate the
mandatory 3rd part i.e. co */
function isValidEmailFormat(input) {
    const regex = /^bridgelabz\.([a-zA-Z0-9]+)\.co$/;
    return regex.test(input);
}

// Test cases
console.log(isValidEmailFormat("bridgelabz.tech.co"));  // true  (valid)
console.log(isValidEmailFormat("bridgelabz.xyz.co"));   // true  (valid)
console.log(isValidEmailFormat("bridgelabz.co"));       // false (missing part between "." and "co")
console.log(isValidEmailFormat("bridgelabz.techcom"));  // false (does not end with ".co")
console.log(isValidEmailFormat("bridgelabz@tech.co"));  // false (invalid character "@")
console.log(isValidEmailFormat("bridge.labz.tech.co")); // false (incorrect prefix)
console.log(isValidEmailFormat("bridgelabz.tech.com")); // false (ends with ".com" instead of ".co")
