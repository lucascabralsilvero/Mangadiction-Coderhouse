import NavBar from "./components/Main/Header/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/Main/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer/>
    </div>
  );
}

export default App;
