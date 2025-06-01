function calculate() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "Пожалуйста, введите оба числа.";
  } else {
    if (operation === "+") {
      result = a + b;
    } else if (operation === "-") {
      result = a - b;
    } else if (operation === "*") {
      result = a * b;
    } else if (operation === "/") {
      result = b !== 0 ? a / b : "Ошибка: деление на ноль";
    }
  }

  document.getElementById("result").textContent = "Результат: " + result;
}

function reset() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.querySelector('input[name="operation"][value="+"]').checked = true;
  document.getElementById("result").textContent = "Результат:";
}
