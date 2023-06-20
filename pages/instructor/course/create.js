import {useState, useEffect} from "react";
import axios from "axios";
import InstructorRoute from '../../../components/routes/InstructorRoute'
import CourseCreateForm from "../../../components/forms/CourseCreateForm";



const CourseCreate =()=>{

    //state
    const [values, setValues] = useState({
        name: '',
        description: '',
        uploading: false,
        paid:true,
        category: "",
        loading: false,
        imagePreview: ''
    })
    
    const handleChange = e =>{
        setValues({...values, [e.target.name]: e.target.value })
    };
    
    const handleImage =()=>{
        //
    };
    
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(values)
    };
    
    

    return(
        <InstructorRoute>
            <h1 className="jumbotron text-center square">CREAR CURSO</h1> 
            <div className="pt-3 pb-3"> 
                <CourseCreateForm 
                    handleSubmit={handleSubmit} 
                    handleImage={handleImage} 
                    handleChange={handleChange}
                    values={values}
                    setValues={setValues}
                /> 
            </div>
            <pre> {JSON.stringify(values, null, 4)}  </pre>
        </InstructorRoute>
    );
};

export default CourseCreate;