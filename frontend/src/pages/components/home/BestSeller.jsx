import { useEffect, useState, useContext } from "react";
import ProductCardsMap from "../shared/product/ProductCardsMap";
import ProductPopUp from "../shared/product/ProductPopUp";
import { SelectedProductContext } from "../../App";
import { LuLoaderCircle } from "react-icons/lu";

const BestSeller = ({ productsProp, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClick] = useState(false);
  const {chosenProduct, setChosenProduct} = useContext(SelectedProductContext);

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
        <h2 className="mt-5 mb-0 mb-md-2 text-center">BEST SELLERS</h2>
        <br />
        <h4 className="text-muted">Nothing here... T-T</h4>
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
      <div className="container mt-5">
        <h2 className="mb-0 mb-md-2 text-center">Best Selling Products</h2>
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
