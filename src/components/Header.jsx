import React from "react";
import logo from "../images/logo.png"

export default function Header(){
    return(
        <header>
            <img src={logo} alt="Le Hangar logo" className="header__logo"/>
            <nav className="header__nav">
                <li className="header__li--bordered">Prendre rendez-vous en ligne</li>
                <li className="header__li">Le Salon</li>
                <li className="header__li">Direction</li>
            </nav>
        </header>
    )
}