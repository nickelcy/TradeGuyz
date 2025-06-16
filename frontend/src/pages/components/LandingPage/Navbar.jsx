import MainNavBtn from "../shared/navbar/components/MainNavBtn";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo1.svg";

// Navbar will add links in the future


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-2 shadow-sm navbar-expand-lg">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#links"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <Link className="navbar-brand d-flex align-items-center gap-2 d-lg-none" to="/">
        <img src={logo} height={30} alt="TradeGuyz" />
        <span className="fs-6 fw-semibold">TradeGuyz</span>
      </Link>
      <Link className="navbar-brand d-none align-items-center gap-2 d-lg-flex" to="/">
        <img src={logo} height={40} alt="TradeGuyz" />
        <span className="fs-5 fw-semibold">TradeGuyz</span>
      </Link>

      <div className="d-flex align-items-center gap-4 justify-content-start d-lg-none">
        <MainNavBtn size={20}/>
      </div>


      <div className="collapse navbar-collapse" id="links">
        <ul className="navbar-nav d-flex gap-2 flex-fill justify-content-end mx-0 px-3 py-3 py-lg-0">
          {/* <li className="nav-item p-0">
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
          </li> */}
        </ul>
      </div>
      <div className="d-none d-lg-flex align-items-center gap-4 justify-content-start -border-start ps-3">
        <MainNavBtn size={23}/>
      </div>
    </nav>
  );
};
export default Navbar;
