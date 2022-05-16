import React from 'react'

const Navbar = () => {
    return (
        <nav className="container">
            <input id="nav-toggle" type="checkbox" />
            <div className="logo"><strong>Ye</strong></div>
            <ul className="links">
            <li className="list">
                <a href="">Home</a>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <a href="">About</a>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <a href="">Songs</a>
                <div className="home_underline"></div>
            </li>
            <li className="list">
                <a href="">History</a>
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
