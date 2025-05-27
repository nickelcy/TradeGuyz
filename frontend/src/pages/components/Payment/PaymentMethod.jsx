import { useState, useEffect } from "react";

const PaymentMethod = ({ setPaymentMethod }) => {
  const [payMethodDetails, setPayMethodDetails] = useState({ paymentMethod: "cash" });

  useEffect(() => {
    setPaymentMethod(payMethodDetails);
  }, [payMethodDetails]);

  return (
    <div className="row mt-5" style={{marginBottom: "5rem"}}>
      <div className="col-12">
        <h2>Payment Method</h2>
        <div
          className="btn-group w-100 mt-0 mb-1"
          role="group"
          aria-label="Payment Method"
        >
          <input
            onChange={() => setPayMethodDetails({ payment: "visa" })}
            type="radio"
            className="btn-check"
            name="paymentMethod"
            id="visa"
            autoComplete="off"
            disabled
          />
          <label className="btn btn-secondary w-50" htmlFor="visa">
            MMG
          </label>

          <input
            onChange={() => setPayMethodDetails({ payment: "visa" })}
            type="radio"
            className="btn-check"
            name="paymentMethod"
            id="visa"
            autoComplete="off"
            disabled
          />
          <label className="btn btn-secondary w-50" htmlFor="visa">
            Visa
          </label>

          <input
            onChange={() => setPayMethodDetails({ payment: "cash" })}
            type="radio"
            className="btn-check"
            name="paymentMethod"
            id="cash"
            autoComplete="off"
            checked
          />
          <label className="btn btn-outline-primary w-50" htmlFor="cash">
            Cash
          </label>
        </div>
        <div className="form-text text-muted mt-0 px-2">
          We Currently only accept cash payments.
        </div>
      </div>
    </div>
  );
};
export default PaymentMethod;
