/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

export const Context = createContext();

export const useGlobalState = () => {
    const context = useContext(Context);
    return context
}
export const GlobalProvider = ({children}) => {

    const [state, dispacth] = useReducer(AppReducer, initialState, 
        () => {
            const localData = localStorage.getItem('transactions');
    
            return localData ? JSON.parse(localData) : initialState
        });

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])

    const addTransaction = (transaction) => {
        dispacth({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispacth({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return (
        <Context.Provider value={{
            transactions: state.transactions, 
            addTransaction, 
            deleteTransaction
        }}>{children}</Context.Provider>
    )
};

