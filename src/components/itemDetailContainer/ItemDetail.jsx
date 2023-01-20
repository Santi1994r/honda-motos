import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/CartContext";

const ItemDetail = ({moto}) => {
    const { count, setCount, motos, cart, setCart } = useContext(GlobalContext);

    const addToCart = (moto) => {
        setCount(count + 1);
        const chooseMotorBike = motos.find((bike) => bike.id === moto);
        let existInTheCart = cart.find((item) => item.id === chooseMotorBike.id);
        existInTheCart
          ? setCart([...cart, chooseMotorBike.quantity++])
          : setCart([...cart, chooseMotorBike]);
        console.log(cart);
      };

  return (
    <div>
      <div className="moto" key={moto.id}>
        <img src={moto.image} alt={moto.name} />
        <h3>{moto.name}</h3>
        <p>{`Precio: $${moto.price}`}</p>
        <button onClick={() => addToCart(moto.id)}>Agregar al carrito</button>
      </div>
      <Link to={"/"}>
        <button>Volver Atras</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
