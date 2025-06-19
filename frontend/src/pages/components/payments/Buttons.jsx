import { useNavigate } from "react-router-dom";
import { formatPrice, calculateGrandTotal } from "../shared/utils/helpers.js";

const Buttons = ({ cart }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-2">
      <div className="row mt-1 mb-3">
        <div className="col-12 d-flex flex-row flex-sm-row justify-content-between ">
          <p className="fs-5 text-start w-100">
            <span className="text-white">Product(s) Total: </span>
            <span className="text-warning">
              {formatPrice(calculateGrandTotal(cart))}
            </span>
          </p>
        </div>
      </div>
      {/* ------------------------------------------ */}
      <div className="row">
        <div className="col-12 text-center text-sm-end">
          <button
            type="button"
            onClick={() => {
              alert("Payment Processing Cancelled.");
              navigate(-1);
            }}
            className="btn btn-secondary w-100 w-sm-25"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-success ms-sm-2 mt-2 mt-sm-0 w-100 w-sm-25"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default Buttons;
