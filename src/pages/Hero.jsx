import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import heroImage from "../images/hero.jpg";
import { useSelector } from "react-redux";

export default function Hero(){
    const screenWidth = useSelector((state) => state.webConfig.screenWidth)
    const desktopWidth = useSelector((state) => state.webConfig.desktopWidth)

    return(
        <section className="hero">
            <Header/>
            <section className="hero__content">
                {screenWidth >= desktopWidth && <img alt="Le Hangar" src={heroImage} className="hero__image" />}

                <section className="card__container">
                    <section className="hero__card">
                        <FontAwesomeIcon icon={faClock} className="hero__icon" />
                        <p>Mardi - Vendredi: 10h - 17h</p>
                        <p>Samedi: 9h - 17h</p>
                        <p>Dimanche - Lundi: Fermé</p>
                    </section>

                    <section className="hero__card hero__card--contact-card">
                        <section>
                            <FontAwesomeIcon icon={faPhone} className="hero__icon hero__icon--spaced" />
                            <p>021 728 33 26</p>
                        </section>
                        <section>
                            <FontAwesomeIcon icon={faEnvelope} className="hero__icon hero__icon--spaced" />
                            <p>le.hangar@outlook.com</p>
                        </section>
                        <section>
                            <FontAwesomeIcon icon={faMapPin} className="hero__icon hero__icon--spaced" />
                            <p>Avenue de Lavaux 63, Pully</p>
                        </section>
                    </section>

                    {screenWidth > desktopWidth && <section className="hero__card hero__card--hidden" />}

                    <section className="hero__card">
                        <p>Consulter nos reseaux sociaux pour les offres du moment</p>
                        <section>
                            <a href="https://www.facebook.com/profile.php?id=100063541963485" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="hero__icon hero__icon--spaced hero__icon--socials" /></a>
                            <a href="https://www.instagram.com/le.hangar.coiffure/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="hero__icon hero__icon--socials" /></a>
                        </section>
                    </section>

                    
                </section>
                
            </section>
        </section>
    )
}