import { createContext, useContext, useState } from "react";


export const LoginContext = createContext(); 

export const useLoginContext = () => {
    return useContext(LoginContext); 
}

 const users = [
    {
        email:"test@test.com",
        password: "1234"
    },
    {
        email:"abc@abc.com",
        password: "1234"
    }
] 

export const LoginProvider =  ({children}) =>{

    const [user,setUser] = useState({user:"", logged: true});

const login = (values) => {
    const match = users.find(user => user.email === values.email); 

    if(match){

        if(match.password === values.pass){
                setUser({
                    user: match.email,
                    logged:true
                })
        } else {
            alert("Password incorrecto")
        }

    } else {
        alert("Email incorrecto")
    }
}

const logout = () => {
    setUser({
        user:"",
        logged:false
    })
}
    
    return(
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

