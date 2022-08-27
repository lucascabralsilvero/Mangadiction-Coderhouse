import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import styles from "./Item.module.scss"

/* Tarjeta de items  */

const Item = ({ producto, onAdd }) => {
  return (
               <div className='card mt-5 d-flex flex-column justify-content-center align-items-center position-relative' >
                <img src={producto.img}  alt="" />
                <h4 className='mt-2'>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>Stock: {producto.stock}</p>   
                {(() =>{
                  if(producto.categoria === "Seinen"){
                    return(
                      <div className={`${styles.badge} badge bg-danger position-absolute`}>{producto.categoria}</div>
                    )

                  } else if(producto.categoria === "Shounen"){
                    return (
                    <div className={`${styles.badge} badge bg-primary position-absolute`}>{producto.categoria}</div>)
                  } else{
                    return(
                    <div className={`${styles.badge} badge bg-success position-absolute`}>{producto.categoria}</div>)
                  }
                })()}
                  <ItemCount stock= {producto.stock} />
              </div>
  )
}

export default Item;