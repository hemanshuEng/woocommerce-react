import React from 'react';
import Mail from '../../../img/mail.svg';
import Phone from '../../../img/phone.svg';
import Facebook from '../../../img/facebook.svg';
import Twitter from '../../../img/twitter.svg';
import Instagram from '../../../img/instagram.svg';
import './TopBar.scss';
function TopBar(props) {
    return (
        <div className="topbar__container">
            <div className="topbar__one">
                <img className="topbar__one-img" src={Mail} alt ="mail"/>
                <p className="topbar__one-email">Example@gmail.com</p>
            </div>
            <div className="topbar__two">
                <div className="topbar__two-phonecontainer">
                    <img className="topbar__two-img" src={Phone} alt=""/>
                    <p className="topbar__two-phone">+ 116 219 2222</p>
                </div>
                <img className="topbar__two-img" src={Facebook} alt="facebook"/>
                <img className="topbar__two-img" src={Instagram} alt="Instagram"/>
                <img className="topbar__two-img" src={Twitter} alt="twitter"/>


            </div>
            <div className="topbar__three">
                <p className="topbar__three-login">Login</p>
            </div>
        </div>
    );
}

export default TopBar;