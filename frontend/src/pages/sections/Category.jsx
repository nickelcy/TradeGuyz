import CatCard from "../components/CatCard";
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

const Category = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-0 mb-md-2 text-center">SHOP BY CATEGORY</h2>
      <div className="row g-4 text-center catCon">
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Phones" img={catImage1} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Laptops" img={catImage2} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Tablets" img={catImage3} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Audio" img={catImage6} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Gaming" img={catImage7} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Wearables" img={catImage8} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Cameras" img={catImage10} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="TV & Media" img={catImage12} />
        </div>
      </div>
    </div>
  );
};

export default Category;
