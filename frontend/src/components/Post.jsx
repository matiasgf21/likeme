import { useState } from "react";

function Post({
  post: { id, titulo, img, descripcion, likes },
  like,
  eliminarPost,
  editarPost
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitulo, setEditTitulo] = useState(titulo);
  const [editImg, setEditImg] = useState(img);
  const [editDescripcion, setEditDescripcion] = useState(descripcion);

  return (
    <div className="card col-12 col-sm-4 d-inline mx-0 px-3">
      <div className="card-body p-0">
        <img className="card-img-top" src={img} />

        <div className="p-3">
          {!isEditing ? (
            <>
              <h4 className="card-title">{titulo}</h4>
              <p className="card-text">{descripcion}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i
                    onClick={() => like(id)}
                    className={`fa-heart fa-xl ${likes ? "fa-solid" : "fa-regular"}`}
                  ></i>
                  <span className="ms-1">{likes} onc</span>
                </div>
                <div>
                  <i
                    onClick={() => eliminarPost(id)}
                    className="fa-solid fa-x me-2"
                  ></i>
                  <i
                    onClick={() => setIsEditing(true)}
                    className="fa-solid fa-pen"
                  ></i>
                </div>
              </div>
            </>
          ) : (
            <div className="edit-form">
              <input
                value={editTitulo}
                onChange={(e) => setEditTitulo(e.target.value)}
                placeholder="Título"
                className="form-control mb-2"
              />
              <input
                value={editImg}
                onChange={(e) => setEditImg(e.target.value)}
                placeholder="URL Imagen"
                className="form-control mb-2"
              />
              <textarea
                value={editDescripcion}
                onChange={(e) => setEditDescripcion(e.target.value)}
                placeholder="Descripción"
                className="form-control mb-2"
              ></textarea>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    editarPost(id, editTitulo, editImg, editDescripcion);
                    setIsEditing(false);
                  }}
                >
                  Guardar
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;