import  { useState } from "react";
import { app } from "../../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import LoginView from "./LoginView";

const LoginScreen = () => {
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [isRegister, setIsRegister] = useState(false);

  async function registrarUsuario(email, password) {
    const userInfo = await createUserWithEmailAndPassword(auth, email, password)
      .then((firebaseUser) => {
        return firebaseUser;
      })
      .catch(function (error) {
        let errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/email-already-in-use") {
          Swal.fire("El mail ya se encuentra en uso");
        } else if (errorCode === "auth/weak-password") {
          Swal.fire("Contraseña débil: mínimo 6 caracteres");
        }
      });

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
      signInWithEmailAndPassword(auth, email, password)
      .catch(function (error) {
        let errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/wrong-password"){ 
          Swal.fire("Contraseña incorrecta!")
        } else if(errorCode === "auth/user-not-found"){
          Swal.fire("Usuario no encontrado, por favor, registrese!")

        };
      })
    }
  };

  return (
      <LoginView
      handleSubmit={handleSubmit}
      isRegister={isRegister}
      setIsRegister={setIsRegister}
      />
  );
};

export default LoginScreen;
