import React, { useState, useEffect } from 'react';
import styles from "./ItemListContainer.module.scss"
import { pedirDatos } from "../../../helpers/pedirDatos"
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';



const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    pedirDatos(true)
      .then( (res) => {
        setProductos(res);
        setLoading(false); 
      })
      .catch((err) =>{
        console.log(err);
      })
    }, []);


  return (
    <section className={`${styles.main} text-center `}>
      {
        loading ? ( <Spinner animation="border" variant="warning" />) 
        : 
        <div> <ItemList productos={productos}/> </div>
      }
    </section>
  )
}

export default ItemListContainer;