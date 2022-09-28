import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import styles from "./Cart.module.scss";
import empty from "../../assets/img/empty-cart.png"

const Cart = () => {

  const {cart, cartTotal, emptyCart, removeItem, priceProduct} = useCartContext();

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
            <div className='row d-flex align-items-center flex-wrap text-center '>

                  <div className='col-md-2 col-sm-3'>
                    <img className={styles.cover} src={item.img} alt="" />
                  </div>
                 <div className='col-md-3 col-sm-2'>
                  <h3 className='fs-md-3 fs-5'>{item.nombre}</h3>
                 </div>  
                  <div className='col-md-2 col-sm-2 mt-3'>
                  <p>Precio Unitario: ${item.precio}</p>
                  <p>Precio Acumulado: ${priceProduct(item.id)}</p>
                  </div>
                   <div className='col-md-2 col-sm-2 mt-3'>
                    <p>Cantidad: {item.counter} </p>
                   </div>
                   <div className='col-sm-3'>
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
             <Link to="/checkout" className='btn btn-success mx-4'>Terminar Compra</Link> 
      
            </div>
    </div>
  )
}

export default Cart;