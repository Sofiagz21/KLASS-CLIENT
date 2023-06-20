
import {useState, useEffect} from "react";
import axios from 'axios';
import InstructorRoute from '../../components/routes/InstructorRoute'

const InstructorIndex =()=>{
    return(
        <InstructorRoute>
            <h1 className="jumbotron text-center square">Dashboard del Instructor</h1>
        </InstructorRoute>
    );
};

export default InstructorIndex;