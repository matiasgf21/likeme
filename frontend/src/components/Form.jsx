function Form({
  titulo,
  imgSrc,
  descripcion,
  setTitulo,
  setImgSRC,
  setDescripcion,
  agregarPost,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!titulo.trim() || !imgSrc.trim() || !descripcion.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    agregarPost();

    // Optionally reset inputs here if desired:
    setTitulo("");
    setImgSRC("");
    setDescripcion("");
  };

  return (
    <form className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label>Título</label>
        <input
          maxLength={25}
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>URL de la imagen</label>
        <input
          maxLength={1000}
          value={imgSrc}
          onChange={(event) => setImgSRC(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          maxLength={255}
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={handleSubmit} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </form>
  );
}

export default Form;
