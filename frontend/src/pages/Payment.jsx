import { useState } from "react";
import Contact from "./components/Payment/Contact";
import Button from "./components/Payment/Button";
import OrderMethod from "./components/Payment/OrderMethod";
import PaymentMethod from "./components/Payment/PaymentMethod";
import { useNavigate } from "react-router-dom";
import { calculateGrandTotal, formatPrice } from "./components/helpers";

const Payment = ({ cart, addToCart }) => {
  const navigate = useNavigate();
  const [guest, setGuest] = useState({});
  const [collectionDetails, setCollectionDetails] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    alert(
      "Your order was successful! Our team will begin processing it shortly. Delivery is expected to be finalized within approximately 3 weeks."
    );
    localStorage.setItem("guest", JSON.stringify(guest));
    navigate("/cart");
  };

  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center p-0 m-0"
      style={{ height: "100vh", width: "100vw" }}
    >
      <form
        className="container text-bg-dark px-5 mx-2 rounded overflow-y-auto shadow-lg"
        style={{ maxWidth: "550px", maxHeight: "95vh" }}
        onSubmit={submitForm}
      >
        <Contact setGuest={setGuest} />
        <OrderMethod setCollectionDetails={setCollectionDetails} />
        <PaymentMethod setPaymentMethod={setPaymentMethod} />
        <Button cart={cart} />
      </form>
    </div>
  );
};

export default Payment;
