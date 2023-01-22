import { createContext, useState } from "react";
import { BsFillCartPlusFill   } from 'react-icons/bs';

const GlobalContext = createContext();

const CartContext = ({ children }) => {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [motos, setMotos] = useState([]);

  /* offCanvas */
    const [show, setShow] = useState(false);
    <BsFillCartPlusFill />
  return (
    <>
        <GlobalContext.Provider value={{count, setCount, cart, setCart, show, setShow, BsFillCartPlusFill, motos, setMotos}}>
            {children}
        </GlobalContext.Provider>
    </>
  )
}

export {CartContext, GlobalContext}