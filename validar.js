// funcion mostrar error
const mostrarError = (input,mensaje)=>{
    //acceder al div contenedor
    const divPadre = input.parentNode; // Corrected: Declare divPadre and get the parent node
    //encontramos el elemento error-text
    const errorText = divPadre.querySelector('.error-text');
    //agregar la clase de error al elemento padre
    divPadre.classList.add('error'); // Corrected: Access classList once
    //agregamos mensaje de error
    errorText.innerText = mensaje;
}
const input = document.querySelector('#password'); //esto es  para realizar la prueba en la consola
const mensaje = 'campo obligatori';
//----------------------------------------------------------------------------------------------
//eliminar mensaje de error
const eliminarError = input => {
    //acceder a la  etiqueta contenedora
    const divPadre = input.parentNode;
    //eliminar la clase de error del elemento padre/contenedor
    divPadre.classList.remove('error');
    //encontramos el elemento error-text
    const errorText = divPadre.querySelector('.error-text');
    errorText.innerText = '';
}

//-------------------------------------------------------------------------------------------------

//selecciona el formulario del Dom
const formulario = document.querySelector('form');

formulario.querySelectorAll('input').forEach(input => {
    //se activa cuando el valor  de un eñlemento del formulario cambia y se sale del elemento
    input.addEventListener('change',()=>{
        const valor = input.value.trim();
        if (valor !==''){
            eliminarError(input);
        }
    })
})
//------------------------------------------------------------------------------------------------
//esto es una copia de codigos
ler productos = [
(nombre: "Auriculares", categoria: "accesorio", precio 65),
(nombre: "Auriculares Deportivos", categoria: "accesorio", precio 100)
]

