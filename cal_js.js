// alert("Welcome to my_calcy web")



function clearScreen() {
  document.getElementById("result").value = "";
}

function backspace() {
  let value = document.getElementById("result").value;
  document.getElementById("result").value = value.slice(0, -1);
}

function appendNumber(number) {
  document.getElementById("result").value += number;
}

function appendOperator(operator) {
  let value = document.getElementById("result").value;
  if (value !== "" && !isNaN(value.slice(-1))) {
      document.getElementById("result").value += operator;
  }
}

function calculate() {
  let expression = document.getElementById("result").value;
  if (expression !== "") {
      document.getElementById("result").value = eval(expression);
  }
}

function calculatePercentage() {
  let value = document.getElementById("result").value;
  if (value !== "" && !isNaN(value)) {
      document.getElementById("result").value = parseFloat(value) / 100;
  }
}



