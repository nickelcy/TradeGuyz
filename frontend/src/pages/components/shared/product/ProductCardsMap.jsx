import ProductCard from "./components/ProductCard";

const ProductCardsMap = ({ productsArr, onProductClick, addToCart }) => {
  return (
    <div className="row g-5 text-center bestSellerCon">
      {productsArr.map((product, index) => (
        <div className="col-12 col-md-6 col-lg-4" key={index}>
          {/* {console.log(product)} */}
          <ProductCard
            name={product.product_name}
            img={product.media}
            price={product.price}
            thisProduct={product}
            onProductClick={onProductClick}
            addToCart={addToCart}
          />
        </div>
      ))}
    </div>
  );
};
export default ProductCardsMap;
