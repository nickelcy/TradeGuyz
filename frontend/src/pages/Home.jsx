import Banner from "./components/homepage/Banner";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/sections/Category";
import BestSeller from "./components/sections/BestSeller";
import "./components/components.css";
import Brands from "./components/sections/Brands";
import "./components/sections/sections.css";
import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PositionContext } from "./App";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const Home = ({ products, addToCart, cart, setProducts }) => {
  const store = useParams();
  const { basePosition, setBasePosition } = useContext(PositionContext);

  useEffect(() => {
    setBasePosition(store.code)
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    addToCart(storedCart);
    axios
      .get(`${serverUrl}/${store.code}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="position-relative " style={{ paddingBottom: "7rem" }}>
      <Navbar />
      <Banner />
      <Category />
      <BestSeller productsProp={products} addToCart={addToCart} />
      <Brands />
      <Footer />
    </div>
  );
};
export default Home;
