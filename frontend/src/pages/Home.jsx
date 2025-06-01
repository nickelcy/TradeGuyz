import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Category from "./components/sections/Category";
import BestSeller from "./components/sections/BestSeller";
import "./components/components.css";
import Brands from "./components/sections/Brands";
import "./components/sections/sections.css";
import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const Home = ({ products, addToCart, cart, setProducts }) => {
  const store = useParams();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    addToCart(storedCart);
    axios
      .get(`${serverUrl}/${store.code}`,{
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Developer Code
  if (Array.isArray(products) && products.length == 0) {
    console.log("No products received from backend yet...");
  } else {
    console.log("Store Products: ", products);
  }

  return (
    <div className="position-relative " style={{ paddingBottom: "7rem" }}>
      <Navbar cart={cart} />
      <Banner />
      <Category />
      <BestSeller productsProp={products} addToCart={addToCart} />
      <Brands />
      <Footer />
    </div>
  );
};
export default Home;
