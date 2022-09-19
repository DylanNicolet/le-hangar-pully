import React from "react";
import CardWithModal from "../components/CardWithModal";
import ModalSoins from "../components/ModalSoins";
import { useSelector } from "react-redux";

export default function InfoSoin(){

    const modalStatus = useSelector((state) => state.webConfig.modalSoins.status)

    return(
        <section className="info-soin">
            {modalStatus && <ModalSoins />}
            <h1>Soins Spéciaux</h1>
            <section className="card-container">
                <CardWithModal text="Soin Botox"/>
                <CardWithModal text="Lissage Kératine"/>
                <CardWithModal text="Lissage Tanin"/>
                <CardWithModal text="Bond Fusion"/>
                <CardWithModal text="" hidden={true} />
                <CardWithModal text="Soin Tokio Inkarami"/>
            </section>
        </section>
    )
}