// realizar un seguimiento del número de veces que los usuarios han visitado tu página. *Revisar addEventListener

// Contador de visitas persistente utilizando `localStorage`. setItem() y getItem(). * capturar id="contadorVisitas"

// Cada vez que se recarga la página debe añadir una visita más-

// Debe persistir el número aunque se cierre el navegador

// Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
    // - Revisar documentación botones
    // - comenzara de nuevo en 1, revisar como (getelement by id??)

// Siéntete libre de personalizar la aplicación según tus necesidades. Puedes ajustar los estilos y agregar nuevas funcionalidades



const contadorVisitas = document.getElementById("contadorVisitas");  // Contador de visitas capturado
const btnRestablecer = document.getElementById("btnReestablecer"); // Botón de reset capturado

//console.log(parseFloat("contadorVisitas"))


console.log(parseFloat(contadorVisitas))

//window.addEventListener('load', () => contadorVisitas.innerHTML += 1);


/*const text ='0'
console.log(text)
console.log(parseFloat(text) + 2)*/







/*const datos = {
    visitas: '',
}

localStorage.setItem('visitas', '');

const visitas = localStorage.getItem('visitas');*/
