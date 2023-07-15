import { Router } from "express";
const router = new Router();


router.get("/",(req, res)=>{
    res.send("Hola Mundo");
})

router.post("/",(req, res)=>{
    res.send("Hola POST");
})

router.put("/",(req, res)=>{
    res.send("Hola PUT");
})

router.delete("/",(req, res)=>{
    res.send("Hola DELETE");
})

export default router;