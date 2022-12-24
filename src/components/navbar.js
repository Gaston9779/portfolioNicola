import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from '../img/logo.png';







function Navbar() {
    return (
    <div id="navbar">
        <div className="logo">
            
            
            
        </div>
        <ul className="list">
            <li>
                <a href="#">HOME</a>
                <a href="#">MISSION</a>
                <a href="#">CONTACT</a>
                <a href="#">LAVORI</a>
                <a href="#">FAQ</a>
            </li>
        </ul>
        <div className="social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
        </div>
    </div>
    )
}

export default Navbar;