import React, { useContext, useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { GlobalContext } from '../context/CartContext';
import BtnOffCanvas from './BtnOffCanvas';

const OffCanvas = () => {
    const {show, setShow} = useContext(GlobalContext); 
    
    const handleClose = () => setShow(false);
  return (
    <div>
        <BtnOffCanvas />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        {/* aca van los productos comprados */}

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default OffCanvas