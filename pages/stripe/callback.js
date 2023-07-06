import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";

const StripeCallback = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (user) {
        window.location.href ="/instructor";
    }
  }, [user]);

  return (
    <>
        <h1 className="jumbotron text-center square">Callback</h1>
    </>
  );
};

export default StripeCallback;