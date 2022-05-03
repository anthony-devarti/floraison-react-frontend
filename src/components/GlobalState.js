import React, { createContext, useReducer, useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode'
  
//checks local storage for items in the cart and sets the starting cart value accordingly if it's there.  If it's null, it will set the starting cart value to an empty array.
  const saved = localStorage.getItem('cart')
  const startCart = JSON.parse(saved)

let user = JSON.parse(localStorage.getItem('user'))
  const initialState = {
    cart: saved ?  startCart : [],
    currentUser: user ? jwtDecode(user.access) : null,
    currentUserToken: user ? user.access : null
    }

  
  // const initialState = initialValue || empty
  // console.log(initialState)
  
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