import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from "./ItemCount.module.scss";


const ItemCount = ({ stock }) => {

    let [counter, setCounter] = useState(1); 

    let handlerAddition = () =>{
      if(counter < stock){
        setCounter(counter + 1); 
      }
    }; 

    let handlerSubstraction = () => {
        if(counter > 1){
            setCounter(counter - 1); 
        };
    };

  return (
      <div className={` ${styles.count} d-flex  flex-column  ` }>
        <div className='mb-3'>
          <Button  onClick={handlerSubstraction} variant="secondary">-</Button>
            <span className='mx-3'>
                {counter}
            </span>
          <Button onClick = {handlerAddition} variant="secondary">+</Button>
        </div>
        <div className='mb-3' >
            <Button variant='primary'>Agregar al carrito</Button>
        </div>
      </div>
  )
}

export default ItemCount;