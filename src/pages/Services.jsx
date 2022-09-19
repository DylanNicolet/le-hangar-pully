import React from "react";

export default function Services(){
    return(
        <section className="services">
            <h1 className="services__title">Prestations</h1>
            <section className="services__container">
                <h2>Coiffure</h2>
                <ul>
                    <li>Coloration</li>
                    <li>Décoloration</li>
                    <li>Mèches (Balayage, Ombré, ...)</li>
                    <li>coupe homme/femme/enfant</li>
                </ul>
            </section>

            <section className="services__container">
                <h2>Onglerie</h2>
                <ul>
                    <li>Manucure</li>
                    <li>Gel</li>
                    <li>Vernis Semipermanent</li>
                    <li>Beauté des Pieds</li>
                </ul>
            </section>
        </section>
    )
}