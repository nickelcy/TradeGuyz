import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";
import banner4 from "../../assets/Banner/banner4.jpg";

const Banner = (props) => {
  return (
    <div className="slider">
      <div className="slides">
        <a href="/filter/category/Speakers">
          <img src={banner1} alt="banner" className="slide" />
        </a>
        <a href="/filter/category/Laptops">
          <img src={banner2} alt="banner" className="slide" />
        </a>
        <a href="/filter/category/Phones">
          <img src={banner3} alt="banner" className="slide" />
        </a>
        <a href="/filter/category/Accessories">
          <img src={banner4} alt="banner" className="slide" />
        </a>
      </div>
    </div>
  );
};
export default Banner;
