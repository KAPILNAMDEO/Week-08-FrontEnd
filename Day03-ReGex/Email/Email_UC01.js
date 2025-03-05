/*Validate Email address with a
regex. The email consists of
minimum 3 and optional 2 more
parts with mandatory @ and .
abc.xyz@bridgelabz.co.in
Here abc, bridgelabz and co are
mandatory and the remaining 2
are optional
To begin with lets validate the
mandatory part and start with abc*/

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
