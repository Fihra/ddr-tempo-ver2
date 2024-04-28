import React, { useContext } from "react";
import { TempoContext } from "../context/TempoContext";

const ModButton = (props) => {
    const tempoContext = useContext(TempoContext);

    const { setCurrentTempoMod } = tempoContext;

    

    const handleClick = () => {
        setCurrentTempoMod(props.num);
    }

    return(
        <button className="mod-button" onClick={handleClick}>
            {props.num}
        </button>
    )
}

export default ModButton;