function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(5, 4, multiply);
calculator(5, 4, divide);
calculator(5, 4, subtract);
calculator(5, 4, add);