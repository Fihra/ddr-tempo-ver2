import TEMPOACTIONS from "../actions/TempoActions";

export const initialState = {
    minimumTempo: 10,
    maximumTempo: 1000,
    currentTempoMod: 1,
    speedModMap: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    }
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
        case TEMPOACTIONS.SET_CURRENT_TEMPO_MOD:
            let copySpeedModMap = {};
            for(const [key, _] of Object.entries(state.speedModMap)) {
                copySpeedModMap[key] = false;
            }

            copySpeedModMap[payload.currentTempoMod] = true;

            return {
                ...state,
                currentTempoMod: payload.currentTempoMod,
                speedModMap: copySpeedModMap
            }
        default:
            return state;
    }
}

export default TempoReducer;