
import {useState, useEffect} from "react";
import axios from 'axios';
import InstructorRoute from '../../components/routes/InstructorRoute'
import { Avatar } from "antd";
import Link from 'next/link'
import { CheckCirleOutlined, CloseCircleOutlined } from "@ant-design/icons"

const InstructorIndex =()=>{

const [courses, setCourses] = useState([]);

    useEffect(() =>{
        loadCourses()
    }, [])
    
    const loadCourses = async () =>{
        const { data } = await axios.get("/api/instructor-courses");
        setCourses( data );
    }
    
    const myStyle = { marginTop:'-15px', fontSize: '10px'};

    return(
        <InstructorRoute>
            <h1 className="jumbotron text-center square">Dashboard del Instructor</h1>
            {/*<pre>{JSON.stringify(courses,null,4)}</pre>*/}
            
            {courses && courses.map(course => (
                <>
                    <div className="media pt-2">
                        <Avatar size={120} 
                        src={course.image ? course.image.Location: "/course.png"}/>
                        
                        <div className="media-body pl-2">
                            <div className="row">
                                <div className="col">
                                    <Link href={`/instructor/course/view/${course.slug}`} 
                                        className="pointer"
                                        legacyBehavior> 
                                        <a className="mt-2 text-primary">
                                            <h4 className="pt-2">{course.name}</h4>
                                        </a>
                                    </Link>
                                    <p style={{marginTop: "-10px"}}> 
                                        { course.lessons.length }
                                         Lecciones
                                    </p>
                                    {course.lessons.length < 5 ? (
                                        <p style={myStyle} className="text-warning"> 
                                            Se requieren al menos 5 lecciones para publicar un curso</p>
                                    ) : course.published ? (
                                        <p style={myStyle} className="text-success">
                                            Tu curso ya esta publicado</p>
                                    ) : (
                                        <p style={myStyle} className="text-success">
                                            Tu curso ya esta listo para publicar</p>
                                    )} 
                                    
                                    <div className="col-md-3 mt-3 text-center">
                                        {course.published ? 
                                        (
                                            <div>
                                                <CheckCirleOutlined className="h5 pointer text-success"/>
                                            </div>
                                        ):(
                                            <div>
                                                < CloseCircleOutlined  className="h5 pointer text-warning"/>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </>
            
            ))}
            
        </InstructorRoute>
    );
};

export default InstructorIndex;