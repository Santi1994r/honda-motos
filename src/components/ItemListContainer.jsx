import React, { useContext, useEffect /* useState  */ } from "react";
import { Routes, Route } from "react-router-dom";
import Catalogo from "./catalogo/Catalogo";
import Home from "./home/Home";
import NavbarHonda from "./navbar/NavbarHonda";
import axios from "axios";
import Footer from "./footer/Footer";
import { GlobalContext } from "./context/CartContext";
import ItemDetailContainer from "./itemDetailContainer/ItemDetailContainer";
import Category from "./category/Category";
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../db/firebase-config";
import FormCreate from "./form/FormCreate";

const ItemListContainer = () => {
  const { setMotos, motos } = useContext(GlobalContext);
  /* const [item, setItem] = useState({}); */

  const motosEnduro = motos.filter((moto) => moto.category === "enduro");
  const motosNaked = motos.filter((moto) => moto.category === "naked");

  /*     axios.get("./assets/json/data.json")
        .then(resp => setMotos(resp.data))
        .catch(err => console.log(err));
     */
  const productCollectionRef = collection(db, "productos");

  const getProducts = async () => {
    const data = await getDocs(productCollectionRef);
    setMotos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getProduct = async (id) => {
    const docRef = doc(db, "productos", id);
    console.log(docRef);
    const docSnap = await getDoc(docRef);
    docSnap.exists()
      ? docSnap.data()
      : console.log("No se Encontraron los documentos");
  };

  
  const deleteProduct = async (id) => {
    const docRef = doc(db, "productos", id);
    await deleteDoc(docRef);
    const data = await getDocs(productCollectionRef);
    setMotos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  const updateProduct = async (id) => {
    const docRef = doc(db, "productos", id);
    await updateDoc(docRef, {price: 200000});
    const data = await getDocs(productCollectionRef);
    setMotos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavbarHonda />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo getProduct={getProduct} deleteProduct={deleteProduct} updateProduct={updateProduct} />}
        />
        <Route path="/catalogo/:name" element={<ItemDetailContainer />} />
        <Route path="/categoria/enduro" element={<Category motosFiltered={motosEnduro} />} />
        <Route path="/categoria/naked" element={<Category motosFiltered={motosNaked} />} />
        <Route path="/categoria/naked/:name" element={<ItemDetailContainer />} />
        <Route path="/categoria/enduro/:name" element={<ItemDetailContainer />} />
        <Route path="/crear" element={<FormCreate />} />

      </Routes>
      <Footer />
    </>
  );
};

export default ItemListContainer;
