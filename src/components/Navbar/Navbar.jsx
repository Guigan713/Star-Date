import React from 'react';
import { NavLink } from 'react-router-dom';

import Fire from './fire-solid.svg'
import Coeur from './love.svg'
import Inbox from './inbox-solid.svg'
import Star from './star-regular.svg'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navContainer">
            <NavLink to="/">
                <img className="buttonLogo" src={Fire} alt="login" />
            </NavLink>
            <NavLink to="/Swipe">
                <img className="buttonLogo" src={Coeur} alt="Swipe" />
            </NavLink>
            <NavLink to="/MatchList">
                <img className="buttonLogo" src={Star} alt="match list" />
            </NavLink>
            <NavLink to="/Message List">
                <img className="buttonLogo" src={Inbox} alt="Message List" />
            </NavLink>
        </div>
    );
}
 
export default Navbar;