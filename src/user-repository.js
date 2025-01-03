import DBLocal from "db-local"
import bcrypt from "bcrypt"

const {Schema}=new DBLocal({path:"./db"})

const User=Schema("user",{
    name:{type:String,required:true},
    lastName:{type:String, required:true},
    userName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

/* Funcion para que el usuiario se registre y almacenamos sus datos */
export const register= ({name,lastName,userName,email,password})=>{
    /* Validamos que no exista ya el username que eligio el cliente */
    const user = User.findOne({userName});
    if(user){
        throw new Error("El username que quiere ingresar ya existe")
    }
    /* Encriptamos el password */
    const passwordHash=bcrypt.hashSync(password,10)
    /* Creamos la instancia del schema */
    const newUser=User.create({
        name,
        lastName,
        userName,
        email,
        password:passwordHash
    }).save()
    return newUser;
}

/* Funcion para que el usuario pueda inicar sesion ya registrado */
export const login=({email,password})=>{
    /* Validamos de que el usarName exista en el registro */
    const user=User.findOne({email})
    if (!user) {
        throw new Error("Este email no existe, debe registrarse primero")
    }
    /* comparamos el password con el password del userame que encontramos */
    const valid = bcrypt.compareSync(password,user.password)
    if (!valid) {
        throw new Error("La contraseña es incorrecta")
    }
    return user.name;
}