const register=document.querySelector(".register");
const login=document.querySelector(".login");
const password=document.querySelector(".password");
const email=document.querySelector(".email");
const warner1=document.querySelector(".warner1");
const warner2=document.querySelector(".warner2");
const warner3=document.querySelector(".warner3");

/* Evento para el boton de login(validar si falta algun campo) */
login.addEventListener("click",()=>{
    if(password.value.length<1&&email.value.length<1){
        /* Mensaje de que falta completar los dos campos */
        warner1.classList.remove("disable");
        warner2.classList.add("disable");
        warner3.classList.add("disable");
    }else if(password.value.length>0&&email.value.length<1){
        /* Mensaje de que falta completar el password */
        warner2.classList.remove("disable");
        warner3.classList.add("disable");
        warner1.classList.add("disable");
    }else if(password.value.length<1&&email.value.length>0){
        /* Mensaje de que falta completar el email */
        warner3.classList.remove("disable");
        warner2.classList.add("disable");
        warner1.classList.add("disable");
    }else if(password.value.length>0&&email.value.length>0){
        /* Redirigimos al index */
        window.location.href="index.html"
        /* Almacenamos los datos del usuario */
        localStorage.setItem("emailUser",JSON.stringify(email.value));
        localStorage.setItem("passwordUser",JSON.stringify(password.value));
    }
})
/* Boton que redirige a registrarse */
register.addEventListener("click",()=>{
    window.location.href="register.html"
})
