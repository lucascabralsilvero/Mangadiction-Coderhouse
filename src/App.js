import NavBar from "./components/Main/Header/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/Main/ItemDetailContainer/ItemDetailContainer";



function App() {

  
  return (
      <BrowserRouter>

          <NavBar/>

        <Routes>
             <Route path="/" element={<ItemListContainer />}/> 
            <Route path="/categorias/:categoryId" element={<ItemListContainer />} /> 
            <Route path="/item/:itemId" element= {<ItemDetailContainer />}/>
            <Route path="*" element={<Navigate to="/" />} />  
        </Routes>


      </BrowserRouter>
  );
}

export default App;
