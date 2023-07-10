import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const { Item, SubMenu, ItemGroup } = Menu;
const TopNav = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();
  
  const [Mobile,setMobile] = useState(false);
  
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <div className="NavbarItems">
        <h1 className="navbar-logo">
          <Menu.Item key="/" onClick={(e) => setCurrent(e.key)}>
            <Link href="/" legacyBehavior>
              <a className="nav-links"> KLASS</a>
            </Link>
          </Menu.Item>
        </h1>
        <ul className="nav-menu">
          {user && user.role && user.role.includes("Instructor") ? (
            <>
              <li>
                <Menu.Item
                  key="/instructor/course/create"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<CarryOutOutlined />}
                >
                  <Link href="/instructor/course/create" legacyBehavior>
                    <a className="nav-links"> Crear Curso</a>
                  </Link>
                </Menu.Item>
              </li>
            </>
          ) : (
            <>
              <li>
                <Menu.Item
                  key="/user/become-instructor"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<TeamOutlined />}
                >
                  <Link
                    href="/user/become-instructor"
                    className="nav-links"
                    legacyBehavior
                  >
                    <a className="nav-links">Quiero ser Instructor</a>
                  </Link>
                </Menu.Item>
              </li>
            </>
          )}
          {user === null && (
            <>
              <li>
                <Menu.Item
                  key="/login"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<LoginOutlined />}
                >
                  <Link href="/login" legacyBehavior>
                    <a className="nav-links">Ingresar</a>
                  </Link>
                </Menu.Item>
              </li>
              <li>
                <Menu.Item
                  key="/register"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<UserAddOutlined />}
                >
                  <Link href="/register" legacyBehavior>
                    <a className="nav-links">Registrarme</a>
                  </Link>
                </Menu.Item>
              </li>
            </>
          )}

          {user !== null && (
            <Menu.SubMenu
              icon={<CoffeeOutlined />}
              title={user && user.name}
              className="float-right"
            >
              <Menu.ItemGroup>
                <li>
                  <Menu.Item key="/user">
                    <Link href="/user" legacyBehavior>
                      <a className="nav-links">Dashboard</a>
                    </Link>
                  </Menu.Item>
                </li>
                <li>
                  <Menu.Item onClick={logout}>
                    Cerrar Sesión
                  </Menu.Item>
                </li>
              </Menu.ItemGroup>
            </Menu.SubMenu>
          )}
          {user && user.role && user.role.includes("Instructor") && (
            <>
              <li>
                <Menu.Item
                  key="/instructor"
                  onClick={(e) => setCurrent(e.key)}
                  icon={<TeamOutlined />}
                  className="float-right"
                >
                  <Link href="/instructor" legacyBehavior>
                    <a className="nav-links">Instructor</a>
                  </Link>
                </Menu.Item>
              </li>
            </>
          )}
        </ul>
        <button className="mobile-menu-icon">
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </Menu>
  );
};

export default TopNav;