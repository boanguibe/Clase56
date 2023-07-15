import express from "express";
import fs from "fs";
import { Router } from "express";
const router = new Router();
let listado = JSON.parse(fs.readFileSync("./data/peliculas.json"));

// Middleware a nivel de aplicación
router.use(express.json());

//OBTENER REGISTROS
router.get("/peliculas",(req,res)=>{
    listado = JSON.parse(fs.readFileSync("./data/peliculas.json"))
    res.json(listado)
})
//CREA REGISTRO
router.post("/peliculas",(req,res)=>{
    const peli = req.body;
    //console.log(peli);
    listado.push(peli);
    fs.writeFileSync("./data/peliculas.json", JSON.stringify(listado));
    res.status(201).send("Pelicula Creada")
})

router.put("/peliculas",(req,res)=>{
    res.send("Modificar películas")
})

router.delete("/peliculas",(req,res)=>{
    res.send("Eliminar películas")
})

export default router;