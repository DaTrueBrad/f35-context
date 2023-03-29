import { createContext, useReducer } from "react";

let initialState = {
  name: "Jeremiah", 
  count: 0
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {

  //! purpose of the reducer is to save values to state. Initially, it will overwrite anything inside of state, unless there is a default return of state.
    const reducer = (state, action) => {
      switch(action.type) {
        default:
          return state
      }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <GlobalContext.Provider value={{state, dispatch}}>
        {props.children}
      </GlobalContext.Provider>
    )
}


export {GlobalContextProvider}
export default GlobalContext