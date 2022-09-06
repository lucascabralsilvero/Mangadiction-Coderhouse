import React from 'react';
import styles from "./CartWidget.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
   <Link to="/cart"> <FontAwesomeIcon className={`${styles.icon}`} icon={ faCartShopping } /> </Link>
  )
}

export default CartWidget;