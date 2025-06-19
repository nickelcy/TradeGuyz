import { useNavigate } from "react-router-dom";

const CheckoutBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-2">
      <div className="row mt-1 mb-3">
        <div className="col-12 d-flex flex-row flex-sm-row justify-content-center text-secondary">
          <p className="fs-6">
            <b className="text-white">Total:</b> Product <span className="text-warning">(100%)</span> + Service{" "}
            <span className="text-warning">(10%)</span> + Delivery{" "}
            <span className="text-warning">($1,500)</span>
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
              navigate("/");
            }}
            className="btn btn-secondary w-100 w-sm-25"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-success ms-sm-2 mt-2 mt-sm-0 w-100 w-sm-25"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutBtn;
