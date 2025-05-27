import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Category from "./components/sections/Category";
import BestSeller from "./components/sections/BestSeller";
import "./components/components.css";
import Brands from "./components/sections/Brands";
import "./components/sections/sections.css";
import { useParams } from "react-router-dom";
import Footer from "./components/Footer";

const Home = ({ products, addToCart, cart }) => {
  return (
    <div className="position-relative " style={{ paddingBottom: "7rem" }}>
      <Navbar cart={cart} />
      <Banner />
      <Category />
      <BestSeller productsProp={products} addToCart={addToCart} />
      <Brands />
      <Footer />
    </div>
  );
};
export default Home;
