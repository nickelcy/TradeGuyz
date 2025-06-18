import { useState, useEffect } from "react";

const PaymentMethod = ({ setPaymentMethod }) => {
  const [payMethodDetails, setPayMethodDetails] = useState({
    paymentMethod: "cash",
  });

  useEffect(() => {
    setPaymentMethod(payMethodDetails);
  }, [payMethodDetails]);

  return (
    <div className="row mt-2" >
      <div className="col-12">
        <h5>Payment Method</h5>
        <div className="form-text text-light mb-1">
          <b className="text-danger">We Currently only accept cash payments.</b>
        </div>
        <div
          className="btn-group w-100 mb-1"
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
            disabled
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
          />
          <label className="btn btn-outline-primary w-50" htmlFor="cash">
            Cash
          </label>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethod;
