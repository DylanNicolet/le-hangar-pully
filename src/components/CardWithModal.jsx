import React from "react";
import { useDispatch } from "react-redux";
import { updateModalSoins } from "../redux/webConfigSlice";

//props: text=string; hidden=boolean
export default function CardWithModal(props){
    const dispatch = useDispatch()

    function handleClick(){
        dispatch(updateModalSoins({status: true, key: props.text}))

    }

    return(
        <section className={props.hidden? "card-with-modal hidden" : "card-with-modal"} onClick={handleClick}>
            <p>{props.text}</p>
        </section>
    )
}