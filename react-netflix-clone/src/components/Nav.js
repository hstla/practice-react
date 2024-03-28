// Nav.js
import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="nav">
            <img
                className="nav__logo"
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                onClick={() => window.location.reload()}
            />
            <img
                className="nav__avatar"
                alt="User logged"
                src={`${process.env.PUBLIC_URL}/my-icon.png`}
            />
        </nav>
    );
}