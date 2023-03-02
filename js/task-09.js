function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
  colorEl: document.querySelector('.color'),
};

refs.btnEl.addEventListener('click', onChangeColorClick);

function onChangeColorClick() {
  const getColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = getColor;
  refs.colorEl.textContent = getColor;
}
