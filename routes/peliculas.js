import express from "express";
import { Router } from "express";
const router = new Router();
let listado =[{titulo:"El imperio contrataca"}];

// Middleware a nivel de aplicación
router.use(express.json());

//OBTENER REGISTROS
router.get("/peliculas",(req,res)=>{
    res.json(listado)
})
//CREA REGISTRO
router.post("/peliculas",(req,res)=>{
    const peli = req.body;
    //console.log(peli);
    listado.push(peli);
    res.status(201).send("Pelicula Creada")
})

router.put("/peliculas",(req,res)=>{
    res.send("Modificar películas")
})

router.delete("/peliculas",(req,res)=>{
    res.send("Eliminar películas")
})

export default router;