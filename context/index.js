import { createContext, useState, useEffect } from "react";

const FelixContext = createContext(undefined);

const FelixContextProvider = (props) => {

  const [ targets, setTargets ] = useState([]);

  return(
    <FelixContext.Provider value={{targets, setTargets}}>
      {props.children}
    </FelixContext.Provider>
  )
}

export { FelixContext };
export default FelixContextProvider;