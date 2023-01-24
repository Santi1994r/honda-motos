import { async } from '@firebase/util';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { db } from '../../db/firebase-config';
import { GlobalContext } from '../context/CartContext';
import './formCreate.css'

const FormCreate = () => {

  const { setMotos } = useContext(GlobalContext);

    const [inputName, setInputName] = useState("");
    const [inputImage, setInputImage] = useState("");
    const [inputCategory, setInputCategory] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    const [inputQuantity, setInputQuantity] = useState("");
    const [inputInfoGeneral, setInputInfoGeneral] = useState("");
    const [inputInfoExtra, setInputInfoExtra] = useState("");
    const [inputInfoPrestaciones, setInputInfoPrestaciones] = useState("");
 

    const createProduct = async (e) => {
        e.preventDefault();
        const motoItem = {
          name: inputName,
          image: inputImage,
          category: inputCategory,
          price: inputPrice,
          quantity: inputQuantity,
          info:{
            general: inputInfoGeneral,
            infoExtra: inputInfoExtra,
            prestaciones: inputInfoPrestaciones
          }
        };
        const productCollectionRef = collection(db, "productos");
        await addDoc(productCollectionRef, motoItem).then(({ id }) => {
          console.log(`El id del elemento agregado es ${id}`).cath(err => console.log(err));
        });
        const data = await getDocs(productCollectionRef);
        setMotos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setInputName("")
        setInputImage("")
        setInputCategory("")
        setInputPrice("")
        setInputQuantity("")
        setInputInfoGeneral("")
        setInputInfoExtra("")
        setInputInfoPrestaciones("")
    };

  return (
    <form className='containerForm mt-5' onSubmit={createProduct}>
        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='nombre' onChange={(e) => setInputName(e.target.value)} value={inputName} />

        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='imagen' onChange={(e) => setInputImage(e.target.value)} value={inputImage} />

        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='cantidad' onChange={(e) => setInputQuantity(e.target.value)} value={inputQuantity} />

        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='categoria' onChange={(e) => setInputCategory(e.target.value)} value={inputCategory} />

        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='precio' onChange={(e) => setInputPrice(e.target.value)} value={inputPrice} />

        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='informacion general' onChange={(e) => setInputInfoGeneral(e.target.value)} value={inputInfoGeneral} />

        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='informacion extra' onChange={(e) => setInputInfoExtra(e.target.value)} value={inputInfoExtra} />


        {/* <label htmlFor=""></label> */}
        <input className='inputCreate' type="text" placeholder='prestaciones' onChange={(e) => setInputInfoPrestaciones(e.target.value)} value={inputInfoPrestaciones} />
        <Button type='submit' className="mb-5" variant="success">Subir</Button>
    </form>
  )
}

export default FormCreate