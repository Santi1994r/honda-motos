import React, { useContext } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { GlobalContext } from "../context/CartContext";
import BtnOffCanvas from "./BtnOffCanvas";

const OffCanvas = () => {
  const { show, setShow, cart } = useContext(GlobalContext);
  const handleClose = () => setShow(false);

 /*  const deleteBike = (id) => {
    const existInTheCart = cart.find(el => el.id === id);
  }; */

  return (
    <div>
      <BtnOffCanvas />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((el) => (
            <div className="moto" key={el.id}>
              <img src={el.image} alt={el.name} />
              <h3>{el.name}</h3>
              <p>{`Precio: $${el.price}`}</p>
              <p>{`Cantidad: ${el.quantity}`}</p>
              <button /* onClick={() => deleteBike(el.id)} */>
                Eliminar
              </button>
            </div>
            
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffCanvas;
