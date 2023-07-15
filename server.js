import express from "express";
import router from "./routes/index.js";
import router_peliculas from "./routes/peliculas.js";


const app = express();
const puerto = 3000;

app.use(router)
app.use(router_peliculas)


app.listen(puerto, ()=>{
    console.log(`Servicio levantando en el puerto ${puerto}`)
});