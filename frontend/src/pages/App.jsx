import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyCart from "./MyCart";
import axios from "axios";
import { useState, useEffect } from "react";
import Payment from "./Payment";
import FilterRoutes from "./components/routes/FilterRoutes";
import Admin from "./Admin";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, addToCart] = useState([]);
  const [chosenProduct, setChosenProduct] = useState(false);

  // console.log(cart);
  // localStorage.removeItem('cart')

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    addToCart(storedCart);
    axios
      .get(`${serverUrl}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home products={products} addToCart={addToCart} cart={cart} />}
      />

      {FilterRoutes({ addToCart, cart, chosenProduct, setChosenProduct })}

      <Route
        // brand category price
        path="/cart"
        element={<MyCart cart={cart} addToCart={addToCart} />}
      />
      <Route
        // brand category price
        path="/payment"
        element={<Payment cart={cart} addToCart={addToCart} />}
      />
      <Route path="/admin" element={<Admin />}>
      
      </Route>
    </Routes>
  );
};

export default App;
