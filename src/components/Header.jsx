import React from "react";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";

export default function Header(){
    const screenWidth = useSelector((state) => state.webConfig.screenWidth)
    const desktopWidth = useSelector((state) => state.webConfig.desktopWidth)

    return(
        <header>
            <img src={logo} alt="Le Hangar logo" className="header__logo"/>
            <nav className="header__nav">
                <li className="header__li--bordered">Prendre rendez-vous en ligne</li>
                {screenWidth > desktopWidth && <li className="header__li">Le Salon</li>}
                {screenWidth > desktopWidth && <li className="header__li">Direction</li>}
            </nav>
        </header>
    )
}