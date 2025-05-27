import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { handleAddToCart, formatPrice } from "./helpers.js";
import { useState } from "react";

const InfoEditCard = ({
  chosenProduct,
  newBtnTxt,
  btnStyle,
  addToCart,
  src,
}) => {
  const [quantity, setQuantity] = useState(chosenProduct.quantity || 1);

  const handleClick = () => {
    if (src === "ProductPopUp") {
      handleAddToCart(chosenProduct, addToCart, quantity);
      setQuantity(1);
    } else if (src === "RenderCart") {
      addToCart((prev) => {
        const updated = prev.filter(
          (product) => product.pid !== chosenProduct.pid
        );
        localStorage.setItem("cart", JSON.stringify(updated));
        return updated;
      });
    } else {
      alert("hi there");
    }
  };

  const updateQuantity = (type) => {
    const newQty = type === "increment" ? quantity + 1 : quantity - 1;
    setQuantity(newQty);
    if (src === "RenderCart") {
      handleAddToCart(
        chosenProduct,
        addToCart,
        newQty - chosenProduct.quantity
      );
    }
  };

  return (
    <div
      style={src === "RenderCart" ? { maxWidth: "900px" } : null}
      className={`col-12 ${
        src == "RenderCart" ? "col-md-8" : "col-md-6 pe-md-5"
      }  `}
    >
      <div
        className={`row ${
          src == "RenderCart" ? "text-bg-dark p-3 mx-1 rounded shadow-sm" : ""
        }`}
      >
        {/* name */}
        <div className="col-12">
          <h2>{chosenProduct.product_name}</h2>
        </div>
        {/* Price -> value increment */}
        <div className="col-12 ">
          <div
            className={`row text-warning RC-vs ${
              src == "RenderCart" ? "RC-vs" : ""
            } `}
          >
            {/* value */}
            <h3 className="col-6 ">{formatPrice(chosenProduct.price)}</h3>
            {/* increment */}
            <div className="col-6 d-flex justify-content-end custom-justify">
              <div className="input-group " style={{ maxWidth: "150px" }}>
                <button
                  disabled={quantity <= 1}
                  onClick={() => updateQuantity("decrement")}
                  className="btn btn-secondary "
                >
                  <FaMinus size={10} />
                </button>
                <input
                  type="text"
                  name="quantity"
                  id={src === "renderCart" ? "key" : "quantity"}
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => {
                    const val = Math.max(1, Number(e.target.value));
                    setQuantity(val);
                  }}
                  className="form-control text-center fw-bold"
                />
                <button
                  onClick={() => updateQuantity("increment")}
                  className="btn btn-secondary"
                >
                  <MdAdd size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="col-6">
          <button onClick={handleClick} className={`btn ${btnStyle} my-3`}>
            {newBtnTxt ? newBtnTxt : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default InfoEditCard;
