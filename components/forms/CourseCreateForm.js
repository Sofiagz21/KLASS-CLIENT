import { Select, Button, Avatar, Badge } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const {Option} = Select;

const CourseCreateForm = ({
    handleSubmit, 
    handleImage, 
    handleChange, 
    values, 
    setValues,
    preview,
    uploadButtonText,
    handleImageRemove
}) => {
    const children =[];
    return(
        <form onSubmit={handleSubmit} noValidate="true">
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Nombre" 
                    value={values.name} 
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <textarea 
                    name="description" 
                    cols="7" 
                    rows="7" 
                    placeholder="Descripción" 
                    values={values.description} 
                    className="form-control"
                    onChange={handleChange}
                    ></textarea>
            </div>
            <div className="form-row">
                <div className="col">
                    <div className="form-group">
                        <Select
                            style={{width:"100%"}}
                            size="large"
                            value={values.paid}
                            onChange={(v)=> setValues({...values,paid: !values.paid})}
                        >
                            <Option value={false}> Gratis</Option>
                        </Select>
                    </div>
                </div>
            </div> 
            <div className="form-group">
                <input
                    type="text"
                    name="category"
                    className="form-control" 
                    placeholder="Categoría"
                    value={values.category}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <div className="form-group">
                        <label className="btn btn-outline-scondary btn-block text-left">
                            {uploadButtonText}
                            <input 
                                type="file" 
                                name="imagen" 
                                onChange={handleImage} 
                                accept="image/*"
                                hidden
                            />
                        </label>
                    </div>
                </div>
                {preview && (
                    <Badge count="X" onClick={handleImageRemove} className="pointer">
                        <Avatar width={200} src={preview}/> 
                    </Badge>
                )}
            </div>
            <div className="row"> 
                <div className="col">
                    <Button 
                        onClick={handleSubmit}
                        disabled={values.loading || values.uploading}
                        className="btn btn-primary"
                        loading={values.loading}
                        type="primary"
                        size="large"
                        shape="round"
                        icon={<SaveOutlined/>}
                        >
                        {values.loading ? 'Guardando...' :"Guardar Y Continuar"}
                    </Button>
                </div>
            </div> 
    </form>
    );
}

export default CourseCreateForm