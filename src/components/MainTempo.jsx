import { useState } from "react";
import Slider from '@mui/material/Slider';

const MainTempo = () => {
    const [value, setValue] = useState([120, 900]);

    const handleChange = (_, newValue) => {
      setValue(newValue);
    };
    
    return(
        <div>
            <h2>Main Tempo Section</h2>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={1000}
                    min={0}
                />
        </div>
    )
}

export default MainTempo;