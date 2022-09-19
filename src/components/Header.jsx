import React from "react";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(){
    const screenWidth = useSelector((state) => state.webConfig.screenWidth)
    const desktopWidth = useSelector((state) => state.webConfig.desktopWidth)

    const [modal, setModal] = React.useState(false)

    function handleOpenModal(){
        setModal(true)
    }

    function handleCloseModal(){
        setModal(false)
    }

    return(
        <header>
            <img src={logo} alt="Le Hangar logo" className="header__logo"/>
            <nav className="header__nav">
                <button className="button-rdv" onClick={handleOpenModal}>Prendre rendez-vous en ligne</button>
                {screenWidth > desktopWidth && <a href="#le-salon" className="header__a">Le Salon</a>}
                {screenWidth > desktopWidth && <a href="#45755326967922dd" className="header__a">Direction</a>}
            </nav>
            
            {modal && 
                <section className="modal-rdv">
                    <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
                    <p>Ce service sera tout bientôt disponible</p>
                    <button onClick={handleCloseModal} className="button-close-modal">X</button>
                </section>
            }
        </header>
    )
}