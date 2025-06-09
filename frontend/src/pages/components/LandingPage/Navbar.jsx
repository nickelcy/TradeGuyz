import MainNavBtn from "../shared/navbar/components/MainNavBtn";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo1.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-2 shadow-sm">
      <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src={logo} height={40} alt="TradeGuyz" />
        <span className="fs-5 fw-semibold">TradeGuyz</span>
      </Link>

      <ul className="navbar-nav d-flex flex-row gap-4 mb-0 flex-fill justify-content-end mx-3 px-3 border-end border-2">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/Business">
            Business
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Seller">
            Seller
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Referrer">
            Referrer
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/About">
            About
          </Link>
        </li>
      </ul>

      <div className="d-flex align-items-center gap-4 justify-content-start">
        <MainNavBtn />
      </div>
    </nav>
  );
};
export default Navbar;
