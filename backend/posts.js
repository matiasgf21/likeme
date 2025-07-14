import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pg;


const pool = new Pool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
allowExitOnIdle: true,
});





const obtenerPosts = async () => {
    const consulta = "SELECT * FROM posts";

    const result = await pool.query(consulta);
    //console.log(result.rows);

    return result.rows;
};



const agregarPosts = async (titulo, img, descripcion) =>{
const consulta = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3)";
const values = [titulo, img, descripcion];

const result = await pool.query(consulta, values);

console.log("Publicacion agregada correctamente", result.rowCount);
}


const eliminarPost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  await pool.query(consulta, values);
};

const editarPost = async (id, titulo, img, descripcion) => {
  const consulta = `
    UPDATE posts 
    SET titulo = $1, img = $2, descripcion = $3 
    WHERE id = $4
  `;
  const values = [titulo, img, descripcion, id];
  await pool.query(consulta, values);
};


export { obtenerPosts, agregarPosts, eliminarPost, editarPost };