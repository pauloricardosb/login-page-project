const signButton = document.getElementById('sign-btn');
const inputs = document.querySelectorAll('.input');

const handleChange = () => {
  const [email, password] = inputs;

  if (email.value && password.value.length >= 8) {
    signButton.removeAttribute('disabled');
  } else {
    signButton.setAttribute('disabled', '');
  }
};

inputs.forEach((input) => input.addEventListener('input', handleChange));
