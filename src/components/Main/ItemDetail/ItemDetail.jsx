import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import styles from "./ItemDetail.module.scss"; 
import { Link } from "react-router-dom"; 


const ItemDetail = ({item}) => {
  return (
    <div  className={` ${styles.itemDetail} container `}>

     <div className="row d-flex">
        <div className="col-1">
        <Link className=' fs-5 text-danger' to={`/categorias/${item.categoria}`}> &laquo; Volver</Link>    
        </div>
        <div className='col-3'>     
            <img className='img-fluid' src={item.img} alt="" />
        </div>
        <div className="col-8 ">
             <h4 className='mt-2 '> <h1>{item.nombre}</h1></h4>
             <p className='mt-3'>{item.desc}</p>
             <p> <b> Precio:</b> ${item.precio}</p>
             <p> <b> Stock: </b> {item.stock}</p>
             <ItemCount stock= {item.stock} />           
        </div>

     </div>

    </div>
  )
}

export default ItemDetail;