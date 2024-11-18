function appendToInput(value) {
  console.log("appendToInput", value);
  const inputField = document.getElementById("calcInput");
  if (inputField) {
    inputField.value += value;
  } else {
    console.warn("Element with ID 'calcInput' not found.");
  }
}

function calculateResult() {
  const inputField = document.getElementById("calcInput");

  try {
    const result = math.evaluate(inputField.value);
    inputField.value = result;
  } catch (error) {
    console.error("Calculation error:", error);
    inputField.value = "Error";
  }
}

function clearInput() {
  const inputField = document.getElementById("calcInput");
  if (inputField) {
    inputField.value = "";
  } else {
    console.warn("Element with ID 'calcInput' not found.");
  }
}

function clearEntry() {
  const inputField = document.getElementById("calcInput"); // Corrected ID
  if (inputField && typeof inputField.value === "string") {
    inputField.value = inputField.value.slice(0, -1); // Remove the last character
  } else {
    console.warn(
      "Element with ID 'calcInput' not found or value is not a string."
    );
  }
}
