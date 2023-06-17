import {useState, useEffect} from "react";

const CourseCreateForm = ({
    handleSubmit, 
    handleChange, 
    handleImage, 
    values,
    setValues,
}) => {

    return (
    <form onSubmit={handleSubmit}> 
    <div className="form-group">
        <input type ="text" //Ingresar el nombre del curso
        name="name"
        className="form-control"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        >
        </input>
    </div>
    <div className="form-group">
        <textarea name ="description" //Ingresar la descripcion del curso
            cols="7"
            rows="7"
            value={values.description}
            className="form-control"
            onChange={handleChange}
            >
        </textarea>
    </div>
    <div className="form-group">
        <input type ="text" //Ingresar la categoria del curso
            name="category"
            className="form-control"
            placeholder="Category"
            value={values.category}
            onChange={handleChange}
            >
        </input>
    </div>
    <div className="form-row">
        <div className="col">
            <div className="form-group">
                <label className="btn btn-outline-secondary btn-block text-left">
                    {values.loading ? 'Uploading' : 'Image Upload'}
                    <input type ="file" //Ingresar la imagen del curso
                        name="image"
                        onChange={handleImage}
                        accept="image/*"
                        hidden
                        >
                    </input>
                </label>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <button onClick={handleSubmit} //Editar el boton que guarda la informacion del curso
            disabled={values.loading || values.uploading}  
            className="btn btn-primary"
            loading={values.loading}
            icon={<SaveOutlined/>}
            type="primary"
            size="large"
            shape="round"
            >
            {values.loading ? "Guardando..." : "Guardar y continuar "}
            </button>
        </div>
    </div>
    </form>
    )
};
export default CourseCreateForm;