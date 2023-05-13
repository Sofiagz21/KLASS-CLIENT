import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item,SubMenu, ItemGroup }=Menu; //Menu.Item

const TopNav=()=>{

    const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const {user}= state;
  
  const router = useRouter();
    
    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);
    
    
    const logout = async() => {
        dispatch ({type: "LOGOUT"});
        window.localStorage.removeItem("user");
        const {data} = await axios.get("/api/logout");
        toast(data.message);
        router.push("/login");
    };
    
    
    return(
        <Menu mode="horizontal" selectedKeys={[current]}>
            {user=== null && (
            <>
                <Item 
                    key="/"
                    onClick={(e) => setCurrent(e.key)}
                    icon={<AppstoreOutlined/>}>
                    <Link href="/" legacyBehavior>
                        <a>app</a>
                    </Link>
                </Item>
                <Item 
                    key="/login"
                    onClick={(e) => setCurrent(e.key)}
                    icon={<LoginOutlined/>}>
                    <Link href="/login" legacyBehavior>
                        <a>Login</a>
                    </Link>
                </Item>
            
                <Item 
                    key="/register"
                    onClick={(e) => setCurrent(e.key)}
                    icon={<UserAddOutlined/>}>
                    <Link href="/register" legacyBehavior>
                        <a>Register</a>
                    </Link>
                </Item>
            </>
            )}
            
            {user !== null && (
            <>
                <Item 
                    key="/courses"
                    onClick={(e) => setCurrent(e.key)}
                    icon={<AppstoreOutlined/>}>
                    <Link href="/courses" legacyBehavior>
                        <a>Courses</a>
                    </Link>
                </Item>
                <SubMenu icon={<CoffeeOutlined/>} title={user && user.name} className="float-right">
                    <ItemGroup>
                        <Item key="/user">
                            <Link href="/user" legacyBehavior>
                                <a>Dashboard</a>
                            </Link>
                        
                        
                        </Item>
                        <Item 
                            onClick={logout}
                            icon={<LogoutOutlined/>}>
                            Cerrar Sesión
                        </Item> 
                    </ItemGroup>
                </SubMenu>
            </>
            )}
            
        
        </Menu>
    );
};

export default TopNav;