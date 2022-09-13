import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Main/Footer/Footer";
import NavBar from "../components/Main/Header/NavBar";
import ItemDetailContainer from "../components/Main/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/Main/ItemListContainer/ItemListContainer";

const PrivateRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default PrivateRoutes;
