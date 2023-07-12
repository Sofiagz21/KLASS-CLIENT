import {useState , useEffect } from "react";
import axios from "axios";
import InstructorRoute from '../../../../components/routes/InstructorRoute'
import CourseCreateForm from "../../../../components/forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import {toast} from 'react-toastify'
import { useRouter } from "next/router";
import { List , Avatar , Modal} from "antd";
import { DeleteOutLined } from "@ant-design/icons";
import { UpdateLessonForm } from "../../../../components/forms/UpdateLessonForm";



const {Item}= List;

const CourseEdit =()=>{
    //state
    const [values, setValues] = useState({
        name: '',
        description: '',
        uploading: false,
        paid:true,
        category: "",
        loading: false,
        lessons: [],
    })
    const [image, setImage] = useState ({});
    const [preview, setPreview] = useState('');
    const [uploadButtonText,setUploadButtonText] = useState('Cargar Imagen');
    
    // router 
    const router = useRouter();
    const {slug} = router.query;

    //Actualización del estado de las lecciones
    const [visible, setVisible] = useState (false);
    const [current, setCurrent] = useState ({});
    const [uploadPdfButtonText,setUploadPdfButtonText] = useState('Cargar Pdf');
    const [progress,setProgress] = useState(0);
    const [uploading,setUploading] = useState(0);



    useEffect(()=>{
    loadCourse ()
    }, [slug] )

    const loadCourse = async ()=>{
        const {data} = await axios.get(`/api/course/${slug}`)
        console.log(data);

        if (data) setValues(data);
        if (data && data.image)setImage(data.image);
    }
    
    const handleChange = e =>{
        setValues({...values, [e.target.name]: e.target.value })
    };

    const handlePdf = () =>{
      console.log("")
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
          const { data } = await axios.put(`/api/course/${slug}`, {
            ...values,
            image,
          });
          toast("Curso guardado");
          //router.push("/instructor");
        } catch (err) {
          toast(err.response.data);
        }
      };

      const handleDrag = (e,index)=>{
        e.dataTransfer.setData("Item index", index)
        //console.log ('Desplazando', index) // Permite mover las lecciones de lugar
      }
      const handleDrop = async (e,index)=>{
        const movingItemIndex= e.dataTransfer.getData("itemIndex");
        const targetItemIndex=index;
        let addLessons= values.lessons;

        let movingItem= allLessons[movingItemIndex]; //cliqueando // arrastrando el item para reordenar
        allLessons.splice(movingItemIndex,1) // Quitar el item del index inicial
        allLessons.splice(targetItemIndex,0) //Colocar el item despues de la tarjeta inicial
        setValues({...values, lessons:{...allLessons}});

        //Guardar la nueva leccion en orden en la bd

        const {data}= await axios.put(`/api/course/${slug}`,{
        ...values,
        image
        });

        console.log('LECCIONES REORDENADAS', data)
        toast("Lecciones reordenadas exitosamente")


        //console.log ('Desplazando', index) // Permite mover las lecciones de lugar
      };

      const handleDelete = async (index)=>{
        const answer = window.confirm("¿Estas seguro que quieres eliminarla?");
        if(!answer) return;
        let allLessons=values.lessons;
        const removed= allLessons.splice(index,1);
        //console.log("eliminado",removed[0]._id )
        setValues({...values, lessons:allLessons});
        //Enviar solicitud al servidor 
        const {data}=await axios.put(`/api/course/${slug}/${removed[0]._id}`)
        console.log("Leccion eliminada",data)
      };


      const handleUpdateLesson = async (e)=>{
      e.preventDefault();
      const {data} = await axios.put(
        `/api/course/lesson/${slug}/${current._id}`,
        current
      )
      setVisible(false);
      if(data.ok){
        let arr=values.lessons
        const index= arr.findIndex((el)=> el._id === current._id);
        arr [index]=current;
        setValues({...values, lessons:arr});
        toast('Leccion actualizada')
      }
      };
    
    return(
        <InstructorRoute>
            <h1 className="jumbotron text-center square"> Cargar curso </h1> 
            {/*JSON.stringify(values)*/}
            <div className="pt-3 pb-3"> 
                <CourseCreateForm
                    handleSubmit={handleSubmit}
                    handleImage={handleImage}
                    handleImageRewmove={handleImageRemove}
                    handleChange={handleChange}
                    values={values}
                    setValues={setValues}
                    preview={preview}
                    uploadButtonText={uploadButtonText}
                    editPage={true}
                /> 
            </div>
            {/*<pre> {JSON.stringify(values, null, 4)}  </pre>
            <hr/>
            <pre> {JSON.stringify(image, null, 4)}  </pre>*/}
            <hr/>
            <div className="row pb-5">
              <div className="col lesson-list">
                <h4>
                  {values && values.lessons && values.lessons.length} Lecciones
                </h4> 
                <List 
                onDragOver={(e)=> e.preventDefault() }
                itemLayout="horizontal" 
                dataSource={values && values.lessons} 
                renderItem={(item, index)=>(
                  <Item
                  draggable
                  onDragStart={(e) => handleDrag(e,index)}
                  onDrop={(e) => handleDrop(e,index)}
                  >
                  <Item.Meta 
                  onClick={()=>{
                  setVisible(true);
                  setCurrent(item);
                  }}
                  avatar={<Avatar>{index + 1} </Avatar>}
                  title={item.title}
                  ></Item.Meta> 
                  <DeleteOutLined 
                  onClick={()=> handleDelete(index,item)} 
                  className="text-danger float-right"/>
                  </Item> 
                )}>
                </List> 
              </div> 
            </div> 
            <Modal
            title="Actualizar la leccion"
            centered
            visible={visible}
            onCancel={()=> setVisible(false)} 
            >
            <UpdateLessonForm 
            current={current} 
            setCurrent={setCurrent} 
            handlePdf={handlePdf} 
            handleUpdateLesson={handleUpdateLesson}
            uploadPdfButtonText={uploadPdfButtonText}
            progress={progress} 
            uploading={uploading}
            />
            {/*<pre>{JSON.stringify(current,null,4)}</pre>*/}
            </Modal>  
        </InstructorRoute>
    );
};

export default CourseEdit;