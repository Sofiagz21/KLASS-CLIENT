import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  CoffeeOutlined,
  CarryOutOutlined,
  TeamOutlined,
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
        router.push("/");
    };
    
    
    return(
        <Menu mode="horizontal" selectedKeys={[current]} className="mb-2">
        
            {user && user.role && user.role.includes("Instructor") ? (
                <Item 
                key="/instructor/course/create"
                onClick={(e) => setCurrent(e.key)}
                icon={<CarryOutOutlined/>}
                >
                    <Link href="/instructor/course/create" legacyBehavior>
                        <a>Crear curso</a>
                    </Link>
                </Item>
            ):(
                <Item 
                key="/user/become-instructor"
                onClick={(e) => setCurrent(e.key)}
                icon={<TeamOutlined/>}
                >
                    <Link href="/user/become-instructor" legacyBehavior>
                        <a>Convertirse en instructor</a>
                    </Link>
                </Item>
            )}

            {user=== null && (
            <>
                <Item 
                    key="/"
                    onClick={(e) => setCurrent(e.key)}
                    icon={<AppstoreOutlined/>}>
                    <Link href="/" legacyBehavior>
                        <a>App</a>
                    </Link>
                </Item>
                <Item 
                    key="/login"
                    onClick={(e) => setCurrent(e.key)}
                    icon={<LoginOutlined/>}>
                    <Link href="/login" legacyBehavior>
                        <a>Ingresar</a>
                    </Link>
                </Item>
                <Item 
                    key="/register"
                    onClick={(e) => setCurrent(e.key)}
                    icon={<UserAddOutlined/>}>
                    <Link href="/register" legacyBehavior>
                        <a>Registrarse</a>
                    </Link>
                </Item>
            </>
            )}
            
            {user !== null && (
            <>
                <SubMenu icon={<CoffeeOutlined/>} title={user && user.name} className="float-right">
                    <ItemGroup>
                        <Item key="/user">
                            <Link href="/user" legacyBehavior>
                                <a>Tablero</a>
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
            {user && user.role && user.role.includes("Instructor") && (
                <Item 
                key="/instructor"
                onClick={(e) => setCurrent(e.key)}
                icon={<TeamOutlined/>}
                >
                    <Link href="/instructor" legacyBehavior>
                        <a>Instructor</a>
                    </Link>
                </Item>
            ) }
        </Menu>
    );
};

export default TopNav;