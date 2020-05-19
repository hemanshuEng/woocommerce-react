import React from 'react';
import Mail from './../../img/mail.svg';
import './TopBar.scss';
function TopBar(props) {
    return (
        <div className="topbar__container">
            <div className="topbar__one">
                <img className="topbar__one-img" src={Mail} alt ="mail"/>
                <p className="topbar__one-email">Example@gmail.com</p>
            </div>
            <div className="topbar__two">
                <p>Hello world</p>
            </div>
            <div className="topbar__three">
                <p>Hello world</p>
            </div>
        </div>
    );
}

export default TopBar;