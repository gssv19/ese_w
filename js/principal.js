window.addEventListener("scroll",()=>{const e=document.querySelector("header");e.classList.toggle("stiky",0<window.scrollY),e.classList.toggle("stiky",0<window.scrollY)?document.getElementById("nav_logo").src="./imagenes/logo_azul.svg":document.getElementById("nav_logo").src="./imagenes/logo_amarillo.svg"});const menu=document.querySelector(".menutoggle");menu.addEventListener("click",()=>{menu.classList.toggle("active"),document.querySelector(".navigation_items").classList.toggle("active")}),document.getElementById("item_uno").addEventListener("click",()=>{menu.classList.toggle("active"),document.querySelector(".navigation_items").classList.toggle("active")}),document.getElementById("item_dos").addEventListener("click",()=>{menu.classList.toggle("active"),document.querySelector(".navigation_items").classList.toggle("active")}),document.getElementById("item_tres").addEventListener("click",()=>{menu.classList.toggle("active"),document.querySelector(".navigation_items").classList.toggle("active")}),document.getElementById("item_cuatro").addEventListener("click",()=>{menu.classList.toggle("active"),document.querySelector(".navigation_items").classList.toggle("active")}),document.getElementById("item_cinco").addEventListener("click",()=>{menu.classList.toggle("active"),document.querySelector(".navigation_items").classList.toggle("active")}),document.getElementById("dirHouston").addEventListener("click",()=>{window.open("https://goo.gl/maps/PuFPMeA6s2KW2REM9","_blank")}),document.getElementById("dirDallasIrving").addEventListener("click",()=>{window.open("https://goo.gl/maps/hjcomtr28RXTWPFu6","_blank")}),document.getElementById("dirAustin").addEventListener("click",()=>{window.open("https://goo.gl/maps/zDugBL3TdLFNhBer6","_blank")});const btn_map_austin=document.getElementById("btn_map_austin");btn_map_austin.addEventListener("click",()=>{window.open("https://goo.gl/maps/zDugBL3TdLFNhBer6","_blank")});const btn_map_irving=document.getElementById("btn_map_irving");btn_map_irving.addEventListener("click",()=>{window.open("https://goo.gl/maps/hjcomtr28RXTWPFu6","_blank")});const btn_map_et=document.getElementById("btn_map_et");btn_map_et.addEventListener("click",()=>{window.open("https://goo.gl/maps/3eBHoKWhfEK4qan88","_blank")});const btn_map_houston=document.getElementById("btn_map_houston");btn_map_houston.addEventListener("click",()=>{window.open("https://goo.gl/maps/PuFPMeA6s2KW2REM9","_blank")});const btn_map_jiquilisco=document.getElementById("btn_map_jiquilisco");btn_map_jiquilisco.addEventListener("click",()=>{window.open("https://goo.gl/maps/tg1SyTg9Kqpk2arY6","_blank")});const btn_map_ozatlan=document.getElementById("btn_map_ozatlan");btn_map_ozatlan.addEventListener("click",()=>{window.open("https://goo.gl/maps/eGikxkJmkTiAPTX86","_blank")});const btn_map_se=document.getElementById("btn_map_se");btn_map_se.addEventListener("click",()=>{window.open("https://goo.gl/maps/Dzg6KauwubEapnuh9","_blank")});const btn_map_usulutan=document.getElementById("btn_map_usulutan");btn_map_usulutan.addEventListener("click",()=>{window.open("https://goo.gl/maps/gq1mwgEY59d85WrY7","_blank")});const form_contact=document.querySelector("#formContactESE");form_contact.addEventListener("submit",handlesSubmit);async function handlesSubmit(e){e.preventDefault();e=new FormData(this);(await fetch(this.action,{method:this.method,body:e,headers:{Accept:"application/json"}})).ok&&(this.reset(),validSubmit(),document.getElementById("btn_c_submit_contact").classList.add("inactive"),document.getElementById("msm_gracias_contact").classList.add("active"),setTimeout(function(){document.getElementById("btn_c_submit_contact").classList.remove("inactive"),document.getElementById("msm_gracias_contact").classList.remove("active")},3e3))}const input_nombre=document.getElementById("ese_nombre"),msm_cI_nombre=document.getElementById("msm_cInvalido_nombre");let regex=/^[a-zA-Z0-9 áéíóúÁÉÍÓÚ]+$/,ex_email=/^[a-zA-Z0-9\-\@]+$/;input_nombre.addEventListener("input",()=>{regex.test(input_nombre.value)?regex.test(input_nombre.value)&&(input_nombre.classList.remove("invalido"),msm_cI_nombre.classList.remove("invalido")):(input_nombre.classList.add("invalido"),msm_cI_nombre.classList.add("invalido")),validSubmit()});const input_asunto=document.getElementById("ese_asunto"),msm_cI_asunto=document.getElementById("msm_cInvalido_asunto");input_asunto.addEventListener("input",()=>{regex.test(input_asunto.value)?regex.test(input_asunto.value)&&(input_asunto.classList.remove("invalido"),msm_cI_asunto.classList.remove("invalido")):(input_asunto.classList.add("invalido"),msm_cI_asunto.classList.add("invalido")),validSubmit()});const input_email=document.getElementById("ese_email"),msm_cI_email=document.getElementById("msm_cInvalido_ct");input_email.addEventListener("input",()=>{ex_email.test(input_email.value)?ex_email.test(input_email.value)&&(input_email.classList.remove("invalido"),msm_cI_email.classList.remove("invalido")):(input_email.classList.add("invalido"),msm_cI_email.classList.add("invalido")),validSubmit()});const input_mensaje=document.getElementById("ese_mensaje"),msm_cI_mensaje=document.getElementById("msm_cInvalido_mensaje");input_mensaje.addEventListener("input",()=>{regex.test(input_mensaje.value)?regex.test(input_mensaje.value)&&(input_mensaje.classList.remove("invalido"),msm_cI_mensaje.classList.remove("invalido")):(input_mensaje.classList.add("invalido"),msm_cI_mensaje.classList.add("invalido")),validSubmit()});const btn_eviar_c=document.getElementById("btn_eviar_c");function validSubmit(){""==input_nombre.value||""!=input_nombre.value&&!regex.test(input_nombre.value)||""==input_asunto.value||""!=input_asunto.value&&!regex.test(input_asunto.value)||""==input_email.value||""!=input_email.value&&!ex_email.test(input_email.value)||""==input_mensaje.value||""!=input_mensaje.value&&!regex.test(input_mensaje.value)?btn_eviar_c.disabled=!0:btn_eviar_c.disabled=!1}function copiarAlPortapapeles(e){var t=document.createElement("input");t.setAttribute("value",document.getElementById(e).innerHTML),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}validSubmit(),AOS.init();