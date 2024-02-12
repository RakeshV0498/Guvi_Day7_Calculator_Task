document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonValue = button.textContent;

      if (buttonValue === "=") {
        evaluateExpression();
      } else if (buttonValue === "C") {
        display.value = "";
      } else if (buttonValue === "←") {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += buttonValue;
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "Enter") {
      event.preventDefault();
      evaluateExpression();
    } else if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (!isNaN(key) || key === "." || "+-*/".includes(key)) {
      event.preventDefault();
      display.value += key;
    }
  });

  function evaluateExpression() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
});
