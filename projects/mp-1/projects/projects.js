function addition() {

    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;

    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";

    let output = 0;

    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "The input is invalid, please enter a valid number for both boxes";
    } else {
        output = first_number + second_number;
        }


    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

function subtraction() {
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;

    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 0;

    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "The input is invalid, please enter a valid number for both boxes";
    } else {
        output = first_number - second_number;
    }

    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

function multiplication() {
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;

    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 0;

    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "The input is invalid, please enter a valid number for both boxes";
    } else {
        output = first_number * second_number;
    }

    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

function division() {
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;

    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 0;

    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "The input is invalid, please enter a valid number for both boxes";
    } else {
        output = first_number / second_number;
    }

    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

function exponentiation() {
    const firstNumber = document.getElementById("first-input").value;
    const secondNumber = document.getElementById("second-input").value;

    const first_number = Number(firstNumber);
    const second_number = Number(secondNumber);

    let errorMessage = "";
    let output = 1;

    if (isNaN(first_number) || isNaN(second_number)) {
        errorMessage = "The input is invalid, please enter a valid number for both boxes";
    } else if(second_number === 0){
        output = 1;
    } else if(second_number < 0) {
        const new_second_number = Number(second_number * -1);

        let loop_number = 1
        for (let i = 0; i < new_second_number; i++) {
            loop_number =  loop_number * first_number;
        }
        output = 1/loop_number;
    } else {
        for (let i =0; i < second_number; i++) {
            output = output * first_number;
        }
    }
    if (errorMessage === "") {
        document.getElementById("output-content").textContent = String(output);
        document.getElementById("output-content").style.color = output < 0 ? 'red' : 'white';
    } else {
        document.getElementById("output-content").textContent = errorMessage;
        document.getElementById("output-content").style.color = 'white';
    }
}

function clearCalculator() {
    document.getElementById("first-input").value = "";
    document.getElementById("second-input").value = "";
    document.getElementById("output-content").textContent = "Result";
    document.getElementById("output-content").style.color = 'white';
}
