import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCardsMap from "./components/ProductCardsMap";
const server = import.meta.env.VITE_SERVER_URL;

const Filter = ({ location, filterType }) => {
  const { parameter } = useParams();
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(() => {
    axios
      .get(`${server}${location}/${filterType}/${parameter}`)
      .then((res) => {
        setProducts(res.data);
        if ((Array.isArray(res.data) && res.data.length != 0)) {
          console.log(res);
          setResult(true);
        }
      })
      .catch((error) => console.log(error));
  }, [parameter]);

  if (result) {
    return (
      <>
        <Navbar />
        <div className="container text-start mt-3 ">
          <h1>
            Showing {products.length} Results for {parameter}:
          </h1>
          <ProductCardsMap productsArr={products} />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container text-center mt-3">
        <h1 className="">No Results for {parameter}</h1>
      </div>
    </>
  );
};
export default Filter;
