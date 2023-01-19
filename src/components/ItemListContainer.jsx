import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Catalogo from './catalogo/Catalogo'
import Home from './home/Home'
import NavbarHonda from './navbar/NavbarHonda'
import axios from 'axios';
import Footer from './footer/Footer'
import { GlobalContext } from './context/CartContext'

const ItemListContainer = () => {

    const {setMotos} = useContext(GlobalContext);

    axios.get("./assets/json/data.json")
        .then(resp => setMotos(resp.data))
        .catch(err => console.log(err));

  return (
    <>
        <NavbarHonda />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/catalogo' element={ <Catalogo /> } />
        </Routes>
        <Footer />
    </>
  )
}

export default ItemListContainer