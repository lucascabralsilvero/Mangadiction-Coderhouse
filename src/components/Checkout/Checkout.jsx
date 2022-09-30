import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import {
  addDoc,
  collection,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Swal from "sweetalert2";
import CheckoutView from "./CheckoutView";




const Checkout = () => {

  const { cart, cartTotal, checkout } = useCartContext();

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });


  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();
    
    const orden = {
      comprador: values,
      items: cart,
      total: cartTotal(),
    };

   if(values.nombre.length < 3  || values.direccion.length < 3){
   return Swal.fire("Ingrese más de 2 caracteres en el campo")
   }

   

    /*Hago un Batch de la db  */

    const batch = writeBatch(db);
    const ordenesRef = collection(db, "ordenes");
    const productosRef = collection(db, "productos");

    /* Query de búsqueda */

    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const productos = await getDocs(q);

    const outOfStock = [];

    productos.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.counter) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.counter,
        });
      } else {
        outOfStock.push(itemInCart);
      }
    });

    if (outOfStock.length === 0) {
      batch.commit().then(() => {
        addDoc(ordenesRef, orden).then((doc) => {
          checkout(doc.id);
        });
      });
    } else {
      Swal.fire({
        text: `Hay items sin stock: ${outOfStock.map((item) => item.nombre)}`,
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#d33",
        confirmButtonText: "OK!",
      });
    }
  };

    

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (<>
        <CheckoutView  
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            values={values}
         /> 
    </>
  );
};

export default Checkout;
