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
                <a href=""><Link to='/'>Home</Link></a>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <a href=""><Link to='/about'>About</Link></a>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <a href=""><Link to='/songs'>Songs</Link></a>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <a href="">
                    <Link to='/history'>History</Link>
                </a>
                <div className="home_underline"></div>
            </li>
            <button className="button">Album's</button>
            </ul>
            <label for="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            </label>
        </nav>
    )
}

export default Navbar
