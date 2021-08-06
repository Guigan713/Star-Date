import React from 'react';
import { NavLink } from 'react-router-dom';

import Fire from '../../assets/fire-solid.svg'
import Coeur from '../../assets/love.svg'
import Inbox from '../../assets/message.svg'
import Star from '../../assets/star-regular.svg'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navContainer">
            <NavLink to="/profile">
                <img className="buttonLogo" src={Fire} alt="login" />
            </NavLink>
            <NavLink to="/swipe">
                <img className="buttonLogo" src={Coeur} alt="Swipe" />
            </NavLink>
            <NavLink to="/matches">
                <img className="buttonLogo" src={Star} alt="match list" />
            </NavLink>
            <NavLink to="/messages">
                <img className="buttonLogo" src={Inbox} alt="Message List" />
            </NavLink>
        </div>
    );
}

export default Navbar;
