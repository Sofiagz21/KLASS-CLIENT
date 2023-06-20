import {useState, useEffect} from "react";
import { Select, Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const {Option} = Select;

const CourseCreateForm = ({
    handleSubmit, 
    handleImage, 
    handleChange, 
    values, 
    setValues,

}) => {
    
    const children =[];
    
    for(let i= 9.99; i <= 99.99; i++ ) {
        children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>)
    }

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
                
                {values.paid && <div className="col-md-6">
                    <div className="form-group">
                        <Select
                            defaultValue="$9.99"
                            style={{width: '100%'}}
                            onChange={v=> setValues({...values, price: v})}
                            tokenSeparators={[,]}
                            size="large"
                        >
                        {children} 
                        </Select>         
                    </div>
                </div>}
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
                            {values.loading ? 'Cargando': 'Cargando Imagen'}
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
            </div>
            <div className="row"> 
                <div className="col">
                    <Button 
                        onclick={handleSubmit}
                        disabled={values.loading || values.loading}
                        className="btn btn-primary"
                        loading="values.loading"
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