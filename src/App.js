import { CartContext } from "./components/context/cartContext";
import ItemListContainer from "./components/ItemListContainer";




function App() {
  return (
    <div>
      <CartContext>
        <ItemListContainer />
      </CartContext>  
    </div>
  );
}

export default App;
