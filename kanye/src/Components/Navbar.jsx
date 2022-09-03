import React from 'react'
import {
  Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="container">
            <input id="nav-toggle" type="checkbox" />
            <div className="logo"><strong>Ye</strong></div>
            <ul className="links">
            <li className="list">
                <Link to='/'>Home</Link>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <Link to='/about'>About</Link>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <Link to='/songs'>Songs</Link>
                <div className="home_underline"></div>
            </li>
            <a href="https://www.youtube.com/channel/UCs6eXM7s8Vl5WcECcRHc2qQ">
            <button className="button">Album's</button>
            </a>
            </ul>
            <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            </label>
        </nav>
    )
}

export default Navbar
