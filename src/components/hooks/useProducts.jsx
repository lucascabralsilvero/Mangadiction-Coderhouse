import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";

const useProducts = () => {
  const { categoryId } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    //1- Armar la referencia (sync)
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;
    //2- Consumir la referencia (asynch)
    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productos);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return {
    productos,
    loading,
  };
};

export default useProducts;
