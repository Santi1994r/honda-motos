import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Catalogo from './catalogo/Catalogo'
import Home from './home/Home'
import NavbarHonda from './navbar/NavbarHonda'
import axios from 'axios';
import Footer from './footer/Footer'
import { GlobalContext } from './context/CartContext'
import ItemDetailContainer from './itemDetailContainer/ItemDetailContainer'
import Category from './category/Category'

const ItemListContainer = () => {
  const {setMotos, motos} = useContext(GlobalContext);
    
    const motosEnduro = motos.filter(moto => moto.category === "enduro");
    const motosNaked = motos.filter(moto => moto.category === "naked");

 

    axios.get("./assets/json/data.json")
        .then(resp => setMotos(resp.data))
        .catch(err => console.log(err));
    
        
  return (
    <>
        <NavbarHonda />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/catalogo' element={ <Catalogo /> } />
            <Route path='/catalogo/:name' element={ <ItemDetailContainer/> } />
            <Route path='/categoria/enduro' element={ <Category motosFiltered={motosEnduro} /> } />
            <Route path='/categoria/naked' element={ <Category motosFiltered={motosNaked} /> } />

            <Route path='/categoria/naked/:name' element={ <ItemDetailContainer /> } />
            <Route path='/categoria/enduro/:name' element={ <ItemDetailContainer /> } />
        </Routes>
        <Footer />
    </>
  )
}

export default ItemListContainer