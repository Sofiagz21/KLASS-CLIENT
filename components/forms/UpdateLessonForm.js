import { Button, Progress, Tooltip } from "antd";
import ReactPlayer from "react-player";

import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";

const UpdateLessonForm = ({ 
    current,
    setCurrent,
    handleUpdateLesson,
    uploading,
    uploadPdfButtonText,
    handlePdf,
    progress,
}) =>{
    return <div className="container pt-3"> 
        <form onSubmit={handleUpdateLesson}>
            <input
            type="text"
            className="form-control square"
            onChange={(e) => setValues({ ...current, title: e.target.value })}
            value={current.title}
            required
            />
            <textarea
                className={"form-control mt-3"}
                cols="7"
                rows="7"
                onChange={(e) => setValues({ ...current, content: e.target.value })}
                value={current.content}
                placeholder="Contenido"
            ></textarea>
            
            <div className="d-flex justify-content-center">
                <label className="btn btn-dark btn-block text-left mt-3">
                    {uploadPdfButtonText}
                    <input onChange={handlePdf} type="file" accept="pdf/*" hidden/>
                </label>
                
                {!uploading && current.pdf &&current.pdf.Location && (
                    <div className="pt-2 d-flex justify-content-center"> 
                    Mostrar
                    </div>
                )}
            </div>
            {progress > 0 && (
            <Progress
                className="d-flex justify-content-center pt-2"
                percent={progress}
                steps={10}
            />
            )}
            <div className="d-flex justify-content-between">
                <span className="pt-2 badge">Previsualizar</span>
            </div>
            <Button 
                onClick={handleUpdateLesson} 
                className="col mt-3" 
                size="large" 
                type="primary" 
                loading={uploading}
                shape="round"    
            > 
                Guardar 
            </Button>
        </form>
    
    
    </div>
};


export default UpdateLessonForm;