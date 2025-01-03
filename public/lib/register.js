
/* Seleccion de elementos de advertencias */
const warner1=document.querySelector(".warner1");
const warner2=document.querySelector(".warner2");
const warner3=document.querySelector(".warner3");
/*seleccionamos el boton de register*/
const btnRegister=document.querySelector(".btnRegister");
/* Evento del boton register */
btnRegister.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    const lastName=document.getElementById("lastName").value;
    const userName=document.getElementById("userName").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password1").value;
    const repPassword=document.getElementById("password2").value;
    /* validamos algunos campos */
    /* Creamos variables para poder validar la igualdad de contraseñas */
    let password1="";
    let password2="";
    /* validamos email */
    if(!email.includes("@")){
        warner2.classList.remove("disable");
        warner1.classList.add("disable");
        warner3.classList.add("disable");
    }
    /* validamos el password */
    if(password.length<8){
        warner3.classList.remove("disable");
        warner1.classList.add("disable");
        warner2.classList.add("disable");
    }else{
        password1=password;
        password2=repPassword;
    }
    /* Validamos la igualdad de los password */
    if(password1!=password2){
        warner1.classList.remove("disable");
    }else{
        warner1.classList.add("disable");
    }
    /* Enviamos la informacion del usuario al endpoint */
    fetch("http://localhost:3000/registerAPI",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            name,
            lastName,
            userName,
            email,
            password
        })
    }).then(response=>{
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        console.log( response.json());
    })
    .then(() => {
        window.location.href= "/login"
    })
    .catch(error => {
        console.error("Hubo un error:", error.message);
        alert("Error al registrar el usuario")
    });
})
/* Al precionar el boton back volvemos al login */
const btnBack=document.querySelector(".btnBack");
btnBack.addEventListener("click",()=>{
    window.location.href= "/login"
})