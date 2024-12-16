import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Sidebar({links, close}){
  return (
    <div className="sidebar" onClick={close}>
        {links.map(links => (
            <a className="sidebar-links hover " href="#!" key={links.name}>
                < FontAwesomeIcon icon={links.icon}/>
                {links.name}
                </a>))}
     
    </div>
    

  )

}
