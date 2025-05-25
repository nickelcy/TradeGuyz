import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import RenderCart from "./components/RenderCart";
import { formatPrice } from "./components/helpers";

const MyCart = ({ cart, addToCart }) => {
  const navigate = useNavigate();

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <Navbar cart={cart} />
      <div className="container mt-3">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
      <RenderCart cart={cart} addToCart={addToCart} grandTotal={grandTotal}/>
    </>
  );
};

export default MyCart;
