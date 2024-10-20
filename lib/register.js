/* Seleccion de elementos de advertencias */
const warner1=document.querySelector(".warner1");
const warner2=document.querySelector(".warner2");
/* Al precionar el boton de register tomamos su informacion y validamos*/
const btnRegister=document.querySelector(".btnRegister");
/* Evento del boton register */
btnRegister.addEventListener("click",()=>{
    const userInfo=document.querySelectorAll(".inputStyle");
    /* Creamos variables para poder validar la igualdad de contraseñas */
    let password1="";
    let password2="";
    /* Recorremos la info de los inputs */
    for (info of userInfo) {
        /* Mostramos los datos por consola y almacenamos las contraseñas */
        if(info.id==="password1"){
            password1=info.value
            console.log(info.value)
        }else if(info.id==="password2"){
            password2=info.value
            console.log(info.value)
        }else{
            console.log(info.value)
        }
        /* Validamos el email */
        if(info.id==="email"){
            if(!info.value.includes("@")){
                warner2.classList.remove("disable");
            }else{
                warner2.classList.add("disable");
            }
        }
    }
    /* Validamos la igualdad de las contraseñas */
    if(password1!=password2){
        warner1.classList.remove("disable");
    }else{
        warner1.classList.add("disable");
    }
})
/* Al precionar el boton back volvemos al login */
const btnBack=document.querySelector(".btnBack");
btnBack.addEventListener("click",()=>{
    window.location.href="login.html"
})