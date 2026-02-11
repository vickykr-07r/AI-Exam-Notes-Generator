import { createContext } from "react";

export let ServerContext=createContext();

function ServerProvider({children}){

   const serverURL = "http://localhost:8080"
    return(
        <ServerContext.Provider value={{serverURL}}>
        {children}
        </ServerContext.Provider>
    )
}

export default ServerProvider