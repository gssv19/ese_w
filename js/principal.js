window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	header.classList.toggle('stiky', window.scrollY > 0);

	if (header.classList.toggle('stiky', window.scrollY > 0)) {
		document.getElementById('nav_logo').src = './imagenes/logo_azul.svg';
	} else {
		document.getElementById('nav_logo').src = './imagenes/logo_amarillo.svg';
	}
});

const menu = document.querySelector('.menutoggle');

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM INICIO
document.getElementById('item_uno').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM SERVICIOS
document.getElementById('item_dos').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM OFICINA
document.getElementById('item_tres').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});


// ACCIONES DEL ITEM NOSOTROS
document.getElementById('item_cuatro').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

// ACCIONES DEL ITEM CONTACTO
document.getElementById('item_cinco').addEventListener('click', () => {
	menu.classList.toggle('active');
	document.querySelector('.navigation_items').classList.toggle('active');
});

/* ACCIONES DE LOS BOTONES DE LA SECCION DE SERVICIOS */
// Houston
document.getElementById('dirHouston').addEventListener('click', () => {
	window.open('https://goo.gl/maps/PuFPMeA6s2KW2REM9', '_blank');
});

// Irving
document.getElementById('dirDallasIrving').addEventListener('click', () => {
	window.open('https://goo.gl/maps/hjcomtr28RXTWPFu6', '_blank');
});

// Austin
document.getElementById('dirAustin').addEventListener('click', () => {
	window.open('https://goo.gl/maps/zDugBL3TdLFNhBer6', '_blank');
});


/* BOTONES DE LOS MAPAS */
// Austin
const btn_map_austin = document.getElementById('btn_map_austin');

btn_map_austin.addEventListener('click', () => {
	window.open('https://goo.gl/maps/zDugBL3TdLFNhBer6', '_blank');
});

// Irving
const btn_map_irving = document.getElementById('btn_map_irving');

btn_map_irving.addEventListener('click', () => {
	window.open('https://goo.gl/maps/hjcomtr28RXTWPFu6', '_blank');
});

// El transito
const btn_map_et = document.getElementById('btn_map_et');

btn_map_et.addEventListener('click', () => {
	window.open('https://goo.gl/maps/3eBHoKWhfEK4qan88', '_blank');
});

// Houston
const btn_map_houston = document.getElementById('btn_map_houston');

btn_map_houston.addEventListener('click', () => {
	window.open('https://goo.gl/maps/PuFPMeA6s2KW2REM9', '_blank');
});

// Jiquilisco
const btn_map_jiquilisco = document.getElementById('btn_map_jiquilisco');

btn_map_jiquilisco.addEventListener('click', () => {
	window.open('https://goo.gl/maps/tg1SyTg9Kqpk2arY6', '_blank');
});

// Ozatlan
const btn_map_ozatlan = document.getElementById('btn_map_ozatlan');

btn_map_ozatlan.addEventListener('click', () => {
	window.open('https://goo.gl/maps/eGikxkJmkTiAPTX86', '_blank');
});

// Santa Elena
const btn_map_se = document.getElementById('btn_map_se');

btn_map_se.addEventListener('click', () => {
	window.open('https://goo.gl/maps/Dzg6KauwubEapnuh9', '_blank');
});

// Usulután
const btn_map_usulutan = document.getElementById('btn_map_usulutan');

btn_map_usulutan.addEventListener('click', () => {
	window.open('https://goo.gl/maps/gq1mwgEY59d85WrY7', '_blank');
});

/* FORMULARIO DE CONTACTO - ENVIO DE DATOS */
const form_contact = document.querySelector('#formContactESE');

form_contact.addEventListener('submit',handlesSubmit);

async function handlesSubmit(event) {
	event.preventDefault();
	const form = new FormData(this);
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			'Accept': 'application/json'
		}
	});
	if (response.ok) {
		this.reset();
		validSubmit();
		document.getElementById('btn_c_submit_contact').classList.add('inactive');
		document.getElementById('msm_gracias_contact').classList.add('active');

		setTimeout(function(){
			document.getElementById('btn_c_submit_contact').classList.remove('inactive');
			document.getElementById('msm_gracias_contact').classList.remove('active');
		}, 3000);
	}
}

