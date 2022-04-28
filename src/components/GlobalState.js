import React, { createContext, useReducer, useContext, useEffect } from 'react';
  
  const initialState = {cart: []} 
  // || JSON.parsed(localStorage.getItem('cart'))
  
  const GlobalStateContext = createContext(initialState);
  const DispatchStateContext = createContext(undefined)
  
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      initialState,
    );

    return (
      <GlobalStateContext.Provider value={state}>
        <DispatchStateContext.Provider value={dispatch}>
          {children}
        </DispatchStateContext.Provider>
      </GlobalStateContext.Provider>
    )
  }
  
  export const useGlobalState = () => [
    useContext(GlobalStateContext),
    useContext(DispatchStateContext)
  ];