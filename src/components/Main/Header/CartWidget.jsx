import React from 'react';
import styles from "./CartWidget.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../Context/CartContext';


const CartWidget = () => {
  
  const {cartQuantity} = useCartContext();

  return (

  <div className='position-relative'> 

  <Link  to="/cart"> <FontAwesomeIcon className={`${styles.icon}`} icon={ faCartShopping } /></Link>
   <div className={`${styles.cartBubble} position-absolute d-flex justify-content-center align-items-center`}>{cartQuantity()}</div>

   </div>
   
  )
}

export default CartWidget;