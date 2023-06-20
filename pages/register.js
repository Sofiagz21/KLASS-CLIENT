/*PAGINA regiter*/
import {useState, useEffect, useContext} from 'react'
import Wave from "../components/Wave"; // Wave
import axios from 'axios'
import {toast} from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from "../context";
import { useRouter } from 'next/router';

const Register =()=>{
    /*se declaran los estados de los campos de entrada*/
    const [name,setName]= useState("");
    const [lastName,setLastName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    
    const[loading, setLoading]= useState(false);
    
    
    const {
        state: { user },
      } = useContext(Context);
    
      const router = useRouter();
    
    // protección de paginas
    useEffect(() => {
        if(user !==null) router.push("/"); // "//"
    },[user])
    
    /* presentación del formulario*/
    
    const handleSubmit= async(e) =>{
        e.preventDefault();
        //console.table({name,secondName,lastName,secondLastName,email,password,option})
        try{
            setLoading(true);
            const { data } = await axios.post(`/api/register`, {
            name,lastName,email,password
        });
        console.log("REGISTER RESPONSE", data)
        toast.success('Registro Exitoso. Por favor Inicia Sesión.')
        setLoading(false);
        } catch (err){
            toast.error(err.response.data);
            setLoading(false);
        }
    };
        
    return(
        <>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="user-all-form">
                            <div className="user-all-form">
                                <div className="contact-form">
                                    <h3 className="user-title">
                                        <img className="klassLogo me-2" src="images/klass.png"/>
                                        Registrarse
                                    </h3>
                                    <form id="" onSubmit={handleSubmit} novalidate="true">
                                        <div className="row">
                                            <div className="row g2">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <input 
                                                        type="text" 
                                                        className="form-control col-md-6 mb-3" 
                                                        value={name}
                                                        onChange={(e)=> setName(e.target.value)} 
                                                        placeholder="Nombre(s)"
                                                        autoComplete='off'
                                                        required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row g2">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                    <input 
                                                    type="text" 
                                                    className="form-control col-md-8 mb-4" 
                                                    value={lastName} 
                                                    onChange={(e)=> setLastName(e.target.value)} 
                                                    autoComplete='off'
                                                    placeholder="Apellido(s)"
                                                    required
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row g2">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                <input 
                                                type="email" 
                                                className="form-control col-md-8 mb-4" 
                                                value={email} 
                                                onChange={(e)=> setEmail(e.target.value)} 
                                                placeholder="Ingresa tu email"
                                                required data-error="Ingresa tu email"
                                                />
                                                </div>
                                            </div>
                                            
                                            </div>
                                            <div className="row g2">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                <input 
                                                type="password" 
                                                className="form-control col-md-8 mb-4" 
                                                value={password} 
                                                onChange={(e)=> setPassword(e.target.value)} 
                                                autoComplete='off'
                                                placeholder="Ingresa tu contraseña"
                                                required
                                                />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="d-grid col-lg-12 col-md-12 text-center">
                                                <button type="submit" className="btn btn-outline-danger crear"
                                                    disabled={!name|| !lastName || !email || !password || loading}
                                                >
                                                    {loading ? <SyncOutlined spin/>: "Crear Cuenta" }
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="sendLogin text-center p-3">
                                        ¿Ya estás registrad@? {" "}
                                        <Link href="/login" legacyBehavior>
                                            <a>Inicia Sesión</a>
                                        </Link>
                                    </p>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="user-img mt-5 mt-md-10"> 
                            <img className="user"
                            src="images/education/register.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;



