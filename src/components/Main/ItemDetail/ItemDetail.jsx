import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import styles from "./ItemDetail.module.scss"; 
import { Link } from "react-router-dom"; 
import {  useCartContext } from '../../../Context/CartContext';


const ItemDetail = ({item}) => {

  const {  addToCart, isInCart } = useCartContext(); 



  const [counter, setCounter] = useState(1); 

  const handleAdd = () => {
   const itemToCart = {
      nombre : item.nombre, 
      precio: item.precio,
      img: item.img,
      id: item.id,
      counter
    }

    addToCart(itemToCart)
    
  }


  return (
    <div  className={` ${styles.itemDetail} container `}>

     <div className="row d-flex">
        <div className="col-1">
        <Link className=' fs-5 text-danger' to={`/categorias/${item.categoria}`}> &laquo; Volver</Link>    
        </div>
        <div className='col-3'>     
            <img  src={item.img} alt="" />
        </div>

        <div className="col-8 ">
             <h1 className='mt-2 '> {item.nombre}</h1>
             <p className='mt-3'>{item.desc}</p>
             <p> <b> Precio:</b> ${item.precio}</p>
             <p> <b> Stock: </b> {item.stock}</p>             

        {
          isInCart(item.id)
          ? <Link to="/cart" className='btn btn-success my-2'>Terminar Compra</Link>  
          : <ItemCount 
          stock= {item.stock}
          counter = {counter}
          setCounter={setCounter}
          handleAdd = {handleAdd} /> 
        }
        
        </div>

     </div>

     

    </div>
  )
}

export default ItemDetail;