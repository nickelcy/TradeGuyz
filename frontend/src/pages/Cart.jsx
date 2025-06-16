import { useNavigate } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import RenderCart from "./components/cart/RenderCart";
import {
  formatPrice,
  calculateGrandTotal,
} from "./components/shared/utils/helpers";
import { useEffect, useContext } from "react";
import { PositionContext } from "./App";

const Cart = ({ cart, addToCart, setMonetaryTotal }) => {
  const navigate = useNavigate();
  const grandTotal = calculateGrandTotal(cart);
  const { basePosition } = useContext(PositionContext);

  useEffect(() => {}, [cart]);

  return (
    <>
      <Navbar cart={cart} />
      <div className="container mt-3">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
        >
          ← Go back
        </button>
      </div>
      <RenderCart cart={cart} addToCart={addToCart} grandTotal={grandTotal} />
    </>
  );
};

export default Cart;
