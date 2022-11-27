import React, {createContext} from 'react';

const MyDayContext = createContext(undefined);

const MyDayProvider = () => {
    const handleLeftTask = () => {
        console.log('handleTaskLeft')
    }
    return(<MyDayContext.Provider value={handleLeftTask}></MyDayContext.Provider>)
}

export { MyDayContext };
export default MyDayProvider;