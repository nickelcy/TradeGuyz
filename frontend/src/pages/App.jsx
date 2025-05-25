import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Filter from "./Filter";
import MyCart from "./MyCart";
import axios from "axios";
import { useState, useEffect } from "react";

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
      <Route
        path="/filter/brand/:parameter1"
        element={
          <Filter
            location={"/filter/brand"}
            src={"brandFilter"}
            addToCart={addToCart}
            cart={cart}
            chosenProduct={chosenProduct}
            setChosenProduct={setChosenProduct}
          />
        }
      />
      <Route
        path="/filter/category/:parameter1"
        element={
          <Filter
            location={"/filter/category"}
            src={"categoryFilter"}
            addToCart={addToCart}
            cart={cart}
            chosenProduct={chosenProduct}
            setChosenProduct={setChosenProduct}
          />
        }
      />
      <Route
        path="/search/:parameter1"
        element={
          <Filter
            location={"/search"}
            src={"search"}
            addToCart={addToCart}
            cart={cart}
            chosenProduct={chosenProduct}
            setChosenProduct={setChosenProduct}
          />
        }
      />
      <Route
        // brand category price
        path="/filter/multi/:parameter1/:parameter2/:parameter3"
        element={
          <Filter
            location={"/filter/multi"}
            src={"multiFilter"}
            addToCart={addToCart}
            cart={cart}
            chosenProduct={chosenProduct}
            setChosenProduct={setChosenProduct}
          />
        }
      />
      <Route
        // brand category price
        path="/MyCart"
        element={<MyCart cart={cart} addToCart={addToCart} />}
      />
    </Routes>
  );
};

export default App;
