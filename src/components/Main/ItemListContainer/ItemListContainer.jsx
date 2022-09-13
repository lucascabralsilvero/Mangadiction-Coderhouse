import React, { useState, useEffect } from 'react';
import styles from "./ItemListContainer.module.scss"
import { pedirDatos } from "../../../helpers/pedirDatos"
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom"; 





const ItemListContainer = () => {
  
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

    pedirDatos(true)
      .then( (res) => {
        if(!categoryId){
          setProductos(res)
        } else{
          setProductos(res.filter((prod) => prod.categoria === categoryId))
        }
      })
      .catch((err) =>{
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
    })
    }, [categoryId]);


   


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