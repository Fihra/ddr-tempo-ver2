import TEMPOACTIONS from "../actions/TempoActions";

export const initialState = {
    minimumTempo: 10,
    maximumTempo: 1000
}

const TempoReducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case TEMPOACTIONS.SET_MIN_TEMPO:
            return {
                ...state,
                minimumTempo: payload.minimumTempo
            }
        case TEMPOACTIONS.SET_MAX_TEMPO:
            return {
                ...state,
                maximumTempo: payload.maximumTempo
            }
        default:
            return state;
    }
}

export default TempoReducer;