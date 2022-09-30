import React from 'react'
import styles from "./Checkout.module.scss";


const CheckoutView = ({ handleInputChange, values, handleSubmit}) => {

  return (
    <div className={`${styles.checkoutView}  text-center container my-5`}>
    <h2 className="mb-4">Checkout</h2>

    <form className="d-flex justify-content-center align-items-center flex-column " onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={values.nombre}
        onChange={handleInputChange}
        type={"text"}
        className="form-control my-2 w-50"
        placeholder="Nombre"
        required
      />

      <input
        name="email"
        value={values.email}
        onChange={handleInputChange}
        type={"email"}
        className="form-control my-2 w-50 "
        placeholder="Email"    
        required
      />
           

      <input
        name="direccion"
        value={values.direccion}
        onChange={handleInputChange}
        type={"text"}
        className="form-control my-2 w-50 "
        placeholder="Dirección"
        required
      />

      <button
        className="btn btn-primary mt-2"
        type="submit">
        Enviar
      </button>
    </form>
  </div>
)}


export default CheckoutView;