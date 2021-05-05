import {useReducer } from "react";
import React , {createContext} from "react";
import reducer , {initialState} from './reducer';
export const StateContext = createContext();

// export const StateProvider = ({ reducer , initialState, children})=> (
//     <StateContext.Provider value = {useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>

// );
//export const useStateValue = () => useContext(StateContext);
export const StateProvider = (props) =>{
    const [InputState, dispatch] = useReducer( reducer , initialState );
    return (
        <StateContext.Provider value={[InputState,dispatch]}>
            {props.children}
        </StateContext.Provider>
    );
}