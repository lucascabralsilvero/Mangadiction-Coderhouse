import React from 'react';
import styles from "./ItemListContainer.module.scss"

const ItemListContainer = ( { greeting } ) => {
  return (
    <section className={styles.main}>
        <div>
            <h1>{greeting}</h1>
        </div>
    </section>
  )
}

export default ItemListContainer;