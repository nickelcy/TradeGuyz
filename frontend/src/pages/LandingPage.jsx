import { useContext } from "react";
import { PositionContext } from "./App";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./components/LandingPage/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  const { setBasePosition } = useContext(PositionContext);
  const handleClick = (position, route) => {
    setBasePosition(position);
    navigate(route);
  };

  return (
    <div>
      <Navbar />

      <section className="mt-5 d-flex justify-content-center">
        <button onClick={() => handleClick("ea", "/ea")}>
          Electronics & Accessories
        </button>
        <button onClick={() => handleClick("ps", "/ps")}>Parts & Spares</button>
        <button onClick={() => handleClick("bt", "/bs")}>
          Books & Textbooks
        </button>
        <button onClick={() => handleClick("cf", "/cs")}>
          Clothing & Fashion
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
