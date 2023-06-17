import { useContext,useState } from 'react';
import { Context } from '../../context';
import { Button } from 'antd';
import axios from 'axios'
import { SettingOutlined, 
         UserSwitchOutlined, 
         LoadingOutlined } from '@ant-design/icons';
         
import {toast} from 'react-toastify'
import UserRoute from '../../components/routes/UserRoute';

const BecomeInstructor =()=>{

    //states
    const [loading,setLoading] = useState(false)
    const {
        state: {user},
    } = useContext(Context)
    
    const BecomeInstructor = ()=>{
        //console.log("BecomingInstructor")
        setLoading(true)
        axios.post('/api/make-instructor')
        .then(res =>{
            console.log(res)
            window.location.href= res.data;
        })
        .catch(err =>{
            console.log(err.response.status)
            toast('Algo salió mal. Inténtelo de nuevo');
            setLoading(false);
        })
    };
    
    return(
        <>
            <h1 className="jumbotron text-center square"> Convertirse en instructor</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="pt-4">
                            <UserSwitchOutlined className="display-1 pb-3" />
                            <br/>
                            <h2>Bienvenido aqui podra crear su cuenta</h2>
                            <Button 
                            className="mb-3" 
                            type="primary" 
                            block shape="round" 
                            size="large"
                            onClick={BecomeInstructor}
                            disabled={user && user.role && user.role.includes ("Instructor") || loading}
                            >
                                {loading ? "Crear cuenta" :"Crear cuenta"}
                            </Button>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default BecomeInstructor;