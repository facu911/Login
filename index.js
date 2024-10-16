const boton=document.querySelector(".button");
const formulario=document.querySelector(".form");
const fotoPerfil=document.querySelector(".fotoPerfil");
const container=document.querySelector(".container-log")
boton.addEventListener("click",()=>{
    fotoPerfil.classList.add("disappear");
    formulario.classList.add("disappear");
    container.classList.add("welcome");
    container.innerHTML+=`<h1 class="title">BIENVENIDO!</h1>`
})