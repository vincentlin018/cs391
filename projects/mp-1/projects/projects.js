// Function to perform addition
function addition() {
    // Get input values from the HTML elements
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;
    // Convert input strings to numbers
    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 0;

    // Check if inputs are valid numbers
    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "ERROR: Invalid input";
    } else {
        // Perform addition
        output = first_number + second_number;
        }

    // Display result or error message
    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        // Change color to red if result is negative else have it be white.
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

// Function to perform subtraction
function subtraction() {
    // Get input values from the HTML elements
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;
    // Convert input strings to numbers
    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 0;

    // Check if inputs are valid numbers
    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "ERROR: Invalid input";
    } else {
        //Perform subtraction
        output = first_number - second_number;
    }

    // Display result or error message
    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        // Change color to red if result is negative else have it be white.
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

// Function to perform multiplication
function multiplication() {
    // Get input values from the HTML elements
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;
    // Convert input strings to numbers
    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 0;

    // Check if inputs are valid numbers
    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "ERROR: Invalid input";
    } else {
        //Perform multiplication
        output = first_number * second_number;
    }

    // Display result or error message
    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        // Change color to red if result is negative else have it be white.
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

//Function to perform division
function division() {
    // Get input values from the HTML elements
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;
    // Convert input strings to numbers
    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 0;
    // Check if inputs are valid numbers
    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "ERROR: Invalid input";
    } else {
        //Perform division
        output = first_number / second_number;
    }

    // Display result or error message
    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        // Change color to red if result is negative else have it be white.
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}


// Function to perform exponentiation
function exponentiation() {
    // Get input values from the HTML elements
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;

    // Convert input strings to numbers
    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 1;

    // Check if inputs are valid numbers
    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "ERROR: Invalid input";
    } else if(second_number === 0){
        // Any number to the power of 0 is 1
        output = 1;
    } else if(second_number < 0) {
        // Handle negative exponents
        const new_second_number = Number(second_number * -1);

        let loop_number = 1
        for (let i = 0; i < new_second_number; i++) {
            loop_number =  loop_number * first_number;
        }
        output = 1/loop_number;
    } else {
        // Calculate positive exponents
        for (let i =0; i < second_number; i++) {
            output = output * first_number;
        }
    }
    // Display result or error message
    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        // Change color to red if result is negative else have it be white.
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

// Function to clear the calculator
function clearCalculator() {
    // Clear input fields to only show the placeholders
    document.getElementById("first-input").value = "";
    document.getElementById("second-input").value = "";
    // Reset output display so that it display Result in the color White
    document.getElementById("output-content").textContent = "Result";
    document.getElementById("output-content").style.color = 'white';
}
