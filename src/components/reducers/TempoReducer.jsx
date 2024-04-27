import TEMPOACTIONS from "../actions/TempoActions";

export const initialState = {
    tempos: [10, 1000]
}

const TempoReducer = (state, action) => {
    const {type, payload} = action;
    console.log("Payload: ", payload.minimumTempo)
    switch(type) {
        case TEMPOACTIONS.SET_MIN_TEMPO:
            // console.log(tempos);
            return {
                ...state,
                tempos: payload.minimumTempo
                
            }
        case TEMPOACTIONS.SET_MAX_TEMPO:
            return {
                ...state,
                tempos: payload.maximumTempo
            }
    }
}

export default TempoReducer;