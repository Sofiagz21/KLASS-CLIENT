import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import axios from 'axios'
import { Avatar, Tooltip, Button, Modal, List } from "antd";
import { EditOutlined,  CheckOutlined, UploadOutlined} from "@ant-design/icons"
import ReactMarkdown from 'react-markdown'
import AddLessonForm from "../../../../components/forms/AddLessonForm";
import { toast } from "react-toastify";

const CourseView = () => {
    const [course, setCourse] = useState ({});
    
    //para las lecciones
    const [visible,setVisible] = useState(false);
    
    const [values, setValues] = useState({
      title: "",
      content: "",
      pdf:"",
    });
    
    const [uploading, setUploading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState("Cargar PDF")
    const [progress, setProgress] = useState(0);

    const router = useRouter();
    const { slug } = router.query;
    
    useEffect(() =>{
        loadCourse()
    }, [slug]);
    
    const loadCourse = async () => {
        const { data } = await axios.get(`/api/course/${slug}`);
        setCourse(data);
    };
    
    // FUNCIONES PARA AÑADIR LECCIONES
    const handleAddLesson = async (e) => {
      e.preventDefault();
      //console.log(values);
      try{
        const {data} = await axios.post(
          `/api/course/lesson/${slug}/${course.instructor._id}`, 
           values
        );
        //console.log(data)
        setValues({...values, title: "", content: "", pdf: {}})
        setVisible(false);
        setUploadButtonText("Pdf subido");
        setCourse(data);
        toast("Lección añadida");
      } catch (err){
        console.log(err);
        toast("Lección no añadida");
      }
    };
    const handlePdf = async (e) => {
      //console.log(course) // Conprobar el id del instructor al momento de subir leccion
      //return;
      try {
        const file = e.target.files[0];
        setUploadButtonText(file.name);
        setUploading(true);
  
        const pdfData = new FormData();
        pdfData.append("pdf", file);
        // save progress bar and send pdf as form data to backend
        const { data } = await axios.post(`/api/course/pdf-upload/${course.instructor._id}`, 
        pdfData, {
          onUploadProgress: (e) => {
            setProgress(Math.round((100 * e.loaded) / e.total));
          },
        });
        // once response is received
        console.log(data);
        setValues({ ...values, pdf: data });
        setUploading(false);
      } catch (err) {
        console.log(err);
        setUploading(false);
        toast("Error al cargar el archivo PDF");
      }
    };
    const handlePdfRemove = async () => {
      try {
        setUploading(true);
        const { data } = await axios.post(
          `/api/course/pdf-remove/${course.instructor._id}`,
          values.pdf
        );
        console.log(data);
        setValues({ ...values, pdf: {} });
        setUploading(false);
        setUploadButtonText("Upload another PDF");
      } catch (err) {
        console.log(err);
        setUploading(false);
        toast("pdf remove failed");
      }
    };
    return (
        <InstructorRoute>
      <div className="contianer-fluid pt-3">
        {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
        {course && (
          <div className="container-fluid pt-1">
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col">
                    <h5 className="mt-2 text-primary">{course.name}</h5>
                    <p style={{ marginTop: "-10px" }}>
                      {course.lessons && course.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: "-15px", fontSize: "10px" }}>
                      {course.category}
                    </p>
                  </div>
                  <div className="d-flex pt-4">
                    <Tooltip title="Editar">
                      <EditOutlined onClick={()=> router.push (`/instructor/course/edit/${slug}`)
                    }
                    className="h5 pointer text-warning mr-4" />
                    </Tooltip>
                    <Tooltip title="Publicar">
                      <CheckOutlined className="h5 pointer text-danger" />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <ReactMarkdown children={course.description} />
              </div>
            </div>
            <div className="row">
              <Button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center"
                type="primary"
                shape="round"
                icon={<UploadOutlined/>}
                size="large"
              >
                Añadir Lección
              </Button>
            </div> 
            <Modal title="Añadir Lección"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AddLessonForm
                values={values}
                setValues={setValues}
                handleAddLesson={handleAddLesson}
                uploading={uploading}
                uploadButtonText={uploadButtonText}
                handlePdf={handlePdf}
                progress={progress}
                handlePdfRemove={handlePdfRemove}
              />
            </Modal>
            <div className="row pb-5">
              <div className="col lesson-list">
                <h4>
                  {course && course.lessons && course.lessons.length} Lecciones
                </h4> 
                <List itemLayout="horizontal" 
                dataSource={course && course.lessons} 
                renderItem={(item, index)=>(
                  <Item>
                  <Item.Meta 
                  avatar={<Avatar>{index + 1} </Avatar>}
                  title={item.title}
                  ></Item.Meta> 
                  </Item> 
                )}>
                  {course && course.lessons && course.lessons.length} Lecciones
                </List> 
              </div> 
            </div> 
          </div>
        )}
      </div>
    </InstructorRoute>
    )
};

export default CourseView;