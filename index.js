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

boton.addEventListener("click",()=>{
    if(password.value.length<1&&email.value.length<1){
        warner1.classList.remove("disable");
    }else if(password.value.length>0&&email.value.length<1){
        warner2.classList.remove("disable");
    }else if(password.value.length<1&&email.value.length>0){
        warner3.classList.remove("disable");
    }else if(password.value.length>0&&email.value.length>0){
        fotoPerfil.classList.add("disable");
        formulario.classList.add("disable");
        container.classList.add("welcome");
        welcomeTitle.classList.remove("disable")
    }
})
