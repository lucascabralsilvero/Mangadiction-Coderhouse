import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from "./ItemCount.module.scss";


const ItemCount = ({ stock, onAdd }) => {

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
      <div className={` ${styles.count} d-flex mb-2 align-items-center  flex-column justify-content-center` }>
        <div >
          <Button onClick={handlerSubstraction} variant="primary">-</Button>
            <span className='mx-3'>
                {counter}
            </span>
          <Button onClick = {handlerAddition} variant="primary">+</Button>
        </div>
        <div className='mt-3'>
            <Button variant='secondary'>Agregar al carrito</Button>
        </div>
      </div>
  )
}

export default ItemCount;