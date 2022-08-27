import React, { useState, useEffect } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import styles from "./ItemListContainer.module.scss"
import { pedirDatos } from "../../../helpers/pedirDatos"
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
    pedirDatos(true)
      .then( (res) => {
        setProductos(res)
      })
      .catch((err) =>{
        console.log(err);
      })
    }, []);


  return (
    <section className={`${styles.main}`}>
        <div>
            {/* <ItemCount stock = "5" initial = "1"/>{} */}
            <ItemList productos={productos}/>
        </div>
    </section>
  )
}

export default ItemListContainer;