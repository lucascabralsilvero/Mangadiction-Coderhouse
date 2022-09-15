import React, { useState, useEffect } from 'react';
import styles from "./ItemListContainer.module.scss"
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom"; 
import { collection, getDocs, query, where  } from "firebase/firestore";
import { db} from "../../../firebase/firebaseConfig";





const ItemListContainer = () => {
  
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

    //1- Armar la referencia (sync)
    const productosRef = collection(db, "productos"); 
    const q = categoryId ?  query(productosRef, where("categoria", "==", categoryId)) : productosRef; 
    //2- Consumir la referencia (asynch)
    getDocs(q)
    .then((resp) => {
      const productos = resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}));
      setProductos(productos)
    })

    .finally(() =>{
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