function appendToInput(value) {
  console.log("appendToInput", value);
  const inputField = document.getElementById("calcInput");
  inputField.value += value;
}

function calculateResult() {
  const inputField = document.getElementById("calcInput");
  const result = math.evaluate(inputField.value);
  inputField.value = result;
}

function clearInput() {
  const inputField = document.getElementById("calcInput");
  inputField.value = "";
}

function clearEntry() {
  const inputField = document.getElementById("calcInput");
  if (inputField && typeof inputField.value === "string") {
    inputField.value = inputField.value.slice(0, -1);
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
