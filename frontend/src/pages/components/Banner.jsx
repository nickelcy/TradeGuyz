import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner1.jpg";
import banner3 from "../../assets/Banner/banner1.jpg";
import banner4 from "../../assets/Banner/banner1.jpg";
import banner5 from "../../assets/Banner/banner1.jpg";

const Banner = (props) => {
  return (
    <div className="slider">
      <div className="slides">
        <img src={banner1} alt="banner" className="slide" />
        <img src={banner1} alt="banner" className="slide" />
        <img src={banner1} alt="banner" className="slide" />
        <img src={banner1} alt="banner" className="slide" />
      </div>
    </div>
  );
};
export default Banner;
