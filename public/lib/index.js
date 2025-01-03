const welcomeTitle=document.querySelector(".title");
const logout=document.querySelector(".logout");
const formulario=document.querySelector(".form");
const fotoPerfil=document.querySelector(".fotoPerfil");
const container=document.querySelector(".container-log");

/* Ingreso a la cuenta con los dos campos completados */
const welcome=()=>{
    fotoPerfil.classList.add("disable");
    formulario.classList.add("disable");
    container.classList.add("welcome");
    welcomeTitle.classList.remove("disable");
    logout.classList.remove("disable");
}

/* Boton para limpiar el localStorage y por lo tanto cerrar sesion */
logout.addEventListener("click",()=>{
    localStorage.clear();
    /* Redirigimos al login */
    window.location.href= "/login"
})
