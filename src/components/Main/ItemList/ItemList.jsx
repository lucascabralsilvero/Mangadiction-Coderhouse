import React from 'react';
import Item from '../Item/Item';

/* Mapeo de los productos de la base de datos */

const ItemList = ( {productos = []} ) => {
  return (
    <div className= "container">
         <h2 className='text-center'>Productos</h2>
          <div className='row'>
            <div className='col-12 bg-light d-flex flex-wrap justify-content-between '>
            {productos.map((el) => {
              return <Item producto = {el} key={el.id}/>
            } )}
              </div>
          </div>
            
  </div>
  )
}

export default ItemList;