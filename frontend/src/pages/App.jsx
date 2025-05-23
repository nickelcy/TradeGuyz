import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Filter from "./Filter";
import axios from "axios";
import { useState, useEffect } from "react";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const [products, setProducts] = useState([]);

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
        path="/filter/category/:parameter"
        element={<Filter filterType={"category"} />}
      />
      <Route
        path="/filter/brand/:parameter"
        element={<Filter filterType={"brand"} />}
      />
    </Routes>
  );
};

export default App;
