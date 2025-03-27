// ID "contadorVisitas" para 

/* --- PAGE VISIT ------- SOLUCION PROPIA ----

const contadorVisitas = document.getElementById('contadorVisitas');  // Capturar contador de visitas
const btnReestablecer = document.getElementById('btnReestablecer'); // Capturar botón de reset

// evento de escucha al recargar la página y función impresión en el contador usando el DOM:

const refresh = window.addEventListener('load', () => contadorVisitas.innerHTML = 1); //¿COMO AÑADIR LAS VISITAS?

// Creación de objeto con clave - valor (refresh):

const datos = {
    visitas: `${refresh}`,
}

// Contador de visitas persistente:

localStorage.setItem('visitas', `${refresh}`);
const visitas = localStorage.getItem('visitas');
console.log(localStorage)

// Reiniciar contador:

const reset = btnReestablecer.addEventListener('click', () => {
    contadorVisitas.innerHTML = 0;
})*/

// ---- SOLUCION + CORRECTA, + VERBOSA Y ESCALABLE ----

//Debemos usar el local storage para generar persistencia.¿Que herramientas tenemos para usar el local storage?
// -> localStorage.setItem("key", "value") -> Crea la clave o cambia su valor si existe.
// -> localStorage.getItem("key") -> Obtiene el valor de la clave.
// -> localStorage.remove("key") -> Elimina la clave y su valor.  ---> EN localStorage SOLO SE PUEDEN ALMACENAR STRINGS <---
// -> localStorage.clear("key") -> Elimina todo el local storage,
// Aquí es donde refrescará el número de visitas id="contadorVisitas" 
// Este es el botón para reestablecer el contenido id="btnReestablecer"

//La clave para el ejercicio y para el localStorage es que genera persistencia.

//LEER E INTERPRETAR EN VOZ ALTA TODO LO QUE OCURRE DESDE QUE SE INICIA LA PÁGINA --> REVELADOR!!!

// javaScript lee el documento de manera SINCRONA (de arriba a abajo)

const contadorVisitas = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");

let visita = localStorage.getItem("visit") || 0 // Como la primera condición no se cumple, es false, se establece el valor 0 a la variable

function addVisit() {      // Seguidamente, se ejercuta la función
    visita++
    localStorage.setItem("visit", visita)   //
    contadorVisitas.innerText = visita;
}

addVisit()

btnReestablecer.addEventListener('click', () => {   // Al clickar el boton:
    localStorage.removeItem("visit");  // se elimina el valor de "visit" del localStorage
    contadorVisitas.innerText = 0   // En el contador, innerText establece el contenido de texto "0"
})
