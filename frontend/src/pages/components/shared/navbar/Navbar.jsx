import { Link } from "react-router-dom";
import Search from "./components/Search";
import logo from "./images/logo.svg";
import MainNavBtn from "./components/MainNavBtn";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top px-3 py-2 shadow-sm">
        <Link className="navbar-brand d-flex align-items-center gap-2 d-lg-none" to="/">
          <img src={logo} height={30} alt="TradeGuyz" />
          <span className="fs-6 fw-semibold">TradeGuyz</span>
        </Link>
        <Link className="navbar-brand d-none align-items-center gap-2 d-lg-flex" to="/">
          <img src={logo} height={40} alt="TradeGuyz" />
          <span className="fs-5 fw-semibold">TradeGuyz</span>
        </Link>

        <div className="d-flex align-items-center gap-4 justify-content-between flex-fill">
          <div className="d-flex flex-fill justify-content-center">
            {/* <Search /> */}
          </div>
          <MainNavBtn size={23}/>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
