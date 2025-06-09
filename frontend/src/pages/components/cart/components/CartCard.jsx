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
      className="col-11 col-md-8 text-bg-dark p-3 rounded shadow-sm "
      style={{ maxWidth: "800px" }}
    >
      <h3>{chosenProduct.product_name}</h3>
      <div className="container-fluid d-flex justify-content-between align-items-center m-0 p-0">
        <h3 className="text-warning m-0">{formatPrice(chosenProduct.price)}</h3>
        <IncrementBtn
          quantity={quantity}
          setQuantity={setQuantity}
          chosenProduct={chosenProduct}
          addToCart={addToCart}
        />
      </div>
      <button onClick={handleBtnClick} className={`btn btn-danger my-3`}>
        {newBtnTxt ? newBtnTxt : "Add to Cart"}
      </button>
    </div>
  );
};
export default CartCard;
