import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create a CSS file for Navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Mathz 'n' Statz</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/page1">Page 1</Link></li>
                <li><Link to="/page2">Page 2</Link></li>
                <li><Link to="/page3">Page 3</Link></li>
                <li><Link to="/page4">Page 4</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;