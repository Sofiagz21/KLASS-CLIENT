import {useState} from "react";
import axios from "axios";
import InstructorRoute from '../../../components/routes/InstructorRoute'
import CourseCreateForm from "../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import {toast} from 'react-toastify'
import { useRouter } from "next/router";

const CourseCreate =()=>{
    //state
    const [values, setValues] = useState({
        name: '',
        description: '',
        uploading: false,
        paid:true,
        category: "",
        loading: false,
    })
    const [image, setImage] = useState ({});
    const [preview, setPreview] = useState('');
    const [uploadButtonText,setUploadButtonText] = useState('Cargar Imagen');
    
    // router 
    const router = useRouter();
    
    const handleChange = e =>{
        setValues({...values, [e.target.name]: e.target.value })
    };
    
    const handleImage =(e)=>{
        let file = e.target.files[0];
        setPreview(window.URL.createObjectURL(file));
        setUploadButtonText(file.name);
        setValues({ ...values, loading: true });
        
        //resize
        Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
            try{
                let {data} = await axios.post('/api/course/upload-image',{
                    image: uri,
                });
                console.log("IMAGEN SUBIDA",data)
                // set image
                setImage(data)
                setValues({ ...values, loading: false});
            
            }catch (err){
                console.log(err)  
                setValues({...values, loading: false});
                toast('Error al cargar la imagen... Inténtalo después')
            }
        })
    };
    
    const handleImageRemove = async () =>{
        try{
            //console.log(values)
            setValues({...values, loading: true});
            const res = await axios.post('/api/course/remove-image', {image})
            setImage({});
            setPreview('');
            setUploadButtonText('IMAGEN SUBIDA');
            setValues({...values, loading: false});
        } catch(err){
            console.log(err)  
            setValues({...values, loading: false});
            toast('Error al cargar la imagen... Inténtalo después')
        }     
    };
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          ///console.log(values);
          const { data } = await axios.post("/api/course", {
            ...values,
            image,
          });
          toast("Genial, ahora puedes añadir lecciones");
          router.push("/instructor");
        } catch (err) {
          toast(err.response.data);
        }
      };
    
    return(
        <InstructorRoute>
            <h1 className="jumbotron text-center square"> CREAR CURSO</h1> 
            <div className="pt-3 pb-3"> 
                <CourseCreateForm
                    handleSubmit={handleSubmit}
                    handleImage={handleImage}
                    handleChange={handleChange}
                    values={values}
                    setValues={setValues}
                    preview={preview}
                    uploadButtonText={uploadButtonText}
                    handleImageRemove={handleImageRemove}
                /> 
            </div>
            <pre> {JSON.stringify(values, null, 4)}  </pre>
            <hr/>
            <pre> {JSON.stringify(image, null, 4)}  </pre>
        </InstructorRoute>
    );
};

export default CourseCreate;