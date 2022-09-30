import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import styles from "./ItemDetailContainer.module.scss";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const { itemId } = useParams();

  

    useEffect(() => {
      
      setLoading(true);

      const docRef = doc(db, "productos", itemId);
      getDoc(docRef)
      .then((doc) => {
       setItem({id: doc.id, ...doc.data()});
      }) 
      .finally(()=>{
        setLoading(false);
      })

    }, [itemId, setLoading]);
   


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