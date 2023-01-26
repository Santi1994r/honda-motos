import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/CartContext';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ getProduct }) => {
    const { id } = useParams();
    const { motos } = useContext(GlobalContext);
    const [moto, setMoto] = useState([]);
    /* const getMotosByName = () => {
        const motoObtained = motos.find(moto => moto.name === name);
        setMoto(motoObtained);
    };
 */
    useEffect(() => {
        /* getMotosByName(); */
        console.log(id);
        getProduct(id).then(resp => setMoto(resp))
    }, [id]);

  return (
    <div>
        <ItemDetail moto={moto} />
    </div>
  )
}

export default ItemDetailContainer