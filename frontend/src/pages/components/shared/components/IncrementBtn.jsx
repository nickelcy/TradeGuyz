import { FaMinus } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { handleAddToCart } from "../utils/helpers.js";

const IncrementBtn = ({ quantity, setQuantity, chosenProduct, addToCart }) => {
  const updateQuantity = (type) => {
    const newQty = type === "increment" ? quantity + 1 : quantity - 1;
    setQuantity(newQty);
    handleAddToCart(chosenProduct, addToCart, newQty - chosenProduct.quantity);
  };

  return (
    <div className="input-group m-0 p-0 z-0" style={{ maxWidth: "150px" }}>
      <button
        disabled={quantity <= 1}
        onClick={() => updateQuantity("decrement")}
        className="btn btn-secondary"
        style={{ maxWidth: "50px", minWidth: "50px" }}
      >
        <FaMinus size={12} />
      </button>
      <input
        type="text"
        name="quantity"
        id="key"
        placeholder="0"
        value={quantity}
        className="form-control text-center fw-bold p-0 m-0"
        style={{ maxWidth: "50px", minWidth: "50px", fontSize: "16px" }}
        disabled
      />
      <button
        onClick={() => updateQuantity("increment")}
        className="btn btn-secondary"
        style={{ maxWidth: "50px", minWidth: "50px" }}
      >
        <MdAdd size={20} />
      </button>
    </div>
  );
};
export default IncrementBtn;
