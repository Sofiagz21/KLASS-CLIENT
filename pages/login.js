/*PAGINA regiter*/
import { useState, useContext, useEffect} from "react";
import Wave from "../components/Wave"; // Wave
import axios from 'axios'
import {toast} from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from "../context";
import { useRouter } from "next/router";


const Login =()=>{
    /*se declaran los estados de los campos de entrada*/
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const[loading, setLoading]= useState(false);
    
    // state
    const { state:{ user }, 
    dispatch } = useContext(Context);
    // const{user} =state

    //router
    const router = useRouter();
    
    // protección de paginas
    useEffect(()=>{
        if(user!== null) router.push("/courses "); //"/"
    },[user]);
        
    /* presentación del formulario*/
    
    const handleSubmit= async(e) =>{
        e.preventDefault();
        //console.table({name,secondName,lastName,secondLastName,email,password,option})
        try{
            setLoading(true);
            const { data } = await axios.post(`/api/login`, {
            email,password
        });
        //console.log("LOGIN RESPONSE", data)
        dispatch({
            type:"LOGIN",
            payload:data,
            
        
        })
        //save in local storage
        window.localStorage.setItem("user", JSON.stringify(data));
        //redirect
        router.push("/courses")
        //setLoading(false);
        } catch (err){
            toast.error(err.response.data);
            setLoading(false);
        }
    };
        
    return(
        <>
            <Wave/>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="user-all-form">
                            <div className="user-all-form">
                                <div className="contact-form">
                                    <h3 className="user-title">
                                        <img className="klassLogo me-2" src="images/klass.png"/>
                                        Inicia Sesión
                                    </h3>
                                    <form id="" onSubmit={handleSubmit} novalidate="true">
                                        <div className="row">
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
                                                    disabled={ !email || !password || loading}
                                                >
                                                    {loading ? <SyncOutlined spin/>: "Iniciar Sesión" }
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="sendLogin text-center p-3">
                                        ¿Aún no estás registrad@? {" "}
                                        <Link href="/register" legacyBehavior>
                                            <a>Registrarme</a>
                                        </Link>
                                    </p>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="user-img mt-5 mt-md-10"> 
                            <img className="user"
                            src="images/education/login.jpg"/>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    );
};

export default Login;
