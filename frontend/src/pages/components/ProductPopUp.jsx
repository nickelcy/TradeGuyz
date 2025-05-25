import { IoCloseCircle } from "react-icons/io5";
import "./components.css";
import InfoEditCard from "./InfoEditCard.jsx";

const ProductPopUp = ({
  clicked,
  setClick,
  chosenProduct,
  addToCart,
}) => {

  return (
    <div
      className={`position-fixed top-0 mt-2 start-0 w-100 h-100 h-md-90 d-flex align-items-center justify-content-center text-bg-dark bg-opacity-75 z-3 ${
        clicked ? "d-block" : "d-none"
      }`}
    >
      <div className="position-relative container-fluid bg-dark container-md text-white p-4 z-3 h-75  ">
        <button
          className="btn btn-danger opacity-100 position-absolute bottom-0 top-sm-0  mb-sm-0 end-0 m-2 me-4 d-flex align-items-center justify-content-center my-btn-sm z-3"
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
                
               
                <InfoEditCard chosenProduct={chosenProduct} newBtnTxt={null} btnStyle={"btn-success"} addToCart={addToCart} src={"ProductPopUp"}/>
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
