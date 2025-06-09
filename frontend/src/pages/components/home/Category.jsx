import CatCard from "./components/CategoryCard";
// import catImage1 from "../../../assets/Category/phone.jpg";
// import catImage2 from "../../../assets/Category/laptop.jpg";
// import catImage3 from "../../../assets/Category/tablet.jpg";
// import catImage4 from "../../../assets/Category/headphone.jpg";
// import catImage5 from "../../../assets/Category/games.jpg";
// import catImage6 from "../../../assets/Category/watch.jpg";
// import catImage7 from "../../../assets/Category/camera.jpg";
// import catImage8 from "../../../assets/Category/monitor.jpg";

// database will provide information which will then be mapped

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
          <CatCard category="Audio" img={catImage4} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Gaming" img={catImage5} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Wearables" img={catImage6} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="Cameras" img={catImage7} />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <CatCard category="TV & Media" img={catImage8} />
        </div>
      </div>
    </div>
  );
};

export default Category;
