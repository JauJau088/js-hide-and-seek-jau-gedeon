const form = document.querySelector('form');
const num1 = document.querySelector('#num-1');
const num2 = document.querySelector('#num-2');
const result = document.querySelector('#result');

form.onsubmit = (e) => {
  e.preventDefault();
  let val1 = num1.value;
  let val2 = num2.value;
  let calc = val1 + val2;

  result.textContent = calc;
}