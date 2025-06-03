import { MdOutlineFullscreenExit } from "react-icons/md";
import "./components.css";
import InfoEditCard from "./InfoEditCard.jsx";
import { useEffect, useState } from "react";
const serverUrl = import.meta.env.VITE_SERVER_URL;
const defaultIMG = import.meta.env.VITE_DEFAULT_PRODUCT_IMAGE;

const ProductPopUp = ({ clicked, setClick, chosenProduct, addToCart }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (
      Array.isArray(chosenProduct.media) &&
      chosenProduct.media.length !== 0
    ) {
      setImages(chosenProduct.media);
    } else setImages([defaultIMG]);
  }, [chosenProduct]);

  // Developer Code
  if (Array.isArray(chosenProduct) && chosenProduct.length == 0) {
    console.log("No chosen product yet...");
  } else {
    console.log("Chosen Product:", chosenProduct);
  }

  return (
    <div
      className={`position-fixed top-0 start-0 p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center text-bg-dark bg-opacity-75 z-3 ${
        clicked ? "d-block" : "d-none"
      }`}
    >
      {/* CardContainer */}
      <div
        className="position-relative row bg-light w-100 h-75 mx-2 rounded bg-dark"
        style={{ maxWidth: "1080px", maxHeight: "650px" }}
      >
        <button
          className="btn btn-danger position-absolute bottom-0 end-0 m-2 p-0 text-center btn-to-w-576 z-3"
          style={{ maxWidth: "50px", maxHeight: "30px", minHeight: "30px" }}
          onClick={() => setClick(false)}
        >
          <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
            <MdOutlineFullscreenExit size={20} />
          </div>
        </button>

        <div className="col-12 col-lg-6 h-50 p-0 m-0 heightOn-lg overflow-hidden position-relative img-con d-flex flex-column justify-content-center">
          <p className="position-absolute text-bg-dark p-1 px-2 top-0 z-1 rounded opacity-50">
            Click Image to View
          </p>

          <div
            id="carouselExampleIndicators"
            className="carousel slide w-100 h-100"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators ">
              {images.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="carousel-inner w-100 h-100">
              {images.map((i, index) => (
                <div
                  key={i + index}
                  className={`carousel-item w-100 h-100 ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <a href={i}>
                    <img
                      className="d-block w-100 h-100"
                      src={i}
                      style={{ objectFit: "contain" }}
                      alt={`Slide ${index + 1}`}
                    />
                  </a>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-12 col-lg-6 h-50 overflow-y-auto heightOn-lg p-4 ">
          <InfoEditCard
            chosenProduct={chosenProduct}
            newBtnTxt={null}
            btnStyle={"btn-success"}
            addToCart={addToCart}
            src={"ProductPopUp"}
          />
          <h3>Description</h3>
          <p>
            <b>{chosenProduct.description}</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deserunt aut earum delectus esse numquam sequi quidem, libero ex
            mollitia, rerum dolore commodi atque aliquid vitae nesciunt
            aspernatur dicta. Nesciunt? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit explicabo architecto ipsam ea deserunt
            odio iste nisi veniam sapiente aperiam. Deleniti ad nostrum
            voluptatibus quae laudantium id reprehenderit voluptatem quidem ipsa
            suscipit, accusamus ut aliquam error alias et quisquam quo nisi
            magnam eum. Odit incidunt doloribus dolores magni, tempore``
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductPopUp;
