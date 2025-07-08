import image1 from "../images/img-salon1.webp"
import image2 from "../images/img-salon2.webp"

export default function LeSalon() {
    return (
        <section className="le-salon" id="le-salon">
            <h2 className="le-salon__title">Le Salon</h2>

            <section className="le-salon__container">
                <img src={image1} alt="Vue intérieure du salon" />
                <img src={image2} alt="Vue intérieure du salon avec fauteuils" />

                <p>Plus d'images à venir...</p>
            </section>
        </section>
    )
}