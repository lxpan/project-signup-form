function onSubmit(e) {
    console.log(`Form Submitted! Time stamp: ${e.timeStamp}`);
    e.preventDefault();
}

form = document.getElementById("recruitment-form")
form.addEventListener('submit', onSubmit);

// console.log(form);
// console.log(buttons);
