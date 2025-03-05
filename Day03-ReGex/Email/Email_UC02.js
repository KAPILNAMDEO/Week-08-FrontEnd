/*Ensure @ and validate the
mandatory 2nd part i.e.
bridgelabz*/

function validateEmail(email) {
    const emailRegex = /^abc(\.\w+)?@bridgelabz\.co(\.\w+)?$/;
    
    if (emailRegex.test(email)) {
        console.log(email + " is a valid email.");
    } else {
        console.log(email + " is NOT a valid email.");
    }
}

// Test Cases
validateEmail("abc@bridgelabz.co");          // Valid
validateEmail("abc.xyz@bridgelabz.co.in");   // Valid
validateEmail("abc@bridgelabz.co.in");       // Valid
validateEmail("xyz@bridgelabz.co");          // Invalid (does not start with abc)
validateEmail("abc@xyz.co.in");              // Invalid (missing bridgelabz)
validateEmail("abc@bridgelabzcom");          // Invalid (missing dot before co)
validateEmail("abc.bridgelabz.co");          // Invalid (missing @)
validateEmail("abc@bridgelabz");             // Invalid (missing .co)
