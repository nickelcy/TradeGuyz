import { useState, useEffect } from "react";

const PaymentMethod = ({ setPaymentMethod }) => {
  const [payMethodDetails, setPayMethodDetails] = useState({
    paymentMethod: "cash",
  });

  useEffect(() => {
    setPaymentMethod(payMethodDetails);
  }, [payMethodDetails]);

  return (
    <div className="row mt-3" style={{ marginBottom: "2rem" }}>
      <div className="col-12">
        <h2>Payment Method</h2>
        <div
          className="btn-group w-100 mt-0 mb-1"
          role="group"
          aria-label="Payment Method"
        >
          <input
            onChange={() => setPayMethodDetails({ paymentMethod: "mmg" })}
            type="radio"
            className="btn-check"
            name="paymentMethod"
            id="mmg"
            autoComplete="off"
            // disabled
          />
          <label className="btn btn-outline-primary w-50 w-50" htmlFor="mmg">
            MMG
          </label>

          <input
            onChange={() => setPayMethodDetails({ paymentMethod: "visa" })}
            type="radio"
            className="btn-check"
            name="paymentMethod"
            id="visa"
            autoComplete="off"
            disabled
          />
          <label className="btn btn-outline-primary w-50 w-50" htmlFor="visa">
            Visa
          </label>

          <input
            onChange={() => setPayMethodDetails({ paymentMethod: "cash" })}
            type="radio"
            className="btn-check"
            name="paymentMethod"
            id="cash"
            autoComplete="off"
            defaultChecked
            checked
          />
          <label className="btn btn-outline-primary w-50" htmlFor="cash">
            Cash
          </label>
        </div>
        <div className="form-text text-light mt-0 px-2">
          <s className="text-danger">We Currently only accept cash payments.</s>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethod;
