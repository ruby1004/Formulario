//alert("Formulario de registro"); Funcion de javascript para enviar mensajes al navegador

//const nombre = "Rubileisy";
//alert(nombre);

//const Nombre= prompt ("¿Cual es tu nombre?");
//alert("Tu nombre:"+ nombre) 

const nombre = document.getElementById("Nombre");

const apellido =document.getElementById("Apellido");

const correoelectronico = document.getElementById("Correoelectronico");

const usuario = document.getElementById("Usuario");

const contrasena = document.getElementById("Contrasena");

const confirmarcontrasena = document.getElementById("Confirmarcontrasena");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault ();
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(usuario.value);
    console.log(correoelectronico.value);
    console.log(contrasena.value);
    console.log(confirmarcontrasena.value);


    nombre.value = ""
    apellido.value =""
    usuario.value = ""
    correoelectronico.value =""
    contrasena.value = ""
    confirmarcontrasena.value =""
  
   });
  