import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/CartContext";
import './itemDetail.css'

const ItemDetail = ({moto}) => {
    const { count, setCount, motos, cart, setCart } = useContext(GlobalContext);

    const addToCart = (id) => {
        setCount(count + 1);
        const chooseMotorBike = motos.find((bike) => bike.id === id);
        let existInTheCart = cart.find((item) => item.id === chooseMotorBike.id);
        existInTheCart
          ? setCart([...cart, chooseMotorBike.quantity++])
          : setCart([...cart, chooseMotorBike]);
        console.log(cart);
      };

  return (
    <div className="containerDetail">
      <div className="motoDetail" key={moto.id}>
        <img src={moto.image} alt={moto.name} />
        <h3>{moto.name}</h3>
        <p>{`Precio: $${moto.price}`}</p> 
        <p>{`Descripción General: ${moto.info.general}`}</p>
        <p>{`Información Extra: ${moto.info.infoExtra}`}</p> 
        <p>{`Prestaciones: ${moto.info.prestaciones}`}</p> 
        <button className="btnAddProduct" onClick={() => addToCart(moto.id)}>Agregar al carrito</button>
      </div>
      <Link to={"/"}>
        <button className="btnBackToMenu">Volver Al Menu</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
