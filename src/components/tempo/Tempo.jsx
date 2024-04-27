import { useState, useContext } from "react";
import Slider from '@mui/material/Slider';
import { TempoContext } from "../../context/TempoContext";

const Tempo = () => {
    const [value, setValue] = useState([120, 900]);

    const tempoContext = useContext(TempoContext);
    const { setMinimumTempo, tempos } = tempoContext;


    const handleChange = (_, newValue) => {
    //   setValue(newValue);
        setMinimumTempo(newValue);
    };

    console.log(tempoContext);
    
    return(
        <div>
            <h2>Main Tempo Section</h2>
                <Slider
                    value={tempos}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={1000}
                    min={0}
                />
        </div>
    )
}

export default Tempo;