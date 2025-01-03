import express from "express"
import {register,login} from "./src/user-repository.js"
import dotenv from "dotenv"
dotenv.config()

/* Codigo para poder usar el __dirname */
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const PORT = process.env.PORT;

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{ res.sendFile(path.join(__dirname, "public/html/index.html")); })
app.get("/login",(req,res)=>{ res.sendFile(path.join(__dirname, "public/html/login.html")); })
app.get("/register",(req,res)=>{ res.sendFile(path.join(__dirname, "public/html/register.html")); })

app.post("/loginAPI",(req,res)=>{
    const {email,password}=req.body
    try{
        const newUser=login({email,password})
        res.send("Bienvenido " + newUser)
    }catch(error){
        return res.status(400).json({error:error.message})
    }
})
app.post("/registerAPI",(req,res)=>{
    const {name,lastName,userName,email,password}=req.body
    try{
        const newUser=register({name,lastName,userName,email,password});
        return res.send("Ha sido registrado con exito " + newUser.name);
    }catch(error){
        console.log(error)
        return res.status(400).json({error:error.message})
    }
})

app.listen(PORT,()=>{
    console.log("Escuchando en el puerto 3000")
})