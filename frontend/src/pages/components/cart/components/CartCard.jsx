import { formatPrice } from "../../shared/utils/helpers.js";
import { useState } from "react";
import IncrementBtn from "../../shared/components/IncrementBtn.jsx";

const CartCard = ({
  chosenProduct,
  newBtnTxt,
  btnStyle,
  addToCart,
  src,
}) => {
  const [quantity, setQuantity] = useState(chosenProduct.quantity || 1);

  const handleBtnClick = () => {
    addToCart((prev) => {
      const updated = prev.filter(
        (product) => product.pid !== chosenProduct.pid
      );
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div
      className="col-11 col-md-8 text-bg-dark p-3 px-4 rounded shadow-sm "
      style={{ maxWidth: "500px" }}
    >
      <h4 className="m-0 p-0">{chosenProduct.product_name}</h4>
      <div className="container-fluid d-flex justify-content-between align-items-center m-0 p-0 mb-1">
        <h5 className="text-warning m-0">{formatPrice(chosenProduct.price)}</h5>
        <IncrementBtn
          quantity={quantity}
          setQuantity={setQuantity}
          chosenProduct={chosenProduct}
          addToCart={addToCart}
        />
      </div>
      <button onClick={handleBtnClick} className={`btn btn-danger my-1`}>
        {newBtnTxt ? newBtnTxt : "Add to Cart"}
      </button>
    </div>
  );
};
export default CartCard;
