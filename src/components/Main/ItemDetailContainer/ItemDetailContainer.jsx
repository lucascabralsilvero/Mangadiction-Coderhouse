import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 
import { pedirDatos } from '../../../helpers/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import styles from "./ItemDetailContainer.module.scss"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const { itemId } = useParams();

    useEffect(() => {
      
      setLoading(true);

      pedirDatos(true) 
    .then((res) =>{
        setItem(res.find((prod) => prod.id === Number(itemId)))
    } )
    .catch(err => console.log(err))
    .finally(() => {
      setLoading(false)
    })
    }, [itemId]);
   


  return (
    <section className={`${styles.bodyHeight}`} >
      {
        loading 
        ? ( <Spinner className={`${styles.spinner}`} animation="border" variant="warning" />)
        : <ItemDetail item={item} />
      }
    </section>
  )
}

export default ItemDetailContainer;