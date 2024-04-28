import React, { useContext } from "react";
import { TempoContext } from "../context/TempoContext";

const ModButton = (props) => {
    const tempoContext = useContext(TempoContext);
    const { setCurrentTempoMod, speedModMap, setScrollSpeedPreview } = tempoContext;

    const handleClick = () => {
        setCurrentTempoMod(props.num);
        setScrollSpeedPreview(props.num);
    }

    return(
        <button className={`mod-button ${speedModMap[props.num] ? 'mod-button-active' : '' }` } onClick={handleClick}>
            {props.num}
        </button>
    )
}

export default ModButton;