import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import UserNav from "../nav/UserNav";

function UserRoute({ children }) {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/current-user");
        data.ok && setOk(true);
      } catch (error) {
        setOk(false);
        router.push("/login");
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav/>
        </div>
        <div className="col-md-10">{children}</div>
      </div>
    </div>
  );
}

export default UserRoute;