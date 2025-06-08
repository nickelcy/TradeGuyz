import { Link, replace } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { use, useEffect, useState } from "react";
import logo from "./images/logo1.svg";
import { FaUser, FaUserCircle } from "react-icons/fa";
import axios from "axios";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [visible, setVisibility] = useState("d-none");
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [loggedIn, setLoggedIn] = useState(false);

  

  useEffect(() => {
    setNumberOfProducts(cart.length);
  }, [cart]);

  const loginStatus = async () => {
    try {
      await axios.get(`${serverUrl}/user/`, { withCredentials: true });
      setLoggedIn(true);
      return true;
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
      return false;
    }
  };

  const logoutUser = async () => {
    try {
      await axios.get(`${serverUrl}/user/logout`, { withCredentials: true });
      alert("You logged out.");
      setLoggedIn(false);
    } catch (error) {
      setLoggedIn(false);
      alert("There was an error logging out.");
      console.error(error);
    }
  };

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

          <Link to="/cart" className="position-relative text-light">
            <BsCart2 size={26} />
            {numberOfProducts > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {numberOfProducts}
              </span>
            )}
          </Link>
          <div className="position-relative">
            <FaUserCircle
              size={26}
              className="text-light"
              role="button"
              onClick={async () => {
                const isLoggedIn = await loginStatus();
                if (isLoggedIn) {
                  setVisibility((prev) =>
                    prev === "d-block" ? "d-none" : "d-block"
                  );
                } else {
                  navigate("/user/login", {replace: true});
                }
              }}
            />

            {loggedIn ? (
              <ul
                className={`py-3 px-2 bg-dark position-absolute end-0 mt-4 shadow rounded ${visible}`}
                style={{ minWidth: "180px" }}
              >
                {/* Future Implement */}
                {/* <li className="btn btn-secondary w-100 rounded-0 fw-semibold mb-2 pop" onClick={() => navigate("/user/about")}>
                  Your information
                </li> */}
                <li
                  className="btn btn-danger w-100 rounded-0 fw-semibold pop"
                  onClick={logoutUser}
                >
                  Logout
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
