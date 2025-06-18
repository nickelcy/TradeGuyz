import { useState, useEffect } from "react";

const OrderMethod = ({ setCollectionDetails }) => {
  const [collectionMethod, setCollectionMethod] = useState("pickup");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("")

  const collectionDetails = { collection: collectionMethod, address, code };

  useEffect(() => {
    setCollectionDetails(collectionDetails);
  }, [collectionMethod, address, code]);

  return (
    <div className="row mt-2">
      <div className="col-12">
        <h5 className="">Order Details</h5>
        <small className="form-text text-light">
          Enter code for 30% discount on delivery.
        </small>
        <div className="form-floating mb-1">
          <input
            onChange={(e) => setCode(e.target.value)}
            id="code"
            type="text"
            className="form-control"
            placeholder="Purchase Code"
            value={code}
          />
          <label htmlFor="code">Purchase Code</label>
        </div>

        {collectionMethod == "delivery" ? (
          <small className="form-text text-light">
            Delivery is only available in Georgetown.
          </small>
        ) : (
          <></>
        )}
        {collectionMethod == "pickup" ? (
          <div className="form-text text-light">
            Pickup available only in Georgetown. Location arranged after order.
          </div>
        ) : (
          <></>
        )}
        {/* --------------------------------------------------------- */}
        <div
          className="btn-group w-100 mt-0 mb-1"
          role="group"
          aria-label="Pickup or Delivery"
        >
          <input
            onChange={() => setCollectionMethod("pickup")}
            type="radio"
            className="btn-check"
            name="orderMethod"
            id="pickup"
            autoComplete="off"
            defaultChecked
            required
          />
          <label className="btn btn-outline-primary w-50" htmlFor="pickup">
            Pickup
          </label>
          <input
            onChange={() => setCollectionMethod("delivery")}
            type="radio"
            className="btn-check"
            name="orderMethod"
            id="delivery"
            autoComplete="off"
            required
          />
          <label className="btn btn-outline-primary w-50" htmlFor="delivery">
            Delivery
          </label>
        </div>
        {/* --------------------------------------------------------------------- */}

        {collectionMethod == "delivery" ? (
          <div className="form-floating mb-1">
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="form-control"
              type="text"
              name="address"
              id="address"
              placeholder="Delivery Address"
              disabled={!delivery}
              required
            />
            <label htmlFor="address">Delivery Address</label>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default OrderMethod;
