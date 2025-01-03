const register=document.querySelector(".register");
const login=document.querySelector(".login");

const warner1=document.querySelector(".warner1");
const warner2=document.querySelector(".warner2");
const warner3=document.querySelector(".warner3");

/* Evento para el boton de login(validar si falta algun campo) */
login.addEventListener("click",()=>{
    const password=document.querySelector(".password").value;
    const email=document.querySelector(".email").value;
    if(password.length<1&&email.length<1){
        /* Mensaje de que falta completar los dos campos */
        warner1.classList.remove("disable");
        warner2.classList.add("disable");
        warner3.classList.add("disable");
    }else if(password.length>0&&email.length<1){
        /* Mensaje de que falta completar el password */
        warner2.classList.remove("disable");
        warner3.classList.add("disable");
        warner1.classList.add("disable");
    }else if(password.length<1&&email.length>0){
        /* Mensaje de que falta completar el email */
        warner3.classList.remove("disable");
        warner2.classList.add("disable");
        warner1.classList.add("disable");
    }else if(password.length>0&&email.length>0){
        /* Enviamos los datos y redirigimos al inicio */
    fetch("http://localhost:3000/loginAPI",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email,
            password
        })
    })
    .then(response=>{
        if(!response.ok){
            throw new Error("error en la solicitud "+response.status)
        }
    })
    .then(()=>{
        window.location.href="http://localhost:3000/"
    })
    .catch(error=>{
        console.error("hubo un error " + error.message)
        alert("Error en el login")
    })
        /* Almacenamos los datos del usuario */
        localStorage.setItem("emailUser",email);
        localStorage.setItem("passwordUser",password);
    }
    
})
/* Boton que redirige a registrarse */
register.addEventListener("click",()=>{
    window.location.href="/register"
})
