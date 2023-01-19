import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/CartContext';

const BtnOffCanvas = () => {
    const {count, setShow, BsFillCartPlusFill} = useContext(GlobalContext);

        const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" onClick={handleShow} className="me-2">
        <BsFillCartPlusFill />
        {count}
        </Button>
    </div>
  )
}

export default BtnOffCanvas