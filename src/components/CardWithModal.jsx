import { useDispatch } from "react-redux";
import { updateModalSoins } from "../redux/webConfigSlice";

//props: text=string; hidden=boolean
export default function CardWithModal(props) {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(updateModalSoins({status: true, key: props.text}))
    }

    return (
        props.hidden ?
            <section className="card-with-modal hidden" aria-hidden="true"></section>
        :
            <button className="card-with-modal" onClick={handleClick}>
                {props.text}
            </button>
    )
}