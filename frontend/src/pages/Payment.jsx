import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import Contact from "./components/payment/Contact.jsx";
// import Contact from "./components/payment/Contact.jsx"
// import Button from "./components/payment/Button.jsx";
// import OrderMethod from "./components/payment/OrderMethod.jsx";
// import PaymentMethod from "./components/payment/PaymentMethod.jsx";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

const Payment = ({ cart, addToCart }) => {
  const navigate = useNavigate();
  const [buyer, setBuyer] = useState({});
  const [collectionDetails, setCollectionDetails] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setOrder([buyer, { ...collectionDetails, ...paymentMethod }, cart]);
  }, [buyer, collectionDetails, paymentMethod, cart]);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${serverUrl}/user/mk-order`, order, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        console.log(order)
        localStorage.removeItem("cart");
        navigate("/cart");
        alert(
          "Your order was successful! Our team will begin processing it shortly. Delivery is expected to be finalized within approximately 3 weeks."
        );
      })
      .catch((err) => {
        console.error(err);
        alert("Error processing payment.");
      });
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
        {/* <Contact setBuyer={setBuyer} /> */}
        {/* <OrderMethod setCollectionDetails={setCollectionDetails} /> */}
        {/* <PaymentMethod setPaymentMethod={setPaymentMethod} /> */}
        {/* <Button cart={cart} /> */}
      </form>
    </div>
  );
};

export default Payment;
