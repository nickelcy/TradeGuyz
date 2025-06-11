import { useNavigate } from "react-router-dom";
import { formatPrice, calculateGrandTotal } from "../shared/utils/helpers.js";

const Buttons = ({ cart }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-0 mb-4">
      <div className="row mt-1 mb-1">
        <div className="col-12 d-flex flex-row flex-sm-row justify-content-between ">
          <h4>Total:</h4>
          <h4>{formatPrice(calculateGrandTotal(cart))}</h4>
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
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default Buttons;
