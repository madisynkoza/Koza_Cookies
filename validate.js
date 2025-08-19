function validate(event) {
    event.preventDefault();

    // Use let for variable declarations
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let errors = "";

    // Proper email RegEx
    let emailRE = /^.+@.+\..{2,}$/;
    if (email.match(emailRE)) {
        console.log("email match");
    } else {
        errors += "Please check email address\n";
    }

    // Corrected phone RegEx
    let phoneRE = /^\(\d{3}\)\d{3}-\d{4}$/;
    if (phone.match(phoneRE)) {
        console.log("phone match");
    } else {
        errors += "Please check phone number (format: (555)555-5555)\n";
    }

    if (errors === "") {
        alert("Successful form completion");
        event.target.submit();
    } else {
        alert(errors);
    }
}
