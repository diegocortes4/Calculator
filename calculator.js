let display = document.getElementById("display");
let operator = null;
let operand1 = null;
let operand2 = null;

function addDigit(digit) {
  if (display.value == "0") {
    display.value = digit;
  } else {
    display.value += digit;
  }
}

function clearDisplay() {
  display.value = "0";
  operator = null;
  operand1 = null;
  operand2 = null;
}

function operation(op) {
  operator = op;
  operand1 = parseFloat(display.value);
  display.value = "0";
}

function calculate() {
  operand2 = parseFloat(display.value);
  let result = null;
  
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
  }
  
  display.value = result;
  operator = null;
  operand1 = result;
  operand2 = null;
}
