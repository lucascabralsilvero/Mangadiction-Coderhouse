import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext()



export const useCartContext = () => {
  return useContext(CartContext)
}



const init = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
     setCart([...cart, item]) 
    }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }

    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.counter, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.counter * item.precio, 0)
    }

    const priceProduct = (id) => {
          return (cart.map((item) => item.id === id ? (item.counter * item.precio) : null ))
    }


    const emptyCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No serás capaz de revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(cart))
  }, [cart])
  
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            priceProduct
          }}>
            {children}
        </CartContext.Provider>
    )
}

