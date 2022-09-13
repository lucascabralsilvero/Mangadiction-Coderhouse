import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import styles from "./Cart.module.scss";
import empty from "../../assets/img/empty-cart.png"

const Cart = () => {

  const {cart, cartTotal, emptyCart, removeItem} = useCartContext();

  if(cart.length === 0){
      return(
        <div className={`${styles.height} ${styles.paddingEmptyCart} container d-flex flex-column  align-items-center`}>
          <h2 className='mb-5'>Tu carrito está vacío...</h2>
          <img className={styles.emptyCart} src={empty} alt="" />
          <Link className='btn btn-primary mt-5 fs-5' to="/">Ir a comprar</Link>
          </div>
      )
    
  } 

  return (
    <div className={`${styles.height} ${styles.padding} container`}>

        <h2 className='text-center mb-5'>Mi Carrito</h2>

      {cart.map((item) => (
          <div key={item.id}>
            <div className='row d-flex align-items-center flex-wrap text-center'>

                  <div className='col-2'>
                    <img className={styles.cover} src={item.img} alt="" />
                  </div>
                 <div className='col-3'>
                  <h3 className='fs-3'>{item.nombre}</h3>
                 </div>  
                  <div className='col-2 mt-3'>
                  <p>Precio: ${item.precio}</p>
                  </div>
                   <div className='col-2 mt-3'>
                    <p>Cantidad: {item.counter}</p>
                   </div>
                   <div className='col-3'>
                   <button onClick={() => removeItem(item.id)} className="btn btn-danger">Eliminar</button>
                   </div>
                  
            </div>
                   
                    <hr/>
          </div>

        ))
      
      }
            <div className='d-flex align-items-center justify-content-center mt-4   '>
            
            <h4 className='mx-4'>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
      
            </div>
    </div>
  )
}

export default Cart;