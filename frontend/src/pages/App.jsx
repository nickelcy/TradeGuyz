import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Filter from "./Filter";
import axios from "axios";
import { useState, useEffect } from "react";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const [products, setProducts] = useState([]);
  const [ cart, addtoCart ] = useState([])
  

  useEffect(() => {
    axios
      .get(`${serverUrl}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route
        path="/filter/brand/:parameter1"
        element={<Filter location={"/filter/brand"} src={"brandFilter"} />}
      />
      <Route
        path="/filter/category/:parameter1"
        element={<Filter location={"/filter/category"} src={"categoryFilter"} />}
      />
      <Route
        path="/search/:parameter1"
        element={<Filter location={"/search"} src={"search"} />}
      />
      <Route
        // brand category price
        path="/filter/multi/:parameter1/:parameter2/:parameter3"
        element={<Filter location={"/filter/multi"} src={"multiFilter"} />}
      />
    </Routes>
  );
};

export default App;
