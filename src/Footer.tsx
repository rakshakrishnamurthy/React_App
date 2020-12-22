import React from 'react'
import img from './images/rss-24.png'
import img1 from './images/Anthology.png'
export default function Footer() {
  return (

<footer className="bg-light d-flex justify-content-start text-center text-lg-start align-items-center">  
  <div className="mt-0">
    <a className="text-dark" > <img  src={img1} alt="logo" className="pull-left" height='60px'></img></a>
    </div>
  <div className="text-center p-3">
    © 2020 Anthology Inc
  </div>
 </footer>
  )
}

