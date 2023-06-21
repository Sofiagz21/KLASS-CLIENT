import {useState, useEffect} from "react";
import Link from "next/link";


const InstructorNav = () => {
 
  const [current,setCurrent] =useState('')
 
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);


  return (
    <div className="nav flex-column nav-pills mt-2 ">
      <Link href="/instructor" legacyBehavior>
          <a className={`nav-link ${current === "/instructor" && "active" }`} >
            Dashboard
          </a>
      </Link>
      <Link href="/instructor/course/create" legacyBehavior>
        <a className={`nav-link ${current === "/instructor" && "active" }`}>
         Crear curso
        </a>
      </Link>
    </div>
  );
};


export default InstructorNav;