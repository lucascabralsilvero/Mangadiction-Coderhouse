import React, { useState } from "react";
import { app } from "../../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import styles from "./LoginScreen.module.scss"
import { faArrowsLeftRightToLine } from "@fortawesome/free-solid-svg-icons";

const LoginScreen = () => {
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [isRegister, setIsRegister] = useState(false);

  async function registrarUsuario(email, password) {
    const userInfo = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((firebaseUser) => {
      return firebaseUser;
    });

    console.log(userInfo.user.uid);

    const docuRef = doc(firestore, `usuarios/${userInfo.user.uid}`);

    setDoc(docuRef, { correo: email });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (isRegister) {
      registrarUsuario(email, password);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }

  };


  return (
    <div className={`${styles.bgStyles} container-fluid`}>
      <h1 className="text-center text-white pt-4">{isRegister ? "Regístrate" : "Inicia Sesión"}</h1>
        <div className={`${styles.loginCard}`}>
            <form className="d-flex flex-column align-items-center justify-content-center mt-5 "  onSubmit={handleSubmit}>
                <label className="fs-5 mb-2 text-white">Correo electrónico</label>
                <input 
                  className="form-control " 
                  type="email" 
                  id="email"
                  placeholder="test@test.com" 
                  required />

                <label className="fs-5 mt-2 text-white">Contraseña</label>
                <input 
                  className="form-control mt-2" 
                  type="password" 
                  id="password" 
                  placeholder="123456"
                  required />

                <div className="mt-4 mb-5 text-center d-flex flex-column flex-sm-row">
                    <input
                    className="mx-3 btn btn-success mb-3 mb-sm-0"
                    type="submit"
                    value={isRegister ? "Registrar" : "Iniciar Sesión"}
                    />
                    <button className="btn btn-danger"  onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? "Ya tengo una cuenta" : "Quiero registrarme"}
                    </button>
                </div>
            </form>
      </div>
  
    </div>
  );
};

export default LoginScreen;
