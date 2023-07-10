import { Button, Progress, Tooltip } from "antd";
import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";

const AddLessonForm = ({ 
    values,
    setValues,
    handleAddLesson,
    uploading,
    uploadButtonText,
    handlePdf,
    progress,
    handlePdfRemove
}) =>{
    return <div className="container pt-3"> 
        <form onSubmit={handleAddLesson}>
            <input
            type="text"
            className="form-control square"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            values={values.title}
            placeholder="Titulo"
            autoFocus
            required
            />
            <textarea
                className={"form-control mt-3"}
                cols="7"
                rows="7"
                onChange={(e) => setValues({ ...values, content: e.target.value })}
                values={values.content}
                placeholder="Contenido"
            ></textarea>
            
            <div className="d-flex justify-content-center">
                <label className="btn btn-dark btn-block text-left mt-3">
                    {uploadButtonText}
                    <input onChange={handlePdf} type="file" accept="pdf/*" hidden/>
                </label>
                <br/>
                {!uploading && values.pdf.Location && (
                <Tooltip title="Remove">
                    <span onClick={handlePdfRemove} className="pt-1 pl-3">
                        <CloseCircleFilled className="text-danger d-flex justify-content-center pt-4 pointer" />
                    </span>
                </Tooltip>
                )}
            </div>
            {progress > 0 && (
            <Progress
                className="d-flex justify-content-center pt-2"
                percent={progress}
                steps={10}
            />
            )}
            <Button 
                onClick={handleAddLesson} 
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


export default AddLessonForm;