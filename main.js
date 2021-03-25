// Scripts de búsqueda con indexOf

const formulary = document.querySelector('#input');
const result = document.querySelector('#resultado');
const divH1 = document.querySelector('#divh1');

let links = [
  {
    nombre: 'Página principal',
    link: 'index.html',
    href: 'Págína principal',
    text: '¡Hola! Bienvenido. Siéntete cómodo de estar aquí, te tenemos una sorpresa para tí...'
  },
  {
    nombre: 'Sobre mí',
    link: 'aboutme.html',
    href: 'Sobre mí'
  }, // Pendiente el t
  {
    nombre: 'Contacto',
    link: 'contact.html',
    href: 'Contacto',
    text: 'Rellene el siguiente formulario para ser respondido y ayudarle. Nuestro servicio se extiende por todo el Ecuador.'
  },
  {
    nombre: 'Proyectos',
    link: 'projects/projects.html',
    href: 'Proyectos'
  }, // Pendiente el texto
  {
    nombre: 'D-grafix',
    link: 'projects/dgrafix.html',
    href: 'Proyectos | D-grafix'
  } // Pendiente el texto
]

const filter = () => {
  result.innerHTML = '';
  const text = formulary.value.toLowerCase();

  for (let link of links) {
    let nombre = link.nombre.toLowerCase();
    if (nombre.indexOf(text) !== -1) {
      result.innerHTML += `<li><i class="bi bi-search" style="margin-right:10px;"></i><a href="${link.link}">${link.nombre} - ${link.href}</a><br><p class="lead mt-1 text-truncate" style="font-size:15px;max-width:350px;">${link.text}</p></li>`
    }
  }
  if (result.innerHTML === '') {
    result.innerHTML +=
      `<li>No se han encontrado resultados...</li>`
  }
}

formulary.addEventListener('input', () => {
  document.querySelector('#divh1').innerHTML = `<h1 class="display-6 my-5">Resultados para <mark>${formulary.value}</mark>:</h1>`
});

formulary.addEventListener('input', filter);

// Envío de recibo a contacto

const formv = document.querySelector('.email-form')
const form = document.querySelector('.btn-email');
const namem = document.querySelector('.name-form');

form.addEventListener('click', addSpinnerAndEmail);

function addSpinnerAndEmail() {
  form.classList.add('disabled')
  form.innerHTML += `<span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>`
  emailjs.send('service_gmail', 'template_portfolio', { to_email: formv.value, to_name: namem.value, userID: 'user_6Z3mCm9NiTNUQqYhMfV8E' })
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });
}