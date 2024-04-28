import { createContext, useReducer, useContext } from 'react';
import TempoReducer, {initialState} from '../components/reducers/TempoReducer';
import TEMPOACTIONS from '../components/actions/TempoActions';

export const TempoProvider = ({children}) => {
    const [state, dispatch ] = useReducer(TempoReducer, initialState);

    const setMinimumTempo = (value) => {
        dispatch({
            type: TEMPOACTIONS.SET_MIN_TEMPO,
            payload: {
                minimumTempo: value
            }
        })
    }

    const setMaximumTempo = (value) => {
        dispatch({
            type: TEMPOACTIONS.SET_MAX_TEMPO,
            payload: {
                maximumTempo: value
            }
        })
    }

    const setCurrentTempoMod = (value) => {
        dispatch({
            type: TEMPOACTIONS.SET_CURRENT_TEMPO_MOD,
            payload: {
                currentTempoMod: value
            }
        })
    }

    const value = {
        minimumTempo: state.minimumTempo,
        maximumTempo: state.maximumTempo,
        currentTempoMod: state.currentTempoMod,
        speedModMap: state.speedModMap,
        setMinimumTempo,
        setMaximumTempo,
        setCurrentTempoMod,
    }
    
    return <TempoContext.Provider value={value}>{children}</TempoContext.Provider>
}

const useTempo = () => {
    const context = useContext(TempoContext);
    if(context === undefined){
        throw new Error("no tempo context found");
    }

    return context;
}

export default useTempo;

export const TempoContext = createContext(initialState);