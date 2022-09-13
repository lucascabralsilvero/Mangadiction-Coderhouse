import NavBar from "./components/Main/Header/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/Main/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Main/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./Context/CartContext" 




function App() {

  
  return (

      <CartProvider>
  
      <BrowserRouter>

          <NavBar/>

        <Routes>
             <Route path="/" element={<ItemListContainer />}/> 
            <Route path="/categorias/:categoryId" element={<ItemListContainer />} /> 
            <Route path="/item/:itemId" element= {<ItemDetailContainer />}/>
            <Route path="*" element={<Navigate to="/" />} />  
            <Route path="/cart" element={ <Cart />} />  
        </Routes>

        <Footer />
      </BrowserRouter>

</CartProvider>
  );
}

export default App;
