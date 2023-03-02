const refs = {
  submit: document.querySelector('button'),
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  // });

  const {
    elements: { email, password },
  } = event.currentTarget;

  email.value === '' || password.value === ''
    ? alert('Все поля должны быть заполнены!!!')
    : console.log(`e-mail: ${email.value}; password: ${password.value}`);

  event.currentTarget.reset();
}
