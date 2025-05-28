import { IoCloseCircle } from "react-icons/io5";
import "./components.css";
import InfoEditCard from "./InfoEditCard.jsx";

const ProductPopUp = ({ clicked, setClick, chosenProduct, addToCart }) => {
  return (
    <div
      className={`position-fixed top-0 start-0 p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center text-bg-dark bg-opacity-75 z-3 ${
        clicked ? "d-block" : "d-none"
      }`}
    >
      {/* CardContainer */}
      <div
        className="position-relative row bg-light w-100 h-75 mx-2 rounded bg-dark"
        style={{ maxWidth: "1080px", maxHeight: "1090px" }}
      >
        <button
          className="btn btn-danger position-absolute bottom-0 end-0 m-2 text-center btn-to-w-576 z-3"
          style={{ maxWidth: "50px" }}
          onClick={() => setClick(false)}
        >
          <IoCloseCircle size={20} />
        </button>
        <div className="col-12 col-lg-6 h-50 p-0 m-0 heightOn-lg overflow-hidden position-relative img-con">
          <p className="position-absolute text-bg-dark p-1 px-2">
            Click Image to View
          </p>
          <a href={chosenProduct.imgUrl}>
            <img
              className=" w-100 h-100"
              style={{ objectFit: "scale-down" }}
              src={chosenProduct.imgUrl}
              alt={chosenProduct.product_name}
            />
          </a>
        </div>
        <div className="col-12 col-lg-6 h-50 overflow-y-auto heightOn-lg p-4">
          <InfoEditCard
            chosenProduct={chosenProduct}
            newBtnTxt={null}
            btnStyle={"btn-success"}
            addToCart={addToCart}
            src={"ProductPopUp"}
          />
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deserunt aut earum delectus esse numquam sequi quidem, libero ex
            mollitia, rerum dolore commodi atque aliquid vitae nesciunt
            aspernatur dicta. Nesciunt? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit explicabo architecto ipsam ea deserunt
            odio iste nisi veniam sapiente aperiam. Deleniti ad nostrum
            voluptatibus quae laudantium id reprehenderit voluptatem quidem ipsa
            suscipit, accusamus ut aliquam error alias et quisquam quo nisi
            magnam eum. Odit incidunt doloribus dolores magni, tempore
            accusamus?
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductPopUp;
