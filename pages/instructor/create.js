import {useState, useEffect} from "react";
import axios from 'axios';
import InstructorRoute from "../.../../components/routes/InstructorRoute";
import CourseCreateForm from "../.../../components/form/CourseCreateForm";


const CourseCreate =()=>{

    const [ values, setValues]= useState( //Informacion de cada curso
    {
     name: " ",
     description:" ",
     uploading: false,
     loading: false, 
     category: " ",
     imagePreviem:" "
    })

    const handleChange = (e) => {
        setValues ({...values, [e.target.name]: e.target.value})
    }

    const handleImage = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log(values);
    }

    const courseCreateForm = () => {
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
    }

    //<pre>{JSON.stringify (values,null,4)}</pre> previsualizar la informacion digitada 

    return(
        <InstructorRoute>
            <h1 className="jumbotron text-center square"> Crear curso </h1>
                <div className="pt-3 pb-3">
                    <CourseCreateForm 
                    handleSubmit={handleSubmit}
                    handleImage={handleImage}
                    handleChange={handleChange}
                    values={values}
                    setValues={setValues}
                    />
                </div>
        </InstructorRoute>
    )
}
export default CourseCreate;