import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import styles from "./Checkout.module.scss"; 
import { addDoc, collection, doc, getDocs, writeBatch, query, where, documentId } from "firebase/firestore"; 
import { db } from '../../firebase/firebaseConfig';
import ItemDetail from '../Main/ItemDetail/ItemDetail';



const Checkout = () => {



    const { cart, cartTotal, checkout } = useCartContext();
    
    const [values, setValues] = useState({
        nombre:"",
        email:"",
        direccion:""
    });


    const handleInputChange = (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
    }

    const handleSubmit = async (e) => {
            e.preventDefault(); 

            const orden = {
                comprador : values,
                items: cart,
                total: cartTotal()
            }
            console.log(orden);

            if(values.nombre.length < 3){
                alert("Nombre Incorrecto");
                return
            }

            
            if(values.email.length < 3){
                alert("Email Incorrecto");
                return
            }

            if(values.direccion.length < 3){
                alert("Email Incorrecto");
                return
            }


      
 
            /*Hago un Batch de la db  */
       
        const batch = writeBatch(db);
        const ordenesRef = collection( db, "ordenes");
        const productosRef = collection(db, "productos"); 

        /* Query de búsqueda */

        const q = query(productosRef, where(documentId(),"in", cart.map(item => item.id))); 


         const productos = await getDocs(q); 


         const outOfStock = [];

      productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            console.log(doc.data().stock)
            console.log(itemInCart)

            if(doc.data().stock >= itemInCart.counter){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.counter
                })
            } else {
                outOfStock.push(itemInCart);
            }
      })

      if(outOfStock.length === 0){
        batch.commit()
            .then(() => {
            addDoc(ordenesRef, orden)
            .then( (doc) => {
                checkout(doc.id)
            }) 

            })
      } else {
        alert("Hay items sin stock")
        console.log(outOfStock);
      }   
    }


    if(cart.length === 0){
        return <Navigate to="/" />
    }


  return (
    <div className={`${styles.checkoutView}  text-center container my-5`}>
        <h2>Checkout</h2>
        <hr />
        <form className='d-flex justify-content-center align-items-center flex-column' >
            <input 
                name='nombre'
                value={values.nombre}
                onChange={handleInputChange}
                type={"text"} 
                className="form-control my-2" 
                placeholder='Nombre..'
            />
            <input 
                name='email'
                value={values.email}     
                onChange={handleInputChange}   
                type={"email"}
                className="form-control my-2"
                placeholder='Email'
            />
            <input 
                name='direccion'
                value={values.direccion}
                onChange={handleInputChange}
                type={"text"} 
                className="form-control my-2" 
                placeholder='Dirección'
            />
            <button onClick={handleSubmit} className='btn btn-primary' type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Checkout;