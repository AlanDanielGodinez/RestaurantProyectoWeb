import { useState } from "react"
import Sidebar from "./Sidebar"
import { faHome, faList, faUtensils } from "@fortawesome/free-solid-svg-icons"
export default function Navbar(){
    const [showSidebar, setShowSidebar ] = useState(false);
  const links = [
  {
    name: "home",
    path: "/",
    icon: faHome
  },
    {
      name: "Recetas",
      path: "/recetas",
      icon: faList
    },
    {
      name: "Menu",
      path: "/menu",
      icon: faUtensils
    }
  ] 
  function closeSidebar(){
     setShowSidebar(false)
  }
    return (
       <>
        <div className="navbar container">
            <a href="#!" className="logo"> La<span>Dolce</span>Vita</a>
            <div className="nav-links">
               { links.map(links => (
                 <a href="#!" key={links.name}>{links.name}</a>
               ))}
                {/* <a href="#!" className="active">Index</a>
                <a href="#!">Recetas</a>
                <a href="#!">Menu</a> */}
             </div>
          {/* AQUI EMPIEZA LA PARTE DEL MENU HAMBURGUESA */}
          <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn" }>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            

          </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        
       
       </>
    )
}