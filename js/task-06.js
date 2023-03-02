const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  event.currentTarget.value.length >= input.getAttribute('data-length')
    ? (input.className = 'valid')
    : (input.className = 'invalid');
}
