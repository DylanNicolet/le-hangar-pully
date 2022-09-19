import React from "react";
import keuneLogo from "../images/logo_keune.png"


export default function Keune(){
    return(
        <section className="keune">
            <section className="keune__panel">
                <img src={keuneLogo} alt="Logo de la marque Keune" className="keune__logo"/>
            </section>

            <p className="keune__text">
                Notre salon est fiére d’être ambassadeur de la marque Keune qui est pour nous 
                un symbole de qualité. <br /><br />
                Ce parteneriat nous permet de crée soins adaptées a vos 
                besoins spécifiques tel que <br /><br />
                shampoing, conditoner, coloration, texturisation, entretien et soins
            </p>
        </section>
    )
}