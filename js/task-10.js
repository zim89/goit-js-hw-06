function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesElement: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', onCreateClick);
refs.btnDestroy.addEventListener('click', onDestroyClick);

function onCreateClick() {
  let boxesList = '';
  let size = 30;

  for (let i = 1; i <= refs.input.value; i += 1) {
    boxesList += `<div style = 'width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin: 10px'></div>`;
    size += 10;
  }

  refs.boxesElement.insertAdjacentHTML('afterbegin', boxesList);
}

function onDestroyClick() {
  refs.boxesElement.innerHTML = '';
}
