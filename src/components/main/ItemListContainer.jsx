import React from 'react';
import ItemCount from './ItemCount';
import styles from "./ItemListContainer.module.scss"

const ItemListContainer = ( { greeting } ) => {
  return (
    <section className={styles.main}>
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock = "5" initial = "1"/>
        </div>
    </section>
  )
}

export default ItemListContainer;