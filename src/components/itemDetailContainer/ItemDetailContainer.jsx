import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/CartContext';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const {name} = useParams();
    const { motos } = useContext(GlobalContext);
    const [moto, setMoto] = useState({});
    const getMotosByName = () => {
        const motoObtained = motos.find(moto => moto.name === name);
        return motoObtained;
    };

    useEffect(() => {
        setMoto(getMotosByName);
    }, [name])
    console.log(moto);
  return (
    <div>
        <ItemDetail moto={moto} />
    </div>
  )
}

export default ItemDetailContainer