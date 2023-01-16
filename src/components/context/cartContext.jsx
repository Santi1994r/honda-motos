import { createContext, useState } from "react";

const GlobalContext = createContext();

const CartContext = (props) => {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);

    


  return (
    <>
        <GlobalContext.Provider value={{count, setCount, cart, setCart}}>
            {props.children}
        </GlobalContext.Provider>
    </>
  )
}

export {CartContext, GlobalContext}