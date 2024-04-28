import React, { useContext } from "react";
import { TempoContext } from "../context/TempoContext";

const ModButton = (props) => {
    const tempoContext = useContext(TempoContext);
    const { setCurrentTempoMod, speedModMap } = tempoContext;

    const handleClick = () => {
        setCurrentTempoMod(props.num);
    }

    return(
        <button className={`mod-button ${speedModMap[props.num] ? 'mod-button-active' : '' }` } onClick={handleClick}>
            {props.num}
        </button>
    )
}

export default ModButton;