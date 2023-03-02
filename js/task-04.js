const refs = {
  onDecrementClick: document.querySelector('[data-action="decrement"]'),
  onIncrementClick: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.counterValueEl.textContent = counterValue;
refs.onDecrementClick.addEventListener('click', onDecrementClick);
refs.onIncrementClick.addEventListener('click', onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  refs.counterValueEl.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
}
