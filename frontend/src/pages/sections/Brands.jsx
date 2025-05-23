import BrandCard from "../components/BrandCard";
import brandLogo1 from "../../assets/Brand/apple.png";
import brandLogo2 from "../../assets/Brand/samsung.png";
import brandLogo3 from "../../assets/Brand/sony.png";
import brandLogo4 from "../../assets/Brand/dell.png";
import brandLogo5 from "../../assets/Brand/hp.png";
import brandLogo6 from "../../assets/Brand/lenovo.png";
import brandLogo7 from "../../assets/Brand/microsoft.png";
import brandLogo8 from "../../assets/Brand/logitech.png";
import brandLogo9 from "../../assets/Brand/bose.png";
import brandLogo10 from "../../assets/Brand/jbl.png";
import brandLogo11 from "../../assets/Brand/google.png";
import brandLogo12 from "../../assets/Brand/razer.png";

const Brands = () => {
  return (
    <div className="container-fluid mt-5 text-bg-dark p-4 pb-5">
      <h2 className="mb-4 mb-md-5 text-center">Leading Brands Guaranteed Quality</h2>
      <div className="row gx-2 gy-2 text-center brandCon px-2 mw-50">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3 rounded w-100 h-100">
            <BrandCard brand="Apple" img={brandLogo1} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Samsung" img={brandLogo2} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Sony" img={brandLogo3} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Dell" img={brandLogo4} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="HP" img={brandLogo5} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Lenovo" img={brandLogo6} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Microsoft" img={brandLogo7} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Logitech" img={brandLogo8} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Bose" img={brandLogo9} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="JBL" img={brandLogo10} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Google" img={brandLogo11} />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="bg-light pop d-flex justify-content-center align-items-center p-3  w-100 h-100">
            <BrandCard brand="Razer" img={brandLogo12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
