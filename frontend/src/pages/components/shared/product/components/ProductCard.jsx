import { handleAddToCart, formatPrice } from "../../utils/helpers";

const ProductCard = (props) => {
  const {
    name,
    img,
    price,
    setClick,
    thisProduct,
    setChosenProduct,
    addToCart,
  } = props;

  const handleClick = () => {
    handleAddToCart(thisProduct, addToCart, 1);
  };

  return (
    <>
      <div className="container text-bg-dark py-3 px-4 pop">
        <div
          className="d-flex flex-column justify-content-start align-items-start"
          onClick={() => {
            setClick((prev) => {
              if (prev == false) {
                setChosenProduct(thisProduct);
              } else setChosenProduct([]);
              return !prev;
            });
          }}
        >
          <img src={img[0]} alt={name} className="productImage pt-2" />
          <h4 className="ps-2 mt-3 text-start m-0">{name}</h4>
          <h5 className="ps-2 mt-3 text-start mb-4">
            Price:&nbsp;{formatPrice(price)}
          </h5>
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
