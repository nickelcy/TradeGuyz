import ProductCard from "../components/ProductCard";
import { FiLoader } from "react-icons/fi";
import { useEffect, useState } from "react";
import ProductCardsMap from "../components/ProductCardsMap";

const BestSeller = ({ productsProp }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(productsProp) && productsProp.length > 0) {
      setProducts(productsProp.slice(0, 12));
      setLoading(false);
    }
  }, [productsProp]);

  if (loading) {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h2 className="mt-5 mb-0 mb-md-2 text-center">BEST SELLERS</h2>
        <h5 className="text-dark text-center mt-5 mb-0">Loading</h5>
        <FiLoader size={50} className="mb-5 mt-0 loader" />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-0 mb-md-2 text-center">BEST SELLERS</h2>
      <ProductCardsMap productsArr={products} />
    </div>
  );
};

export default BestSeller;
