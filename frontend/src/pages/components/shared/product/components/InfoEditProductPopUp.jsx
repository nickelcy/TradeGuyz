import { handleAddToCart, formatPrice } from "../../utils/helpers.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IncrementBtn from "../../components/IncrementBtn.jsx";
import { IoMdLink } from "react-icons/io";

const InfoEditProductPopUp = ({
  chosenProduct,
  addToCart,
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

  const copyLink = () => {
    const link = `${baseUrl}/getProduct/12`;
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copied!");
    });
  };

  return (
    <div className="row ">
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
          className={`btn btn-success ms-0 m-3`}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            handleBtnATC(true);
          }}
          className={`btn btn-success ms-0 m-3`}
        >
          Buy Now
        </button>
        <button
          onClick={copyLink}
          className={`btn btn-primary my-3`}
          //Toast here
        >
          <IoMdLink />
        </button>
      </div>
    </div>
  );
};
export default InfoEditProductPopUp;
