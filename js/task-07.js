const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  text.style.fontSize = `${input.value}px`;
}
