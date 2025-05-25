import { IoCloseCircle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import "./components.css";

const ProductPopUp = ({ clicked, setClick, chosenProduct }) => {
  return (
    <div
      className={`position-fixed top-0 mt-2 start-0 w-100 h-100 h-md-90 d-flex align-items-center justify-content-center text-bg-dark bg-opacity-75 z-3 ${
        clicked ? "d-block" : "d-none"
      }`}
    >
      <div className="position-relative container-fluid bg-dark container-md text-white p-4 z-3 h-75  ">
        <button
          className="btn btn-danger opacity-100 position-absolute bottom-0 top-sm-0  mb-sm-0 end-0 m-2 me-4 d-flex align-items-center justify-content-center my-btn-sm"
          onClick={() => setClick(false)}
        >
          <IoCloseCircle size={20} />
          Close
        </button>
        <div
          className="container h-100 overflow-y-auto  w-100"
          // style={{maxWidth: "800px"}}
        >
          <div className="row gy-3 ">
            {/* UPPER SECTION: Image Section */}
            <div className="col-12">
                <p>Click Image to View</p>
              <a href={chosenProduct.imgUrl}>
                <img
                  className="rounded w-100 img-h darken"
                  style={{ maxHeight: "40vh", objectFit: "cover" }}
                  src={chosenProduct.imgUrl}
                  alt={chosenProduct.product_name}
                />
              </a>
            </div>

            {/* LOWER SECTION */}
            <div className="col-12 text-white ">
              <div className="row ">
                {/* Name Price Button  */}
                <div className="col-12 col-md-6 pe-md-5 ">
                  <div className="row">
                    {/* name */}
                    <div className="col-12">
                      <h2>
                        {chosenProduct.product_name}
                      </h2>
                    </div>
                    {/* Price -> value increment */}
                    <div className="col-12 ">
                      <div className="row text-warning">
                        {/* value */}
                        <h3 className="col-6 ">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(chosenProduct.price)}
                        </h3>
                        {/* increment */}
                        <div className="col-6 d-flex justify-content-end ">
                          <div
                            className="input-group "
                            style={{ maxWidth: "150px" }}
                          >
                            <button className="btn btn-light ">
                              <FaMinus size={10} />
                            </button>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="0"
                              className="form-control text-center fw-bold"
                            />
                            <button className="btn btn-light">
                              <MdAdd size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* button */}
                    <div className="col-6">
                      <button className="btn btn-success my-3">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Name Price Button  */}

                {/* Description */}
                <div className="col-12 col-md-6 mt-3 mt-md-0">
                  <h3>Description</h3>
                  <p>{chosenProduct.description}</p>
                </div>
                {/* Description */}
              </div>
            </div>
            {/* LOWER SECTION */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPopUp;
