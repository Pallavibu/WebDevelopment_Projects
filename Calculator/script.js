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

const themeToggle = document.querySelector('#light-theme');
const themeLink = document.querySelector('#stylesheet');

themeToggle.addEventListener('click', function() {
  if (themeLink.getAttribute('href') === 'light-theme.css') {
    themeLink.href = 'dark-theme.css';
    document.body.classList.add('dark');
  } else {
    themeLink.href = 'light-theme.css';
    document.body.classList.remove('dark');
  }
});
