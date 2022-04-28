import React, { createContext, useReducer, useContext, useEffect } from 'react';
  
//checks local storage for items in the cart and sets the starting cart value accordingly if it's there.  If it's null, it will set the starting cart value to an empty array.
  const saved = localStorage.getItem('cart')
  const initialValue = JSON.parse(saved)
  const initialState = {
    cart: saved ?  initialValue : []}

  
  // const initialState = initialValue || empty
  // console.log(initialState)
  
  const GlobalStateContext = createContext(initialState);
  const DispatchStateContext = createContext(undefined)
  
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      initialState,
    );


  //this is causing too many rerenders.
  // if (localStorage.getItem('cart') !== null) {
  //   let storage = localStorage.getItem('cart')
  //   dispatch(state.cart = JSON.parse(storage))
  // }

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