/* VALIDACION DE IMPUTS */
/* CAMPO NOMBRE */
const input_nombre = document.getElementById('ese_nombre');
const msm_cI_nombre = document.getElementById('msm_cInvalido_nombre');
let regex = /^[a-zA-Z0-9 áéíóúÁÉÍÓÚ]+$/;
let ex_email = /^[a-zA-Z0-9\-\@]+$/;

input_nombre.addEventListener('input', () => {
  if (!regex.test(input_nombre.value)) {
		input_nombre.classList.add('invalido');
		msm_cI_nombre.classList.add('invalido');
	} else if (regex.test(input_nombre.value)) {
		input_nombre.classList.remove('invalido');
		msm_cI_nombre.classList.remove('invalido');
	}

	validSubmit(); // EJECUTAMOS LA VALIDACION DEL BOTON DE ENVIAR...
});

/* CAMPO ASUNTO */
const input_asunto = document.getElementById('ese_asunto');
const msm_cI_asunto = document.getElementById('msm_cInvalido_asunto');

input_asunto.addEventListener('input', () => {
  if (!regex.test(input_asunto.value)) {
		input_asunto.classList.add('invalido');
		msm_cI_asunto.classList.add('invalido');
	} else if (regex.test(input_asunto.value)) {
		input_asunto.classList.remove('invalido');
		msm_cI_asunto.classList.remove('invalido');
	}

	validSubmit(); // EJECUTAMOS LA VALIDACION DEL BOTON DE ENVIAR...
});

/* CAMPO E-MAIL */
const input_email = document.getElementById('ese_email');
const msm_cI_email = document.getElementById('msm_cInvalido_ct');

input_email.addEventListener('input', () => {
  if (!ex_email.test(input_email.value)) {
		input_email.classList.add('invalido');
		msm_cI_email.classList.add('invalido');
	} else if (ex_email.test(input_email.value)) {
		input_email.classList.remove('invalido');
		msm_cI_email.classList.remove('invalido');
	}

	validSubmit(); // EJECUTAMOS LA VALIDACION DEL BOTON DE ENVIAR...
});

/* CAMPO MENSAJE */
const input_mensaje = document.getElementById('ese_mensaje');
const msm_cI_mensaje = document.getElementById('msm_cInvalido_mensaje');

input_mensaje.addEventListener('input', () => {
  if (!regex.test(input_mensaje.value)) {
		input_mensaje.classList.add('invalido');
		msm_cI_mensaje.classList.add('invalido');
	} else if (regex.test(input_mensaje.value)) {
		input_mensaje.classList.remove('invalido');
		msm_cI_mensaje.classList.remove('invalido');
	}

	validSubmit(); // EJECUTAMOS LA VALIDACION DEL BOTON DE ENVIAR...
});

/* FUNCION PARA LA VALIDACION DEL FORMULARIO */
const btn_eviar_c = document.getElementById('btn_eviar_c');

function validSubmit() {
	if (
		(input_nombre.value == '' || (input_nombre.value != '' && !regex.test(input_nombre.value))) ||
		(input_asunto.value == '' || (input_asunto.value != '' && !regex.test(input_asunto.value))) ||
		(input_email.value == '' || (input_email.value != '' && !ex_email.test(input_email.value))) ||
		(input_mensaje.value == '' || (input_mensaje.value != '' && !regex.test(input_mensaje.value)))
	) {
		btn_eviar_c.disabled = true;
	} else {
		btn_eviar_c.disabled = false;
	}
}

validSubmit();

/* ANIMACIONES CON FRAMEWORK AOS */
AOS.init();

/* FUNCION QUE LLAMAMOS PARA COPIAR AL PORTA PAPELES */
function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
