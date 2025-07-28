const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  let isValid = true;

  // Validación del nombre
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'El nombre es obligatorio.';
    nameInput.classList.add('input-error');
    isValid = false;
  } else {
    nameError.textContent = '';
    nameInput.classList.remove('input-error');
  }

  // Validación del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Correo electrónico inválido.';
    emailInput.classList.add('input-error');
    isValid = false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('input-error');
  }

  if (isValid) {
    // Aquí puedes agregar el código para enviar el formulario
    alert('Formulario válido. Enviando...');
    form.submit(); // Envía el formulario si todo es válido
  }
});
