import React from 'react'
import img1 from './images/CompanyLogo.png'
export default function Footer() {
  return (

<footer className="bg-light d-flex justify-content-start text-center text-lg-start fixed-bottom">  
  <div className="mt-0">
    <a className="text-dark" > <img  src={img1} alt="logo" className="pull-left" height='60px'></img></a>
    </div>
  <div className="text-center p-3">
     © 2020 Anthology Inc
  </div>
 </footer>
  )
}

