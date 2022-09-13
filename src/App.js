import { CartProvider } from "./Context/CartContext"; 
import { LoginProvider} from "./Context/LoginContext";
import AppRouter from "./router/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  
  return (
  <LoginProvider>
    <CartProvider>

      <AppRouter/>

    </CartProvider>
  </LoginProvider>
  );
}

export default App;
