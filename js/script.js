// realizar un seguimiento del número de veces que los usuarios han visitado tu página. *Revisar addEventListener

// Contador de visitas persistente utilizando `localStorage`. setItem() y getItem(). * capturar id="contadorVisitas"

// Cada vez que se recarga la página debe añadir una visita más-

// Debe persistir el número aunque se cierre el navegador

// Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
    
    // - Revisar documentación botones
    // - comenzara de nuevo en 1, revisar como

    // Siéntete libre de personalizar la aplicación según tus necesidades. Puedes ajustar los estilos y agregar nuevas funcionalidades

// --- PAGE VISIT ---

const contadorVisitas = document.getElementById('contadorVisitas');  // Capturar contador de visitas
const btnReestablecer = document.getElementById('btnReestablecer'); // Capturar botón de reset

// evento de escucha al recargar la página y función impresión en el contador usando el DOM:

/*let accumulator = new Accumulator(1); // valor inicial 1

accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario

alert(accumulator.value); // muestra la suma de estos valores*/


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
})


