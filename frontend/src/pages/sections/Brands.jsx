import BrandCard from "../components/BrandCard";
import catImage1 from "../../assets/Category/phone.png";
import catImage2 from "../../assets/Category/phone.png";
import catImage3 from "../../assets/Category/phone.png";
import catImage6 from "../../assets/Category/phone.png";
import catImage7 from "../../assets/Category/phone.png";
import catImage8 from "../../assets/Category/phone.png";
import catImage9 from "../../assets/Category/phone.png";
import catImage10 from "../../assets/Category/phone.png";
import catImage11 from "../../assets/Category/phone.png";
import catImage12 from "../../assets/Category/phone.png";

const Brands = () => {
  return (
    <div className="container-fluid mt-5 text-bg-dark p-4 pb-5">
      <h2 className="mb-3 mb-md-4 text-center">TOP BRAND</h2>
      <div className="row g-2 w-55 h-55 text-center brandCon px-2 mw-50">
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="Phones" img={catImage1} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="Laptops" img={catImage2} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="Tablets" img={catImage3} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="Audio" img={catImage6} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="Gaming" img={catImage7} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="Wearables" img={catImage8} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="Cameras" img={catImage10} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <BrandCard brand="TV & Media" img={catImage12} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
