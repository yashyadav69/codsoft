const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) { 
      currentInput += value;
      display.value = currentInput;
    } 
    else if (value === "C") { 
      currentInput = "";
      operator = "";
      firstValue = "";
      display.value = "";
    } 
    else if (value === "=") { 
      if (firstValue !== "" && operator !== "" && currentInput !== "") {
        display.value = calculate(firstValue, currentInput, operator);
        firstValue = display.value;
        currentInput = "";
        operator = "";
      }
    } 
    else { 
      if (currentInput !== "") {
        firstValue = currentInput;
        currentInput = "";
        operator = value;
        display.value = "";
      }
    }
  });
});

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return 0;
  }
}
