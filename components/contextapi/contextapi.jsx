import { createContext, useContext, useState }  from "react";

const contextapi = createContext();

export const Contextprovider = ({children})=>{
   const gettoken = localStorage.getItem("JWT_TOKEN") ?
                    JSON.parse(localStorage.getItem("JWT_TOKEN"))
                    :null;
    
    const [token,settoken] = useState(gettoken);

    const senddata = {
        token,
        settoken
    }

    return <contextapi.Provider value={senddata}>{children}</contextapi.Provider>
};

export const useStoredContext = () =>{
    const context = useContext(contextapi);
    return context;
}