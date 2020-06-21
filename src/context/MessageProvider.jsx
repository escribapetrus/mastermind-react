import React, {createContext, useState, useContext} from 'react'

const MessageContext = createContext();

export default function MessageProvider({children}){
    let [message, setMessage] = useState(null);
    return (
        <MessageContext.Provider value={{message, setMessage}}>
            {children}
        </MessageContext.Provider>
    )
}

export function useMessage(){
    const context = useContext(MessageContext);
    if (!context) throw new Error("useMessage must be used within a provider");
    const {message, setMessage} = context;
    return {message, setMessage}
}
