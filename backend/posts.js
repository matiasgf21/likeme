import pg from "pg";
const { Pool } = pg;


const pool = new Pool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
allowExitOnIdle: true,
});


const getDate = async () =>{
    const result = await pool.query("SELECT NOW()")

    console.log(result.rows);
}

getDate();


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


export { obtenerPosts, agregarPosts };