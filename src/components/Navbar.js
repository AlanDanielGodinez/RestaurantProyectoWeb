// src/components/Navbar.js
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faUtensils, faCalendar } from "@fortawesome/free-solid-svg-icons"; // Agregamos el ícono de calendario

export default function Navbar() {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);

    const links = [
        {
            name: "home",
            path: "/",
            icon: faHome,
        },
        {
            name: "Recetas",
            path: "/recetas",
            icon: faList,
        },
        {
            name: "Menu",
            path: "/menu",
            icon: faUtensils,
        },
        {
            name: "Reserva",  // Agregamos el nuevo enlace
            path: "/reserva",
            icon: faCalendar,  // Icono para reservas
        },
    ];

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        <>
            <div className="navbar container">
                <a href="../" className="logo">La<span>Dolce</span>Vita</a>
                <div className="nav-links">
                    {links.map((link) => (
                        <Link
                            className={location.pathname === link.path ? "active" : ""}
                            to={link.path}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    );
}
