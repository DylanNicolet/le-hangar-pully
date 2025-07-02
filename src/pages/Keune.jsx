import keuneLogo from "../images/logo_keune.png"

export default function Keune() {
    return (
        <section className="keune">
            <section className="keune__panel">
                <img src={keuneLogo} alt="Logo de la marque Keune" className="keune__logo"/>
            </section>

            <p className="keune__text">
                Notre salon est fier d’être ambassadeur de la marque Keune, symbole de qualité pour nous. <br /><br />
                Ce partenariat nous permet de créer des soins adaptés à vos besoins spécifiques, tels que :<br /><br />
                shampooing, conditionneur, coloration, texturisation, entretien et soins.
            </p>
        </section>
    )
}