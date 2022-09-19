import React from "react";
import image1 from "../images/img-salon1.jpg"
import image2 from "../images/img-salon2.jpg"

export default function LeSalon(){
    return(
        <section className="le-salon" id="le-salon">
            <h1 className="le-salon__title">Le Salon</h1>
            <section className="le-salon__container">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <p>Plus d'images à venir...</p>
            </section>
        </section>
    )
}