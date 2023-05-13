import 'bootstrap/dist/css/bootstrap.css';
import "antd/dist/antd.min.js";
import "antd/dist/reset.css";
import "../public/css/styles.css"
import "../public/css/home.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from '../context'


import TopNav from "../components/TopNav"; //NAVBAR

function MyApp ({Component, pageProps}){
    return (
    <>  
        <Provider>
            <ToastContainer  position="top-center"/>
            <Component {...pageProps} />;
            <TopNav/>
        </Provider>
    </>
    )
}

export default MyApp;