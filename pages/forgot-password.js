import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/forgot-password", { email });
      setSuccess(true);
      toast("Verifica tu email para el código de seguridad");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };
  
  const handleResetPassword= async (e)=>{
    e.preventDefault();
    //console.log(email,code,newPassword);
    //return;
    try{
        setLoading(true);
        const {data} = await axios.post('/api/reset-password', {
            email,
            code, 
            newPassword,
        });
        setEmail("");
        setCode("");
        setNewPassword("");
        setLoading(false);
        toast('Contraseña renovada exitosamente')
        
    }catch (err){
        setLoading(false);
        toast(err.response.data);
        
    
    }
  
  
  
  }
    
    return(
        <>
            <h1 className="jumbotron text-center bg-primary square"> 
                Olvide mi contraseña
            </h1>
            <div className="row aling-items-center justify-content-center">
                <div className="col-lg-5">
                <div className="container forgotPassword col-md-12 col-lg-12 pt-5">
                    <form onSubmit={ success ? handleResetPassword :handleSubmit} novalidate="true">
                    <div className="row">
                        <input 
                            type="email" 
                            className="form-control col-md-6 mb-4 p-3" 
                            value={email} 
                            onChange={e=> setEmail(e.target.value)}
                            placeholder="Ingresa tu email"
                            required
                            />
                    </div>
                    {success && 
                    (<>
                        <div className="row">
                             <input 
                                type="text" 
                                className="form-control col-md-6 mb-4 p-3" 
                                value={code} 
                                onChange={e=> setCode(e.target.value)}
                                placeholder="Ingresa el código de seguridad"
                                required
                            />
                        </div> 
                        <div className="row">
                             <input 
                                type="password" 
                                className="form-control col-md-6 mb-4 p-3" 
                                value={newPassword} 
                                onChange={e=> setNewPassword(e.target.value)}
                                placeholder="Nueva contraseña"
                                required
                            />
                        </div> 
                        
                    </>
                    )}
                    <div className="row">
                        <button className="btn btn-outline-danger crear btn-block p-2" disabled={loading || !email }>
                                {loading ? <SyncOutlined spin/> : "Submit"}
                        </button>
                    </div>
                        
                            
                            
                    </form>
                </div>
                
                
                
                </div>
                
            
            
            
            </div>
            
        </>
    );
};


export default ForgotPassword;





