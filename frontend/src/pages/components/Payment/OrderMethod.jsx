import { useState, useEffect } from "react";

const OrderMethod = ({ setCollectionDetails }) => {
  const [collectionMethod, setCollectionMethod] = useState("pickup");
  const [address, setAddress] = useState("");

  const collectionDetails = { collection: collectionMethod, address: address };

  useEffect(() => {
    setCollectionDetails(collectionDetails);
  }, [collectionMethod, address]);

  return (
    <div className="row mt-3">
      <div className="col-12">
        <h2>Order Method</h2>
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

        {collectionMethod=="delivery" ? (
          <>
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
            <small className="form-text text-light px-2">
              Delivery is only available in Georgetown, Guyana.
            </small>
          </>
        ) : (
          <></>
        )}
        {collectionMethod == "pickup" ? (
          <div className="form-text text-light mt-0 px-2">
            Pickup is only available in Georgetown, Guyana. A convenient pickup
            location will be arranged with you after your order is processed.
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default OrderMethod;
