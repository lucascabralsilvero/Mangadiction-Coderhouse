import NavBar from "./components/Header/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/main/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer
      greeting= "Saludos! Soy el alumno Lucas Cabral . "/>
    </div>
  );
}

export default App;
