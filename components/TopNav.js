import { useState, useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Item }=Menu; //Menu.Item

const TopNav=()=>{

    const [current, setCurrent] = useState("");

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);
    return(
        <Menu mode="horizontal">
            <Item 
                key="/"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}>
                <Link href="/" legacyBehavior>
                    <a>app</a>
                </Link>
            </Item>
            <Item 
                key="/courses"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}>
                <Link href="/courses" legacyBehavior>
                    <a>Courses</a>
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
        
        </Menu>
    );
};

export default TopNav;