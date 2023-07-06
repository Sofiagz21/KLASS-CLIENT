import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import InstructorNav from "../nav/InstructorNav";

function InstructorRoute({ children }) {
  //state
  const [ok, setOk] = useState(false);
  // router
  const router = useRouter();
  
  useEffect(() => {
    fetchInstructor();
  }, []);
  
    const fetchInstructor = async () => {
      try {
        const { data } = await axios.get("/api/current-instructor");
        //console.log("INSTRUCTOR ROUTE -> ",data);
        data.ok && setOk(true);
      } catch (error) {
        setOk(false);
        router.push("/");
        console.log(error);
      }
    };
    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <InstructorNav/>
        </div>
        <div className="col-md-10">{children}</div>
      </div>
    </div>
  );
}

export default InstructorRoute;