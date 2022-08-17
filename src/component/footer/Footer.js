import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div><div className="footer">
            <div className="footer-content container">
                <div className="footer-content-logo">
                    <div className="logo">
                        <Link to="/">Tilden</Link>
                    </div>
                </div>
                <div className="footer-content-menus">
                    <div className="footer-content-menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer-content-menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer-content-menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
                <div className='footer-tradeMark'>
                    
                </div>
            </div>
        </div></div>
  )
}

export default Footer