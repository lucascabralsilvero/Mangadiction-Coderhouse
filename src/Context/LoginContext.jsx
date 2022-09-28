import { createContext, useContext, useState } from "react";
import { app } from "../firebase/firebaseConfig";
import {getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app); 

export const LoginContext = createContext(); 



export const LoginProvider =  ({children}) =>{

    const [user, setUser] = useState(null); 
  
    onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser){
            setUser(firebaseUser)
            console.log(firebaseUser)

        } else {
            setUser(null)
        }
    })
   
    
    return(
        <LoginContext.Provider value={{user}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext); 
}
