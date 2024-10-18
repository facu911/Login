const boton=document.querySelector(".button");
const formulario=document.querySelector(".form");
const fotoPerfil=document.querySelector(".fotoPerfil");
const container=document.querySelector(".container-log")
const password=document.querySelector(".password");
const email=document.querySelector(".email");
const warner1=document.querySelector(".warner1");
const warner2=document.querySelector(".warner2");
const warner3=document.querySelector(".warner3");
const welcomeTitle=document.querySelector(".title");
const checkbox=document.querySelector("#localstorage");
const logout=document.querySelector(".logout")
/* Ingreso a la cuenta con los dos campos completados */
const welcome=()=>{
    fotoPerfil.classList.add("disable");
    formulario.classList.add("disable");
    container.classList.add("welcome");
    welcomeTitle.classList.remove("disable");
    logout.classList.remove("disable");
}
/* Evento para el boton de login(validar si falta algun campo) */
boton.addEventListener("click",()=>{
    if(password.value.length<1&&email.value.length<1){
        /* Mensaje de que falta completar los dos campos */
        warner1.classList.remove("disable");
    }else if(password.value.length>0&&email.value.length<1){
        /* Mensaje de que falta completar el password */
        warner2.classList.remove("disable");
    }else if(password.value.length<1&&email.value.length>0){
        /* Mensaje de que falta completar el email */
        warner3.classList.remove("disable");
    }else if(password.value.length>0&&email.value.length>0){
        welcome();
        /* Almacenamos los datos del usuario */
        localStorage.setItem("emailUser",JSON.stringify(email.value));
        localStorage.setItem("passwordUser",JSON.stringify(password.value));
    }
})
/* Boton para limpiar el localStorage y por lo tanto cerrar sesion */
logout.addEventListener("click",()=>{
    localStorage.clear();
    /* Codigo para volver al login */
    fotoPerfil.classList.remove("disable");
    formulario.classList.remove("disable");
    container.classList.remove("welcome");
    welcomeTitle.classList.add("disable");
    logout.classList.add("disable");
})
/* Si se ingreso un usuario, al recargar la pagina sigue la sesion iniciada */
if(localStorage.getItem("emailUser").length>0&&localStorage.getItem("passwordUser").length>0){
    welcome();
}
