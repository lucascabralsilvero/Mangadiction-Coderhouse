
import styles from "./ItemListContainer.module.scss"
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import useProducts from "../../hooks/useProducts";






const ItemListContainer = () => {
  
  const { productos, loading } = useProducts();

 

  return (
    <section className={`${styles.main} text-center `}>
      {
        loading ? ( <Spinner animation="border" variant="warning" />) 
        : 
        <div> <ItemList productos={productos}/> </div>
      }
    </section>
  )
}

export default ItemListContainer;