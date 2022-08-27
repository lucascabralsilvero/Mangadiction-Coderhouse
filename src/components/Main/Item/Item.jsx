import React from 'react';

/* Tarjeta de items  */

const Item = ({ producto}) => {
  return (
               <div className='mt-5 text-center' >
                <img src={producto.img} alt="" />
                <h4>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>Stock: {producto.stock}</p>
                <p>{producto.categoria}</p>
                  <a href="">Ver Detalles</a>
              </div>
  )
}

export default Item;