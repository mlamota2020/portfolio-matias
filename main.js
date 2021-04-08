window.onload = () => {
  // Scripts de búsqueda con indexOf
  const result = document.querySelector('#resultado');
  const divH1 = document.querySelector('#divh1');

  let links = [{
      nombre: 'Página principal',
      link: 'index.html',
      href: 'Págína principal',
      text: '¡Hola! Bienvenido. Siéntete cómodo de estar aquí, te tenemos una sorpresa para tí...'
    },
    {
      nombre: 'Sobre mí',
      link: 'aboutme.html',
      href: 'Sobre mí',
      text: '¿Quieres saber un poco de mí? Pues mira esta página en la que te cuento un poco de mí y de como conocí la programación!'
    }, // Pendiente el texto
    {
      nombre: 'Contacto',
      link: 'contact.html',
      href: 'Contacto',
      text: 'Rellene el siguiente formulario para ser respondido y ayudarle. Nuestro servicio se extiende por todo el Ecuador.'
    },
    {
      nombre: 'Proyectos',
      link: 'projects/projects.html',
      href: 'Proyectos',
      text: 'He trabajado en algunos proyectos con otras personas. Entra aquí para ver esos trabajos.'
    }, // Pendiente el texto
    {
      nombre: 'D-grafix',
      link: 'projects/dgrafix.html',
      href: 'Proyectos <i class="bi bi-arrow-right"></i> D-grafix',
      text: 'D-grafix es una empresa de diseño gráfico dispuesta a ayudar a las personas.'
    } // Pendiente el texto
  ]

  const filter = () => {
    result.innerHTML = '';
    const parameters = new URL(location.href);
    const text = parameters.searchParams.get("s").toLowerCase();

    for (let link of links) {
      const nombre = link.nombre.toLowerCase();
      if (nombre.indexOf(text) !== -1) {
        result.innerHTML += `<li><i class="bi bi-search" style="margin-right:10px;"></i><span class="link-text"><a href="${link.link}">${link.nombre} -</span> <code>${link.href}</code></a><br><p class="lead mt-1 text-truncate" style="font-size:15px;max-width:350px;">${link.text || ''}</p></li>`
      }
    }

    if (result.innerHTML === '') {
      result.innerHTML +=
        `<li>No se han encontrado resultados...</li>`
    }
  }

  formulary.addEventListener('input', () => {
    document.querySelector('#divh1').innerHTML += `<h1 class="display-6 my-5">Resultados para <mark>${formulary.value}</mark>:</h1>`
  });

  filter();

  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
};

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