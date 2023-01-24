import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/CartContext";
import "./catalogo.css";

const Catalogo = ({ getProduct, updateProduct, deleteProduct }) => {
  const { motos } = useContext(GlobalContext);

  return (
    <>
      <div className="containerMotos">
        {motos.map((moto) => (
          <div className="moto" key={moto.id}>
            <img src={moto.image} alt={moto.name} />
            <h3>{moto.name}</h3>
            <h6>{moto.price}</h6>

            <Link to={`${moto.name}`}>
              <button onClick={() => getProduct(moto.id)}>Ver</button>
            </Link>
            <Button onClick={() => deleteProduct(moto.id)} className="mx-2" variant="danger">Eliminar</Button>
            <Button onClick={() => updateProduct(moto.id)} className="mx-2" variant="warning">Actualizar</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catalogo;
