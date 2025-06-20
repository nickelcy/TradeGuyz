import { useEffect, useState, useContext } from "react";
import ProductCardsMap from "../shared/product/ProductCardsMap";
import ProductPopUp from "../shared/product/ProductPopUp";
import { SelectedProductContext } from "../../App";
import { LuLoaderCircle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const BestSeller = ({ productsProp, addToCart, store }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClick] = useState(false);
  const { chosenProduct, setChosenProduct } = useContext(
    SelectedProductContext
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(productsProp) && productsProp.length > 0) {
      // setProducts(productsProp.slice(0, 15)); // Reminder: query the data base to to order by purchase number
      setProducts(productsProp);
      setLoading(false);
    }
  }, [productsProp]);

  const handleProductClick = (product) => {
    setChosenProduct(product);
    setClick(true);
  };

  if (loading) {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h4 className="text-muted mt-5">Nothing here... T-T</h4>
        {/* <LuLoaderCircle size={50} className="mb-5 mt-5 loader" /> */}
      </div>
    );
  }

  return (
    <>
      <ProductPopUp
        clicked={clicked}
        setClick={setClick}
        chosenProduct={chosenProduct}
        addToCart={addToCart}
      />
      <div className="container mt-3">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
      <div className="container mt-4 mb-5" style={{ maxWidth: "1000px" }}>
        <h2 className="mb-0 mb-md-2 text-center fs-3">Best Sellers {store == "ea"? "Electronics": "Spares"}</h2>
        <ProductCardsMap
          productsArr={products}
          onProductClick={handleProductClick}
          addToCart={addToCart}
        />
      </div>
    </>
  );
};

export default BestSeller;
