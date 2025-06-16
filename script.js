const advancedCalculator = {
  a: 0,
  b: 0,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  add() {
    return this.a + this.b;
  },

  sub() {
    return this.a - this.b;
  },

  mul() {
    return this.a * this.b;
  },

  div() {
    if (this.b === 0) {
      return "Ошибка деления на ноль";
    }
    return this.a / this.b;
  },

  reset() {
    this.a = null;
    this.b = null;
  },
};

function calculate() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("result").textContent =
      "Пожалуйста, введите оба числа.";
    return;
  }

  advancedCalculator.read(a, b);

  let result;

  if (operation === "+") {
    result = advancedCalculator.add();
  } else if (operation === "-") {
    result = advancedCalculator.sub();
  } else if (operation === "*") {
    result = advancedCalculator.mul();
  } else if (operation === "/") {
    result = advancedCalculator.div();
  }

  document.getElementById("result").textContent = "Результат: " + result;
}

function reset() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.querySelector('input[name="operation"][value="+"]').checked = true;
  document.getElementById("result").textContent = "Результат:";
}
