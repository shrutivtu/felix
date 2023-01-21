import { createContext, useState, useEffect } from "react";
const FelixContext = createContext(undefined);
const FelixContextProvider = (props) => {
  const [ targets, setTargets ] = useState([]);
  useEffect(() => {
    console.log(targets);
  },[targets]);
  const addTarget = (target) => {
    let t = targets;
    t.push(target);
    console.log(t);
    setTargets(t);
  }
  return(
    <FelixContext.Provider value={{targets, setTargets, addTarget}}>
      {props.children}
    </FelixContext.Provider>
  )
}
export { FelixContext };
export default FelixContextProvider;
