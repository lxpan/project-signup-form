function checkPasswordMatch(e) {
    e.preventDefault();
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("passwordConfirm");

    if(password.value !== confirmPassword.value) {
        console.log("Password must match!");
        password.classList.add('error');
        passwordConfirm.classList.add('error');
    } else {
        console.log("Passwords OK!")
    }
}

function onSubmit(e) {
    console.log(`Form Submitted! Time stamp: ${e.timeStamp}`);
    e.preventDefault();
}

form = document.getElementById("recruitment-form")


form.addEventListener('submit', checkPasswordMatch);
// console.log(form);
// console.log(buttons);
