import ProductCard from "./ProductCard";
import {useState, useEffect} from "react"

const ProductCardsMap = ({ productsArr, setClick, setChosenProduct }) => {

  return (
    <div className="row g-5 text-center bestSellerCon">
      {productsArr.map((product, index) => (
        <div className="col-12 col-md-6 col-lg-4" key={index}>
          <ProductCard
            name={product.product_name}
            img={product.imgUrl}
            price={product.price}
            setClick={setClick}
            setChosenProduct={setChosenProduct}
            thisProduct={product}
          />
        </div>
      ))}
    </div>
  );
};
export default ProductCardsMap;