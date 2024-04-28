import { useContext } from "react";
import Slider from '@mui/material/Slider';
import { TempoContext } from "../../context/TempoContext";
import { EditText } from "react-edit-text";

const Tempo = () => {
    const tempoContext = useContext(TempoContext);
    const { setMinimumTempo, setMaximumTempo, minimumTempo, maximumTempo } = tempoContext;

    const handleSliderChange = (e) => {
        console.log("value: ", e.target.value);

        setMinimumTempo(e.target.value[0]);
        setMaximumTempo(e.target.value[1]);
    };

    const saveMinimumForm = (num) => {
        setMinimumTempo(Number(num.target.value))
    }

    const saveMaximumForm = (num) => {
        setMaximumTempo(Number(num.target.value))
    }
    
    const showTempos = () => {
        return(
            <span className="tempo-text">
                {<EditText name="minForm" value={minimumTempo} type="string" placeholder={minimumTempo} onChange={saveMinimumForm}/>} - {<EditText name="maxForm" value={maximumTempo} type="string" placeholder={maximumTempo} onChange={saveMaximumForm}/>}
            </span>
        )
    }

    return(
        <div>
            <h4>{showTempos()}</h4>
                <Slider
                    value={[minimumTempo, maximumTempo]}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    max={1000}
                    min={0}
                />
        </div>
    )
}

export default Tempo;