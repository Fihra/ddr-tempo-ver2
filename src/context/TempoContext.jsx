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

    // console.log(state.tempos);

    const value = {
        tempos: state.tempos,
        setMinimumTempo
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