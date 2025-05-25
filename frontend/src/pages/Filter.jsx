import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GroupedFilters from "./components/GroupedFilters";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCardsMap from "./components/ProductCardsMap";
import ProductPopUp from "./components/ProductPopUp";
const server = import.meta.env.VITE_SERVER_URL;

const Filter = ({
  location,
  src,
  addToCart,
  cart,
  chosenProduct,
  setChosenProduct,
}) => {
  const { parameter1, parameter2, parameter3 } = useParams();
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState(false);
  const [clicked, setClick] = useState(false);

  useEffect(() => {
    if (src == "multiFilter") {
      axios
        .get(
          `${server}${location}${parameter1 ? `/${parameter1}` : "/none"}${
            parameter2 ? `/${parameter2}` : "/none"
          }${parameter3 ? `/${parameter3}` : "/none"}`
        )
        .then((res) => {
          setProducts(res.data);
          if (Array.isArray(res.data) && res.data.length !== 0) {
            setResult(true);
          }
        })
        .catch((error) => console.log(error));
    } else if (
      src == "search" ||
      src == "brandFilter" ||
      src == "categoryFilter"
    ) {
      axios
        .get(
          `${server}${location}${parameter1 ? `/${parameter1}` : ""}${
            parameter2 ? `/${parameter2}` : ""
          }${parameter3 ? `/${parameter3}` : ""}`
        )
        .then((res) => {
          setProducts(res.data);
          if (Array.isArray(res.data) && res.data.length !== 0) {
            setResult(true);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [parameter1, parameter2, parameter3]);

  if (result) {
    return (
      <div
        className="position-relative h-100"
        style={{ paddingBottom: "7rem", minHeight: "100vh" }}
      >
        <ProductPopUp
          clicked={clicked}
          setClick={setClick}
          chosenProduct={chosenProduct}
        />
        <Navbar cart={cart} />
        <ProductPopUp
          clicked={clicked}
          setClick={setClick}
          chosenProduct={chosenProduct}
        />
        <GroupedFilters />
        <div className="container text-start mt-3 ">
          <h1>
            Showing {products.length} Results
            {src == "multiFilter" ? "" : ` for ${parameter1}`}:
          </h1>
          <ProductCardsMap
            productsArr={products}
            setClick={setClick}
            setChosenProduct={setChosenProduct}
            addToCart={addToCart}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className="position-relative "
      style={{ paddingBottom: "7rem", minHeight: "100vh" }}
    >
      <Navbar cart={cart} />
      <GroupedFilters />
      <div className="container text-center mt-3">
        <h1 className="">
          No Results{src == "multiFilter" ? "" : ` for ${parameter1}`}
        </h1>
      </div>
      <Footer />
    </div>
  );
};
export default Filter;
