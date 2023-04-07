import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.js";
import "antd/dist/reset.css";
import "../public/css/styles.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import TopNav from "../components/TopNav"; //NAVBAR
import Wave from "../components/Wave"; // Wave

function MyApp ({Component, pageProps}){
    return (
    <>  
        <ToastContainer  position="top-center"/>
        <Component {...pageProps} />;
        <TopNav/>
    </>
    )
}

export default MyApp;