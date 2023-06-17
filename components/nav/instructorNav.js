import {useState, useEffect} from "react";
import Link from "next/link";

const InstructorNav = () => {

    const [ current, setCurrent] = useState ("");

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);

    return (
      <div className="nav flex-column nav-pills">
        <Link href="/instructor">
          <a className={`nav-link ${current=== "/instructor" && "active" }`}>
            Tablero
          </a>
        </Link>
        <Link href="/instructor/course/create">
          <a className="nav-link">Crear curso</a>
        </Link>
      </div>
    );
  };
  
  export default InstructorNav;
