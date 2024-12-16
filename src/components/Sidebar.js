import {Link, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar({links, close}){
  const location = useLocation()
  return (
    <div className="sidebar" onClick={close}>
            { links.map(links => (
                <Link to={links.path} className={location.pathname === links.path ? "sidebar-links active" : "sidebar-links"} key={links.name}>
                    <FontAwesomeIcon icon={links.icon} />
                    {links.name}
                </Link>
            )) }
    </div>
    

  )

}
