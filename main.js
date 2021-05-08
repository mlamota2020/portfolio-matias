// Envío de recibo a contacto

const formv = document.querySelector('.email-form')
const form = document.querySelector('.btn-email');
const namem = document.querySelector('.name-form');

form.addEventListener('click', addSpinnerAndEmail);

function addSpinnerAndEmail() {
  form.classList.add('disabled');
  form.innerHTML += `<span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>`;
  emailjs.send('service_gmail', 'template_portfolio', { to_email: formv.value, to_name: namem.value, userID: 'user_6Z3mCm9NiTNUQqYhMfV8E' })
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });
}

function offline() {
  document.getElementById('offline').innerHTML += `<div class="alert alert-danger"><i class="bi bi-exclamation-circle"></i> Usted se encuentra sin conexión, por favor, conéctese a Internet.</div>`;
}

function online() {
  document.getElementById('offline').innerHTML = ``;
}