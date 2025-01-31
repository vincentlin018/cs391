function checkAge() {
    // get the user input from the input field with id "age-input"
    const ageInput = document.getElementById("age-input").value;

    // convert the user input to a number
    const age = Number(ageInput);

    let errorMessage = "";

    if (isNaN(age)) {
        errorMessage = "The age is invalid, please enter a valid number.";
    } else if ((age % 1) !== 0){
        errorMessage = "The age is a decimal, please enter a whole number.";
    } else if (age < 0) {
        errorMessage = "The age is negative, please enter a positive number.";
    } else if (age < 18) {
        errorMessage = "Sorry, you are too young to view this webpage.";
    } else if (age > 120) {
        errorMessage = "Sorry, you are too old to be alive to view this webpage. Please enter your real age.";
    }

    if (errorMessage === "") {
        document.getElementById("main-content").style.display = "block";
        document.getElementById("error-content").style.display = "git";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;

        document.getElementById("main-content").style.display = "none";
        document.getElementById("error-content").style.display = "block";
    }
}