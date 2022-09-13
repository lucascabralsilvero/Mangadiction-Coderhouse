import React, {  useState } from 'react';
import {  useLoginContext } from '../../Context/LoginContext';
import styles from "./LoginScreen.module.scss"; 

const LoginScreen = () => {

    const {login} = useLoginContext(); 

    const [email, setEmail] = useState(""); 
    const [pass, setPass] = useState(""); 

    const handleEmailChange = (e) => {
            setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value); 
    } 


    const handleSubmit = (e) => {
        e.preventDefault(); 

        login({
            email,pass
        })
    }

  return (
    <div className={`${styles.height} container d-flex justify-content-center align-items-center `}>
        <form onSubmit={handleSubmit}>
            <input className='form-control' type={"email"} placeholder="test@test.com" value={email} onChange={handleEmailChange}/>
            <input className='form-control mt-2' type={"password"} placeholder="1234" value={pass} onChange={handlePassChange}/>
            <button className='btn btn-primary mt-2 w-100' type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default LoginScreen;