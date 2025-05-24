import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Category from "./sections/Category";
import BestSeller from "./sections/BestSeller";
import "./components/components.css";
import Brands from "./sections/Brands";
import "./sections/sections.css";
import { useParams } from "react-router-dom";
import Footer from "./components/Footer";

const Home = (props) => {
const { products } = props

  return (
    <div className="position-relative " style={{ paddingBottom: "7rem" }}>
      <Navbar />
      <Banner />
      <Category />
      <BestSeller productsProp={products} />
      <Brands />
      <Footer />
    </div>
  );
};
export default Home;
