let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let limpiar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_^-/+[]{};:,.<>¿?';

function generar() {
    
    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; //detener la ejecucion si la validacion falla
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;

    }

    contrasena.value = password;
    validarContrasena(password);

}


function validarContrasena(password){

    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneMinuscula = /[a-z]/.test(password);
    let tieneNumero = /[0-9]/.test(password);
    let tieneSimbolo =/[",.-_+*'/<>|^#$%&/()=?!¡¿?"]/.test(password);

    let mensajeTexto = '';

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneSimbolo) {
        mensajeTexto = 'La contraseña es Fuerte.';
    } else{
        mensajeTexto = 'La contraseña es debil. Asegúrate de que la contraseña contenga mayúsculas, minúsculas, números y simbolos.';

    }

    mensaje.textContent = mensajeTexto;

}

boton.addEventListener('click', generar);

function limpiarCampos() {
    cantidad.value = '';
    contrasena.value = '';
    mensaje.textContent = '';
}

limpiar.addEventListener('click', limpiarCampos);


//Proyecto de Luz María R.
