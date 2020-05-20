import React from 'react';
import './NavBar.scss';
function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar__menu">
                <a href="#"><li className="navbar__menu-item">all department</li></a>
                <a href="#"><li className="navbar__menu-item">home</li></a>
                <a href="#"><li className="navbar__menu-item">shop</li></a>
                <a href="#"><li className="navbar__menu-item">Collection</li></a>
                <a href="#"><li className="navbar__menu-item">Blog</li></a>
                <a href="#"><li className="navbar__menu-item">Contact</li></a>
            </ul>
        </div>
    );
}

export default NavBar;