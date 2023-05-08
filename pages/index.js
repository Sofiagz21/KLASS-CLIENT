//<div className=""></div>

import {
    FilePdfOutlined,
    FundProjectionScreenOutlined,
    BookOutlined
} from "@ant-design/icons";


const Index = ()=>{

    return(
        <>
           <div className="index">
                <div className="tf_banner_2 tf_banner_3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-10 col-lg-8">
                            <div className="tf_banner_text wow fadeInUp">
                                <h5>Bienvenid@s a Klass</h5>
                                <h1>El lugar donde brindamos una <span>experiencia</span> de aprendizaje virtual.</h1>
                            </div>
                        </div>
                    </div> 
                </div>
                </div>
                <section className="tp-feature-area">
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className="section-title mb-60">
                                    <span className="tp-sub-title mb-20">Educación Virtual </span>
                                    <h2 className="tp-section-title">A Tu Alcance.</h2>
                                </div>
                            </div>
                            <div className="tp-feature-cn">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="tpfea mb-30 wow fadeInUp">
                                            <div className="tpfea__icon mb-25">
                                                <span><FilePdfOutlined/></span>
                                            </div>
                                            <div className="tpfea__text">
                                                <h5 className="tpfea__title mb-20"> Material educativo en formato PDF.</h5>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="tpfea mb-30 wow fadeInUp">
                                            <div className="tpfea__icon mb-25">
                                                <span>< FundProjectionScreenOutlined/></span>
                                            </div>
                                            <div className="tpfea__text">
                                                <h5 className="tpfea__title mb-20">Desarrollo del curso con recursos audiovisuales.</h5>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="tpfea mb-30 wow fadeInUp">
                                            <div className="tpfea__icon mb-25">
                                                <span><BookOutlined/></span>
                                            </div>
                                            <div className="tpfea__text">
                                                <h5 className="tpfea__title mb-20">Actividades y evaluaciones de conocimientos.</h5>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                        </div>
                    </div>
                </section>
                <section className="tp-about-area pt-120 pb-90 wow fadeInUp">
                    <div className="container">
                        <div className="row aling-items-center">
                            <div className="col-xxl-7 col-xl-6 col-md-6">
                                <div className="tp-about-img p-relative pb-30 ml-10">
                                    <img src="images/home/about-img.png"></img>
                                    <div className="tp-about-line-shape d-none d-md-block">
                                        <img className="tp-aline-one" src="images/home/about-shape-03.png"></img>
                                        <img className="tp-aline-two" src="images/home/about-shape-04.png"></img>
                                        <img className="tp-aline-three" src="images/home/about-shape-05.png"></img>
                                    </div>
                                    <div className="tp-about-shape d-none d-xl-block">
                                        <img className="a-shape-one" src="images/home/about-shape-01.png"></img>
                                        <img className="a-shape-two" src="images/home/about-shape-02.png"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
                                <div className="tp-about-content pb-30 ml-80">
                                    <div className="section-title mb-55">
                                        <span className="tp-sub-title mb-20">Acerca De Nuestros Cursos</span>
                                        <h2 className="tp-section-title">Elaboración de cursos virtuales de capacitación.</h2>
                                        <p>Investigación, diseño, elaboración y entrega de cursos hechos a la medida de la solicitud de la empresa o cliente.</p>
                                    </div>
                                    <div className="about-btn">
                                        <a className="tp-btn" target="_blank" href="https://wa.link/plhi8t">Quiero Más Información</a>
                                    
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
