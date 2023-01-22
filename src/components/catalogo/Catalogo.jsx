import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/CartContext";
import "./catalogo.css";

const Catalogo = ({ getProduct }) => {
  const { motos } = useContext(GlobalContext);

  

  return (
    <div className="containerMotos">
      {motos.map((moto) => (
        <div className="moto" key={moto.id}>
          <img src={moto.image} alt={moto.name} />
          <h3>{moto.name}</h3>
          <Link to={`${moto.name}`}>
            <button onClick={() => getProduct(moto.id)}>Ver Producto</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Catalogo;
