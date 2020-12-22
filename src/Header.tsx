import React from 'react'
import img1 from './images/employee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff,faBars} from '@fortawesome/free-solid-svg-icons';
import "font-awesome/less/font-awesome.less"

export default function Header() {

    return (
  
<nav className="navbar navbar-expand-lg navbar-light bg-dark text-black-50" style={{height:'50px'}}>
  <div className="container-fluid ml-0">
    <a className="navbar-brand ml-0 " href="#">
        <img  src={img1} alt="logo" style={{height:'50px'}} className="float-left"></img></a>
    <div className="text-white active">Encompass</div>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item">
          <a className="nav-link text-white  active" aria-current="page" href="#"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon>&nbsp;Menu</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link text-white  active" href="#">Raksha K</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-white active disabled" href="#" tabIndex={-1} aria-disabled="true"> <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon></a>
        </li>
   
      </ul>
     
    </div>
  </div>
</nav>


    )
}

