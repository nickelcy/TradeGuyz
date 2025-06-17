// import Category from "./components/home/components/Category";
// import Brands from "./components/home/components/Brands";
import Banner from "./components/home/Banner";
import Navbar from "./components/shared/navbar/Navbar";
import BestSeller from "./components/home/BestSeller";
import { useParams } from "react-router-dom";
import Footer from "./components/shared/components/Footer";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PositionContext } from "./App";
import "./components/home/sections.css";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const Home = ({ products, addToCart, setProducts }) => {
  const store = useParams();
  const { setBasePosition } = useContext(PositionContext);
  
  useEffect(() => {
    setBasePosition(store.code);
    addToCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    axios
    .get(`${serverUrl}/${store.code? store.code: "ea"}`)
    .then((response) => {
      setProducts(response.data)
      console.log(store.code)
      })
      .catch((error) => console.log(error));
  }, []);

  // Note category and brands will be rendered dynamically when store is chosen future update
  // Add functionality of best seller for now render all products

  return (
    <div className="position-relative " 
    // style={{ paddingBottom: "7rem" }}
    >
      <Navbar />
      {/* <Banner /> */}
      {/* <Category />  */}
      <BestSeller productsProp={products} addToCart={addToCart} />
      {/* <Brands /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
