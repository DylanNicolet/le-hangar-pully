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
                <button className="button-rdv"><a href="http://onlinebooking.ikosoft.com/8B14C803406CAA52F7520005C/FRA" target="_blank" rel="noreferrer">Prendre rendez-vous en ligne</a></button>
                {screenWidth > desktopWidth && <a href="#le-salon" className="header__a">Le Salon</a>}
                {screenWidth > desktopWidth && <a href="https://goo.gl/maps/JnjxKwWeSbyHfGxy7" className="header__a" target="_blank" rel="noreferrer">Direction</a>}
            </nav>
        </header>
    )
}