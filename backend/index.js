import cors from "cors";
import express from "express";
import { agregarPosts, obtenerPosts } from "./posts.js";


const app = express();

app.use(cors());
app.use(express.json());


app.get("/posts", async (req, res) => {
    try{
const publicacion = await obtenerPosts();
res.json(publicacion);
}catch(error){
    console.error("Error al obtener los posts:", error);
    res.status(500).json({ error: "Error al obtener los posts" });
}
});


app.post("/posts", async  (req, res) =>{
    try{
const {titulo, img, descripcion} = req.body;
await agregarPosts(titulo, img, descripcion);
res.send("post agregado correctamente");
}catch(error){
    console.error("Error al agregar el post:", error);
    res.status(500).json({ error: "Error al agregar el post" });
}
});



app.listen(5000, () =>console.log("servidor levantado"));