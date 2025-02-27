let displayText = "";
let resultDisplayed = false;

function Add(num1, num2) {
  updateDisplay(parseFloat(num1) + parseFloat(num2));
}

function Subtract(num1, num2) {
  updateDisplay(parseFloat(num1) - parseFloat(num2));
}

function Multiply(num1, num2) {
  updateDisplay(parseFloat(num1) * parseFloat(num2));
}

function Divide(num1, num2) {
  updateDisplay(parseFloat(num1) / parseFloat(num2));
}

function operate() {
  const match = displayText.match(/(-?\d+(\.\d+)?)([+\-×÷])(-?\d+(\.\d+)?)/);

  if (!match) return; // Exit if no valid expression found

  let num1 = match[1];
  let operator = match[3];
  let num2 = match[4];

  switch (operator) {
    case "+":
      Add(num1, num2);
      break;
    case "-":
      Subtract(num1, num2);
      break;
    case "×":
      Multiply(num1, num2);
      break;
    case "÷":
      Divide(num1, num2);
      break;
  }
}
const display = document.querySelector("#display");
function updateDisplay(result) {
  displayText = result;
  display.textContent = result;
  resultDisplayed = true; // Mark that a result was displayed
}

function clearDisplay() {
  displayText = display.textContent = "";
}
// Number buttons
for (let i = 0; i < 10; i++) {
  const button = document.querySelector(`#btn-${i}`);
  if (button) {
    button.textContent = `${i}`;
  }
}

// Operator buttons
const operators = {
  multiply: "×",
  minus: "-",
  plus: "+",
  divide: "÷",
  equals: "=",
  clear: "AC",
};

for (const [id, symbol] of Object.entries(operators)) {
  const button = document.querySelector(`#btn-${id}`);
  if (button) button.textContent = symbol;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isOperator = ["+", "-", "×", "÷"].includes(button.textContent);

    if (button.id === "btn-equals") {
      operate();
    } else if (button.id === "btn-clear") {
      clearDisplay();
    } else {
      if (resultDisplayed && !isOperator) {
        clearDisplay(); // Clear only if a number is clicked after result
      }
      resultDisplayed = false; // Reset flag unless an operator is clicked
      displayText = display.textContent += button.textContent;
    }
  });
});

// Dynamically Generate Calculator UI

/*
document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.id = "container";
  
    const display = document.createElement("div");
    display.id = "display";
    container.appendChild(display);
  
    const buttonLayout = [
      ["7", "8", "9", "×"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["C", "0", "=", "÷"],
    ];
  
    buttonLayout.forEach((row) => {
      const div = document.createElement("div");
      row.forEach((symbol) => {
        const button = document.createElement("button");
        button.textContent = symbol;
        button.id = `btn-${symbol.replace("×", "multiply").replace("-", "minus").replace("+", "plus").replace("÷", "divide").replace("=", "equals").replace("C", "clear")}`;
        div.appendChild(button);
      });
      container.appendChild(div);
    });
  
    document.body.appendChild(container);
  });
 */
