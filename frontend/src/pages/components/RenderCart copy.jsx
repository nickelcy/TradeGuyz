import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard"
import { formatPrice } from "./helpers";

const RenderCart = ({ cart, addToCart, grandTotal }) => {
  const navigate = useNavigate();

  const handleClearCart = () => {
    addToCart([]);
    localStorage.removeItem("cart");
    navigate("/ea"); // navigate to homepage
  };

  const handleCheckout = () => {
    // alert("Proceeding to checkout...");
    navigate("/payment");
    // Add your checkout logic here
  };

  return (
    <>
      <div className="row d-flex flex-column justify-content-center align-items-center p-0 m-0 gy-3">
        {cart.map((product, index) => (
          <CartCard
            chosenProduct={product}
            newBtnTxt={"remove"}
            btnStyle={"btn-danger"}
            addToCart={addToCart}
            src={"RenderCart"}
            key={index}
          />
        ))}
      </div>

      {cart.length !== 0 ? (
        <div className="container mt-5 mb-3">
          <div className="row justify-content-center">
            <div className="col-12 col-md-7">
              <div className="card shadow-sm p-4 bg-light">
                <h4 className="text-center text-dark mb-4">
                  Grand Total:{" "}
                  <span className="text-success">
                    {formatPrice(grandTotal)}
                  </span>
                </h4>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <button
                    className="btn btn-outline-danger w-100 w-md-auto"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                  <button
                    className="btn btn-success w-100 w-md-auto"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center">
          <div className="col-6 text-center">
            <h1>No Items in Cart</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default RenderCart;
