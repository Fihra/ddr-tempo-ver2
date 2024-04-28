import React, { useContext } from "react";
import { TempoContext } from "../context/TempoContext";
import { tempoMods } from "./tempoModsData";
import ModButton from "./ModButton";

const TempoMods = () => {
    const tempoContext = useContext(TempoContext);
    const {minimumTempo, maximumTempo, currentTempoMod, speedModMap} = tempoContext;

    const showTempoMods = () => {
        const textModsArray = ['blue', 'orange', 'green', 'red']
        let counter = tempoMods[currentTempoMod].length > 3 ? -1: 0;

        return(
            <div>
                {
                    tempoMods[currentTempoMod].map((temp, idx) => {
                        counter++;
                        return(
                            <li key={idx}>
                            <span><span style={{backgroundColor: textModsArray[idx]}}>x{temp}</span> {minimumTempo * temp} - {maximumTempo * temp} </span>
                            </li>
                        )
                    })

                }
            </div>
        )
    }

    const getZeroToFourMod = () => {
        return( 
            Object.keys(speedModMap).slice(0, 5).map((num) => Number(num)).map((_, i) => {
                return (
                    <ModButton key={i} num={i}/>
                )
            })
        )
    }

    const getFiveToNineMod = () => {
        return (
            Object.keys(speedModMap).slice(5, 10).map((num) => Number(num)).map((item, _) => {
                return (
                    <ModButton key={item} num={item}/>
                )
            })
        )
    }

    return(
        <section>
            <h3>Tempo Mods</h3>
            <div className="speed-container">
                <div className="mod-block">
                    {getZeroToFourMod()}
                </div>
                <div className="mod-block">
                    <ul>
                    {showTempoMods()}
                    </ul>
                </div>
                <div className="mod-block">
                    {getFiveToNineMod()}
                </div>
            </div>
        </section>
    )
}

export default TempoMods;