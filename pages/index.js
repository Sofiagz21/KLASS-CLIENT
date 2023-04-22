//<div className=""></div>

import {
    FilePdfOutlined,
    FundProjectionScreenOutlined,
    FormOutlined,
    BookOutlined
} from "@ant-design/icons";


const Index = ()=>{
    return(
        <>
            <div className="index">
                <div className="portada container-fluid p-0">
                    <section className="cover">
                        <img src="images/home/mobile-book.svg" id="klass" className="d-none d-md-block" alt="LogoKlass"/> 
                        <img src="images/home/wave2.svg" id="wave" alt="LogoKlass"/>  
                          <div className="nomargin container-fluid">
                            <div className="nomargin row w-100">
                                <div class="col-md-4 col-lg-5"></div>
                                    <div class="col-md-8 col-lg-7">
                                        <h1 id="text">KLASS</h1>
                                        <h2 id="text2">El lugar donde brindamos una experiencia de aprendizaje virtual.</h2>
                                    </div>
                                </div>
                            </div>
                    </section>
                </div>
                <section className="about container-fluid">
                    <div className="nomargin row aling-items-center px-5 gx-5">
                        <div className="col-lg-6  col-sm-12 text-end">
                            <h1>Educación virtual</h1>
                            <h2> a tu alcance</h2>
                        </div>
                        <div className="col p-0 vl d-none d-md-block"></div>
                        <div className="col-lg-4  col-sm-12 text-start">
                            <p className=" text m-0">
                                Diseñamos cursos y proyectos de cero, con el apoyo y acompañamiento de los mejores profesionales.
                            </p>
                        </div>
                    </div>
                
                </section>
                <div className="featured-area featured-area-mt pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-6">
                                <div className="featured-item">
                                    <i><FilePdfOutlined/></i>
                                     <h3>Investigación y entrega de material educativo en formato PDF</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="featured-item">
                                <i><FundProjectionScreenOutlined/></i>
                                <h3>Desarrollo del curso con recursos audiovisuales</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="featured-item">
                                <i><FormOutlined/></i>
                                <h3>Actividades y evaluaciones de conocimientos</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <section className="services container-fluid ">
                    <div className="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 wow fadeInLeft">
                                    <div className="tf_about_2_img">
                                        <div className="tf_about_small">
                                            <img className="img-fluid w-100" src="images/home/about1.jpg"></img>
                                        </div>
                                        <div className="tf_about_large">
                                            <img className="img-fluid w-100" src="images/home/about2.jpg"></img>
                                        </div>
                                    
                                    
                                    </div>
                                
                                
                                </div>
                            
                            </div>
                        
                        
                        </div>
                    </div>
                
                
                
                
                
                </section>
                
    
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
            
            
            </div>
        </>
    );
};

export default Index;
