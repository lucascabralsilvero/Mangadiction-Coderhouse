import React from 'react';
import styles from "./LoginScreen.module.scss";

const LoginView = ({handleSubmit, isRegister, setIsRegister}) => {


  return (
    <div className={`${styles.bgStyles} container-fluid`}>
      <h1 className="text-center text-white pt-4">
        {isRegister ? "Regístrate" : "Inicia Sesión"}
      </h1>
      <div className={`${styles.loginCard}`}>
        <form
          className="d-flex flex-column align-items-center justify-content-center mt-5 "
          onSubmit={handleSubmit}>
          <label className="fs-5 mb-2 text-white">Correo electrónico</label>
          <input
            className={`form-control`}
            type="email"
            id="email"
            placeholder="test@test.com"
            required
          />

          <label className="fs-5 mt-2 text-white">Contraseña</label>
          <input
            className={`form-control mt-2 `}
            type="password"
            id="password"
            placeholder="123456"
            required
          />

          <div className="mt-4 mb-5 text-center d-flex flex-column flex-sm-row">
            <input
              className="mx-3 btn btn-success mb-3 mb-sm-0"
              type="submit"
              value={isRegister ? "Registrar" : "Iniciar Sesión"}
            />
            <button
              className="btn btn-danger"
              onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Ya tengo una cuenta" : "Quiero registrarme"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginView;