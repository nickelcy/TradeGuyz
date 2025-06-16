import banner1 from "../Images/b5/2.png";
import banner2 from "../Images/b4/2.png";
import banner3 from "../Images/b3/2.png";
import banner4 from "../Images/b2/2.png";
import banner5 from "../Images/b1/11.png";
import { FaArrowDownLong } from "react-icons/fa6";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mx-auto overflow-hidden w-100 mt-1 h-50 w-md-75 carousel-container position-relative showContent3"
        data-bs-ride="carousel"
        style={{ maxHeight: "60vh", minHeight: "40vh", zIndex: "-1" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* --------------------------------- */}
          <div
            className="carousel-item bg-dark active position-relative"
            style={{ maxHeight: "60vh", minHeight: "40vh", width: "100%" }}
          >
            <img
              src={banner1}
              alt="banner1"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "60vh",
                minHeight: "40vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              className="carousel-caption p-5 position-absolute d-flex flex-column align-items-center justify-content-center text-white"
              style={{
                top: 0,
                left: 0,
                maxHeight: "60vh",
                minHeight: "40vh",
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <h2 className="m-0 text-center fs-4 fs-sm-3 fs-md-2">
                Looking for Something Specific? We've Got You
              </h2>

              <p className="mt-3 text-light w-75 fs-6 fs-md-5 text-center d-none d-md-block">
                Can't find it locally? Just drop a link in the section below and
                we'll handle the entire import process for you - including
                purchase, shipping, and delivery.
              </p>
              <b>Add a link to your product in the form below</b>

              <FaArrowDownLong className="mt-3 text-warning" size={35} />
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div
            className="carousel-item bg-dark position-relative"
            style={{ maxHeight: "60vh", minHeight: "40vh", width: "100%" }}
          >
            <img
              src={banner2}
              alt="banner2"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "60vh",
                minHeight: "40vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              className="carousel-caption p-5 position-absolute d-flex flex-column align-items-center justify-content-center text-white"
              style={{
                top: 0,
                left: 0,
                maxHeight: "60vh",
                minHeight: "40vh",
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <h2 className="m-0 text-center fs-4 fs-sm-3 fs-md-2">
                Make Money from Home - Become a Referrer
              </h2>
              <p className="mt-3 text-light w-75 fs-6 fs-md-5 text-center d-none d-md-block">
                No product? No problem. Join our referral program and earn
                commissions by simply telling your friends about us. It's
                risk-free, investment-free, and perfect for students,
                stay-at-home parents, or anyone looking for extra income.
              </p>
              <b>Do you have an eye for opportunities?</b>
              <button className="mt-3 btn btn-success">
                Join the waitlist
              </button>
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div
            className="carousel-item bg-dark position-relative"
            style={{ maxHeight: "60vh", minHeight: "40vh", width: "100%" }}
          >
            <img
              src={banner3}
              alt="banner3"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "60vh",
                minHeight: "40vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              className="carousel-caption p-5 position-absolute d-flex flex-column align-items-center justify-content-center text-white"
              style={{
                top: 0,
                left: 0,
                maxHeight: "60vh",
                minHeight: "40vh",
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <h2 className="m-0 text-center fs-4 fs-sm-3 fs-md-2">
                Advertise & find Customers - Become an Affiliate
              </h2>
              <p className="mt-3 text-light w-75 fs-6 fs-md-5 text-center d-none d-md-block">
                Grow your business with zero upfront costs. List your products
                for free, reach a wider audience, and connect with customers
                across Guyana. Whether you sell handmade items or bulk imports,
                our platform helps you scale.
              </p>
              <b>Have a small business? Advertise online for free!</b>
              <button className="mt-2 btn btn-danger">Get started</button>
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div
            className="carousel-item bg-dark position-relative"
            style={{ maxHeight: "60vh", minHeight: "40vh", width: "100%" }}
          >
            <img
              src={banner4}
              alt="banner4"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "60vh",
                minHeight: "40vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              className="carousel-caption p-5 position-absolute d-flex flex-column align-items-center justify-content-center text-white"
              style={{
                top: 0,
                left: 0,
                maxHeight: "60vh",
                minHeight: "40vh",
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <h2 className="m-0 text-center fs-4 fs-sm-3 fs-md-2">
                Delivered Right to Your Doorstep
              </h2>
              <b className="mt-2">Delivery & pickup available in and around Georgetown</b>
              <p className="mt-2 text-light w-75 fs-6 fs-md-5 text-center d-none d-md-block">
                From imported items to local favorites, get your products
                delivered straight to your home in Georgetown. Fast, reliable
                delivery with convenient pickup options for customers outside
                the capital.
              </p>
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div
            className="carousel-item bg-dark position-relative"
            style={{ maxHeight: "60vh", minHeight: "40vh", width: "100%" }}
          >
            <img
              src={banner5}
              alt="banner5"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "60vh",
                minHeight: "40vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              className="carousel-caption p-5 position-absolute d-flex flex-column align-items-center justify-content-center text-white"
              style={{
                top: 0,
                left: 0,
                maxHeight: "60vh",
                minHeight: "40vh",
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <h2 className="m-0 text-center fs-4 fs-sm-3 fs-md-2">
                Worried About the Cost? We Keep It Affordable
              </h2>
              <b className="mt-2">Product cost + Shipping & Handling + Delivery if requested</b>
              <p className="mt-2 text-light w-75 fs-6 fs-md-5 text-center d-none d-md-block">
                Think importing is expensive? Not here. We keep pricing
                transparent and affordable so you know exactly what you're
                paying for. Your payment is calculated using a simple formula:
                the product's total cost, plus shipping and handling, and
                delivery if requested. No hidden fees, just clear value.
              </p>
            </div>
          </div>
          {/* ---------------------------------------- */}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
