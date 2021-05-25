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

// MODALES ACCTIONS...
// Houston
const btn_mHouston = document.getElementById('btn_mIHosuton');
const btn_close_mHouston = document.getElementById('btn_cMHouston');
const vm_mHouston = document.getElementById('mHouston');

btn_mIHosuton.addEventListener('click', () => {
	vm_mHouston.classList.add('mActive');
});

btn_close_mHouston.addEventListener('click', () => {
	vm_mHouston.classList.remove('mActive');
});

// Dallas e Irving
const btn_mDallasEIrving = document.getElementById('btn_mDallasEIrving');
const btn_close_mDallasEIrving = document.getElementById('btn_cMDallasEIrving');
const vm_mDallasEIrving = document.getElementById('mDallasEIrving');

btn_mDallasEIrving.addEventListener('click', () => {
	vm_mDallasEIrving.classList.add('mActive');
});

btn_close_mDallasEIrving.addEventListener('click', () => {
	vm_mDallasEIrving.classList.remove('mActive');
});

// Austin
const btn_mAustin = document.getElementById('btn_mAustin');
const btn_close_mAustin = document.getElementById('btn_cMAustin');
const vm_mAustin = document.getElementById('mAustin');

btn_mAustin.addEventListener('click', () => {
	vm_mAustin.classList.add('mActive');
});

btn_close_mAustin.addEventListener('click', () => {
	vm_mAustin.classList.remove('mActive');
});

// San Antonio
const btn_mSanAntonio = document.getElementById('btn_mSanAntonio');
const btn_close_mSanAntonio = document.getElementById('btn_cMSanAntonio');
const vm_mSanAntonio = document.getElementById('mSanAntonio');

btn_mSanAntonio.addEventListener('click', () => {
	vm_mSanAntonio.classList.add('mActive');
});

btn_close_mSanAntonio.addEventListener('click', () => {
	vm_mSanAntonio.classList.remove('mActive');
});

// cajas via aerea...
const btn_mCa = document.getElementById('btn_mCa');
const btn_close_mCa = document.getElementById('btn_cMCa');
const vm_mCa = document.getElementById('mCa');

btn_mCa.addEventListener('click', () => {
	vm_mCa.classList.add('mActive');
});

btn_close_mCa.addEventListener('click', () => {
	vm_mCa.classList.remove('mActive');
});

// cajas via maritima...
const btn_mCm = document.getElementById('btn_mCm');
const btn_close_mCm = document.getElementById('btn_cMCm');
const vm_mCm = document.getElementById('mCm');

btn_mCm.addEventListener('click', () => {
	vm_mCm.classList.add('mActive');
});

btn_close_mCm.addEventListener('click', () => {
	vm_mCm.classList.remove('mActive');
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

// El Houston
const btn_map_houston = document.getElementById('btn_map_houston');

btn_map_houston.addEventListener('click', () => {
	window.open('https://goo.gl/maps/PuFPMeA6s2KW2REM9', '_blank');
});

// El Jiquilisco
const btn_map_jiquilisco = document.getElementById('btn_map_jiquilisco');

btn_map_jiquilisco.addEventListener('click', () => {
	window.open('https://goo.gl/maps/tg1SyTg9Kqpk2arY6', '_blank');
});

// El Ozatlan
const btn_map_ozatlan = document.getElementById('btn_map_ozatlan');

btn_map_ozatlan.addEventListener('click', () => {
	window.open('https://goo.gl/maps/eGikxkJmkTiAPTX86', '_blank');
});

// El SE
const btn_map_se = document.getElementById('btn_map_se');

btn_map_se.addEventListener('click', () => {
	window.open('https://goo.gl/maps/Dzg6KauwubEapnuh9', '_blank');
});

// El Usulutan
const btn_map_usulutan = document.getElementById('btn_map_usulutan');

btn_map_usulutan.addEventListener('click', () => {
	window.open('https://goo.gl/maps/gq1mwgEY59d85WrY7', '_blank');
});

/* FORMULARIO DE CONTACTO */
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
