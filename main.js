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

// Ejecución correcta del formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[a-zA-ZÀ-ÿ\s]{4,1100}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "password2":
			validarCampo(expresiones.password, e.target, 'password2');;
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

// Envío de recibo a contacto

const formv = document.querySelector('#correo')
const form = document.querySelector('.formulario__btn');
const namem = document.querySelector('#nombre');

form.addEventListener('click', sendEmail);

function sendEmail() {
    emailjs.send('service_gmail', 'template_portfolio', {to_email: formv.value, to_name: namem.value, userID: 'user_6Z3mCm9NiTNUQqYhMfV8E'})
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}