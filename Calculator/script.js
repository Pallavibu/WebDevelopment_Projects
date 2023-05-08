let input = document.getElementById('input');

function addInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  input.value = eval(input.value);
}
