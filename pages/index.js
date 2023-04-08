//<div className=""></div>

import {
    FilePdfOutlined,
    FundProjectionScreenOutlined,
    FormOutlined
} from "@ant-design/icons";

const Index = ()=>{
    return(
        <>
            <div className="index">
                <div className="banner-area banner-area-ptb">
                    <div className="container-fluid">
                        <div className="row aling-items-center">
                            <div className="col-lg-6">
                                <div className="banner-content">
                                    <span data-aos="fade-up" 
                                    data-aos-delay="900" 
                                    data-aos-duration="1000" 
                                    data-aps-once="true" 
                                    className="aos-init aos-animate">
                                    Bienvenid@s a Klass
                                    </span>
                                    <h1 data-aos="fade-down" 
                                    data-aos-delay="900" 
                                    data-aos-duration="1000" 
                                    data-aos-once="true" 
                                    class="aos-init aos-animate">
                                    Educación Virtual a tu alcance
                                    </h1>
                                    <p data-aos="fade-up" 
                                    data-aos-delay="900" 
                                    data-aos-duration="1000" 
                                    data-aos-once="true" 
                                    class="aos-init aos-animate">
                                    Diseñamos cursos y proyectos de cero, con el apoyo y acompañamiento de los mejores profesionales.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div class="banner-img-two aos-init aos-animate" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-once="true">
                                    <img src="images/LogoKlass.png" alt="Man"/> 
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>
                
                </div>
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
                <div className="categories-area pb-70 mb-35">
                    <div className="container">
                        <div className="section-title mb-45 ">
                            <h2>
                                Nuestros <b> Servicios</b>
                            </h2>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    );
};

export default Index;
