import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className="header-container">
            <Link className="header-link" to="/home">Home</Link>
            <Link className="header-link" to="/about">About</Link>
            <Link className="header-link" to="/details">Details</Link>
        </div>
    );
};

export default Header;