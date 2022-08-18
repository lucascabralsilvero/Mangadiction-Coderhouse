import React from 'react';
import styles from "./CartWidget.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <FontAwesomeIcon className={`${styles.icon}`} icon={ faCartShopping } />
  )
}

export default CartWidget;