/* 
Project: Sign-up Page from The Odin Project
Contains: functions to support form submission and validation.
*/

function checkPasswordMatch(e) {
    e.preventDefault();
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("passwordConfirm");
    let passwordMatch = document.querySelector("#passwordMatch > span");

    if(password.value !== confirmPassword.value) {
        console.log("Password must match!");
        password.classList.add('error');
        passwordConfirm.classList.add('error');
        passwordMatch.classList.add('error');
    } else {
        console.log("Passwords OK!")
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        passwordMatch.classList.remove('error');
    }
}

function onSubmit(e) {
    e.preventDefault();
    console.log(`Form Submitted! Time stamp: ${e.timeStamp}`);
}

form = document.getElementById("recruitment-form");
form.addEventListener('submit', checkPasswordMatch);
