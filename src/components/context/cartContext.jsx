import { createContext, useState } from "react";
import { BsFillCartPlusFill   } from 'react-icons/bs';

const GlobalContext = createContext();

const CartContext = (props) => {
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);

  /* estado del offCanvas */
    const [show, setShow] = useState(false);
    <BsFillCartPlusFill />
  return (
    <>
        <GlobalContext.Provider value={{count, setCount, cart, setCart, show, setShow, BsFillCartPlusFill}}>
            {props.children}
        </GlobalContext.Provider>
    </>
  )
}

export {CartContext, GlobalContext}