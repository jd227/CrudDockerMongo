import express from "express";
import mongoose from "mongoose";

const App = express();
const Animales = mongoose.model("animales",new mongoose.Schema({
    nombre: String,
    especie : String,
    status: String
}));

mongoose.connect('mongodb://root:12345@nomgo1:27017/miapp?authSource=admin');

App.get("/",async (req,res) =>{
    console.log("Loading");
    const animales = await Animales.find();
    return res.send(animales);
});

App.get("/agregar",async (req,res) =>{
        console.log("Creando");
        await Animales.create({
        nombre: "Perro",
        especie: "Canino",
        status: "Dead"})
        return res.send("Creado");
});

App.get("/destroy/:name", async (req,res)=>{
    console.log("Eliminando");
})


const port = 2000;
App.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


    
