import React from "react";
import { Link } from "react-router-dom";

const Category = ({ motosFiltered }) => {
  return (
    <div>
      {motosFiltered.map((moto) => (
        <div className="moto" key={moto.id}>
          <img src={moto.image} alt={moto.name} />
          <h3>{moto.name}</h3>
          <p>{`Precio: $${moto.price}`}</p>
          <Link to={`${moto.name}`}>
            <button>Ver Producto</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
