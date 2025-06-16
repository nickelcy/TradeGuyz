import { handleAddToCart, formatPrice } from "../../utils/helpers";

const ProductCard = (props) => {
  const { name, img, price, thisProduct, onProductClick, addToCart } = props;

  const handleClick = () => {
    handleAddToCart(thisProduct, addToCart, 1);
  };


  return (
    <>
      <div className="container text-bg-dark py-3 px-4 pop" style={{maxWidth: "300px"}}>
        <div
          className="d-flex flex-column justify-content-start align-items-start"
          onClick={() => onProductClick(thisProduct)}
        >
          <img src={img[0]} alt={name} className="productImage pt-2" style={{maxHeight: "250px"}}/>
          <h5 className="ps-2 mt-2 text-start m-0">{name}</h5>
          <p className="ps-2 mt-1 text-start">
            Price:&nbsp;{formatPrice(price)}
          </p>
        </div>

        <button
          className="btn btn-success mt-2 mb-2 w-100 "
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};
export default ProductCard;
