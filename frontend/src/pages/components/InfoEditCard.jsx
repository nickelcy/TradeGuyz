import { handleAddToCart, formatPrice } from "./helpers.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IncrementBtn from "./IncrementBtn.jsx";

const InfoEditCard = ({
  chosenProduct,
  newBtnTxt,
  btnStyle,
  addToCart,
  src,
}) => {
  const [quantity, setQuantity] = useState(chosenProduct.quantity || 1);
  const navigate = useNavigate();

  const handleBtnATC = (navigateToCart) => {
    if (navigateToCart) {
      handleAddToCart(chosenProduct, addToCart, quantity);
      setQuantity(1);
      navigate("/cart");
    } else {
      handleAddToCart(chosenProduct, addToCart, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="row">
      {/* name */}
      <h2>{chosenProduct.product_name}</h2>
      {/* Row price increment */}
      <div className="container-fluid d-flex justify-content-between align-items-center ">
        <h3 className="text-warning m-0">{formatPrice(chosenProduct.price)}</h3>
        <IncrementBtn
          quantity={quantity}
          setQuantity={setQuantity}
          chosenProduct={chosenProduct}
        />
      </div>
      {/* Actions Buttons */}
      <div className="d-flex justify-content-start">
        <button
          onClick={() => {
            handleBtnATC(false);
          }}
          className={`btn ${btnStyle} ms-0 m-3`}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            handleBtnATC(true);
          }}
          className={`btn ${btnStyle} my-3`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default InfoEditCard;
