import Navbar from "../Navbar";
import logoBanner from "../../../../assets/logo/BannerLogo1.svg";
import main from "../../../../assets/logo/mainCircle.svg";
import "../LandingPage.css";

const About = (props) => {
  return (
    <div>
      <Navbar />
      <div
        className="container-fluid bg-dark pb-5 position-absolute"
        style={{ height: "60vh", overflow: "hidden", zIndex: -1 }}
      >
        <img
          src={logoBanner}
          alt="TradeGuyz"
          className="w-100 h-100"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div
        className="container bg-light w-100 h-100 z-1 d-flex flex-column align-items-center justify-content-center rounded py-3 px-4 shadow-lg showContent2"
        style={{ marginTop: "80vh", marginBottom: "30vh", maxWidth: "500px" }}
      >
        <img src={main} alt="TradeGuyz" width={"100vw"} />
        <h2>About Us</h2>
        <p className="fw-bold">
          Connecting Buyers, Sellers & Importers Across Guyana
        </p>
        <blockquote>
          An all-in-one e-commerce platform designed to empower local
          businesses, simplify shopping, and bring personalized imports to your
          doorstep.
        </blockquote>
      </div>
      <div className="background text-light">
        <section
          className="container w-100 h-100 z-1 d-flex flex-column align-items-center justify-content-center rounded px-4 showContent2"
          style={{
            paddingTop: "20vh",
            marginBottom: "20vh",
            maxWidth: "500px",
            color: "white",
          }}
        >
          <h2 className="text-start w-100 showContent2">Our Mission</h2>
          <p className="fw-bold showContent2">
            Make e-commerce accessible, convenient, and profitable for Guyanese
            sellers and buyers by:
          </p>
          <ul>
            <li className="my-3 showContent2">
              Creating a platform for easy product discovery and purchases.
            </li>
            <li className="my-3 showContent2">
              Offering import-on-demand services.
            </li>
            <li className="my-3 showContent2">
              Supporting micro-businesses with digital tools and delivery
              solutions.
            </li>
          </ul>
        </section>
        <section
          className="container w-100 h-100 z-1 d-flex flex-column align-items-center justify-content-center rounded px-4 showContent2"
          style={{
            marginBottom: "50vh",
            paddingBottom: "30vh",
            maxWidth: "500px",
          }}
        >
          <h2 className="text-start w-100 showContent2">Our Mission</h2>
          <p className="fw-bold showContent2">
            Make e-commerce accessible, convenient, and profitable for Guyanese
            sellers and buyers by:
          </p>
          <ul>
            <li className="my-3 showContent2">
              Creating a platform for easy product discovery and purchases.
            </li>
            <li className="my-3 showContent2">
              Offering import-on-demand services.
            </li>
            <li className="my-3 showContent2">
              Supporting micro-businesses with digital tools and delivery
              solutions.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default About;
