const operators = ["+", "-", "*", "/"];
let currentOp = "";
const inputField = document.getElementById("calcInput");
function appendToInput(value) {
  console.log("appendToInput", value);

  if (operators.includes(currentOp) && operators.includes(value)) {
    console.warn("Consecutive operators are not allowed.");
    return;
  }
  if (operators.includes(inputField.value[inputField.value.legnth - 1])) {
    inputField.value = inputField.value.slice(0, -1);
    currentOp = "";
  }
  inputField.value += value;
  currentOp = value;
}

function calculateResult() {
  const result = math.evaluate(inputField.value);
  inputField.value = result;
  if (result === Infinity) {
    inputField.value = "Error.";
  }
}

function clearInput() {
  inputField.value = "";
}

function clearEntry() {
  if (inputField && typeof inputField.value === "string") {
    inputField.value = inputField.value.slice(0, -1);
    currentOp = " ";
  } else {
    console.log("Error.");
  }
}

document.querySelectorAll("#btns button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      clearInput();
    } else if (value === "CE") {
      clearEntry();
    } else if (value === "=") {
      calculateResult();
    } else if (value === "×") {
      appendToInput("*");
    } else if (value === "÷") {
      appendToInput("/");
    } else if (value === "−") {
      appendToInput("-");
    } else {
      appendToInput(value);
    }
  });
});
