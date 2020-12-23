import React from 'react'
import img1 from './images/CompanyLogo.png'
import subscribe from './images/rss-24.png'
export default function Footer() {
    return (
        <footer className="bg-light d-flex justify-content-start text-center text-lg-start fixed-bottom">
            <div className="mt-0">
                <a className="text-dark" > <img src={img1} alt="logo" className="pull-left" height='60px'></img></a>
            </div>
            <div className="text-center p-3">
                © 2020 Anthology Inc
            </div>
            <form className="form-inline me-auto mb-lg-0 ml-auto">
                <input className="form-control mr-sm-2" type="email" placeholder="name@anthology.com" aria-label="Search" />
                <button className="btn btn-outline-danger my-2 my-sm-1" type="submit">Subscribe</button>
            </form>

        </footer>
    )
}

