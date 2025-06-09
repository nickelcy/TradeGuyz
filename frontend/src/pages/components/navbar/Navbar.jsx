import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../../../assets/logo/logo.svg";
import MainNavBtn from "../MainNavBtn";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top px-3 py-2 shadow-sm">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} height={40} alt="TradeGuyz" />
          <span className="fs-5 fw-semibold">TradeGuyz</span>
        </Link>

        <div className="d-flex align-items-center gap-4 justify-content-between flex-fill">
          <div className="d-flex flex-fill justify-content-center">
            <Search />
          </div>
          <MainNavBtn />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
