import React, {createContext, useState, useContext} from 'react'

const GameStatusContext = createContext();

export default function GameStatusProvider({children}){
    let [gameStatus, setGameStatus] = useState(false)
    return(
        <GameStatusContext.Provider value={{gameStatus, setGameStatus}}>
            {children}
        </GameStatusContext.Provider>
    )
}

export function useGameStatus(){
    const context = useContext(GameStatusContext);
    if(!context) throw new Error("useContext must be used within a provider");
    const {gameStatus, setGameStatus} = context;
    return {gameStatus,setGameStatus}
}